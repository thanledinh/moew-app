const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../data/cats.json');

function parseCatName(rawName) {
  let sbd = '';
  let code = '';
  let traits = '';
  let status = 'Đang tìm chủ';

  let name = rawName.toUpperCase().trim();

  // Bắt trường hợp "đã nhận"
  if (name.includes('ĐÃ NHẬN')) {
    status = 'Đã nhận';
    name = name.replace('ĐÃ NHẬN', '').replace('-', '').trim();
  }

  // Regex tìm Số báo danh (có thể là số, hoặc số phẩy số: 404, 405, 406)
  const sbdMatch = name.match(/^([\d\s,]+)/);
  if (sbdMatch) {
    sbd = sbdMatch[1].trim();
    // Bỏ phần sbd khỏi name
    name = name.substring(sbdMatch[0].length).replace(/^[-_ ]+/, '').trim();
  }

  // Regex tìm Mã chuồng (chữ in hoa + số, vd: N4, E9, D2, P16, G2)
  // Đôi khi mã chuồng chỉ là số 2 chữ số (vd: 02, 06)
  const codeMatch = name.match(/^([A-Z]\d{1,2}|\d{2})\b/);
  if (codeMatch) {
    code = codeMatch[1].trim();
    name = name.substring(codeMatch[0].length).replace(/^[-_ ]+/, '').trim();
  }

  // Phần còn lại chính là Đặc điểm
  traits = name;

  // Xóa trailing hyphens nếu có
  traits = traits.replace(/[-_]+$/, '').trim();

  return { rawName, sbd, code, traits, status };
}

function cleanData() {
  if (!fs.existsSync(dataPath)) {
    console.error('Không tìm thấy cats.json!');
    return;
  }

  const rawData = fs.readFileSync(dataPath, 'utf-8');
  let cats = JSON.parse(rawData);

  let updatedCount = 0;

  cats = cats.map(cat => {
    // Nếu đã parse rồi thì bỏ qua
    if (cat.rawName) return cat;

    const parsed = parseCatName(cat.name);
    
    // Gộp data mới vào
    const updatedCat = {
      ...cat,
      rawName: parsed.rawName,
      sbd: parsed.sbd,
      code: parsed.code,
      traits: parsed.traits,
      status: parsed.status
    };
    
    // Xóa field name cũ đi cho gọn
    delete updatedCat.name;
    
    updatedCount++;
    return updatedCat;
  });

  fs.writeFileSync(dataPath, JSON.stringify(cats, null, 2));
  console.log(`Đã làm sạch và cập nhật ${updatedCount} con mèo!`);
}

cleanData();
