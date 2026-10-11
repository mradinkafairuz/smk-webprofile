import Link from "next/link";
import { sekolah } from "@/data/sekolah";

const footerLinks = [
  ["/about", "Profil"],
  ["/berita", "Berita"],
  ["/fasilitas", "Fasilitas"],
  ["/ekstrakurikuler", "Ekstrakurikuler"],
  ["/organisasi", "Struktur organisasi"],
  ["/galeri", "Galeri"],
  ["/pengumuman", "Pengumuman arsip"],
  ["/layanan", "Layanan digital"],
  ["/kontak", "Kontak"],
];

export default function Footer() {
  return (
    <footer className="mt-10 rounded-t-[2rem] bg-[var(--deep-blue)] text-white sm:rounded-t-[3rem]">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8 md:grid-cols-[1fr_auto] md:items-end">
        <div className="flex flex-wrap items-start gap-5">
          <img src="/logo-asli.png" alt="" className="w-36 rounded-xl bg-white p-2" />
          <div>
            <h2 className="text-lg font-bold">{sekolah.nama}</h2>
            <p className="mt-2 max-w-md text-sm leading-6 text-white/80">{sekolah.alamat}</p>
            <p className="mt-1 text-sm text-white/80">{sekolah.telepon} · {sekolah.email}</p>
          </div>
        </div>
        <div className="text-sm text-white/80 md:text-right">
          <nav aria-label="Tautan halaman sekolah" className="flex flex-wrap gap-x-4 gap-y-2 md:justify-end">
            {footerLinks.map(([href, label]) => <Link key={href} href={href} className="font-semibold text-white underline decoration-[var(--sky)] underline-offset-4">{label}</Link>)}
          </nav>
          <p className="mt-4">&copy; 2026 {sekolah.nama}</p>
          <p className="mt-1">Website profil untuk keperluan pembelajaran.</p>
        </div>
      </div>
    </footer>
  );
}
