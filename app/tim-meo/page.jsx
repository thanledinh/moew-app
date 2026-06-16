import { CatGallery } from '@/components/CatGallery';
import fs from 'fs';
import path from 'path';

export const revalidate = 3600; // Cache for 1 hour

export const metadata = {
  title: "Tìm Mèo | Trạm Cứu Hộ & Nhận Nuôi",
  description: "Danh sách các bé mèo đang cần tìm chủ yêu thương. Hãy xem qua ảnh và thông tin để đón các bé về nhà nhé!",
  openGraph: {
    title: "Tìm Mèo | Trạm Cứu Hộ & Nhận Nuôi",
    description: "Danh sách các bé mèo đang cần tìm chủ yêu thương. Hãy xem qua ảnh và thông tin để đón các bé về nhà nhé!",
    url: "https://moew-app.pages.dev/tim-meo/",
    siteName: "Moew App",
    images: [
      {
        url: "https://moew-app.pages.dev/images/og-image-v2.webp",
        width: 1200,
        height: 630,
        alt: "Tìm Mèo - Giải Cứu & Nhận Nuôi",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
};

async function getFolders() {
  try {
    const filePath = path.join(process.cwd(), 'data', 'cats.json');
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const data = JSON.parse(fileContent);
      return data;
    }
  } catch (error) {
    console.error('Error reading data file', error);
  }
  return [];
}

export default async function TimMeoPage() {
  const folders = await getFolders();

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 font-sans pt-24">
      <CatGallery folders={folders} />
    </main>
  );
}
