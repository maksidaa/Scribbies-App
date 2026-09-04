import {Capacitor} from '@capacitor/core';
import {Preferences} from '@capacitor/preferences';
import {Filesystem,Directory,Encoding} from '@capacitor/filesystem';
import {Share} from '@capacitor/share';
import {Haptics,ImpactStyle} from '@capacitor/haptics';
export const isNative=()=>Capacitor.isNativePlatform();
export async function nativeStorage(keys,onError){
 const values=new Map();
 for(const key of keys){const {value}=await Preferences.get({key});if(value!==null)values.set(key,value)}
 let writes=Promise.resolve();
 return {getItem:key=>values.get(key)??null,
  setItem:(key,value)=>{values.set(key,value);writes=writes.then(()=>Preferences.set({key,value})).catch(onError)},
  removeItem:key=>{values.delete(key);writes=writes.then(()=>Preferences.remove({key})).catch(onError)},
  flush:()=>writes
 };
}
export async function exportNativeBackup(text,name){
 const {uri}=await Filesystem.writeFile({path:name,data:text,directory:Directory.Cache,encoding:Encoding.UTF8});
 await Share.share({title:'Scribbies adventure backup',files:[uri],dialogTitle:'Save your Scribbies backup'});
}
export function haptic(){if(isNative())Haptics.impact({style:ImpactStyle.Light}).catch(()=>{})}
