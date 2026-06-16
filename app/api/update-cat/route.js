import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { id, traits } = await request.json();

    if (!id) {
      return NextResponse.json({ error: 'Missing ID' }, { status: 400 });
    }

    const dataPath = path.join(process.cwd(), 'data', 'cats.json');
    if (!fs.existsSync(dataPath)) {
      return NextResponse.json({ error: 'Database not found' }, { status: 404 });
    }

    const rawData = fs.readFileSync(dataPath, 'utf-8');
    let cats = JSON.parse(rawData);

    let updated = false;
    cats = cats.map(cat => {
      if (cat.id === id) {
        updated = true;
        return { ...cat, traits };
      }
      return cat;
    });

    if (!updated) {
      return NextResponse.json({ error: 'Cat not found' }, { status: 404 });
    }

    fs.writeFileSync(dataPath, JSON.stringify(cats, null, 2));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Lỗi khi update JSON:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
