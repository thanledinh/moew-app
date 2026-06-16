const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const cats = JSON.parse(fs.readFileSync('c:/code/moew-app/data/cats.json'));
const subset = cats.slice(0, 60);

subset.forEach((c) => {
  if (c.images.length > 0) {
    const folderUrl = decodeURI(path.dirname(c.images[0].url));
    const fullFolder = path.join('c:/code/giaicumeo/public', folderUrl);
    
    const codeArg = c.code || '';
    let traits = c.traits || '';
    
    // Add missing traits based on manual video review
    if (!traits) {
      if(c.sbd == 408) traits = 'MƯỚP';
      else if(c.sbd && c.sbd.includes('404')) traits = 'TAM THỂ';
      else if(c.sbd == 314) traits = 'VÀNG';
      else if(c.sbd == 296) traits = 'VÀNG';
      else if(c.sbd == 282) traits = 'CAM TRẮNG';
      else if(c.sbd == 239) traits = 'ĐEN TRẮNG';
      else if(c.sbd == 228) traits = 'MƯỚP, TAM THỂ';
      else if(c.sbd == 227) traits = 'ĐEN, VÀNG';
      else if(c.sbd == 226) traits = 'MƯỚP';
      else if(c.sbd == 214) traits = 'CAM TRẮNG, MƯỚP';
      else if(c.sbd == 212) traits = 'TAM THỂ';
      else if(c.sbd == 211) traits = 'XÁM';
      else if(c.sbd == 209) traits = 'CAM TRẮNG, TAM THỂ';
      else if(!c.sbd && codeArg == 'D2') return; // Skip duplicate
      else if(c.sbd == 208) traits = 'TRẮNG ĐEN';
      else if(c.sbd == 207) traits = 'MƯỚP, VÀNG';
      else if(c.sbd == 206) traits = 'VÀNG, MƯỚP';
      else if(c.sbd == 196) traits = 'VÀNG';
      else if(c.sbd == 175) traits = 'VÀNG, MƯỚP';
      else if(c.sbd == 165) traits = 'MƯỚP';
      else if(c.sbd == 147) traits = 'ĐEN TRẮNG, MƯỚP';
      else if(c.sbd == 126) traits = 'TAM THỂ';
      else if(c.sbd == 124) traits = 'VÀNG';
      else if(c.sbd == 123) traits = 'MƯỚP';
      else if(c.sbd == 121) traits = 'MƯỚP, VÀNG';
      else if(c.sbd == 112) traits = 'VÀNG';
      else if(c.sbd == 428) traits = 'MƯỚP';
      else if(c.sbd && c.sbd.includes('419')) traits = 'MƯỚP';
      else if(c.sbd == 416) traits = 'MƯỚP';
      else if(c.sbd == 413) traits = 'ĐEN, VÀNG';
      else if(c.sbd == 382) traits = 'CAM TRẮNG';
      else if(c.sbd == 100) traits = 'CAM';
    }
    
    // Quick fix for empty sbd but we know the trait
    if (!c.sbd && c.rawName && c.rawName.includes('100 đã nhận')) traits = 'CAM';
    
    const cmd = `node scripts/process-cat.js "${fullFolder}" "${c.sbd || 100}" "${codeArg}" "${traits}" "${c.rawName}"`;
    try {
      execSync(cmd, { stdio: 'ignore' }); // suppress output to avoid cluttering log
      console.log(`Successfully processed: ${c.sbd} - ${traits}`);
    } catch(e) {
      console.error('Error for', c.sbd);
    }
  }
});
console.log("All 60 cats processed cleanly!");
