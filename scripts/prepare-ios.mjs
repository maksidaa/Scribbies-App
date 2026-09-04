import {createRequire} from 'node:module';
import {readFileSync,writeFileSync,copyFileSync} from 'node:fs';
import sharp from 'sharp';
const require=createRequire(import.meta.url),xcode=require('xcode');
const path='ios/App/App.xcodeproj/project.pbxproj';
const project=xcode.project(path);project.parseSync();
const appGroup=project.findPBXGroupKey({path:'App'});
if(!project.hasFile('PrivacyInfo.xcprivacy')){
 const file=project.addFile('PrivacyInfo.xcprivacy',appGroup);
 file.uuid=project.generateUuid();file.target=project.getFirstTarget().uuid;
 project.addToPbxBuildFileSection(file);project.addToPbxResourcesBuildPhase(file);
}
for (const entry of Object.values(project.pbxFileReferenceSection())) {
 if (typeof entry==='object' && entry.path?.includes('PrivacyInfo.xcprivacy')) {
  entry.lastKnownFileType='text.xml';
  for (const key of Object.keys(entry)) if(entry[key]===undefined||entry[key]==='undefined')delete entry[key];
 }
}
project.updateBuildProperty('MARKETING_VERSION','2.0.0');
project.updateBuildProperty('CURRENT_PROJECT_VERSION','1');
project.updateBuildProperty('DEVELOPMENT_TEAM','3Y49S926NK');
project.updateBuildProperty('CODE_SIGN_STYLE','Automatic');
writeFileSync(path,project.writeSync());
copyFileSync('public/assets/icon-1024.png','ios/App/App/Assets.xcassets/AppIcon.appiconset/AppIcon-512@2x.png');
const logo=await sharp(readFileSync('public/icon.svg')).resize(340,340).png().toBuffer();
for(const file of ['splash-2732x2732.png','splash-2732x2732-1.png','splash-2732x2732-2.png'])await sharp({create:{width:2732,height:2732,channels:3,background:'#f8f7fc'}}).composite([{input:logo,gravity:'center'}]).png().toFile('ios/App/App/Assets.xcassets/Splash.imageset/'+file);
