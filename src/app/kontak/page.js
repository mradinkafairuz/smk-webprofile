import { sekolah } from "@/data/sekolah";

export const metadata = { title: `Kontak - ${sekolah.nama}` };

export default function KontakPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 md:py-16">
      <header className="max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--deep-blue)]">Informasi resmi</p>
        <h1 className="mt-3 text-4xl font-extrabold text-[var(--deep-blue)] sm:text-5xl">Hubungi sekolah</h1>
        <p className="mt-5 text-lg leading-8 text-[var(--muted)]">Kanal kontak berikut dipublikasikan pada situs SMK Negeri 1 Wonosobo.</p>
      </header>
      <div className="mt-9 grid gap-5 md:grid-cols-2">
        <section className="overflow-hidden rounded-3xl bg-[var(--mist)]">
          <img src="/sekolah-asli.jpg" alt="Gedung depan SMK Negeri 1 Wonosobo" className="aspect-[16/8] w-full object-cover" />
          <div className="p-6 sm:p-8">
          <h2 className="text-2xl font-extrabold text-[var(--deep-blue)]">Alamat</h2>
          <address className="mt-4 not-italic leading-7">{sekolah.alamat}</address>
          <a href="https://maps.google.com/?q=Jl.+Bhayangkara+No.+12,+Wonosobo,+Jawa+Tengah" target="_blank" rel="noreferrer" className="mt-5 inline-block text-sm font-bold text-[var(--deep-blue)] underline underline-offset-4">Lihat lokasi di peta ↗</a>
          </div>
        </section>
        <section className="rounded-3xl border border-[var(--line)] bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-extrabold text-[var(--deep-blue)]">Kontak</h2>
          <dl className="mt-4 space-y-3 leading-7"><div><dt className="text-sm text-[var(--muted)]">Telepon</dt><dd><a href="tel:+62286321219" className="font-semibold hover:underline">{sekolah.telepon}</a></dd></div><div><dt className="text-sm text-[var(--muted)]">Faksimile</dt><dd>{sekolah.fax}</dd></div><div><dt className="text-sm text-[var(--muted)]">Email</dt><dd><a href={`mailto:${sekolah.email}`} className="font-semibold hover:underline">{sekolah.email}</a></dd></div></dl>
        </section>
      </div>
      <section className="mt-5 rounded-3xl bg-[var(--deep-blue)] p-6 text-white sm:p-8">
        <h2 className="text-2xl font-extrabold">Media sosial</h2>
        <p className="mt-2 text-sm leading-6 text-white/75">Tautan Facebook memakai alamat kanonis. Saat diperiksa, Facebook meminta pengguna masuk sebelum menampilkan halaman, jadi akses publiknya belum dapat dipastikan.</p>
        <div className="mt-4 flex flex-wrap gap-3">{Object.entries(sekolah.sosial).map(([name, href]) => <a key={name} href={href} target="_blank" rel="noreferrer" className="rounded-full border border-white/30 px-4 py-2 text-sm font-semibold capitalize hover:bg-white/10">{name} ↗</a>)}</div>
      </section>
    </div>
  );
}
