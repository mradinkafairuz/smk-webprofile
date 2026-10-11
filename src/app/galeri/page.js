import Link from "next/link";
import { berita } from "@/data/berita";
import { sekolah } from "@/data/sekolah";

export const metadata = { title: `Galeri - ${sekolah.nama}` };

export default function GaleriPage() {
  const dokumentasi = berita.filter((item) => !item.dokumen && ["beyond-dimension", "pojok-seni", "kunjungan-mahasiswa-jepang"].includes(item.id));
  return (
    <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 md:py-16">
      <header className="max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--deep-blue)]">Cerita dalam gambar</p>
        <h1 className="mt-3 text-4xl font-extrabold text-[var(--deep-blue)] sm:text-5xl">Galeri kegiatan</h1>
        <p className="mt-5 text-lg leading-8 text-[var(--muted)]">Foto pilihan dari berita yang diterbitkan di situs resmi SMK Negeri 1 Wonosobo.</p>
      </header>
      <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {dokumentasi.map((item) => (
          <article key={item.id} className="overflow-hidden rounded-3xl border border-[var(--line)] bg-white">
            <img src={item.gambar} alt={item.gambarAlt} className="aspect-[4/3] w-full object-cover" />
            <div className="p-5"><p className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]">{item.tanggal}</p><h2 className="mt-2 text-lg font-bold leading-snug text-[var(--deep-blue)]">{item.judul}</h2><Link href={`/berita/${item.id}`} className="mt-4 inline-block text-sm font-bold text-[var(--deep-blue)] underline underline-offset-4">Buka cerita</Link></div>
          </article>
        ))}
      </div>
    </div>
  );
}
