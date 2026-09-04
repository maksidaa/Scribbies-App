import {readdirSync,readFileSync,writeFileSync,statSync} from 'node:fs';
import {createHash} from 'node:crypto';
function walk(dir){return readdirSync(dir).flatMap(name=>{const path=`${dir}/${name}`;return statSync(path).isDirectory()?walk(path):[path]})}
const files=walk('dist').filter(p=>!p.endsWith('/sw.js')).map(p=>p.replace('dist/','./'));
const revision=createHash('sha256').update(files.map(p=>readFileSync('dist/'+p.slice(2))).join('')).digest('hex').slice(0,12);
writeFileSync('dist/sw.js',`const CACHE='scribbies-${revision}';
const ASSETS=${JSON.stringify(files)};
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('scribbies-')&&key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{
 const url=new URL(event.request.url);
 if(event.request.method!=='GET'||url.origin!==self.location.origin)return;
 if(event.request.mode==='navigate'){
  event.respondWith(fetch(event.request).catch(()=>caches.match(new URL('./index.html',self.location.href))));return;
 }
 // Only cache build assets. Auth pages, APIs and user data never enter the cache.
 if(ASSETS.some(path=>new URL(path,self.location.href).href===url.href))event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request)));
});`);
console.log(`Offline cache: ${files.length} local assets, revision ${revision}`);
