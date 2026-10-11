import Link from "next/link";
import Hero from "@/components/Hero";
import BeritaCard from "@/components/BeritaCard";
import { alumni, sekolah } from "@/data/sekolah";
import { berita } from "@/data/berita";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="mx-auto grid max-w-7xl gap-7 px-5 py-16 sm:px-8 md:grid-cols-[0.75fr_1.25fr] md:gap-16 md:py-24">
        <h2 className="max-w-sm text-3xl font-extrabold leading-tight text-[var(--deep-blue)] sm:text-4xl">
          Sambutan kepala sekolah
        </h2>
        <div className="max-w-2xl rounded-3xl bg-white p-6 shadow-[0_8px_30px_rgba(36,72,90,0.06)] sm:p-8">
          <p className="text-lg leading-8 text-[var(--muted)]">{sekolah.sambutan}</p>
          <p className="mt-5 font-bold text-[var(--ink)]">{sekolah.kepalaSekolah}</p>
          <Link href="/about" className="mt-6 inline-flex rounded-full bg-[var(--mist)] px-4 py-2 text-sm font-bold text-[var(--deep-blue)] hover:bg-[var(--ice)]">
            Baca profil sekolah
          </Link>
        </div>
      </section>



      <section className="mx-auto max-w-7xl px-5 pb-4 sm:px-8">
        <div className="grid gap-6 rounded-[2rem] bg-[var(--mist)] p-6 sm:p-9 md:grid-cols-[1fr_1.3fr] md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-[var(--deep-blue)]">Jelajahi sekolah</p>
            <h2 className="mt-2 text-2xl font-extrabold text-[var(--deep-blue)]">Lebih banyak yang bisa dilihat</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {[["/fasilitas", "Fasilitas"], ["/ekstrakurikuler", "Ekstrakurikuler"], ["/galeri", "Galeri"], ["/pengumuman", "Pengumuman arsip"], ["/layanan", "Layanan digital"], ["/kontak", "Kontak"]].map(([href, label]) => <Link key={href} href={href} className="rounded-full bg-white px-4 py-2.5 text-sm font-bold text-[var(--deep-blue)] transition hover:-translate-y-0.5">{label} ↗</Link>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-4 sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-[var(--line)] bg-white p-5 sm:p-6">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--muted)]">Agenda</p>
            <h2 className="mt-1 text-xl font-extrabold text-[var(--deep-blue)]">Belum ada agenda yang diumumkan</h2>
            <p className="mt-1 text-sm text-[var(--muted)]">Situs resmi sekolah saat ini juga tidak menampilkan agenda.</p>
          </div>
          <Link href="/pengumuman" className="rounded-full bg-[var(--mist)] px-4 py-2.5 text-sm font-bold text-[var(--deep-blue)] hover:bg-[var(--ice)]">Lihat arsip pengumuman</Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-extrabold text-[var(--deep-blue)] sm:text-4xl">Kegiatan dan karya siswa</h2>
            <p className="mt-2 text-[var(--muted)]">Cerita tentang kegiatan terbaru dari sekolah.</p>
          </div>
          <Link href="/berita" className="rounded-full border-2 border-[var(--deep-blue)] px-4 py-2 text-sm font-bold text-[var(--deep-blue)] hover:bg-[var(--mist)]">
            Semua berita
          </Link>
        </div>
        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <BeritaCard berita={berita[0]} variant="feature" />
          <div className="grid content-start gap-4">
            {berita.slice(1, 3).map((item) => <BeritaCard key={item.id} berita={item} variant="compact" />)}
          </div>
        </div>
      </section>

      <section className="bg-[var(--ice)]">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 md:py-18">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-[var(--deep-blue)]">Cerita alumni</p>
              <h2 className="mt-2 text-3xl font-extrabold text-[var(--deep-blue)]">Bekal dari bangku sekolah</h2>
            </div>
            <a href="https://smkn1-wnb.sch.id/" target="_blank" rel="noreferrer" className="text-sm font-bold text-[var(--deep-blue)] underline underline-offset-4">Lihat situs resmi ↗</a>
          </div>
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {alumni.map((orang) => <figure key={orang.nama} className="rounded-3xl bg-white p-6"><p className="leading-7 text-[var(--ink)]">{orang.pengalaman}</p><figcaption className="mt-5 border-t border-[var(--line)] pt-4"><p className="font-bold text-[var(--deep-blue)]">{orang.nama}</p><p className="mt-1 text-sm text-[var(--muted)]">{orang.peran} · Alumni {orang.tahun}</p></figcaption></figure>)}
          </div>
          <p className="mt-4 text-xs text-[var(--muted)]">Ringkasan/parafrasa dari testimoni yang ditampilkan di homepage sekolah.</p>
        </div>
      </section>
    </>
  );
}
