import Link from "next/link";

export default function BeritaCard({ berita, variant = "row" }) {
  const isFeature = variant === "feature";
  const isCompact = variant === "compact";
  const imageFit = berita.dokumen ? "object-contain bg-white" : "object-cover";

  if (isCompact) {
    return (
      <article className="group grid grid-cols-[104px_1fr] gap-4 rounded-2xl bg-white p-3 shadow-[0_6px_20px_rgba(36,72,90,0.06)] transition-transform hover:-translate-y-0.5 sm:grid-cols-[128px_1fr]">
        <Link href={`/berita/${berita.id}`} className="block self-start">
          <img src={berita.gambar} alt={berita.gambarAlt} className={`aspect-[4/3] w-full rounded-xl ${imageFit}`} />
        </Link>
        <div className="py-1">
          <p className="mb-2 text-xs text-[var(--muted)]">{berita.tanggal}</p>
          <h3 className="text-lg font-bold leading-snug text-[var(--ink)] sm:text-xl">
            <Link href={`/berita/${berita.id}`} className="group-hover:text-[var(--deep-blue)]">{berita.judul}</Link>
          </h3>
          <Link href={`/berita/${berita.id}`} className="mt-3 inline-block text-sm font-bold text-[var(--deep-blue)] underline decoration-[var(--sky)] decoration-2 underline-offset-4">
            Baca berita
          </Link>
        </div>
      </article>
    );
  }

  return (
    <article className={isFeature ? "grid overflow-hidden rounded-[1.75rem] bg-[var(--ice)] md:grid-cols-[1.05fr_0.95fr]" : "grid gap-5 rounded-3xl bg-white p-4 shadow-[0_8px_28px_rgba(36,72,90,0.07)] sm:grid-cols-[minmax(180px,0.72fr)_1.28fr] sm:items-center"}>
      <Link href={`/berita/${berita.id}`} className={isFeature ? "block min-h-full" : "block overflow-hidden"}>
        <img
          src={berita.gambar}
          alt={berita.gambarAlt}
          className={isFeature ? `h-full min-h-[240px] w-full ${imageFit}` : `aspect-[16/10] w-full rounded-2xl ${imageFit}`}
        />
      </Link>
      <div className={isFeature ? "px-5 py-6 sm:px-7 sm:py-8" : ""}>
        <p className="mb-2 text-sm text-[var(--muted)]">{berita.tanggal}</p>
        <h3 className={isFeature ? "text-2xl font-extrabold leading-tight text-[var(--deep-blue)] sm:text-3xl" : "text-xl font-bold leading-tight text-[var(--deep-blue)] sm:text-2xl"}>
          <Link href={`/berita/${berita.id}`}>{berita.judul}</Link>
        </h3>
        <p className="mt-3 leading-7 text-[var(--muted)]">{berita.ringkasan}</p>
        <Link
          href={`/berita/${berita.id}`}
          className="mt-4 inline-block rounded-full bg-[var(--deep-blue)] px-4 py-2 text-sm font-bold text-white hover:bg-[#35647b]"
        >
          Baca selengkapnya
        </Link>
      </div>
    </article>
  );
}