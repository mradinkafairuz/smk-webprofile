import BeritaCard from "@/components/BeritaCard";
import { berita } from "@/data/berita";
import { sekolah } from "@/data/sekolah";

export const metadata = { title: `Berita - ${sekolah.nama}` };

export default function BeritaPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 md:py-16">
      <header className="mb-10 max-w-3xl">
        <h1 className="text-4xl font-extrabold leading-tight text-[var(--deep-blue)] sm:text-5xl">
          Kabar dari {sekolah.singkat}
        </h1>
        <p className="mt-4 max-w-2xl leading-7 text-[var(--muted)]">
          Cerita tentang pembelajaran, karya, dan aktivitas siswa.
        </p>
      </header>

      <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        <BeritaCard berita={berita[0]} variant="feature" />
        <div className="grid content-start gap-4">
          {berita.slice(1, 3).map((item) => (
            <BeritaCard key={item.id} berita={item} variant="compact" />
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {berita.slice(3).map((item) => (
          <BeritaCard key={item.id} berita={item} />
        ))}
      </div>
      <p className="mt-7 text-xs text-[var(--muted)]">
        Ringkasan berita diambil dari publikasi resmi sekolah.
      </p>
    </div>
  );
}

