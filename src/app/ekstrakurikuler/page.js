import { ekstrakurikuler, sumberEkstrakurikuler } from "@/data/ekstrakurikuler";
import { sekolah } from "@/data/sekolah";

export const metadata = { title: `Ekstrakurikuler - ${sekolah.nama}` };

export default function EkstrakurikulerPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 md:py-16">
      <header className="max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--deep-blue)]">Belajar di luar kelas</p>
        <h1 className="mt-3 text-4xl font-extrabold text-[var(--deep-blue)] sm:text-5xl">Ekstrakurikuler</h1>
        <p className="mt-5 text-lg leading-8 text-[var(--muted)]">Pilihan kegiatan yang tercantum pada laman ekstrakurikuler sekolah.</p>
      </header>
      <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ekstrakurikuler.map((item, index) => (
          <article key={item.nama} className="overflow-hidden rounded-3xl border border-[var(--line)] bg-white">
            <img src={item.foto} alt={item.alt} loading="lazy" className="aspect-[4/3] w-full object-cover" />
            <div className="p-4">
              <div className="flex items-center gap-3"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[var(--mist)] text-xs font-extrabold text-[var(--deep-blue)]">{String(index + 1).padStart(2, "0")}</span><h2 className="font-bold text-[var(--deep-blue)]">{item.nama}</h2></div>
              {!item.fotoKhusus && <p className="mt-3 text-xs leading-5 text-[var(--muted)]">Situs resmi menggunakan gambar umum untuk halaman ini, bukan foto khusus kegiatan.</p>}
              <a href={item.sumber} target="_blank" rel="noreferrer" className="mt-3 inline-block text-xs font-bold text-[var(--deep-blue)] underline underline-offset-4">Lihat halaman kegiatan ↗</a>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-6 text-xs leading-5 text-[var(--muted)]">Nama dan foto dokumentasi mengikuti halaman ekstrakurikuler resmi. Foto sumber bertanggal 2023 dan informasi jadwal/pembina di sana mungkin sudah berubah.</p>
      <a href={sumberEkstrakurikuler} target="_blank" rel="noreferrer" className="mt-7 inline-block text-sm font-bold text-[var(--deep-blue)] underline underline-offset-4">Lihat sumber resmi ↗</a>
    </div>
  );
}
