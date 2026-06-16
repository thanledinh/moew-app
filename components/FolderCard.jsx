'use client';

export function FolderCard({ folder, onClick }) {
  const images = folder.images || [];
  // Use the first image/video as thumbnail
  const firstMedia = images[0];

  const sbd = folder.sbd || 'Chưa rõ';
  const code = folder.code || '';
  const traits = folder.traits || 'Chưa cập nhật đặc điểm';
  const nameText = `${code ? `[${code}] ` : ''}${traits}`;

  return (
    <div
      onClick={() => onClick(folder)}
      className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:-translate-y-1 hover:shadow-xl dark:bg-zinc-800 flex flex-col h-full"
    >
      <div className="aspect-[4/3] w-full bg-zinc-200 dark:bg-zinc-700 relative overflow-hidden shrink-0">
        {firstMedia ? (
          firstMedia.mimeType.includes('video') ? (
            <>
              <video
                src={`${process.env.NEXT_PUBLIC_CDN_URL || ''}${firstMedia.url}`}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                muted
                loop
                playsInline
                preload="metadata"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition">
                <svg className="w-12 h-12 text-white opacity-80" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
                </svg>
              </div>
            </>
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={`${process.env.NEXT_PUBLIC_CDN_URL || ''}${firstMedia.url}`}
              alt={folder.rawName || 'Cat'}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          )
        ) : (
          <div className="flex h-full w-full items-center justify-center text-zinc-500">
            Không có dữ liệu
          </div>
        )}
      </div>
      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 line-clamp-2">
            {nameText}
          </h3>
          <span className="inline-flex shrink-0 items-center rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-medium text-orange-800 dark:bg-orange-900/50 dark:text-orange-300">
            SBD: {sbd}
          </span>
        </div>
        
        <div className="mt-auto pt-3">
          <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
            {images.length} file đính kèm
          </p>
        </div>
      </div>
    </div>
  );
}
