const fotoEkstrakurikuler = [
  ["Palang Merah Remaja", "palang-merah-remaja", "palang-merah-remaja", true],
  ["Pramuka", "pramuka", "pramuka", true],
  ["Karya Ilmiah Remaja", "karya-ilmiah-remaja", "karya-ilmiah-remaja", true],
  ["Rohis", "rohis", "rohis", true],
  ["Jurnalis", "jurnalis", "jurnalis", true],
  ["PBB", "pbb", "1963", true],
  ["Pencak Silat", "pencak-silat", "pencak-silat", true],
  ["Taekwondo", "taekwondo", "taekwondo", true],
  ["Gulat", "gulat", "gulat", true],
  ["Bola Voli", "bola-voli", "bola-voli", true],
  ["Bola Basket", "bola-basket", "bola-basket", true],
  ["Sepak Bola", "sepak-bola", "sepak-bola", true],
  ["Bulu Tangkis", "umum", "bulu-tangkis", false],
  ["Atletik", "atletik", "atletik", true],
  ["Seni Tari", "seni-tari", "seni-tari", true],
  ["Paduan Suara", "umum", "paduan-suara", false],
  ["Band", "umum", "band", false],
  ["Rebana", "rebana", "rebana", true],
  ["Sepak Takraw", "umum", "sepak-takraw", false],
  ["Catur", "catur", "catur", true],
  ["Seni Lukis", "seni-lukis", "seni-lukis", true],
];

export const ekstrakurikuler = fotoEkstrakurikuler.map(([nama, slug, sumberSlug, fotoKhusus]) => ({
  nama,
  foto: fotoKhusus
    ? `/foto-sekolah/ekstrakurikuler/${slug}.jpg`
    : "/foto-sekolah/ekstrakurikuler/umum.webp",
  alt: fotoKhusus
    ? `Foto ${nama} dari dokumentasi situs resmi SMK Negeri 1 Wonosobo`
    : `Gambar umum pada halaman ekstrakurikuler resmi; bukan foto khusus ${nama}`,
  fotoKhusus,
  sumber: `https://smkn1-wnb.sch.id/ekstrakurikuler/${sumberSlug}/`,
}));

export const sumberEkstrakurikuler = "https://smkn1-wnb.sch.id/ekstrakurikuler/";
