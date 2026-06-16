const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const cats = JSON.parse(fs.readFileSync('c:/code/moew-app/data/cats.json'));
const subset = cats.slice(60, 80);

subset.forEach((c) => {
  if (c.images.length > 0) {
    const folderUrl = decodeURIComponent(path.dirname(c.images[0].url));
    const fullFolder = path.join('c:/code/giaicumeo/public', folderUrl);
    
    const codeArg = c.code || '';
    let traits = c.traits || '';
    
    // Add missing traits based on manual video review
    if (!traits) {
      if(c.sbd == 317) traits = 'MƯỚP';
      else if(c.sbd == 312) traits = 'MƯỚP';
      else if(c.sbd == 309) traits = 'ĐEN, MƯỚP';
      else if(c.sbd == 302) traits = 'MƯỚP';
      else if(c.sbd == 301) traits = 'VÀNG';
      else if(c.sbd == 264) traits = 'ĐEN TRẮNG, TAM THỂ';
      else if(c.sbd == 243) traits = 'VÀNG';
      else if(c.sbd == 33) traits = 'TAM THỂ'; // Found from filename
      else if(c.sbd == 119) traits = 'TAM THỂ, MƯỚP';
      else if(c.sbd == '07') traits = 'CAM TRẮNG, VÀNG';
      else if(c.sbd == 96) traits = 'CAM TRẮNG';
    }
    
    const cmd = `node scripts/process-cat.js "${fullFolder}" "${c.sbd}" "${codeArg}" "${traits}" "${c.rawName}"`;
    try {
      execSync(cmd, { stdio: 'ignore' });
      console.log(`Successfully processed: ${c.sbd} - ${traits}`);
    } catch(e) {
      console.error('Error for', c.sbd);
    }
  }
});
console.log("Batch 3 (cats 61-80) processed cleanly!");
