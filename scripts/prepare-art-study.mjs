import {readFileSync,writeFileSync} from 'node:fs';
import {renderAdultMammal} from '../src/creature-art.js';
const source=readFileSync('docs/art/preview.html','utf8');
const svg=readFileSync('docs/art/hopple-proposal.svg','utf8').replace('<svg ','<svg class="proposal" ');
const html=source.replace('<div class="original" id="original"></div>',`<div class="original" id="original">${renderAdultMammal(0)}</div>`).replace(/<img class="proposal"[^>]+>/,svg).replace(/<script type="module">[\s\S]*?<\/script>/,'');
writeFileSync('public/art-review.html',html);
