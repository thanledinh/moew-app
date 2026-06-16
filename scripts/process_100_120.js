const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const dataFile = path.join(__dirname, '../data/cats.json');
const catsData = JSON.parse(fs.readFileSync(dataFile, 'utf-8'));

const subset = catsData.slice(100, 120);

subset.forEach(cat => {
  console.log(`Processing ${cat.rawName}...`);
  const originalFolder = path.join('c:/code/giaicumeo/public/media', cat.rawName);
  
  if (!fs.existsSync(originalFolder)) {
    console.log(`Folder not found: ${originalFolder}`);
    return;
  }

  // 1. Convert any .mov to .mp4 first in original folder
  let originalFiles = fs.readdirSync(originalFolder).filter(f => f !== 'data.json' && f !== '.DS_Store');
  originalFiles.forEach(file => {
    if (file.toLowerCase().endsWith('.mov')) {
      const f = path.join(originalFolder, file);
      const newF = f.replace(/\.mov$/i, '.mp4');
      console.log(`Converting ${file} to mp4...`);
      const cmd2 = `ffmpeg -y -i "${f}" -vcodec h264 -acodec aac "${newF}"`;
      try {
        execSync(cmd2);
        fs.unlinkSync(f);
      } catch (err) {
        console.error(`Failed to convert ${file}`);
      }
    }
  });

  // Read files again after conversion
  originalFiles = fs.readdirSync(originalFolder).filter(f => f !== 'data.json' && f !== '.DS_Store');
  
  // To avoid duplicate videos, we will only keep one video file (the largest one)
  const videoFiles = originalFiles.filter(f => f.toLowerCase().endsWith('.mp4'));
  let selectedVideo = null;
  if (videoFiles.length > 0) {
    if (videoFiles.length === 1) {
      selectedVideo = videoFiles[0];
    } else {
      // Find the largest video file to keep
      let maxSize = -1;
      videoFiles.forEach(v => {
        const stats = fs.statSync(path.join(originalFolder, v));
        if (stats.size > maxSize) {
          maxSize = stats.size;
          selectedVideo = v;
        }
      });
      console.log(`Multiple videos found in ${cat.rawName}. Selected largest: ${selectedVideo}`);
    }
  }

  const imageFiles = originalFiles.filter(f => ['.jpg', '.jpeg', '.png'].includes(path.extname(f).toLowerCase()));
  
  const filesToKeep = [];
  if (selectedVideo) filesToKeep.push(selectedVideo);
  filesToKeep.push(...imageFiles);

  const targetPath = path.join(__dirname, '../data/clean_cats', cat.rawName);
  if (!fs.existsSync(targetPath)) {
    fs.mkdirSync(targetPath, { recursive: true });
  }

  const mediaList = [];
  let index = 1;

  for (const file of filesToKeep) {
    const ext = path.extname(file).toLowerCase();
    const newName = `${cat.rawName} - ${index}${ext}`;
    const targetFile = path.join(targetPath, newName);
    
    // Copy file
    fs.copyFileSync(path.join(originalFolder, file), targetFile);
    
    let mimeType = 'image/jpeg';
    if (ext === '.mp4') mimeType = 'video/mp4';
    else if (ext === '.png') mimeType = 'image/png';

    mediaList.push({
      id: `${Date.now()}_${index}`,
      name: newName,
      mimeType,
      url: `/media/${encodeURIComponent(cat.rawName)}/${encodeURIComponent(newName)}`
    });
    index++;
  }

  // Save data.json inside clean_cats folder
  const folderData = {
    ...cat,
    images: mediaList
  };
  fs.writeFileSync(path.join(targetPath, 'data.json'), JSON.stringify(folderData, null, 2));

  // Update cats.json
  cat.images = mediaList;
});

fs.writeFileSync(dataFile, JSON.stringify(catsData, null, 2));
console.log('Done processing 100-119.');
