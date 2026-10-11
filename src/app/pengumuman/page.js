import { pengumumanArsip } from "@/data/pengumuman";
import { sekolah } from "@/data/sekolah";

export const metadata = { title: `Pengumuman arsip - ${sekolah.nama}` };

export default function PengumumanPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 md:py-16">
      <header className="max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--deep-blue)]">Dokumen sekolah</p>
        <h1 className="mt-3 text-4xl font-extrabold text-[var(--deep-blue)] sm:text-5xl">Pengumuman arsip</h1>
        <p className="mt-5 text-lg leading-8 text-[var(--muted)]">Daftar ini merujuk pada pengumuman yang tampil di situs sekolah saat diperiksa. Dokumen lama diberi label arsip; cek sumber resmi untuk informasi terbaru.</p>
      </header>
      <div className="mt-9 grid gap-5 md:grid-cols-2">
        {pengumumanArsip.map((item) => (
          <article key={item.judul} className="overflow-hidden rounded-3xl border border-[var(--line)] bg-white">
            <img src={item.gambar} alt={item.gambarAlt} className="aspect-[16/9] w-full object-cover" />
            <div className="p-5 sm:p-6">
              {item.gambarUmum && <p className="text-xs text-[var(--muted)]">Situs sekolah memakai gambar umum untuk thumbnail pengumuman ini.</p>}
              <h2 className="mt-2 text-lg font-bold text-[var(--deep-blue)]">{item.judul}</h2>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{item.catatan}</p>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2"><a href={item.sumber} target="_blank" rel="noreferrer" className="text-sm font-bold text-[var(--deep-blue)] underline underline-offset-4">Lihat info sekolah ↗</a><a href={item.unduh} target="_blank" rel="noreferrer" className="text-sm font-bold text-[var(--deep-blue)] underline underline-offset-4">Buka dokumen ↗</a></div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
