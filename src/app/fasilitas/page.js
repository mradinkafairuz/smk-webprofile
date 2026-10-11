import { fasilitasFoto, sumberFasilitas } from "@/data/fasilitas";
import { sekolah } from "@/data/sekolah";

export const metadata = { title: `Fasilitas - ${sekolah.nama}` };

export default function FasilitasPage() {
  const kelompok = [...new Set(fasilitasFoto.map((item) => item.kelompok))];
  return (
    <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 md:py-16">
      <header className="max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--deep-blue)]">Ruang untuk belajar dan berkegiatan</p>
        <h1 className="mt-3 text-4xl font-extrabold text-[var(--deep-blue)] sm:text-5xl">Fasilitas sekolah</h1>
        <p className="mt-5 text-lg leading-8 text-[var(--muted)]">Foto dan nama fasilitas di bawah diambil dari galeri fasilitas pada situs resmi sekolah.</p>
      </header>
      {kelompok.map((namaKelompok) => (
        <section key={namaKelompok} className="mt-10">
          <h2 className="mb-4 text-2xl font-extrabold text-[var(--deep-blue)]">{namaKelompok}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {fasilitasFoto.filter((item) => item.kelompok === namaKelompok).map((item) => (
              <article key={item.slug} className="overflow-hidden rounded-3xl border border-[var(--line)] bg-white">
                <img src={item.foto} alt={item.alt} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                <div className="p-4"><h3 className="font-bold text-[var(--deep-blue)]">{item.nama}</h3><a href={item.sumber} target="_blank" rel="noreferrer" className="mt-2 inline-block text-xs font-bold text-[var(--deep-blue)] underline underline-offset-4">Sumber foto ↗</a></div>
              </article>
            ))}
          </div>
        </section>
      ))}
      <p className="mt-8 text-xs leading-5 text-[var(--muted)]">Foto dokumentasi fasilitas pada situs resmi bertanggal Januari 2023. Kondisi fasilitas bisa berubah; kunjungi sumber untuk informasi terbaru.</p>
      <a href={sumberFasilitas} target="_blank" rel="noreferrer" className="mt-7 inline-block text-sm font-bold text-[var(--deep-blue)] underline underline-offset-4">Sumber: fasilitas SMK Negeri 1 Wonosobo ↗</a>
    </div>
  );
}
