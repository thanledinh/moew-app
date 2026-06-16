require('dotenv').config({ path: '.env.local' });
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const fs = require('fs');
const path = require('path');
const mime = require('mime-types');

const {
  R2_ACCOUNT_ID,
  R2_ACCESS_KEY_ID,
  R2_SECRET_ACCESS_KEY,
  R2_BUCKET_NAME
} = process.env;

if (!R2_ACCOUNT_ID || !R2_ACCESS_KEY_ID || !R2_SECRET_ACCESS_KEY || !R2_BUCKET_NAME) {
  console.error("Missing R2 credentials in .env.local");
  process.exit(1);
}

const s3 = new S3Client({
  region: 'auto',
  endpoint: `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: R2_ACCESS_KEY_ID,
    secretAccessKey: R2_SECRET_ACCESS_KEY,
  },
});

const MEDIA_DIR = path.join(__dirname, '..', 'public', 'media');

// Hàm lấy tất cả file trong thư mục
function getAllFiles(dirPath, arrayOfFiles = []) {
  if (!fs.existsSync(dirPath)) return arrayOfFiles;
  
  const files = fs.readdirSync(dirPath);
  
  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else {
      arrayOfFiles.push(fullPath);
    }
  });
  
  return arrayOfFiles;
}

// Upload từng file
async function uploadFile(filePath) {
  const fileContent = fs.readFileSync(filePath);
  const relativePath = path.relative(path.join(__dirname, '..', 'public'), filePath);
  // Định dạng đường dẫn cho S3 (dùng gạch chéo xuôi)
  const key = relativePath.split(path.sep).join('/');
  
  const mimeType = mime.lookup(filePath) || 'application/octet-stream';
  
  const command = new PutObjectCommand({
    Bucket: R2_BUCKET_NAME,
    Key: key, // ví dụ: media/FOLDER_NAME/image.jpg
    Body: fileContent,
    ContentType: mimeType,
    CacheControl: 'public, max-age=31536000, immutable'
  });

  await s3.send(command);
  return key;
}

// Chạy đa luồng
async function run() {
  console.log("Đang quét các file trong thư mục public/media...");
  const allFiles = getAllFiles(MEDIA_DIR);
  console.log(`Tìm thấy tổng cộng ${allFiles.length} files.`);

  const CONCURRENT_LIMIT = 30; // 30 file một lúc
  let completed = 0;
  let failed = 0;

  for (let i = 0; i < allFiles.length; i += CONCURRENT_LIMIT) {
    const chunk = allFiles.slice(i, i + CONCURRENT_LIMIT);
    
    await Promise.all(chunk.map(async (filePath) => {
      try {
        const key = await uploadFile(filePath);
        completed++;
        console.log(`[${completed}/${allFiles.length}] Đã upload: ${key}`);
      } catch (err) {
        failed++;
        console.error(`Lỗi khi upload ${filePath}:`, err.message);
      }
    }));
  }

  console.log(`\nHoàn tất quá trình Upload lên R2!`);
  console.log(`- Thành công: ${completed}`);
  console.log(`- Thất bại: ${failed}`);
}

run().catch(console.error);
