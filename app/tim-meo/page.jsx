import { CatGallery } from '@/components/CatGallery';
import fs from 'fs';
import path from 'path';

export const revalidate = 3600; // Cache for 1 hour

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
