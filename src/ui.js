import {renderAdultMammal,renderAdultReptile,renderAdultAquatic,renderAdultBird,renderAdultPrehistoric,renderAdultMystical,renderEgg,renderBaby,renderTeen} from './creature-art.js';
import {speciesById,CHARMS} from './data.js';
import {icon} from './icons.js';
import {stage} from './game.js';
export const escape = value => String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export const art = (id,size=180,xp=0,charm='none') => {
 const s=speciesById(id)||speciesById('sprig');
 const renderer={mammal:renderAdultMammal,reptile:renderAdultReptile,aquatic:renderAdultAquatic,bird:renderAdultBird,prehistoric:renderAdultPrehistoric,mystical:renderAdultMystical}[s.art];
 const charmData=CHARMS.find(c=>c.id===charm);
 return `<div class="creature ${xp>=300?'radiant':xp>=120?'bright':''}" role="img" aria-label="${escape(s.name)}" style="--creature-size:${size}px;--creature-scale:${size/280}"><div class="creature-sprite">${renderer?renderer(s.variant):`<img src="./assets/luma.webp" alt="" class="luma-art">`}</div>${charmData&&charm!=='none'?`<span class="creature-charm" style="--charm:${charmData.color}">${icon(charmData.icon)}</span>`:''}</div>`;
};
export const button=(label,action,cls='primary',extra='')=>`<button class="btn ${cls}" data-action="${action}" ${extra}>${label}</button>`;
export const progress=(value,max=100,cls='',label='Progress')=>`<div class="progress ${cls}" role="progressbar" aria-label="${escape(label)}" aria-valuemin="0" aria-valuemax="${max}" aria-valuenow="${Math.min(max,Math.max(0,value))}"><span style="width:${Math.min(100,Math.max(0,value/max*100))}%"></span></div>`;

const categoryOf=id=>({mammal:'mammals',reptile:'reptiles',bird:'birds',aquatic:'aquatic',prehistoric:'prehistoric',mystical:'mystical',image:'mystical'}[speciesById(id)?.art]||'mammals');
export const eggArt=(id='sprig',size=180)=>`<div class="egg-art" role="img" aria-label="Unhatched Scribby egg" style="--egg-scale:${size/230};width:${size}px;height:${size}px"><div>${renderEgg(categoryOf(id))}</div></div>`;
export const buddyArt=(buddy,size=180)=>{
 if(!buddy||!buddy.hatched)return eggArt(buddy?.id,size);
 const phase=stage(buddy);
 if(phase==='baby')return `<div class="baby-art" role="img" aria-label="Baby ${escape(buddy.name)}" style="width:${size}px;height:${size}px;--baby-scale:${size/175}"><div>${renderBaby(categoryOf(buddy.id),buddy.id)}</div></div>`;
 if(phase==='teen')return `<div class="teen-art" role="img" aria-label="Young ${escape(buddy.name)}" style="width:${size}px;height:${size}px;--teen-scale:${size/240}"><div>${renderTeen(categoryOf(buddy.id),speciesById(buddy.id).variant)}</div></div>`;
 return art(buddy.id,size,buddy.growth,buddy.charm);
};
