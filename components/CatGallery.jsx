'use client';

import { useState } from 'react';
import { FolderCard } from './FolderCard';

export function CatGallery({ folders }) {
  const [search, setSearch] = useState('');
  const [selectedFolder, setSelectedFolder] = useState(null);

  const filteredFolders = folders.filter((f) =>
    (f.rawName || f.name || '').toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-orange-600 sm:text-5xl">
          Tìm Mèo Thất Lạc
        </h1>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300">
          Danh sách các bé mèo cứu hộ từ Thảo Cầm Viên. Vui lòng xem kỹ để tìm bé nhà mình nhé!
        </p>
        <div className="mx-auto mt-6 max-w-md">
          <input
            type="text"
            placeholder="Tìm theo số báo danh hoặc đặc điểm..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-full border border-zinc-300 px-6 py-3 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {filteredFolders.map((folder) => (
          <FolderCard
            key={folder.id}
            folder={folder}
            onClick={(f) => setSelectedFolder(f)}
          />
        ))}
        {filteredFolders.length === 0 && (
          <div className="col-span-full py-12 text-center text-zinc-500">
            Không tìm thấy bé mèo nào phù hợp.
          </div>
        )}
      </div>

      {selectedFolder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 sm:p-6 backdrop-blur-sm">
          <div className="relative flex h-full w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-white dark:bg-zinc-900 shadow-2xl">
            <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 px-6 py-4">
              <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                {selectedFolder.rawName || selectedFolder.name}
              </h2>
              <button
                onClick={() => setSelectedFolder(null)}
                className="rounded-full bg-zinc-100 p-2 text-zinc-500 hover:bg-zinc-200 hover:text-zinc-700 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:hover:text-zinc-300 transition"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {selectedFolder.images.map((img) => (
                  <div key={img.id} className="group relative aspect-square overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800">
                    {img.mimeType.includes('video') ? (
                      <video
                        src={`${process.env.NEXT_PUBLIC_CDN_URL || 'https://pub-c19a950af4f74b0480e28ce7edf7022c.r2.dev'}${img.url}`}
                        controls
                        className="h-full w-full object-contain"
                        preload="metadata"
                      />
                    ) : (
                      <a href={`${process.env.NEXT_PUBLIC_CDN_URL || 'https://pub-c19a950af4f74b0480e28ce7edf7022c.r2.dev'}${img.url}`} target="_blank" rel="noopener noreferrer">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={`${process.env.NEXT_PUBLIC_CDN_URL || 'https://pub-c19a950af4f74b0480e28ce7edf7022c.r2.dev'}${img.url}`}
                          alt={img.name}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                      </a>
                    )}
                  </div>
                ))}
                {selectedFolder.images.length === 0 && (
                  <div className="col-span-full py-12 text-center text-zinc-500">
                    Không có hình ảnh nào trong thư mục này.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
