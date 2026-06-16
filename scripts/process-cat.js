const fs = require('fs');
const path = require('path');

const [,, originalFolder, sbd, code, traits, oldName] = process.argv;

if (!originalFolder || !sbd || !traits) {
  console.error("Usage: node process-cat.js <originalFolder> <sbd> <code> <traits> <oldName>");
  process.exit(1);
}

const cleanCatsDir = path.join('c:/code/moew-app/data/clean_cats');
if (!fs.existsSync(cleanCatsDir)) {
  fs.mkdirSync(cleanCatsDir, { recursive: true });
}

const folderName = code && code.trim() !== '' ? `${sbd} - ${code} - ${traits}` : `${sbd} - ${traits}`;
const targetDir = path.join(cleanCatsDir, folderName);

// Clear the directory if it exists to avoid duplicates
if (fs.existsSync(targetDir)) {
  fs.rmSync(targetDir, { recursive: true, force: true });
}
fs.mkdirSync(targetDir, { recursive: true });

// Copy and rename all files
const files = fs.readdirSync(originalFolder).filter(f => f !== 'data.json' && f !== '.DS_Store');
const mediaFiles = [];
let counter = 1;

files.forEach((file) => {
  const ext = path.extname(file);
  const newFileName = `${folderName} - ${counter}${ext}`;
  const targetFile = path.join(targetDir, newFileName);
  
  fs.copyFileSync(path.join(originalFolder, file), targetFile);
  mediaFiles.push(newFileName);
  counter++;
});

// Generate data.json
const data = {
  sbd: sbd,
  code: code || '',
  traits: traits,
  originalName: oldName || '',
  status: 'Đang tìm chủ',
  media: mediaFiles
};

fs.writeFileSync(path.join(targetDir, 'data.json'), JSON.stringify(data, null, 2));
console.log(`Processed: ${folderName} with ${mediaFiles.length} files (renamed successfully)`);
