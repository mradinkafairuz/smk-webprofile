import Link from "next/link";
import { notFound } from "next/navigation";
import { berita } from "@/data/berita";

export function generateStaticParams() {
  return berita.map((item) => ({ id: item.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const item = berita.find((news) => news.id === id);
  return { title: item ? item.judul : "Berita tidak ditemukan" };
}

export default async function DetailBeritaPage({ params }) {
  const { id } = await params;
  const item = berita.find((news) => news.id === id);

  if (!item) notFound();

  return (
    <article className="mx-auto max-w-5xl px-5 py-10 sm:px-8 md:py-16">
      <Link href="/berita" className="mb-7 inline-flex rounded-full bg-[var(--mist)] px-4 py-2 text-sm font-bold text-[var(--deep-blue)] hover:bg-[var(--ice)]">
        Kembali ke berita
      </Link>
      <header className="grid gap-4 rounded-[2rem] bg-[var(--ice)] p-6 sm:p-9 md:grid-cols-[1fr_auto] md:items-end">
        <h1 className="text-4xl font-extrabold leading-tight text-[var(--deep-blue)] sm:text-5xl">{item.judul}</h1>
        <p className="text-sm font-semibold text-[var(--muted)]">{item.tanggal}</p>
      </header>
      <img src={item.gambar} alt={item.gambarAlt} className={`mt-6 max-h-[520px] w-full rounded-[2rem] ${item.dokumen ? "bg-white object-contain" : "object-cover"}`} />
      <div className="mx-auto mt-8 max-w-3xl space-y-5 rounded-[2rem] bg-white p-6 text-lg leading-8 text-[var(--ink)] shadow-[0_8px_30px_rgba(36,72,90,0.06)] sm:p-9">
        {item.isi.map((paragraf, index) => <p key={index}>{paragraf}</p>)}
      </div>
      <p className="mt-6 text-center text-sm text-[var(--muted)]">
        Sumber: <a href={item.sumber} target="_blank" rel="noreferrer" className="font-semibold text-[var(--deep-blue)] underline underline-offset-4">situs resmi SMK Negeri 1 Wonosobo</a>
      </p>
      <div className="mt-8 text-center">
        <Link href="/berita" className="inline-flex rounded-full bg-[var(--deep-blue)] px-5 py-3 text-sm font-bold text-white hover:bg-[#35647b]">
          Berita lainnya
        </Link>
      </div>
    </article>
  );
}

