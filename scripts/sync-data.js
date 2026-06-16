require('dotenv').config({ path: '.env.local' });
const fs = require('fs');
const path = require('path');

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_DRIVE_API_KEY;
const ROOT_FOLDER_ID = '13GQkTi-L3k7_vUPKJn6bG6858_2WXOYD';
const MEDIA_DIR = path.join(__dirname, '..', 'public', 'media');
const DATA_FILE = path.join(__dirname, '..', 'src', 'data', 'cats.json');

async function fetchAPI(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`API Error: ${await res.text()}`);
  return res.json();
}

// Hàm format tên thư mục/file an toàn
function safeName(name) {
  return name.replace(/[<>:"\/\\|?*]+/g, '_').trim();
}

async function run() {
  if (!fs.existsSync(MEDIA_DIR)) fs.mkdirSync(MEDIA_DIR, { recursive: true });
  const dataDir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

  console.log('Bắt đầu quét thư mục gốc...');
  let folders = [];
  let pageToken = '';
  do {
    const url = `https://www.googleapis.com/drive/v3/files?q='${ROOT_FOLDER_ID}'+in+parents+and+mimeType='application/vnd.google-apps.folder'&key=${API_KEY}&fields=nextPageToken,files(id,name)&pageSize=1000${pageToken ? `&pageToken=${pageToken}` : ''}`;
    const data = await fetchAPI(url);
    folders = folders.concat(data.files || []);
    pageToken = data.nextPageToken;
  } while (pageToken);

  console.log(`Tìm thấy ${folders.length} bé mèo.`);

  const catsData = [];

  // Để an toàn, tải tuần tự để tránh sập mạng, bạn có thể chạy lại lệnh nếu đứt mạng
  for (const folder of folders) {
    const sFolderName = safeName(folder.name);
    const folderPath = path.join(MEDIA_DIR, sFolderName);
    if (!fs.existsSync(folderPath)) fs.mkdirSync(folderPath);

    const url = `https://www.googleapis.com/drive/v3/files?q='${folder.id}'+in+parents+and+(mimeType+contains+'image/'+or+mimeType+contains+'video/')&key=${API_KEY}&fields=files(id,name,mimeType)&pageSize=1000`;
    let files = [];
    try {
      const data = await fetchAPI(url);
      files = data.files || [];
    } catch (err) {
      console.error(`Lỗi khi lấy file của ${folder.name}:`, err);
    }

    const catInfo = {
      id: folder.id,
      name: folder.name,
      images: []
    };

    console.log(`- [${folder.name}]: ${files.length} files`);

    // Tải các file đồng thời (Concurrent) trong cùng 1 thư mục
    for (const file of files) {
      const sFileName = safeName(file.name);
      const filePath = path.join(folderPath, sFileName);
      
      const mediaItem = {
        id: file.id,
        name: file.name,
        mimeType: file.mimeType,
        url: `/media/${encodeURIComponent(sFolderName)}/${encodeURIComponent(sFileName)}`
      };
      
      catInfo.images.push(mediaItem);

      if (!fs.existsSync(filePath)) {
        try {
          console.log(`  + Đang tải ${file.name}...`);
          const fileUrl = `https://www.googleapis.com/drive/v3/files/${file.id}?alt=media&key=${API_KEY}`;
          const res = await fetch(fileUrl);
          
          if (!res.ok) {
            throw new Error(`Lỗi HTTP ${res.status} - Bị Google chặn do quá tải.`);
          }
          if (res.headers.get('content-type')?.includes('text/html')) {
            throw new Error(`Google trả về trang web HTML thay vì file. Bạn đang bị chặn IP do tải quá nhanh!`);
          }

          const buffer = await res.arrayBuffer();
          fs.writeFileSync(filePath, Buffer.from(buffer));
          
          // Nghỉ 500ms để tránh bị Google nhận diện là bot do mạng 1Gbps tải quá nhanh
          await new Promise(resolve => setTimeout(resolve, 500));
        } catch (err) {
          console.error(`  ! Lỗi tải ${file.name}: ${err.message}`);
          // Xóa file nếu nó đã bị tạo lỗi
          if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
          // Tạm dừng script luôn để tránh bị ban nặng hơn
          process.exit(1);
        }
      }
    }

    catsData.push(catInfo);
    // Lưu lại liên tục phòng khi đứt gánh giữa đường
    fs.writeFileSync(DATA_FILE, JSON.stringify(catsData, null, 2));
  }

  console.log('Hoàn tất đồng bộ toàn bộ file và tạo cats.json thành công!');
}

run().catch(console.error);
