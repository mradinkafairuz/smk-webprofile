import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-24 text-center sm:px-8">
      <p className="text-sm font-semibold text-[var(--deep-blue)]">Halaman tidak ditemukan</p>
      <h1 className="mt-3 text-5xl font-bold text-[var(--ink)]">404</h1>
      <p className="mx-auto mt-4 max-w-lg leading-7 text-[var(--muted)]">
        Tautan yang kamu buka tidak menuju halaman yang tersedia.
      </p>
      <Link href="/" className="mt-7 inline-block font-bold text-[var(--deep-blue)] underline decoration-[var(--sky)] decoration-2 underline-offset-4">
        Kembali ke beranda
      </Link>
    </div>
  );
}


