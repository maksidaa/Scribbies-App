// Original procedural score and creature voices. All sound is generated locally.
export const VOICES = {
 sprig:{pitch:560,shape:'triangle',notes:[1,1.5,1.2],length:.12},
 hopple:{pitch:940,shape:'sine',notes:[1,1.18,1.05],length:.09},
 puddle:{pitch:380,shape:'sine',notes:[1,1.8,1.3,2],length:.14,bubble:true},
 fern:{pitch:760,shape:'triangle',notes:[1.4,1,1.6],length:.075},
 bramble:{pitch:430,shape:'triangle',notes:[1,1.12,.9],length:.16},
 hoot:{pitch:270,shape:'sine',notes:[1,.84],length:.32},
 moss:{pitch:190,shape:'sine',notes:[1,1.12],length:.27},
 pip:{pitch:1240,shape:'sine',notes:[1,1.25,1.08,1.4],length:.055},
 quill:{pitch:510,shape:'triangle',notes:[1,.8,1],length:.1},
 bubbles:{pitch:300,shape:'sine',notes:[1,1.7,2.2,1.4],length:.11,bubble:true},
 glimmer:{pitch:820,shape:'sine',notes:[1,1.5,2],length:.22,bubble:true},
 waddle:{pitch:630,shape:'triangle',notes:[1,.72,1.1],length:.13},
 pearl:{pitch:440,shape:'sine',notes:[1,1.5,1.25],length:.34,bubble:true},
 pebble:{pitch:145,shape:'triangle',notes:[1.2,.8,1],length:.2,growl:true},
 willow:{pitch:110,shape:'sine',notes:[1,1.3],length:.4,growl:true},
 ember:{pitch:660,shape:'triangle',notes:[1,1.25,1.5,1.12],length:.16},
 nova:{pitch:740,shape:'sine',notes:[1,1.5,2,1.5],length:.2},
 luma:{pitch:490,shape:'sine',notes:[1,1.25,1.5,2],length:.26}
};
const midi=n=>440*2**((n-69)/12);
const note=(at,freq,duration,level=.2,shape='sine',end=freq)=>({at,freq,end,duration,level,shape});
// Sixteen bars per theme, with rests and a changed second phrase.
const SCORES={
 explore:{bpm:92,chords:[[60,64,67],[57,60,64],[53,57,60],[55,59,62]],
 melody:[[76,null,79,76,74,null,72,null],[72,76,null,79,81,null,79,null],[77,null,76,72,69,null,72,null],[74,79,null,74,71,null,67,null],
 [76,null,79,84,81,null,79,null],[76,72,null,76,79,null,76,null],[77,null,81,79,76,72,null,69],[74,null,71,74,72,null,null,null]]},
 camp:{bpm:72,chords:[[60,64,67],[53,57,60],[57,60,64],[55,59,62]],
 melody:[[72,null,null,76,79,null,76,null],[77,null,76,null,72,null,null,null],[76,null,null,72,69,null,72,null],[71,null,74,null,67,null,null,null],
 [76,null,79,null,84,null,79,null],[81,null,null,77,76,null,72,null],[76,null,72,null,69,null,64,null],[67,null,71,null,72,null,null,null]]}
};
export function musicStep(theme,step){
 const score=SCORES[theme]||SCORES.explore,beat=60/score.bpm/2,bar=Math.floor(step/8)%16,i=step%8,chord=score.chords[bar%4],events=[];
 const melody=score.melody[bar%8][i];
 if(melody!==null)events.push(note(0,midi(melody),beat*1.6,.14,'sine'));
 // A soft arpeggio, warm bass, and occasional answering note fill out the tune.
 if(i%2===0)events.push(note(0,midi(chord[(i/2)%3]),beat*2.8,.075,'triangle'));
 if(i===0||i===4)events.push(note(0,midi(chord[0]-12),beat*3.5,.12,'sine'));
 if(bar>=8&&i===7&&bar%2===0)events.push(note(0,midi(chord[2]+12),beat*1.2,.055,'sine'));
 return {seconds:beat,events};
}
export function reactionNotes(id,event='pet',age='adult'){
 const voice=VOICES[id]||VOICES.sprig,events=[];
 if(age==='egg'&&event!=='hatch')return [note(0,210,.09,.14,'triangle',155),note(.17,300,.1,.12,'sine',210)];
 const pitch=voice.pitch*({baby:1.25,teen:1.1,radiant:.95}[age]||1);
 let offset=0;
 if(event==='feed'){
  for(let i=0;i<3;i++)events.push(note(i*.13,130+i*18,.08,.18,'triangle',65));offset=.44;
 }else if(event==='hatch'||event==='evolve'){
  const tune=event==='hatch'?[72,76,79,84]:[67,72,76,79,84,88];
  tune.forEach((n,i)=>events.push(note(i*.13,midi(n),.45,.17,'sine')));offset=tune.length*.13;
 }
 const speed=event==='play'?.78:event==='feed'?1.2:1;
 voice.notes.forEach((ratio,i)=>{
  const freq=pitch*ratio*(event==='play'?1.12:1),duration=voice.length*speed;
  events.push(note(offset+i*(duration+.055),voice.bubble?freq*.55:freq,duration,.22,voice.shape,voice.bubble?freq*1.7:freq*(voice.growl?.68:.91)));
  if(voice.growl)events.push(note(offset+i*(duration+.055),freq*1.5,duration,.045,'triangle',freq));
 });
 return events;
}
export function musicLevel(settings,{practice=false,speaking=false,hidden=false}={}){
 if(!settings.music||speaking||hidden)return 0;
 return .3*(settings.musicVolume??.55)*(practice?.14:1);
}
export function createAudioEngine({createContext=()=>new (globalThis.AudioContext||globalThis.webkitAudioContext)(),schedule=setInterval,unschedule=clearInterval}={}){
 let ctx,musicBus,effectsBus,timer=null,unlocked=false,hidden=false,speaking=false,practice=false,theme='explore',nextTime=0,step=0,lastReaction=-Infinity;
 let settings={music:true,sound:true,musicVolume:.55,effectsVolume:.7};
 const voices=new Set();
 function fade(param,value,seconds=.35){
  if(param.cancelAndHoldAtTime)param.cancelAndHoldAtTime(ctx.currentTime);
  else{param.cancelScheduledValues(ctx.currentTime);param.setValueAtTime(param.value,ctx.currentTime)}
  param.linearRampToValueAtTime(value,ctx.currentTime+seconds);
 }
 function stopVoices(bus){for(const v of [...voices])if(!bus||v.bus===bus){try{v.osc.stop()}catch{}v.osc.disconnect();v.gain.disconnect();voices.delete(v)}}
 function tone(event,when,bus){
  if(voices.size>=48)return;
  const osc=ctx.createOscillator(),gain=ctx.createGain(),start=Math.max(ctx.currentTime,when+event.at),duration=Math.max(.05,event.duration);
  osc.type=event.shape;osc.frequency.setValueAtTime(event.freq,start);osc.frequency.exponentialRampToValueAtTime(event.end,start+duration);
  gain.gain.setValueAtTime(0,start);gain.gain.linearRampToValueAtTime(event.level,start+.012);gain.gain.exponentialRampToValueAtTime(.0001,start+duration);
  osc.connect(gain);gain.connect(bus);const item={osc,gain,bus};voices.add(item);
  osc.onended=()=>{osc.disconnect();gain.disconnect();voices.delete(item)};osc.start(start);osc.stop(start+duration+.025);
 }
 function tick(){
  if(!ctx||ctx.state!=='running'||hidden)return;
  if(!settings.music||settings.musicVolume===0){nextTime=ctx.currentTime+.06;return}
  // Never play a backlog of missed notes after sleep or an interrupted audio session.
  if(nextTime<ctx.currentTime)nextTime=ctx.currentTime+.06;
  while(nextTime<ctx.currentTime+.2){const part=musicStep(theme,step++);part.events.forEach(e=>tone(e,nextTime,musicBus));nextTime+=part.seconds}
 }
 function sync(){
  if(!ctx)return;
  fade(musicBus.gain,musicLevel(settings,{practice,speaking,hidden}),.65);
  fade(effectsBus.gain,settings.sound&&!speaking&&!hidden?.65*settings.effectsVolume:0,.06);
  if(!settings.music)stopVoices(musicBus);
  if(!settings.sound||speaking)stopVoices(effectsBus);
 }
 function unlock(){
  if(hidden||(!settings.music&&!settings.sound))return;
  try{
   if(!ctx){ctx=createContext();musicBus=ctx.createGain();effectsBus=ctx.createGain();musicBus.gain.value=0;effectsBus.gain.value=0;musicBus.connect(ctx.destination);effectsBus.connect(ctx.destination);nextTime=ctx.currentTime+.06}
   unlocked=true;
   if(ctx.state!=='running')Promise.resolve(ctx.resume()).then(()=>{if(hidden){ctx.suspend().catch(()=>{});return}sync();tick()}).catch(()=>{});
   sync();if(timer===null&&settings.music&&settings.musicVolume>0)timer=schedule(tick,100);tick();
  }catch{/* Audio is optional on browsers without Web Audio support. */}
 }
 return {
  unlock,
  configure(next){settings={...settings,...next};sync();if((!settings.music||settings.musicVolume===0)&&timer!==null){unschedule(timer);timer=null}if(!settings.music&&!settings.sound&&ctx){ctx.suspend().catch(()=>{})}else if(unlocked)unlock()},
  scene(next,isPractice=false){const newTheme=next==='camp'?'camp':'explore';if(theme!==newTheme){theme=newTheme;step=0;if(ctx){stopVoices(musicBus);nextTime=ctx.currentTime+.06}}practice=isPractice;sync()},
  speaking(value){speaking=value;sync()},
  visibility(value){hidden=!value;if(hidden){if(timer!==null)unschedule(timer);timer=null;stopVoices();if(ctx)ctx.suspend().catch(()=>{})}else if(unlocked){nextTime=(ctx?.currentTime||0)+.06;unlock()}},
  effect(event='good',id='sprig',age='adult'){
   if(!settings.sound||hidden||speaking)return;unlock();if(!ctx||ctx.state!=='running')return;
   if(ctx.currentTime-lastReaction<.16)return;lastReaction=ctx.currentTime;
   stopVoices(effectsBus);
   const notes=event==='good'?[note(0,midi(76),.18,.16),note(.1,midi(79),.24,.13)]:event==='reward'?[72,76,79,84].map((n,i)=>note(i*.12,midi(n),.4,.16)):reactionNotes(id,event,age);
   notes.forEach(e=>tone(e,ctx.currentTime+.015,effectsBus));
  },
  dispose(){if(timer!==null)unschedule(timer);timer=null;stopVoices();if(ctx)ctx.close().catch(()=>{});ctx=null;unlocked=false}
 };
}
