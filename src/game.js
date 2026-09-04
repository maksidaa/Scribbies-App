import {VERSES,REGIONS,SPECIES,CHARMS,speciesById,nodeId} from './data.js';
export const SAVE_KEY='scribbies.adventure.v2';
export const dayKey=(date=new Date())=>`${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
export const yesterday=(date=new Date())=>{const d=new Date(date);d.setDate(d.getDate()-1);return dayKey(d)};
export const createState=()=>({version:2,name:'Explorer',xp:0,coins:30,berries:3,streak:0,lastPractice:null,active:null,buddies:[],completed:{},verses:structuredClone(VERSES),daily:{day:dayKey(),practices:0,care:false,claimed:false},settings:{sound:true,motion:true},charms:['none'],processed:[],legacyImported:false});
export function refreshDay(state,date=new Date()){
 const day=dayKey(date);if(state.daily.day!==day)state.daily={day,practices:0,care:false,claimed:false};
 return state;
}
export const activeBuddy=state=>state.buddies.find(b=>b.id===state.active)||null;
export const stage=b=>!b||!b.hatched?'egg':b.growth<80?'baby':b.growth<200?'teen':b.growth<400?'adult':'radiant';
export const growthInfo=b=>{
 if(!b?.hatched)return {label:b?.warmth>=60?'Ready to hatch!':'Practice to build warmth',value:b?.warmth||0,max:60,next:'Hatch your egg'};
 const stages=[{max:80,label:'Baby',next:'Young explorer'},{max:200,label:'Young explorer',next:'Grown-up Scribby'},{max:400,label:'Grown-up Scribby',next:'Radiant Scribby'},{max:800,label:'Radiant Scribby',next:'Best friends'}];
 const s=stages.find(s=>b.growth<s.max)||stages[3];return {...s,value:Math.min(b.growth,s.max)};
};
export const level=xp=>Math.floor(xp/120)+1;
export function makeEgg(id){return {id,name:speciesById(id).name,hatched:false,warmth:0,growth:0,bond:0,charm:'none',lastFed:null,lastPlayed:null,foundAt:new Date().toISOString()}}
export function chooseEgg(state,id){
 if(state.buddies.length)throw new Error('Your first egg is already waiting.');
 if(!SPECIES.some(s=>s.id===id&&s.starter))throw new Error('Choose one of the three starter eggs.');
 state.buddies.push(makeEgg(id));state.active=id;return state;
}
export function hatch(state){const b=activeBuddy(state);if(!b||b.hatched||b.warmth<60)return false;b.hatched=true;b.hatchedAt=new Date().toISOString();b.growth=0;b.bond=10;return true}
export const regionUnlocked=(state,r)=>r===0||Boolean(state.completed[nodeId(r-1,5)]);
export const nodeUnlocked=(state,r,n)=>regionUnlocked(state,r)&&(n===0||Boolean(state.completed[nodeId(r,n-1)]));
export function nextNode(state,r=0){for(let n=0;n<6;n++)if(!state.completed[nodeId(r,n)])return n;return 5}
export const dailyDone=state=>[state.daily.practices>=1,state.daily.care,state.daily.practices>=3];
export function claimDaily(state,date=new Date()){
 refreshDay(state,date);if(state.daily.claimed||!dailyDone(state).every(Boolean))return false;
 state.coins+=40;state.berries+=2;state.daily.claimed=true;
 if(!state.buddies.some(b=>b.id==='fern'))state.buddies.push(makeEgg('fern'));return true;
}
export const normalizedWords=text=>String(text).toLowerCase().normalize('NFKC').replace(/[’‘]/g,"'").replace(/[^\p{L}\p{N}\s]/gu,'').trim().split(/\s+/).filter(Boolean);
export const matches=(a,b)=>normalizedWords(a).join(' ')===normalizedWords(b).join(' ');
export function shuffle(items,rng=Math.random){const a=[...items];for(let i=a.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
export function makeQuestions(verse,mode='adventure',rng=Math.random){
 const words=verse.text.trim().split(/\s+/);
 const modes=mode==='adventure'?['predict','blanks','jumble']:[mode];
 return modes.map((type,index)=>{
  const missing=type==='predict'?[Math.min(words.length-1,Math.max(0,Math.floor(words.length*.55)))]:words.map((_,i)=>i).filter(i=>i%3===1);
  if(!missing.length)missing.push(0);
  const answer=words[missing[0]];
  const pool=['hope','peace','love','light','kind','heart','walk','trust','faith','glad'];
  const alternatives=shuffle([...new Set([...words,...pool].filter(w=>!matches(w,answer)))],rng).slice(0,3);
  // Preserve token identity: repeated words remain separate movable tiles.
  let tiles=shuffle(words.map((word,id)=>({word,id})),rng);
  if(tiles.length>1&&tiles.every((t,i)=>t.id===i))tiles=[...tiles.slice(1),tiles[0]];
  return {type,words,missing,answer,options:shuffle([answer,...alternatives],rng),tiles,index};
 });
}
export function checkAnswer(question,response){
 if(question.type==='predict')return matches(response,question.answer);
 if(question.type==='blanks')return Array.isArray(response)&&question.missing.every((pos,i)=>matches(response[i]||'',question.words[pos]));
 return matches(Array.isArray(response)?response.join(' '):response,question.words.join(' '));
}
export function care(state,kind,date=new Date()){
 refreshDay(state,date);const b=activeBuddy(state);if(!b)return {ok:false,message:'Choose your egg first.'};
 if(kind==='feed'){
  if(!b.hatched)return {ok:false,message:'Your egg needs verses and warmth. Save this berry for hatching day!'};
  if(state.berries<1)return {ok:false,message:'Explore a trail to find more berries.'};
  state.berries--;b.growth+=12;b.bond=Math.min(100,b.bond+12);b.lastFed=date.toISOString();
 }else if(kind==='play'){
  if(!b.hatched)return {ok:false,message:'A gentle hello! Your egg gives a happy little wiggle.'};
  const bonus=b.lastPlayed!==dayKey(date);b.lastPlayed=dayKey(date);if(bonus){b.growth+=15;b.bond=Math.min(100,b.bond+10)}
 }else if(kind==='warm'){
  if(b.hatched)return {ok:false,message:'Your Scribby is already hatched!'};
  // Once per day, caring gives a little warmth; learning drives hatching.
  if(!state.daily.care)b.warmth=Math.min(60,b.warmth+5);
 }
 state.daily.care=true;return {ok:true,message:kind==='feed'?`${b.name} loved that! +12 growth`:kind==='warm'?'Your egg feels safe and cozy.':`${b.name} is happy you’re here!`};
}
export function purchase(state,id){
 const charm=CHARMS.find(c=>c.id===id);if(!charm||state.charms.includes(id)||state.coins<charm.cost)return false;
 state.coins-=charm.cost;state.charms.push(id);return true;
}
export function completeSession(state,session,date=new Date()){
 if(!session||typeof session.id!=='string'||state.processed.includes(session.id))return null;
 if(session.done!==true||!state.active)return null;
 const verse=state.verses.find(v=>v.id===session.verseId);if(!verse)return null;
 if(session.region!==null&&session.region!==undefined&&!nodeUnlocked(state,session.region,session.node))return null;
 refreshDay(state,date);
 const day=dayKey(date);const errors=Number.isFinite(session.errors)?Math.max(0,session.errors):0;
 const hinted=Boolean(session.hinted);const stars=errors===0&&!hinted?3:errors<=2?2:1;
 const isAdventure=session.region!==null&&session.region!==undefined;
 const id=isAdventure?nodeId(session.region,session.node):null;
 const first=id&&!state.completed[id];
 const xp=isAdventure?45:({predict:15,blanks:20,jumble:25,first:30,recall:40}[session.mode]||15);
 const coins=first?25:8;
 state.xp+=xp;state.coins+=coins;state.berries+=1;
 const b=activeBuddy(state);const beforeStage=stage(b);
 if(b.hatched){b.growth+=xp;b.bond=Math.min(100,b.bond+5)}else b.warmth=Math.min(60,b.warmth+xp);
 if(state.lastPractice!==day){state.streak=state.lastPractice===yesterday(date)?state.streak+1:1;state.lastPractice=day}
 state.daily.practices++;
 const priorDate=verse.lastPracticed;
 const cap={predict:2,blanks:2,jumble:3,adventure:3,first:4,recall:5}[session.mode]||2;
 if(errors===0&&!hinted){
  // Full mastery requires independent recall on a later day, not repeated taps.
  const max=cap===5&&(!priorDate||priorDate===day)?4:cap;
  verse.mastery=Math.min(5,Math.max(verse.mastery,Math.min(max,verse.mastery+1)));
 }
 verse.practiceCount=(verse.practiceCount||0)+1;verse.lastPracticed=day;
 const interval=errors>0||hinted?1:[1,1,2,4,7,14][verse.mastery];const due=new Date(date);due.setDate(due.getDate()+interval);verse.due=dayKey(due);
 let found=null;
 if(id){state.completed[id]={stars:Math.max(stars,state.completed[id]?.stars||0),date:day};
  const species=REGIONS[session.region].encounters[session.node];
  // Let the first egg be the first relationship. Discoveries begin at stop two.
  if(first&&!(session.region===0&&session.node===0)&&!state.buddies.some(b=>b.id===species)){
   state.buddies.push(makeEgg(species));found=species;
  }
 }
 state.processed.push(session.id);state.processed=state.processed.slice(-150);
 return {xp,coins,berries:1,stars,found,hatchReady:!b.hatched&&b.warmth>=60,grown:beforeStage!==stage(b),badge:first&&session.node===5?REGIONS[session.region].badge:null,first:Boolean(first)};
}
export function dueVerses(state,date=new Date()){const today=dayKey(date);return state.verses.filter(v=>v.practiceCount>0&&(!v.due||v.due<=today))}
export function addCustomVerse(state,{ref,text,topic},id){
 ref=String(ref||'').trim();text=String(text||'').trim();topic=String(topic||'My verses').trim();
 if(!ref||!text)throw new Error('Add a reference and the words you want to learn.');
 if(ref.length>100||text.length>2000||topic.length>40)throw new Error('Please use a shorter reference, verse, or topic.');
 if(id){const v=state.verses.find(v=>v.id===id&&v.custom);if(!v)throw new Error('Only your own verses can be edited.');Object.assign(v,{ref,text,topic,mastery:0,practiceCount:0,lastPracticed:null,due:null});return v}
 const v={id:`custom-${globalThis.crypto.randomUUID()}`,ref,text,topic,source:'Added by your family',custom:true,mastery:0,practiceCount:0,lastPracticed:null,due:null};state.verses.push(v);return v;
}
