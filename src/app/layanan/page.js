import { sekolah } from "@/data/sekolah";

export const metadata = { title: `Layanan digital - ${sekolah.nama}` };

const layanan = [
  {
    nama: "Portal SMK SATU",
    deskripsi: "Pintu masuk terpadu ke layanan digital sekolah untuk siswa, guru, tenaga kependidikan, dan operator.",
    href: "https://smkn1wonosobo.sch.id/",
    domain: "smkn1wonosobo.sch.id",
  },
  {
    nama: "Perpustakaan Digital",
    deskripsi: "Katalog dan layanan perpustakaan digital sekolah.",
    href: "https://smkn1wonosobo.perpustakaan.co.id/home.ks",
    domain: "smkn1wonosobo.perpustakaan.co.id",
  },
  {
    nama: "Perpustakaan SMK",
    deskripsi: "Portal perpustakaan yang ditautkan dari situs resmi sekolah.",
    href: "https://perpus.smkn1-wnb.sch.id/",
    domain: "perpus.smkn1-wnb.sch.id",
  },
];

export default function LayananPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 md:py-16">
      <header className="max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--deep-blue)]">Akses cepat</p>
        <h1 className="mt-3 text-4xl font-extrabold text-[var(--deep-blue)] sm:text-5xl">Layanan digital</h1>
        <p className="mt-5 text-lg leading-8 text-[var(--muted)]">Tautan berikut tercantum di situs resmi SMK Negeri 1 Wonosobo dan dapat dibuka saat diperiksa.</p>
      </header>

      <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {layanan.map((item) => (
          <article key={item.nama} className="rounded-3xl border border-[var(--line)] bg-white p-6 sm:p-7">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--muted)]">Layanan sekolah</p>
            <h2 className="mt-2 text-2xl font-extrabold text-[var(--deep-blue)]">{item.nama}</h2>
            <p className="mt-3 leading-7 text-[var(--muted)]">{item.deskripsi}</p>
            <a href={item.href} target="_blank" rel="noreferrer" className="mt-6 inline-flex rounded-full bg-[var(--deep-blue)] px-5 py-3 text-sm font-bold text-white hover:opacity-90">
              Buka layanan <span aria-hidden="true" className="ml-2">↗</span>
            </a>
            <p className="mt-3 text-xs text-[var(--muted)]">{item.domain}</p>
          </article>
        ))}
      </div>

      <aside className="mt-8 rounded-2xl bg-[var(--mist)] p-5 text-sm leading-6 text-[var(--deep-blue)]">
        <h2 className="font-bold">Tautan lain di situs resmi</h2>
        <p className="mt-2">Portal SMK SATU adalah rujukan terbaru yang ditemukan. Tautan SPMB pada situs lama masih berlabel tahun ajaran 2025/2026, sedangkan Dapodik dan E-Rapor pada situs lama memakai alamat IP internal; untuk itu, akses aplikasi diarahkan melalui portal terpusat.</p>
        <a href="https://smkn1-wnb.sch.id/" target="_blank" rel="noreferrer" className="mt-3 inline-block font-bold underline underline-offset-4">Periksa tautan terbaru di situs sekolah ↗</a>
      </aside>
    </div>
  );
}
