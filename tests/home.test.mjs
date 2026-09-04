import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {readFileSync} from 'node:fs';
import * as game from '../src/game.js';
import * as data from '../src/data.js';
import * as storage from '../src/storage.js';
import * as ui from '../src/ui.js';
import * as views from '../src/views.js';
import * as homeViews from '../src/home.js';
import {icon} from '../src/icons.js';
import {createAudioEngine} from '../src/audio.js';
const fresh=()=>{const s=game.createState();game.ensureHomeBuddy(s);return s};

test('Home gives a real egg immediately and never replaces a returning pet',()=>{
 const s=fresh();assert.equal(s.active,'sprig');assert.equal(game.activeBuddy(s).warmth,0);assert.equal(s.xp,0);
 const b=game.activeBuddy(s);b.hatched=true;b.name='Poppy';b.growth=90;
 const before=JSON.stringify(s);assert.equal(game.ensureHomeBuddy(s),false);assert.equal(JSON.stringify(s),before);
 const restored=storage.validateState(s);assert.equal(game.ensureHomeBuddy(restored),false);assert.equal(restored.buddies[0].name,'Poppy');
});
test('Berries bought with earned leaves survive reload and cannot overdraw balances',()=>{
 const s=fresh();assert.equal(game.buyBerries(s),true);assert.equal(s.coins,18);assert.equal(s.berries,6);
 assert.equal(game.buyBerries(s),true);assert.equal(game.buyBerries(s),false);assert.equal(s.coins,6);
 const loaded=storage.validateState(s);assert.equal(loaded.berries,9);assert.equal(loaded.coins,6);
 s.coins=100;s.berries=9999;assert.equal(game.buyBerries(s),false);assert.equal(s.coins,100);
});
test('One-tap practice selects due reviews and progresses beyond recognition',()=>{
 const s=fresh(),v=s.verses[0];assert.deepEqual(game.homePractice(s),{verseId:v.id,mode:'predict'});
 for(const [mastery,mode] of [[1,'predict'],[2,'jumble'],[3,'first'],[4,'recall']]){v.mastery=mastery;assert.equal(game.homePractice(s).mode,mode)}
 const review=s.verses[2];review.practiceCount=1;review.due='2000-01-01';assert.equal(game.homePractice(s).verseId,review.id);
});
test('Egg, hatch, and pet home states expose actions without a dashboard',()=>{
 const s=fresh();const egg=views.shell(s,'home',homeViews.home(s),0);
 assert.ok(egg.includes('data-action="home-learn"'));assert.ok(egg.includes('Unhatched Scribby egg'));
 assert.ok(!egg.includes('Daily goals'));assert.ok(!egg.includes('page-heading'));assert.ok(!egg.includes('sidebar'));
 game.activeBuddy(s).warmth=60;assert.ok(homeViews.home(s).includes('data-action="crack-egg"'));
 game.hatch(s);const baby=homeViews.home(s);assert.ok(baby.includes('data-action="feed"'));assert.ok(baby.includes('data-action="play"'));
 game.activeBuddy(s).name='<img src=x onerror=x>';assert.ok(!homeViews.home(s).includes('<img src=x'));assert.ok(homeViews.home(s).includes('&lt;img'));
});
test('Purchased charms are wearable in baby, young, and grown stages',()=>{
 const s=fresh(),b=game.activeBuddy(s);b.hatched=true;s.coins=100;game.purchase(s,'star');b.charm='star';
 for(const growth of [0,80,200,400]){b.growth=growth;assert.ok(ui.buddyArt(b).includes('creature-charm'))}
 b.hatched=false;assert.ok(!ui.buddyArt(b).includes('creature-charm'));
});

// Execute the actual controller with minimal browser boundaries. This tests delegated
// actions and saved-state effects, without a browser or a parallel implementation.
async function controller(saved){
 const events=new Map(),errors=[];
 const element=()=>({innerHTML:'',textContent:'',value:'',open:false,className:'',isConnected:true,
  classList:{add(){},remove(){},toggle(){}},focus(){},scrollIntoView(){},addEventListener(){},
  showModal(){this.open=true},close(){this.open=false}});
 const elements=new Map(['#app','#modal','#toast','#main-content','#camp-speech','.camp-creature'].map(k=>[k,element()]));
 const savedMap=new Map(saved?[[game.SAVE_KEY,JSON.stringify(saved)]]:[]);
 const localStorage={getItem:k=>savedMap.get(k)??null,setItem:(k,v)=>savedMap.set(k,v),removeItem:k=>savedMap.delete(k)};
 const document={hidden:false,body:element(),activeElement:null,querySelector:s=>elements.get(s)||null,
  addEventListener:(name,fn)=>{const list=events.get(name)||[];list.push(fn);events.set(name,list)}};
 const context=vm.createContext({...game,...data,...storage,...ui,...views,...homeViews,icon,e:ui.escape,createAudioEngine,
  document,window:{localStorage,addEventListener(){},scrollTo(){}},isNative:()=>false,haptic(){},
  crypto:globalThis.crypto,structuredClone,Date,Math,FormData,URL,Blob,
  setTimeout:()=>1,clearTimeout(){},setInterval:()=>1,clearInterval(){},
  console:{error:(...args)=>errors.push(args),log(){}}});
 const code=readFileSync(new URL('../src/app.js',import.meta.url),'utf8').replace(/^import .*;\n/gm,'').replaceAll('import.meta.hot','false').replaceAll('import.meta.env.PROD','false');
 await vm.runInContext(`(async()=>{${code}\n})()`,context);
 return {elements,errors,click(dataset){for(const fn of events.get('click')||[])fn({target:{closest:()=>({dataset})}})},
  get state(){return JSON.parse(savedMap.get(game.SAVE_KEY))},get html(){return elements.get('#app').innerHTML},get dialog(){return elements.get('#modal')}};
}
test('Controller opens on the egg, warms it, starts practice in one tap, and returns home',async()=>{
 const c=await controller();assert.ok(c.html.includes('pet-home'));assert.equal(c.state.active,'sprig');
 c.click({action:'warm'});assert.equal(c.state.buddies[0].warmth,5);
 c.click({action:'home-learn'});assert.ok(c.html.includes('home-practice'));assert.ok(c.html.includes('Read or listen.'));
 c.click({action:'leave-practice'});assert.ok(c.dialog.open);c.click({action:'confirm-leave'});
 assert.ok(c.html.includes('pet-home'));assert.equal(c.dialog.open,false);assert.deepEqual(c.errors,[]);
});
test('Controller can buy food, feed, dress, and navigate out of a sheet',async()=>{
 const s=fresh();s.buddies[0].hatched=true;s.coins=100;
 const c=await controller(s);c.click({action:'food'});assert.ok(c.dialog.open);
 c.click({action:'buy-berries'});assert.equal(c.state.berries,6);assert.equal(c.state.coins,88);
 c.click({action:'shelf-feed'});assert.equal(c.state.berries,5);assert.equal(c.state.buddies[0].growth,12);assert.equal(c.dialog.open,false);
 c.click({action:'wardrobe'});c.click({charm:'star'});assert.equal(c.state.buddies[0].charm,'star');assert.equal(c.state.coins,13);assert.equal(c.dialog.open,false);assert.ok(c.html.includes('creature-charm'));
 c.click({action:'nursery'});c.click({view:'collection'});assert.equal(c.dialog.open,false);assert.ok(c.html.includes('Your Scribbypedia'));assert.deepEqual(c.errors,[]);
});
test('Controller hatches directly from home and saves the baby without requiring a name',async()=>{
 const s=fresh();s.buddies[0].warmth=60;const c=await controller(s);
 c.click({action:'crack-egg'});assert.equal(c.state.buddies[0].hatched,true);assert.ok(c.dialog.innerHTML.includes('hatch-name-form'));
 c.click({action:'close-modal'});assert.ok(c.html.includes('data-action="feed"'));assert.deepEqual(c.errors,[]);
});
test('Complete first-player loop earns warmth, hatches, and feeds without visiting Explore',async()=>{
 const c=await controller();c.click({action:'warm'});
 for(let attempt=0;attempt<3;attempt++){
  const plan=game.homePractice(c.state),verse=c.state.verses.find(v=>v.id===plan.verseId);
  c.click({action:'home-learn'});c.click({action:'begin-questions'});
  if(plan.mode==='predict'){
   const q=game.makeQuestions(verse,'predict')[0];
   const choices=[...c.html.matchAll(/data-answer="(\d+)"[^>]*>([^<]*)<\/button>/g)];
   const choice=choices.find(([,i,text])=>text===ui.escape(q.answer));assert.ok(choice);
   c.click({answer:choice[1]});
  }else{
   assert.equal(plan.mode,'jumble');verse.text.split(/\s+/).forEach((_,i)=>c.click({tile:String(i)}));
   c.click({action:'check-answer'});
  }
  c.click({action:'next-question'});assert.ok(c.html.includes('PRACTICE COMPLETE'));
  c.click({action:'finish-session'});assert.ok(c.html.includes('pet-home'));
 }
 assert.equal(c.state.buddies[0].warmth,60);assert.equal(Object.keys(c.state.completed).length,0);
 c.click({action:'crack-egg'});c.click({action:'close-modal'});c.click({action:'feed'});
 assert.equal(c.state.buddies[0].hatched,true);assert.equal(c.state.buddies[0].growth,12);
 assert.deepEqual(c.errors,[]);
});
