import {cpSync,existsSync,rmSync} from 'node:fs';
if (!existsSync('ios/App.xcodeproj/project.pbxproj')) throw new Error('Run npm run release:stage before EAS Build.');
rmSync('ios/App/public',{recursive:true,force:true});
cpSync('dist','ios/App/public',{recursive:true});
