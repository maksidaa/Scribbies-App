import {SAVE_KEY,createState,makeEgg} from './game.js';
import {SPECIES,CHARMS,VERSES,REGIONS} from './data.js';
const integer=(v,max=1000000)=>Number.isFinite(v)?Math.min(max,Math.max(0,Math.floor(v))):0;
const string=(v,max=100)=>typeof v==='string'?v.slice(0,max):'';
const date=v=>typeof v==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(v)?v:null;
export function validateState(raw){
 if(!raw||typeof raw!=='object'||raw.version!==2||!Array.isArray(raw.verses)||!Array.isArray(raw.buddies))throw new Error('This file is not a Scribbies adventure backup.');
 if(raw.verses.length>1000||raw.buddies.length>100)throw new Error('This backup is too large.');
 const s=createState();s.name=string(raw.name,24)||'Explorer';s.xp=integer(raw.xp);s.coins=integer(raw.coins);s.berries=integer(raw.berries,9999);s.streak=integer(raw.streak,9999);s.lastPractice=date(raw.lastPractice);
 s.buddies=raw.buddies.filter((b,i,a)=>b&&SPECIES.some(sp=>sp.id===b.id)&&a.findIndex(x=>x?.id===b.id)===i).map(b=>({...makeEgg(b.id),name:string(b.name,24)||SPECIES.find(sp=>sp.id===b.id).name,hatched:b.hatched===true,warmth:integer(b.warmth,60),growth:integer(b.growth),bond:integer(b.bond,100),charm:CHARMS.some(c=>c.id===b.charm)?b.charm:'none',lastFed:string(b.lastFed,40)||null,lastPlayed:date(b.lastPlayed),foundAt:string(b.foundAt,40),hatchedAt:string(b.hatchedAt,40)}));
 s.active=s.buddies.some(b=>b.id===raw.active)?raw.active:s.buddies[0]?.id||null;
 const builtins=new Map(VERSES.map(v=>[v.id,v]));
 s.verses=raw.verses.filter(v=>v&&typeof v.id==='string'&&typeof v.text==='string'&&typeof v.ref==='string').map(v=>({id:string(v.id,100),ref:string(v.ref,100),text:string(v.text,2000),topic:string(v.topic,40)||'My verses',source:string(v.source,100)||'Added by your family',custom:!builtins.has(v.id),mastery:integer(v.mastery,5),practiceCount:integer(v.practiceCount),lastPracticed:date(v.lastPracticed),due:date(v.due)})).filter((v,i,a)=>v.text.trim()&&v.ref.trim()&&a.findIndex(x=>x.id===v.id)===i);
 // Adventure verses always retain their source text; restoring cannot remove a chapter.
 for(const v of VERSES){const found=s.verses.find(x=>x.id===v.id);if(found)Object.assign(found,{ref:v.ref,text:v.text,source:v.source,topic:v.topic,custom:false});else s.verses.push(structuredClone(v))}
 for(let r=0;r<REGIONS.length;r++)for(let n=0;n<6;n++){const key=`${r}-${n}`;if(raw.completed?.[key])s.completed[key]={stars:Math.max(1,integer(raw.completed[key].stars,3)),date:date(raw.completed[key].date)}}
 if(raw.daily&&date(raw.daily.day))s.daily={day:raw.daily.day,practices:integer(raw.daily.practices,1000),care:raw.daily.care===true,claimed:raw.daily.claimed===true};
 s.settings={sound:raw.settings?.sound!==false,motion:raw.settings?.motion!==false};
 s.charms=CHARMS.filter(c=>c.id==='none'||raw.charms?.includes?.(c.id)).map(c=>c.id);
 for(const b of s.buddies)if(!s.charms.includes(b.charm))b.charm='none';
 s.processed=Array.isArray(raw.processed)?raw.processed.filter(id=>typeof id==='string').slice(-150).map(id=>id.slice(0,100)):[];
 s.legacyImported=raw.legacyImported===true;s.legacyCount=integer(raw.legacyCount,10000);return s;
}
export function migrateLegacy(old){
 const s=createState();if(!old||typeof old!=='object')return s;
 s.xp=integer(old.xp);s.streak=integer(old.streak,9999);s.legacyImported=true;
 if(Array.isArray(old.verses))for(const [i,v] of old.verses.entries()){
  if(!v||typeof v.text!=='string'||!v.text.trim())continue;
  if(s.verses.some(x=>x.text===v.text))continue;
  s.verses.push({id:`legacy-${i}`,ref:string(v.ref||v.reference,100)||'Saved verse',text:string(v.text,2000),topic:string(v.tags?.[0],40)||'My verses',source:'Your original Scribbies save',custom:true,mastery:integer(v.mastery,5),practiceCount:integer(v.practiceCount),lastPracticed:null});
 }
 const oldBuddies=Array.isArray(old.graduatedBuddies)?old.graduatedBuddies:[];
 const cat={mammals:'mammal',reptiles:'reptile',birds:'bird',aquatic:'aquatic',mystical:'mystical',prehistoric:'prehistoric'};
 const add=(category,variant,name,hatched=true)=>{
  const sp=SPECIES.find(sp=>sp.art===cat[category]&&sp.variant===Number(variant));
  if(sp&&!s.buddies.some(b=>b.id===sp.id)){const b=makeEgg(sp.id);b.name=string(name,24)||sp.name;b.hatched=hatched;b.growth=hatched?200:0;s.buddies.push(b)}
 };
 add(old.creatureCategory,old.creatureVariant,old.buddyName,old.buddyStage!=='egg');
 for(const b of oldBuddies)add(b.creatureCategory||b.category,b.creatureVariant??b.variant,b.buddyName||b.name);
 s.active=s.buddies[0]?.id||null;s.legacyCount=oldBuddies.length;return s;
}
export function loadState(storage){
 try{
  const saved=storage.getItem(SAVE_KEY);
  if(saved){try{return {state:validateState(JSON.parse(saved)),warning:null}}catch{const backup=storage.getItem(SAVE_KEY+'.backup');if(backup){try{return {state:validateState(JSON.parse(backup)),warning:'Your latest save could not be read. Your previous save was recovered.'}}catch{}}
   return {state:createState(),warning:'Your saved game could not be read. It has been kept safely; use the grown-up corner to export it before saving a new adventure.',blocked:true};}}
  const legacy=storage.getItem('sb');if(legacy){try{return {state:migrateLegacy(JSON.parse(legacy)),warning:'Welcome back! Your saved verses and matching companions have joined the adventure. Your original save is untouched.'}}catch{}}
  return {state:createState(),warning:null};
 }catch{return {state:createState(),warning:'Saving is unavailable in this browser. Keep this page open and export your adventure before leaving.'}}
}
export function saveState(storage,state){
 try{const previous=storage.getItem(SAVE_KEY);if(previous){try{validateState(JSON.parse(previous));storage.setItem(SAVE_KEY+'.backup',previous)}catch{}}
 storage.setItem(SAVE_KEY,JSON.stringify(state));return true;
 }catch{return false}
}
