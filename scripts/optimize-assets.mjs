import sharp from 'sharp';
import {readFileSync,writeFileSync} from 'node:fs';
for(const name of ['meadow-map','camp-glade','luma'])await sharp(`art-source/${name}.png`).webp({quality:86,alphaQuality:100}).toFile(`public/assets/${name}.webp`);
for(const size of [192,512,1024])await sharp(readFileSync('public/icon.svg')).resize(size,size).flatten({background:'#7956ac'}).png().toFile(`public/assets/icon-${size}.png`);
writeFileSync('public/manifest.webmanifest',JSON.stringify({id:'./',name:'Scribbies',short_name:'Scribbies',description:'Practice scriptures. Hatch and raise your Scribbies.',start_url:'./',scope:'./',display:'standalone',background_color:'#f8f7fc',theme_color:'#f8f7fc',icons:[{src:'./assets/icon-192.png',sizes:'192x192',type:'image/png',purpose:'any'},{src:'./assets/icon-512.png',sizes:'512x512',type:'image/png',purpose:'any'}]},null,2));
