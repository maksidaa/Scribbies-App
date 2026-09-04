import {cpSync,existsSync,mkdirSync,readFileSync,writeFileSync,renameSync,rmSync} from 'node:fs';
import {resolve,join} from 'node:path';
import {execFileSync} from 'node:child_process';
const root=process.cwd(),dest=resolve(process.argv[2]||'/tmp/scribbies-eas-release');
if (existsSync(dest)) throw new Error(`Release directory already exists: ${dest}. Choose a new directory.`);
for(const args of [['run','check'],['run','build']])execFileSync('npm',args,{stdio:'inherit'});
execFileSync('npx',['cap','sync','ios'],{stdio:'inherit'});
execFileSync('node',['scripts/prepare-ios.mjs'],{stdio:'inherit'});
cpSync(root,dest,{recursive:true,filter:src=>{
 const relative=src.slice(root.length+1),parts=relative.split('/'),name=parts.at(-1);
 return !['.git','node_modules','dist','.expo'].includes(parts[0])&&!/^\.env/.test(name)&&!/(?:\.p8|\.p12|\.mobileprovision|\.ipa|\.log)$/.test(name)&&name!=='credentials.json';
}});
renameSync(join(dest,'ios'),join(dest,'capacitor-ios'));
renameSync(join(dest,'capacitor-ios/App'),join(dest,'ios'));
cpSync(join(dest,'capacitor-ios/debug.xcconfig'),join(dest,'ios/debug.xcconfig'));
rmSync(join(dest,'capacitor-ios'),{recursive:true});
const pbx=join(dest,'ios/App.xcodeproj/project.pbxproj');
writeFileSync(pbx,readFileSync(pbx,'utf8').replaceAll('../debug.xcconfig','debug.xcconfig'));
const swift=join(dest,'ios/CapApp-SPM/Package.swift');
writeFileSync(swift,readFileSync(swift,'utf8').replaceAll('../../../node_modules','../../node_modules'));
mkdirSync(join(dest,'ios/App.xcodeproj/xcshareddata/xcschemes'),{recursive:true});
writeFileSync(join(dest,'ios/App.xcodeproj/xcshareddata/xcschemes/App.xcscheme'),`<?xml version="1.0" encoding="UTF-8"?>
<Scheme LastUpgradeVersion="2640" version="1.3">
 <BuildAction parallelizeBuildables="YES" buildImplicitDependencies="YES"><BuildActionEntries><BuildActionEntry buildForTesting="YES" buildForRunning="YES" buildForProfiling="YES" buildForArchiving="YES" buildForAnalyzing="YES"><BuildableReference BuildableIdentifier="primary" BlueprintIdentifier="504EC3031FED79650016851F" BuildableName="App.app" BlueprintName="App" ReferencedContainer="container:App.xcodeproj"/></BuildActionEntry></BuildActionEntries></BuildAction>
 <TestAction buildConfiguration="Debug"/>
 <LaunchAction buildConfiguration="Debug" selectedDebuggerIdentifier="Xcode.DebuggerFoundation.Debugger.LLDB" selectedLauncherIdentifier="Xcode.IDEFoundation.Launcher.LLDB" launchStyle="0"><BuildableProductRunnable runnableDebuggingMode="0"><BuildableReference BuildableIdentifier="primary" BlueprintIdentifier="504EC3031FED79650016851F" BuildableName="App.app" BlueprintName="App" ReferencedContainer="container:App.xcodeproj"/></BuildableProductRunnable></LaunchAction>
 <ProfileAction buildConfiguration="Release"/><AnalyzeAction buildConfiguration="Debug"/><ArchiveAction buildConfiguration="Release" revealArchiveInOrganizer="YES"/>
</Scheme>`);
execFileSync('git',['init','-b','codex/scribbies-release'],{cwd:dest,stdio:'inherit'});
console.log(`EAS release prepared: ${dest}`);
