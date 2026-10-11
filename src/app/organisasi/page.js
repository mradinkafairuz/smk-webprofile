import { organisasiSekolah, sumberOrganisasi } from "@/data/organisasi";
import { sekolah } from "@/data/sekolah";

export const metadata = { title: `Organisasi - ${sekolah.nama}` };

const kepala = organisasiSekolah.find((orang) => orang.jabatan === "Kepala Sekolah");
const komite = organisasiSekolah.find((orang) => orang.jabatan === "Komite Sekolah");
const bidang = organisasiSekolah.filter((orang) => orang.jabatan.startsWith("Wakil Kepala"));

function PersonCard({ orang, featured = false }) {
  return (
    <article className={`rounded-2xl border p-5 ${featured ? "border-[var(--deep-blue)] bg-[var(--deep-blue)] text-white" : "border-[var(--line)] bg-white"}`}>
      <p className={`text-sm font-semibold ${featured ? "text-white/75" : "text-[var(--muted)]"}`}>{orang.jabatan}</p>
      <h2 className={`mt-2 text-lg font-bold leading-snug ${featured ? "text-white" : "text-[var(--deep-blue)]"}`}>{orang.nama}</h2>
    </article>
  );
}

export default function OrganisasiPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 md:py-16">
      <header className="max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--deep-blue)]">Pengelolaan sekolah</p>
        <h1 className="mt-3 text-4xl font-extrabold text-[var(--deep-blue)] sm:text-5xl">Struktur organisasi</h1>
        <p className="mt-5 text-lg leading-8 text-[var(--muted)]">Ringkasan nama dan jabatan berdasarkan keterangan teks pada halaman resmi sekolah.</p>
      </header>

      <section aria-label="Kepala sekolah" className="mt-9 max-w-2xl">
        <PersonCard orang={kepala} featured />
      </section>

      <section className="mt-9">
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--muted)]">Bidang wakil kepala sekolah</p>
            <h2 className="mt-1 text-2xl font-extrabold text-[var(--deep-blue)]">Tim pengelola</h2>
          </div>
          <span className="rounded-full bg-[var(--mist)] px-3 py-1.5 text-xs font-bold text-[var(--deep-blue)]">{bidang.length} bidang</span>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {bidang.map((orang) => <PersonCard key={orang.jabatan} orang={orang} />)}
        </div>
      </section>

      <section className="mt-9 max-w-2xl">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.14em] text-[var(--muted)]">Komite</p>
        <PersonCard orang={komite} />
      </section>

      <figure className="mt-9 overflow-hidden rounded-3xl border border-[var(--line)] bg-white">
        <img src="/sekolah-asli.jpg" alt="Gedung SMK Negeri 1 Wonosobo" className="aspect-[21/8] w-full object-cover" />
        <figcaption className="p-3 text-xs text-[var(--muted)]">Dokumentasi gedung SMK Negeri 1 Wonosobo.</figcaption>
      </figure>

      <a href={sumberOrganisasi} target="_blank" rel="noreferrer" className="mt-7 inline-block text-sm font-bold text-[var(--deep-blue)] underline underline-offset-4">Periksa keterangan pada situs resmi ↗</a>
      <aside className="mt-5 rounded-2xl border border-[var(--line)] bg-[var(--mist)] p-5 text-sm leading-6 text-[var(--deep-blue)]">
        <h2 className="font-bold">Catatan pemeriksaan data · 11 Oktober 2026</h2>
        <p className="mt-2">Halaman Struktur Organisasi resmi saat diperiksa masih mencantumkan nama-nama di atas. Namun halaman Guru &amp; Tendik pada situs yang sama menyebut Drs. Fatkhu Rohman sebagai kepala sekolah, berbeda dari Dr. Amin Nurita Fajar Astuti pada halaman struktur dan profil. Karena sumber resmi saling berbeda dan tidak mencantumkan tanggal pemutakhiran yang jelas, jabatan kepala sekolah saat ini belum dapat dipastikan dari situs tersebut.</p>
        <p className="mt-2">Daftar ini mengikuti keterangan teks Struktur Organisasi, bukan bagan gambar lama. Mohon cek langsung ke sekolah untuk konfirmasi terbaru.</p>
      </aside>
    </div>
  );
}
