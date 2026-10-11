import { sekolah } from "@/data/sekolah";
import Link from "next/link";

export const metadata = { title: `Tentang - ${sekolah.nama}` };

function DetailList({ items }) {
  return (
    <ul className="divide-y divide-[var(--line)]">
      {items.map((item) => (
        <li key={item} className="flex gap-3 py-3 leading-6 text-[var(--ink)]">
          <span aria-hidden="true" className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[var(--sky)]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 md:py-16">
      <header className="overflow-hidden rounded-[2rem] bg-[var(--mist)] md:grid md:grid-cols-[1fr_1fr] md:items-stretch">
        <img src="/sekolah-asli.jpg" alt="Gedung depan SMK Negeri 1 Wonosobo" className="h-full min-h-64 w-full object-cover" />
        <div className="p-6 sm:p-9 md:p-12">
          <h1 className="text-4xl font-extrabold leading-tight text-[var(--deep-blue)] sm:text-5xl">Tentang {sekolah.nama}</h1>
          <p className="mt-5 max-w-3xl leading-7 text-[var(--ink)]">{sekolah.profil}</p>
          <p className="mt-4 text-xs text-[var(--muted)]">Foto gedung sekolah dari dokumentasi profil.</p>
        </div>
      </header>

      <section className="grid gap-6 py-12 md:grid-cols-2 md:gap-10 md:py-16">
        <div className="rounded-[2rem] bg-[var(--ice)] p-7 sm:p-9">
          <h2 className="text-3xl font-extrabold text-[var(--deep-blue)]">Sejarah</h2>
          <p className="mt-5 leading-8 text-[var(--ink)]">{sekolah.sejarah}</p>
        </div>
        <div className="rounded-[2rem] bg-[var(--deep-blue)] p-7 text-white sm:p-9">
          <h2 className="text-3xl font-extrabold">Visi</h2>
          <p className="mt-5 text-xl font-semibold leading-8">{sekolah.visi}</p>
        </div>
      </section>

      <section className="grid gap-7 md:grid-cols-[0.7fr_1.3fr] md:gap-14">
        <div>
          <h2 className="text-3xl font-extrabold text-[var(--deep-blue)]">Misi sekolah</h2>
          <p className="mt-3 leading-7 text-[var(--muted)]">Hal-hal yang kami upayakan dalam kegiatan belajar.</p>
        </div>
        <DetailList items={sekolah.misi} />
      </section>

      <section className="grid gap-8 md:grid-cols-2 mt-14">
        <div className="rounded-[2rem] bg-[var(--ice)] p-7 sm:p-9">
          <h2 className="mb-5 text-2xl font-extrabold text-[var(--deep-blue)]">Fasilitas</h2>
          <DetailList items={["Laboratorium program keahlian", "Perpustakaan", "Aula", "Masjid", "Lapangan olahraga"]} />
          <Link href="/fasilitas" className="mt-4 inline-block text-sm font-bold text-[var(--deep-blue)] underline underline-offset-4">Lihat daftar fasilitas lengkap →</Link>
        </div>
        <div className="rounded-[2rem] bg-[var(--soft-blue)] p-7 sm:p-9">
          <h2 className="mb-5 text-2xl font-extrabold text-[var(--deep-blue)]">Kegiatan siswa</h2>
          <DetailList items={["Pramuka", "Palang Merah Remaja", "Karya Ilmiah Remaja", "Olahraga", "Seni dan budaya"]} />
          <Link href="/ekstrakurikuler" className="mt-4 inline-block text-sm font-bold text-[var(--deep-blue)] underline underline-offset-4">Lihat semua kegiatan →</Link>
        </div>
      </section>

      <nav aria-label="Informasi sekolah lainnya" className="mt-10 flex flex-wrap gap-3">
        <Link href="/organisasi" className="rounded-full bg-[var(--mist)] px-4 py-2 text-sm font-bold text-[var(--deep-blue)] hover:bg-[var(--ice)]">Struktur organisasi</Link>
        <Link href="/kontak" className="rounded-full bg-[var(--mist)] px-4 py-2 text-sm font-bold text-[var(--deep-blue)] hover:bg-[var(--ice)]">Kontak sekolah</Link>
      </nav>

      <section className="mt-14 grid gap-6 rounded-[2rem] bg-[var(--deep-blue)] p-7 text-white sm:p-9 md:grid-cols-2 md:items-end">
        <div>
          <h2 className="text-2xl font-extrabold">Temukan kami</h2>
          <p className="mt-3 leading-7 text-white/85">{sekolah.alamat}</p>
        </div>
        <div className="text-sm leading-7 text-white/85 md:text-right">
          <p>Telepon: {sekolah.telepon}</p>
          <p>Email: {sekolah.email}</p>
        </div>
      </section>
    </div>
  );
}
