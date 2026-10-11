import Link from "next/link";
import { sekolah } from "@/data/sekolah";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[var(--mist)]">
      <div aria-hidden="true" className="absolute -right-20 -top-24 -z-10 h-72 w-72 rounded-full bg-[var(--ice)] sm:h-96 sm:w-96" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-10 sm:px-8 md:grid-cols-[1fr_0.95fr] md:gap-12 md:py-16 lg:gap-16">
        <div className="max-w-2xl py-4">
          <p className="inline-flex rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-[var(--deep-blue)]">
            Sekolah kejuruan di Wonosobo
          </p>
          <h1 className="mt-6 text-5xl font-extrabold leading-[0.98] text-[var(--deep-blue)] sm:text-6xl lg:text-7xl">
            Belajar sambil membuat hal nyata.
          </h1>
          <p className="mt-5 text-lg font-semibold text-[var(--ink)] sm:text-xl">{sekolah.nama}</p>
          <p className="mt-3 max-w-xl leading-7 text-[var(--muted)]">{sekolah.slogan}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/about" className="rounded-full bg-[var(--deep-blue)] px-5 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5">
              Kenali sekolah
            </Link>
            <Link href="/berita" className="rounded-full border-2 border-[var(--deep-blue)] px-5 py-[10px] text-sm font-bold text-[var(--deep-blue)] transition-colors hover:bg-white">
              Lihat kegiatan
            </Link>
          </div>
        </div>

        <figure className="relative mx-auto w-full max-w-xl md:rotate-1">
          <div aria-hidden="true" className="absolute -bottom-3 -left-3 h-full w-full rounded-[2rem] bg-[var(--sky)] sm:-bottom-4 sm:-left-4" />
          <img
            src="/sekolah-asli.jpg"
            alt="Gedung SMK Negeri 1 Wonosobo"
            className="relative aspect-[1.18] w-full rounded-[2rem] object-cover shadow-[0_18px_42px_rgba(36,72,90,0.14)]"
          />
          <figcaption className="absolute -bottom-5 right-4 max-w-[230px] -rotate-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-[var(--deep-blue)] shadow-lg sm:right-8">
            Jl. Bhayangkara No. 12, Wonosobo
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

