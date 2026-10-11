import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { sekolah } from "@/data/sekolah";

export const metadata = {
  title: `${sekolah.nama} - Profil Sekolah`,
  description: `Profil, program keahlian, dan kegiatan ${sekolah.nama} di ${sekolah.kota}.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="bg-[var(--paper)] text-[var(--ink)] antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

