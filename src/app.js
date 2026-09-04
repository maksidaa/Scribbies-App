import '@fontsource/nunito/latin-400.css';
import '@fontsource/nunito/latin-600.css';
import '@fontsource/nunito/latin-700.css';
import '@fontsource/nunito/latin-800.css';
import '@fontsource/nunito/latin-900.css';
import '../creatures.css';
import './legacy-animations.css';
import './styles.css';
import {Capacitor} from '@capacitor/core';
import {nativeStorage,exportNativeBackup,isNative,haptic} from './platform.js';
import {createAudioEngine} from './audio.js';
import {SPECIES,REGIONS,VERSES,MODES,CHARMS,speciesById} from './data.js';
import {createState,SAVE_KEY,dayKey,refreshDay,chooseEgg,activeBuddy,hatch,stage,growthInfo,nodeUnlocked,regionUnlocked,nextNode,makeQuestions,checkAnswer,completeSession,care,purchase,claimDaily,dueVerses,addCustomVerse} from './game.js';
import {loadState,saveState,validateState} from './storage.js';
import {icon} from './icons.js';
import {art,eggArt,buddyArt,button,progress,escape as e} from './ui.js';
import {shell,adventure,collection,camp,journal,settings,practice,audioControls} from './views.js';
let storage;try{storage=window.localStorage}catch{storage={getItem:()=>null,setItem:()=>{throw new Error('Saving unavailable')},removeItem:()=>{}}}
let nativeError=null;
if(isNative()){try{storage=await nativeStorage([SAVE_KEY,SAVE_KEY+'.backup','sb'],()=>notify('Saving failed. Export your adventure before closing the app.'))}catch{nativeError='Native saving could not open. A browser save is being used for this session.'}}
const loaded=loadState(storage);let state=loaded.state,saveBlocked=loaded.blocked||false;
let view='adventure',region=0,family='All',owned=false,search='',topic='All',session=null;
let parentUntil=0,gateAnswer=null,pendingImport=null,playState=null,lastFocus=null;
let toastTimer,searchTimer,speaking=false,speechRun=0,selectedStarter='sprig',pendingStart=null;
const audio=createAudioEngine();
audio.configure(state.settings);
const app=document.querySelector('#app'),modal=document.querySelector('#modal');
function notify(message){const toast=document.querySelector('#toast');toast.textContent=message;toast.classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('visible'),4200)}
function persist(){if(saveBlocked){notify('Your unreadable save is protected. Export it in the grown-up corner before starting over.');return false}if(!saveState(storage,state)){notify('Could not save on this device. Export a backup in the grown-up corner.');return false}return true}
function sound(kind='good'){
 if(state.settings.motion)haptic();
 const b=activeBuddy(state);audio.effect(kind,b?.id,stage(b));
}
function stopSpeaking(){speechRun++;if('speechSynthesis'in window)window.speechSynthesis.cancel();speaking=false;audio.speaking(false)}
function listen(){
 if(!session)return;
 if(session.phase!=='read'&&!session.feedback?.correct){session.hinted=true;session.hintVisible=true;render()}
 if(!('speechSynthesis'in window)){notify('Read this one together. Read-aloud isn’t available on this device yet.');return}
 if(speaking){stopSpeaking();notify('Read-aloud paused.');return}
 const voice=window.speechSynthesis.getVoices().find(v=>v.localService&&v.lang.startsWith('en'));
 if(!voice){notify('An English device voice is needed for read-aloud. You can always read together.');return}
 const verse=state.verses.find(v=>v.id===session.verseId),utterance=new SpeechSynthesisUtterance(verse.text),run=++speechRun;
 utterance.voice=voice;utterance.rate=.78;
 const finish=()=>{if(run!==speechRun)return;speaking=false;audio.speaking(false)};
 utterance.onend=finish;utterance.onerror=()=>{if(run!==speechRun)return;finish();notify('Read-aloud couldn’t start. Try reading the verse together.')};
 speaking=true;audio.speaking(true);try{window.speechSynthesis.speak(utterance)}catch{finish();notify('Read-aloud couldn’t start. Try reading the verse together.')}
}
function render(){
 refreshDay(state);document.body.classList.toggle('reduce-motion',!state.settings.motion);
 const content={adventure:()=>adventure(state,region),collection:()=>collection(state,family,owned),camp:()=>camp(state),journal:()=>journal(state,search,topic),settings:()=>settings(state),practice:()=>practice(state,session)};
 if(view==='practice'&&!session)view='adventure';
 audio.configure(state.settings);audio.scene(view,view==='practice'&&session?.phase!=='result');
 app.innerHTML=shell(state,view,(content[view]||content.adventure)(),region);
 document.title=`Scribbies · ${{adventure:'Your adventure',collection:'Scribbypedia',camp:'My camp',journal:'Verse journal',settings:'Grown-up corner',practice:'Learning together'}[view]}`;
}
function navigate(next){
 if(!['adventure','collection','camp','journal','settings'].includes(next))return;
 if(next==='settings'&&parentUntil<Date.now()){parentGate();return}
 const perform=()=>{stopSpeaking();session=null;view=next;render();window.scrollTo({top:0,behavior:'instant'});document.querySelector('#main-content').focus({preventScroll:true})};
 if(session&&session.phase!=='result'){askLeave(perform);return}perform();
}
function openDialog(title,content,cls=''){
 if(!modal.open)lastFocus=document.activeElement;
 modal.className=cls;modal.innerHTML=`<div class="modal-heading"><h2 id="modal-title">${title}</h2><button class="icon-btn" data-action="close-modal" aria-label="Close dialog">${icon('close')}</button></div>${content}`;
 if(!modal.open)modal.showModal();
}
function closeDialog(){modal.close();playState=null;pendingImport=null;if(lastFocus?.isConnected)lastFocus.focus();else document.querySelector('#main-content')?.focus({preventScroll:true})}
modal.addEventListener('cancel',()=>{playState=null;pendingImport=null});
modal.addEventListener('click',event=>{if(event.target===modal){const r=modal.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)closeDialog()}});
function showEggs(after=null){
 pendingStart=after;
 const eggs=[['sprig','Meadow egg','A woodland Scribby is growing inside.'],['puddle','Tidepool egg','Home to a curious waterside Scribby.'],['hopple','Blossom egg','A friendly woodland Scribby awaits.']];
 openDialog('Choose your first egg',`<p class="modal-intro">Choose a habitat egg. Scripture practice builds warmth. At 60 warmth, your egg is ready to hatch.</p><div class="starter-grid">${eggs.map(([id,name,desc])=>`<button class="starter-card ${selectedStarter===id?'selected':''}" data-starter="${id}" aria-pressed="${selectedStarter===id}">${eggArt(id,150)}<strong>${name}</strong><p>${desc}</p><span>${selectedStarter===id?icon('check'):'Choose this egg'}</span></button>`).join('')}</div>${button(`Choose this egg ${icon('heart')}`,'confirm-egg','primary wide')}<p class="modal-footnote">Your companion will always be safe, even when you take a break.</p>`,'starter-dialog');
}
function showHatch(){
 const b=activeBuddy(state);
 if(!b){showEggs();return}
 if(b.hatched){notify(`${b.name} is already here!`);return}
 if(b.warmth<60){notify(`Just ${60-b.warmth} more warmth. Learn a verse to help your egg hatch.`);return}
 openDialog('Tap, tap… hello in there!',`<div class="hatch-reveal">${eggArt(b.id,230)}<p>Your egg is ready. Tap below to hatch it.</p>${button(`${icon('sparkles')} Help my egg hatch`,'crack-egg','primary')}</div>`,'hatch-dialog');
}
function crackEgg(){
 if(!hatch(state))return;
 persist();sound('hatch');render();const b=activeBuddy(state);
 openDialog(`Hello, ${e(b.name)}!`,`<div class="hatch-reveal hatch-celebrate">${buddyArt(b,240)}<div class="celebration-sprinkles" aria-hidden="true">✦ · ✧ · ✦</div><h3>Your Scribby has hatched!</h3><p>Name your new buddy. Then feed, play, and practice to help it grow.</p><form id="hatch-name-form"><label>What shall we call your friend?<input name="buddyName" maxlength="24" value="${e(b.name)}" required autocomplete="off"></label>${button(`Welcome to the family ${icon('heart')}`,'save-hatch-name','primary wide','type="submit"')}</form></div>`,'hatch-dialog');
}
function startAdventure(node=nextNode(state,region)){
 if(!Number.isInteger(node)||node<0||node>5||!nodeUnlocked(state,region,node)){notify('There’s a little discovery before this one. Follow the glowing marker.');return}
 if(!state.active){showEggs(()=>startAdventure(node));return}
 startSession(VERSES[region*6+node].id,'adventure',region,node);
}
function startSession(verseId,mode,r=null,n=null){
 if(!state.active){showEggs(()=>startSession(verseId,mode,r,n));return}
 const verse=state.verses.find(v=>v.id===verseId);if(!verse)return;
 if(!['adventure',...MODES.map(m=>m.id)].includes(mode))return;
 closeDialog();stopSpeaking();session={id:crypto.randomUUID(),verseId,mode,region:r,node:n,phase:'read',questions:makeQuestions(verse,mode),index:0,errors:0,hinted:false,hintVisible:false,feedback:null,order:[],response:[],text:'',selected:null,done:false};view='practice';render();window.scrollTo({top:0,behavior:'instant'});
}
function modePicker(verseId){
 const verse=state.verses.find(v=>v.id===verseId);if(!verse)return;
 openDialog('How shall we practice?',`<p class="modal-intro">${e(verse.ref)}. Start with clues, then try a little more on your own.</p><div class="mode-list">${MODES.map(m=>`<button class="mode-option" data-mode="${m.id}" data-verse="${e(verseId)}"><span class="mode-icon">${icon(m.icon)}</span><span><strong>${m.name}</strong><small>${m.description}</small></span><span class="mode-difficulty" aria-label="Difficulty ${m.difficulty} out of 5">${'●'.repeat(m.difficulty)}${'○'.repeat(5-m.difficulty)}</span>${icon('chevron')}</button>`).join('')}</div><p class="modal-footnote">Hints are always okay. Independent recall on a later day earns mastery.</p>`);
}
function beginQuestions(){stopSpeaking();session.phase='question';render();document.querySelector('.word-option,.blank-input,.word-tile,#recall-answer')?.focus({preventScroll:true})}
function checkResponse(predictIndex){
 if(!session||session.phase!=='question'||session.feedback?.correct)return;
 const q=session.questions[session.index];let response;
 if(q.type==='predict'){session.selected=predictIndex;response=q.options[predictIndex]}
 else if(q.type==='blanks'){response=session.response;if(q.missing.some((_,i)=>!response[i]?.trim())){notify('Try each gap first. A hint is always here if you need it.');return}}
 else if(q.type==='jumble'){if(session.order.length!==q.words.length){notify('Use all the words to finish the trail.');return}response=session.order.map(id=>q.words[id])}
 else{response=session.text;if(!response.trim()){notify('Try the words you remember. You can ask for a little hint.');return}}
 const correct=checkAnswer(q,response);if(!correct)session.errors++;
 session.feedback={correct};if(correct)sound();render();
 document.querySelector(correct?'[data-action="next-question"]':'.answer-feedback')?.scrollIntoView({behavior:state.settings.motion?'smooth':'instant',block:'nearest'});
}
function nextQuestion(){
 if(!session?.feedback?.correct)return;
 if(session.index+1===session.questions.length){
  session.done=true;const before=stage(activeBuddy(state)),result=completeSession(state,session);if(!result)return;
  session.result=result;session.phase='result';persist();stopSpeaking();render();sound(stage(activeBuddy(state))!==before?'evolve':'reward');window.scrollTo({top:0,behavior:'instant'});return;
 }
 session.index++;session.feedback=null;session.hintVisible=false;session.response=[];session.text='';session.order=[];session.selected=null;render();
}
let leaveCallback=null;
function askLeave(callback){leaveCallback=callback;openDialog('Leave this practice?',`<p class="modal-intro">Your friends and earlier discoveries are safe. This unfinished practice will start from the beginning next time.</p><div class="button-row">${button('Keep learning','close-modal','primary')}${button('Leave for now','confirm-leave','outline')}</div>`)}
function doCare(kind){const old=stage(activeBuddy(state));const result=care(state,kind);if(result.ok){persist();render();const grew=stage(activeBuddy(state))!==old;sound(grew?'evolve':kind);if(grew)notify('Your Scribby grew! Check out its new life stage.');else notify(result.message)}else notify(result.message);animateBuddy(kind)}
function animateBuddy(type){const el=document.querySelector('.camp-creature');if(!el)return;el.classList.remove('reaction-play','reaction-feed','reaction-pet');void el.offsetWidth;el.classList.add(`reaction-${type==='feed'?'feed':type==='play'?'play':'pet'}`);const speech=document.querySelector('#camp-speech');if(speech)speech.textContent=type==='feed'?'That was delicious!':type==='play'?'Again, again! That was wonderful!':'Happy to see you!'}
function startPlay(){
 const b=activeBuddy(state);if(!b?.hatched){doCare('warm');return}
 const symbols=['leaf','heart','star','sun','paw','berry'];const seq=Array.from({length:3},()=>symbols[Math.floor(Math.random()*symbols.length)]);
 playState={sequence:seq,index:0,revealed:true,choices:[...symbols],errors:0};renderPlay();
}
function renderPlay(){const b=activeBuddy(state);const p=playState;if(!p)return;
 openDialog(`Memory match with ${e(b.name)}`,`<div class="play-game">${buddyArt(b,130)}<h3>${p.revealed?'Remember the pattern.':'What comes next?'}</h3><p>${p.revealed?'Take your time. Say the shapes together.':`Find shape ${p.index+1} of ${p.sequence.length}.`}</p><div class="memory-sequence">${p.sequence.map((shape,i)=>`<span class="${i<p.index?'found':''}">${p.revealed||i<p.index?icon(shape):'?'}</span>`).join('')}</div>${p.revealed?button('I remember!','hide-pattern','primary'):`<div class="memory-choices">${p.choices.map(shape=>`<button data-memory="${shape}" aria-label="${shape}">${icon(shape)}</button>`).join('')}</div>${button('Show me again','show-pattern','ghost')}`}</div>`);
}
function chooseMemory(shape){
 const p=playState;if(!p||p.revealed)return;
 if(shape!==p.sequence[p.index]){notify('Almost! Try another shape, or take another peek.');p.errors++;return}
 p.index++;
 if(p.index===p.sequence.length){closeDialog();doCare('play');return}
 sound();renderPlay();
}
function speciesDetail(id){const sp=speciesById(id);if(!sp)return;const b=state.buddies.find(b=>b.id===id);let location=id==='fern'?'Daily goals reward':'';
 REGIONS.forEach((r,ri)=>{const n=r.encounters.indexOf(id);if(n>=0&&id!=='fern')location=`${r.name} · stop ${n+1}`});
 if(sp.starter)location=location||'Choose a starter egg';
 openDialog(b?`${e(b.name)}${b.hatched?'':'’s egg'}`:'A friend you haven’t met…',`<div class="species-detail" style="--species-bg:${sp.color}"><div class="detail-art">${b?buddyArt(b,220):'<div class="mystery-art">'+icon('paw')+'<span>?</span></div>'}</div><span class="rarity ${sp.rarity.toLowerCase()}">${sp.rarity} · ${sp.family}</span><h3>${b?sp.trait:'Every trail holds a little wonder.'}</h3><p>${b?sp.blurb:`Look in ${location}. Share a verse and a little kindness.`}</p>${b?`<div class="detail-stats"><span>${icon('heart')} Bond ${b.bond}/100</span><span>${icon('sparkles')} ${growthInfo(b).label}</span></div><button class="btn primary wide" data-buddy="${id}">${b.id===state.active?'Visit our camp':'Make my adventure buddy'} ${icon('tent')}</button>`:button('Keep exploring','close-modal','secondary')}</div>`);
}
function verseForm(id){
 const v=id?state.verses.find(v=>v.id===id&&v.custom):null;if(id&&!v)return;
 openDialog(v?'Edit your verse':'Add a verse or quote',`<p class="modal-intro">Add a scripture or quote you want to learn. Copy the words exactly from your chosen translation.</p><form id="verse-form" data-edit-id="${v?e(v.id):''}"><label>Reference or author<input name="ref" maxlength="100" required placeholder="e.g. Alma 32:21" value="${e(v?.ref||'')}"></label><label>The words to remember<textarea name="text" rows="5" maxlength="2000" required placeholder="Type or paste your verse here…">${e(v?.text||'')}</textarea></label><label>Topic<input name="topic" maxlength="40" placeholder="e.g. Faith" value="${e(v?.topic||'My verses')}"></label><p class="form-error" id="verse-error" role="alert"></p><div class="button-row">${button('Save my verse','save-verse','primary','type="submit"')}${v?`<button type="button" class="btn danger" data-delete-verse="${e(v.id)}">${icon('trash')} Delete</button>`:''}</div></form>`);
}
function parentGate(){
 if(parentUntil>Date.now()){navigate('settings');return}
 const a=12+Math.floor(Math.random()*9),b=3+Math.floor(Math.random()*5);gateAnswer=String(a*b);
 openDialog('Ask a grown-up',`<p class="modal-intro">This corner holds backups and family settings. Please ask a grown-up to help.</p><form id="parent-form"><label>What is ${a} × ${b}?<input name="answer" inputmode="numeric" pattern="[0-9]*" autocomplete="off" required aria-label="What is ${a} times ${b}?"></label><p id="gate-error" class="form-error" role="alert"></p>${button('Open grown-up corner','submit-parent','primary wide','type="submit"')}</form>`);
}
async function download(data,name){if(isNative()){try{await exportNativeBackup(typeof data==='string'?data:JSON.stringify(data,null,2),name)}catch{notify('Backup sharing was closed or unavailable. Your saved game is unchanged.')}return}const blob=new Blob([typeof data==='string'?data:JSON.stringify(data,null,2)],{type:'application/json'});const url=URL.createObjectURL(blob);const link=document.createElement('a');link.href=url;link.download=name;document.body.append(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),10000)}
function exportSave(){if(parentUntil<Date.now()){parentGate();return}download(state,`scribbies-adventure-${dayKey()}.json`);notify('Your adventure backup is ready.')}
function help(){openDialog('How to play',`<div class="help-steps">${[['sun','Start with your egg','Choose an egg. Each learning session adds warmth. At 60 warmth, visit camp to hatch it.'],['book','Learn in steps','Read and listen, find missing words, and rebuild the verse. Hints and retries are always welcome.'],['paw','Raise a friend','Feed a berry, play a memory game, and keep learning. Your baby grows into a young, grown, then radiant Scribby.'],['compass','See what’s out there','Follow the glowing trail markers. Discover new eggs, earn three badges, and meet Luma, guardian of the Everlight.'],['heart','Come back when you can','Review reminders help verses stick. Your friends never die, disappear, or lose progress while you’re away.']].map(([i,t,p])=>`<div>${icon(i)}<section><h3>${t}</h3><p>${p}</p></section></div>`).join('')}</div>${button('Let’s go','close-modal','primary wide')}`)}
function privacy(){openDialog('Privacy, in plain words',`<div class="privacy-copy"><p>Scribbies stores your nickname, verses, companions, settings, and progress on this device. The game does not send this information to us and includes no analytics, advertising, online accounts, chat, or in-app purchases.</p><p>Read-aloud uses an available on-device English voice. It does not record you. The game does not request your microphone, camera, contacts, or location.</p><p>Backups contain your game progress and any verses you added. They are saved only when you ask. You decide where to keep them and who to share them with.</p><p>The private web preview is hosted by OpenAI Sites. Access to that preview uses the host’s sign-in and normal hosting services. Those services are separate from the game’s device-local save.</p><p>In the grown-up corner you can export your adventure or start over. Removing the app or clearing browser storage can remove your saved game. Keep a backup of an adventure you love.</p></div>${button('Got it','close-modal','primary wide')}`)}
const actions={
 choose:()=>showEggs(), 'confirm-egg':()=>{try{chooseEgg(state,selectedStarter);persist();sound('warm');const next=pendingStart;pendingStart=null;closeDialog();render();if(next)next();else{view='camp';render();notify('Your egg is home! Learn a verse to help it hatch.')}}catch(error){notify(error.message)}},
 start:()=>startAdventure(), 'next-region':()=>{if(region<2&&regionUnlocked(state,region+1)){region++;render()}},
 camp:()=>navigate('camp'),adventure:()=>navigate('adventure'),learn:()=>modePicker(dueVerses(state)[0]?.id||state.verses[0].id),
 hatch:showHatch,'crack-egg':crackEgg,'close-modal':closeDialog,
 'begin-questions':beginQuestions,'check-answer':()=>checkResponse(),'next-question':nextQuestion,
 hint:()=>{if(!session)return;session.hinted=true;session.hintVisible=!session.hintVisible;render()},listen,
 'leave-practice':()=>navigate('adventure'),'confirm-leave':()=>{const next=leaveCallback;leaveCallback=null;closeDialog();if(next)next()},
 'finish-session':()=>navigate('adventure'),'result-camp':()=>navigate('camp'),'result-hatch':()=>{navigate('camp');showHatch()},
 daily:()=>{if(claimDaily(state)){persist();render();sound('reward');notify('Daily reward: +40 leaves and 2 berries.')}},
 feed:()=>doCare('feed'),warm:()=>doCare('warm'),pet:()=>{animateBuddy('pet');sound('pet');notify(activeBuddy(state)?.hatched?'Your Scribby says hello!':'Your egg gives a wiggle.')},play:startPlay,
 'hide-pattern':()=>{if(playState){playState.revealed=false;playState.index=0;renderPlay()}},'show-pattern':()=>{if(playState){playState.revealed=true;playState.index=0;renderPlay()}},
 rename:()=>{const b=activeBuddy(state);if(b)openDialog('Rename your Scribby',`<form id="rename-form"><label>Buddy nickname<input name="buddyName" maxlength="24" value="${e(b.name)}" required></label>${button('Save name','save-rename','primary wide','type="submit"')}</form>`)},
 review:()=>modePicker(dueVerses(state)[0]?.id||state.verses[0].id),'quick-practice':()=>modePicker(state.verses[0].id),
 'add-verse':()=>verseForm(),'clear-search':()=>{search='';topic='All';render()},
 parent:parentGate,help,privacy,export:exportSave,audio:()=>{if(view==='settings'){document.querySelector('.audio-controls')?.scrollIntoView({block:'center'});return}openDialog('Music & sounds',audioControls(state))}, 'preview-voice':()=>sound('pet'),
 'export-legacy':()=>{try{const raw=storage.getItem('sb');if(raw)download(raw,'scribbies-original-save.json');else notify('There is no original Scribbies save on this device.')}catch{notify('Original save is unavailable.')}},
 import:()=>{if(parentUntil<Date.now()){parentGate();return}document.querySelector('#import-file').click()},
 'confirm-import':()=>{if(!pendingImport||parentUntil<Date.now())return;state=pendingImport;saveBlocked=false;persist();closeDialog();render();notify('Your adventure is back. Welcome home!')},
 reset:()=>openDialog('Start a new adventure?',`<p class="modal-intro">This clears your current eggs, companions, discoveries, and saved verses. Your original Scribbies archive stays untouched. Save a backup if you’d like to keep this adventure.</p><form id="reset-form"><label>Type NEW to start over<input name="confirm" required autocomplete="off" placeholder="NEW"></label><p class="form-error" id="reset-error" role="alert"></p><div class="button-row">${button('Keep my adventure','close-modal','secondary','type="button"')}${button('Start fresh','confirm-reset','danger','type="submit"')}</div></form>`)
};
document.addEventListener('click',event=>{
 const target=event.target.closest('button,a');if(!target)return;
 try{
  if(target.dataset.action){actions[target.dataset.action]?.();return}
  if(target.dataset.view){navigate(target.dataset.view);return}
  if(target.dataset.region!==undefined){const r=Number(target.dataset.region);if(regionUnlocked(state,r)){region=r;render()}else notify('Finish the previous chapter to open this trail.');return}
  if(target.dataset.node!==undefined){startAdventure(Number(target.dataset.node));return}
  if(target.dataset.starter){selectedStarter=target.dataset.starter;const after=pendingStart;showEggs(after);return}
  if(target.dataset.family){family=target.dataset.family;render();return}
  if(target.dataset.species){speciesDetail(target.dataset.species);return}
  if(target.dataset.buddy){if(state.buddies.some(b=>b.id===target.dataset.buddy)){state.active=target.dataset.buddy;persist();closeDialog();view='camp';render();sound('pet')}return}
  if(target.dataset.charm){const b=activeBuddy(state);if(!b)return;const id=target.dataset.charm;
   if(!state.charms.includes(id)&&!purchase(state,id)){notify('Keep exploring to earn a few more leaves.');return}
   b.charm=id;persist();render();sound('pet');notify(stage(b)==='adult'||stage(b)==='radiant'?'Charm equipped.':'Saved for your Scribby’s grown-up look.');return}
  if(target.dataset.practice){modePicker(target.dataset.practice);return}
  if(target.dataset.mode){startSession(target.dataset.verse,target.dataset.mode);return}
  if(target.dataset.answer!==undefined){checkResponse(Number(target.dataset.answer));return}
  if(target.dataset.tile!==undefined&&session&&!session.feedback?.correct){const id=Number(target.dataset.tile);if(!session.order.includes(id))session.order.push(id);session.feedback=null;render();return}
  if(target.dataset.unplace!==undefined&&session&&!session.feedback?.correct){session.order=session.order.filter(id=>id!==Number(target.dataset.unplace));session.feedback=null;render();return}
  if(target.dataset.memory){chooseMemory(target.dataset.memory);return}
  if(target.dataset.editVerse){verseForm(target.dataset.editVerse);return}
  if(target.dataset.deleteVerse){const v=state.verses.find(v=>v.id===target.dataset.deleteVerse&&v.custom);if(v)openDialog('Remove this verse?',`<p class="modal-intro">${e(v.ref)} and its learning progress will be removed from this journal.</p><div class="button-row">${button('Keep it','close-modal','secondary')}<button class="btn danger" data-confirm-delete="${e(v.id)}">Remove verse</button></div>`);return}
  if(target.dataset.confirmDelete){state.verses=state.verses.filter(v=>v.id!==target.dataset.confirmDelete||!v.custom);persist();closeDialog();render();notify('Verse removed.');return}
 }catch(error){console.error('Scribbies action failed:',error);notify('That step didn’t work. Please try again.')}
});
document.addEventListener('input',event=>{
 const input=event.target;
 if(input.id==='music-volume'||input.id==='effects-volume'){const key=input.id==='music-volume'?'musicVolume':'effectsVolume';state.settings[key]=Number(input.value)/100;audio.configure(state.settings);const output=document.querySelector('#'+input.id+'-value');if(output)output.textContent=input.value+'%';}
 if(input.id==='verse-search'){search=input.value;clearTimeout(searchTimer);searchTimer=setTimeout(()=>{render();const next=document.querySelector('#verse-search');next?.focus();},150)}
 if(input.dataset.gap!==undefined&&session)session.response[Number(input.dataset.gap)]=input.value;
 if(input.id==='recall-answer'&&session)session.text=input.value;
});
document.addEventListener('change',async event=>{
 const input=event.target;
 if(input.id==='music-volume'||input.id==='effects-volume'){persist();if(input.id==='effects-volume')sound('pet')}
 if(input.id==='owned-filter'){owned=input.checked;render()}
 if(input.id==='topic-select'){topic=input.value;render()}
 if(input.id==='sound-setting'||input.id==='music-setting'){const key=input.id==='sound-setting'?'sound':'music';state.settings[key]=input.checked;persist();audio.configure(state.settings);audio.unlock();if(key==='sound'&&input.checked)sound('pet')}
 if(input.id==='motion-setting'){state.settings.motion=input.checked;persist();render()}
 if(input.id==='import-file'){
  const file=input.files?.[0];if(!file)return;
  if(file.size>2000000){notify('This file is too large for a Scribbies backup.');return}
  try{pendingImport=validateState(JSON.parse(await file.text()));openDialog('Welcome this adventure home?',`<p class="modal-intro">This backup has ${pendingImport.buddies.length} companions, ${pendingImport.verses.length} verses, and ${Object.keys(pendingImport.completed).length} discoveries. It will replace the adventure currently on this device.</p><div class="button-row">${button('Restore this adventure','confirm-import','primary')}${button('Keep current adventure','close-modal','outline')}</div>`)}catch(error){notify(error.message||'This backup could not be read. Your current adventure is safe.')}input.value='';
 }
});
document.addEventListener('submit',event=>{
 event.preventDefault();const form=event.target;const data=new FormData(form);
 if(form.id==='answer-form'){checkResponse();return}
 if(form.id==='verse-form'){try{addCustomVerse(state,{ref:data.get('ref'),text:data.get('text'),topic:data.get('topic')},form.dataset.editId||null);persist();closeDialog();view='journal';render();notify('Verse saved.')}catch(error){document.querySelector('#verse-error').textContent=error.message}return}
 if(form.id==='parent-form'){if(String(data.get('answer')).trim()===gateAnswer){parentUntil=Date.now()+10*60*1000;gateAnswer=null;closeDialog();navigate('settings')}else{document.querySelector('#gate-error').textContent='Please ask your grown-up to try again.'}return}
 if(form.id==='profile-form'){const name=String(data.get('name')).trim().slice(0,24);if(name){state.name=name;persist();render();notify('Nickname saved.')}return}
 if(form.id==='rename-form'||form.id==='hatch-name-form'){const b=activeBuddy(state),name=String(data.get('buddyName')).trim().slice(0,24);if(b&&name){b.name=name;persist();closeDialog();view='camp';render();notify(`Welcome home, ${name}!`)}return}
 if(form.id==='reset-form'){
  if(parentUntil<Date.now()){closeDialog();parentGate();return}
  if(String(data.get('confirm')).trim()!=='NEW'){document.querySelector('#reset-error').textContent='Type NEW to confirm, or keep your adventure.';return}
  state=createState();saveBlocked=false;region=0;session=null;search='';topic='All';persist();closeDialog();view='adventure';render();notify('New adventure started. Choose your egg.');
 }
});
window.addEventListener('hashchange',()=>{const next=location.hash.slice(1);if(next==='adventure')navigate(next)});
const wakeAudio=()=>audio.unlock();
document.addEventListener('pointerdown',wakeAudio,{capture:true,passive:true});
document.addEventListener('keydown',wakeAudio,{capture:true});
document.addEventListener('visibilitychange',()=>{if(document.hidden)stopSpeaking();audio.visibility(!document.hidden)});
window.addEventListener('pagehide',()=>{stopSpeaking();audio.visibility(false)});
window.addEventListener('pageshow',()=>audio.visibility(!document.hidden));
if(import.meta.hot)import.meta.hot.dispose(()=>{audio.dispose();document.removeEventListener('pointerdown',wakeAudio,true);document.removeEventListener('keydown',wakeAudio,true)});
window.addEventListener('storage',event=>{if(event.key===SAVE_KEY&&event.newValue){if(session&&session.phase!=='result'){session=null;view='adventure';stopSpeaking();notify('Your adventure changed in another tab. The newest save has been loaded; please restart this practice.');}try{state=validateState(JSON.parse(event.newValue));render()}catch{}}});
window.addEventListener('online',()=>notify('Back online. Your adventure is still right here.'));
render();
if(loaded.warning||nativeError)notify(loaded.warning||nativeError);
if('speechSynthesis'in window)window.speechSynthesis.getVoices();
if(import.meta.env.PROD&&'serviceWorker'in navigator&&!Capacitor.isNativePlatform())window.addEventListener('load',()=>{navigator.serviceWorker.register('./sw.js').catch(()=>{/* Offline cache is optional; regular saves still work. */})});
