import test from 'node:test';
import assert from 'node:assert/strict';
import {createAudioEngine,musicStep,musicLevel,reactionNotes,VOICES} from '../src/audio.js';
import {SPECIES} from '../src/data.js';
import {createState} from '../src/game.js';
import {validateState} from '../src/storage.js';
function harness(){
 const param=()=>({value:0,events:[],cancelScheduledValues(){},cancelAndHoldAtTime(){},setValueAtTime(v,t){this.value=v;this.events.push([v,t])},linearRampToValueAtTime(v,t){this.value=v;this.events.push([v,t])},exponentialRampToValueAtTime(v,t){this.value=v;this.events.push([v,t])}});
 let created=0,callbacks=new Map(),serial=0;const nodes=[],gains=[];
 const ctx={currentTime:1,state:'running',destination:{},createGain(){const n={gain:param(),connect(){},disconnect(){}};gains.push(n);return n},createOscillator(){const n={frequency:param(),connect(){},disconnect(){},start(t){this.startTime=t},stop(t){this.stopTime=t;if(t===undefined)this.onended?.()}};nodes.push(n);return n},async resume(){this.state='running'},async suspend(){this.state='suspended'},async close(){this.state='closed'}};
 const audio=createAudioEngine({createContext:()=>{created++;return ctx},schedule:fn=>{callbacks.set(++serial,fn);return serial},unschedule:id=>callbacks.delete(id)});
 return {audio,ctx,nodes,gains,callbacks,get created(){return created},tick(){for(const fn of callbacks.values())fn()}};
}
test('Every collectible has a distinct bounded voice, with distinct event reactions and age pitch',()=>{
 const signatures=new Set();
 for(const sp of SPECIES){assert.ok(VOICES[sp.id]);const base=reactionNotes(sp.id);signatures.add(JSON.stringify(base));
  for(const event of ['pet','feed','play','hatch','evolve'])for(const age of ['egg','baby','teen','adult','radiant']){
   const notes=reactionNotes(sp.id,event,age);assert.ok(notes.length>0&&notes.length<20);
   for(const n of notes){assert.ok(n.freq>40&&n.freq<5000);assert.ok(n.end>40&&n.end<7000);assert.ok(n.at>=0&&n.at+n.duration<4);assert.ok(n.level<=.22)}
  }
  assert.notDeepEqual(base,reactionNotes(sp.id,'feed'));assert.notDeepEqual(base,reactionNotes(sp.id,'play'));assert.notDeepEqual(reactionNotes(sp.id,'hatch'),reactionNotes(sp.id,'evolve'));
  assert.notDeepEqual(reactionNotes(sp.id,'pet','baby'),base);
 }
 assert.equal(signatures.size,SPECIES.length);
});
test('Both original themes have finite, bounded notes, rests, and a continuous 16-bar score',()=>{
 for(const theme of ['explore','camp']){let melodyRests=0;
  for(let i=0;i<128;i++){const s=musicStep(theme,i);assert.ok(s.seconds>.2&&s.seconds<.5);if(!s.events.length)melodyRests++;for(const n of s.events){assert.ok(Number.isFinite(n.freq)&&n.duration>0&&n.duration<2)}}
  assert.ok(melodyRests>0);assert.deepEqual(musicStep(theme,0),musicStep(theme,128));
 }
 assert.notDeepEqual(musicStep('explore',0),musicStep('camp',0));
});
test('Practice ducks music; speech, hidden state, and music-off silence it independently of effects',()=>{
 const s=createState().settings,full=musicLevel(s);assert.ok(full>0);assert.ok(musicLevel(s,{practice:true})<full/5);
 assert.equal(musicLevel(s,{speaking:true}),0);assert.equal(musicLevel(s,{hidden:true}),0);assert.equal(musicLevel({...s,music:false}),0);assert.equal(musicLevel({...s,sound:false}),full);
});
test('Audio never starts before a gesture, only one context and scheduler are created',()=>{
 const h=harness();h.audio.configure(createState().settings);h.audio.scene('camp');assert.equal(h.created,0);
 h.audio.unlock();h.audio.unlock();assert.equal(h.created,1);assert.equal(h.callbacks.size,1);assert.ok(h.nodes.length>0);h.audio.dispose();assert.equal(h.callbacks.size,0);
});
test('Muting effects stops current calls without disabling music; speech suppresses new calls',()=>{
 const h=harness();h.audio.unlock();h.audio.effect('pet','puddle');const effectNodes=h.nodes.slice(3);h.audio.configure({sound:false});assert.ok(effectNodes.every(n=>n.stopTime===undefined));
 const count=h.nodes.length;h.ctx.currentTime+=1;h.audio.effect('play','puddle');assert.equal(h.nodes.length,count);assert.ok(h.gains[0].gain.value>0);
 h.audio.configure({sound:true});h.audio.speaking(true);h.audio.effect('play','puddle');assert.equal(h.nodes.length,count);assert.equal(h.gains[0].gain.value,0);
 h.audio.speaking(false);assert.ok(h.gains[0].gain.value>0);h.audio.dispose();
});
test('Hidden app stops notes and scheduling; returning never schedules a backlog',()=>{
 const h=harness();h.audio.unlock();h.audio.visibility(false);assert.equal(h.ctx.state,'suspended');assert.equal(h.callbacks.size,0);
 const count=h.nodes.length;h.audio.effect('feed','sprig');assert.equal(h.nodes.length,count);
 h.ctx.currentTime=1000;h.audio.visibility(true);h.tick();assert.ok(h.nodes.slice(count).length<=4);assert.ok(h.nodes.slice(count).every(n=>n.startTime>=1000));h.audio.dispose();
});
test('Scene changes keep a single scheduler; rapid repeated calls do not stack',()=>{
 const h=harness();h.audio.unlock();h.audio.effect('pet','sprig');const count=h.nodes.length;
 for(let i=0;i<20;i++)h.audio.effect('pet','sprig');assert.equal(h.nodes.length,count);
 h.audio.scene('camp');h.audio.scene('adventure');assert.equal(h.callbacks.size,1);h.audio.dispose();
});
test('Older muted saves stay muted and independent audio settings round-trip safely',()=>{
 const old=createState();old.settings={sound:false,motion:true};const restored=validateState(old);assert.equal(restored.settings.music,false);assert.equal(restored.settings.sound,false);
 const s=createState();Object.assign(s.settings,{music:false,sound:true,musicVolume:.3,effectsVolume:.9});assert.deepEqual(validateState(s).settings,s.settings);
 Object.assign(s.settings,{musicVolume:Infinity,effectsVolume:-100});const valid=validateState(s);assert.equal(valid.settings.musicVolume,.55);assert.equal(valid.settings.effectsVolume,0);
});
test('Missing Web Audio support does not prevent playing the game',()=>{
 const a=createAudioEngine({createContext:()=>{throw new Error('unsupported')}});assert.doesNotThrow(()=>{a.unlock();a.effect('pet');a.scene('camp');a.visibility(false);a.dispose()});
});
