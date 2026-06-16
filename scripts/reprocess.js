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
    
    // Add missing traits based on manual video review for 60-80
    if (!traits) {
      if(c.sbd == 317) traits = 'MƯỚP TRẮNG';
      else if(c.sbd == 312) traits = 'MƯỚP TRẮNG, MƯỚP';
      else if(c.sbd == 309) traits = 'MƯỚP TRẮNG';
      else if(c.sbd == 302) traits = 'LOANG TRẮNG, VÀNG';
      else if(c.sbd == 301) traits = 'CAM';
      else if(c.sbd == 264) traits = 'ĐEN TRẮNG, TAM THỂ';
      else if(c.sbd == 243) traits = 'CAM';
      else if(c.sbd == 33) traits = 'TAM THỂ, MƯỚP';
      else if(c.sbd == 119) traits = 'MƯỚP';
      else if(c.sbd == '07') traits = 'TAM THỂ';
      else if(c.sbd == 96) traits = 'CAM TRẮNG';
      else traits = 'CHƯA RÕ'; // fallback
    }
    
    let sbd = c.sbd || '';
    if (!sbd && c.rawName) {
      sbd = c.rawName.split(' ')[0] || 'CHƯA RÕ';
    }
    if (!sbd) sbd = 'CHƯA RÕ';
    
    const cmd = `node scripts/process-cat.js "${fullFolder}" "${sbd}" "${codeArg}" "${traits}" "${c.rawName || ''}"`;
    console.log('Running:', cmd);
    try {
      execSync(cmd, { stdio: 'inherit' });
    } catch(e) {
      console.error('Error for', sbd, e.message);
    }
  }
});
