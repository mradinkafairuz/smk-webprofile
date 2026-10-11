import Link from "next/link";
import { sekolah, menu, menuInfo } from "@/data/sekolah";

export default function Navbar() {
  return (
    <header className="relative z-20 bg-[var(--paper)]">
      <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-8 gap-y-3 px-5 py-4 sm:px-8">
        <Link href="/" className="inline-flex items-center rounded-lg focus-visible:outline-offset-4" aria-label={`Beranda ${sekolah.nama}`}>
          <img src="/logo-asli.png" alt={sekolah.nama} className="h-11 w-auto max-w-[160px] object-contain sm:h-12 sm:max-w-[185px]" />
        </Link>
        <div className="flex flex-wrap items-center gap-2">
          <ul className="flex flex-wrap items-center gap-1 rounded-full bg-[var(--mist)] p-1">
            {menu.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-block rounded-full px-3 py-2 text-sm font-semibold text-[var(--deep-blue)] transition-colors hover:bg-white focus-visible:bg-white sm:px-4">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <details className="group relative">
            <summary className="cursor-pointer list-none rounded-full border border-[var(--line)] bg-white px-4 py-3 text-sm font-semibold text-[var(--deep-blue)] hover:bg-[var(--mist)] [&::-webkit-details-marker]:hidden">
              Info sekolah <span aria-hidden="true" className="ml-1 inline-block transition-transform group-open:rotate-180">⌄</span>
            </summary>
            <ul className="absolute right-0 top-full z-20 mt-2 min-w-52 rounded-2xl border border-[var(--line)] bg-white p-2 shadow-xl">
              {menuInfo.map((item) => (
                <li key={item.href}><Link href={item.href} className="block rounded-xl px-4 py-2.5 text-sm font-semibold text-[var(--deep-blue)] hover:bg-[var(--mist)]">{item.label}</Link></li>
              ))}
            </ul>
          </details>
        </div>
      </nav>
    </header>
  );
}
