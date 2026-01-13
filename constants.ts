import { Activity, CommitteeMember, Document, GalleryItem, TimelineEvent } from './types';

// --- GENERATED PROPOSAL CONTENT REMOVED ---
export const PROPOSAL_HTML_CONTENT = ``; 

export const DIVISION_DETAILS = [
  {
    key: 'Divisi Acara',
    description: 'Konseptor utama yang merancang alur "Simfoni Biru" dari pembukaan hingga klimaks malam puncak, memastikan setiap detik acara memiliki nyawa dan makna.',
    groupPhotoUrl: 'https://i.ibb.co.com/kg5Xq086/DIVISI-acara.jpg'
  },
  {
    key: 'Divisi Konsumsi',
    description: 'Garda terdepan logistik energi, memastikan sajian kuliner bergizi dan higienis untuk menjaga stamina seluruh elemen kepanitiaan dan tamu kehormatan.',
    groupPhotoUrl: 'https://i.ibb.co.com/mFdLkL83/konsum.jpg'
  },
  {
    key: 'Divisi Humas',
    description: 'Wajah dan suara organisasi, membangun jembatan diplomasi dengan pihak eksternal serta mempublikasikan narasi "Harmoni Justitia" ke penjuru publik.',
    groupPhotoUrl: 'https://i.ibb.co.com/rfcJmrPy/divisi-humas.jpg'
  },
  {
    key: 'Divisi Perlengkapan',
    description: 'Arsitek lapangan yang mengubah ruang kosong menjadi panggung megah, menjamin ketersediaan infrastruktur teknis tanpa celah.',
    groupPhotoUrl: 'https://i.ibb.co.com/TBTKP2FX/Div-perlengkapan.jpg'
  },
  {
    key: 'Divisi Media',
    description: 'Seniman visual yang membekukan waktu, merekam jejak sejarah Dies Natalis dalam bingkai sinematik dan estetika digital.',
    groupPhotoUrl: 'https://i.ibb.co.com/CKCf2W1f/div-pdd.jpg'
  },
  {
    key: 'Divisi Keamanan',
    description: 'Perisai pelindung acara, menciptakan atmosfer kondusif dan tertib, memastikan "Bumi Patuh Karya" tetap aman terkendali.',
    groupPhotoUrl: 'https://i.ibb.co.com/cSt1QPtN/div-keamanan.jpg'
  },
];

export const ACTIVITIES: Activity[] = [
  {
    id: '1',
    title: 'Seminar Hukum Nasional',
    date: '4 Februari 2026',
    category: 'Akademik',
    description: 'Diskusi ilmiah relevan dengan isu hukum aktual untuk meningkatkan wawasan masyarakat.',
    fullDescription: 'Seminar ini akan diselenggarakan dalam bentuk diskusi panel yang menghadirkan pakar hukum terkemuka. Peserta akan diajak membedah isu-isu hukum kontemporer yang selaras dengan tema Dies Natalis. Acara terdiri dari sesi pemaparan materi, diskusi interaktif, dan tanya jawab untuk menggali perspektif hukum yang konstruktif.',
    imageUrl: 'https://i.ibb.co.com/XfZZryWp/Gemini-Generated-Image-5jepx15jepx15jep-1.png',
    location: 'Auditorium FH UNRAM',
    coordinator: 'Khazainu Rahmati Rabbi',
    status: 'Upcoming'
  },
  {
    id: '2',
    title: 'Lomba Desain Infografis',
    date: 'Maret 2026',
    category: 'Kompetisi',
    description: 'Meningkatkan kreativitas dan wawasan siswa/mahasiswa melalui media visual edukatif.',
    fullDescription: 'Kompetisi kreatif yang menantang peserta untuk memvisualisasikan data atau informasi hukum menjadi karya grafis yang menarik dan mudah dipahami. Peserta wajib mengirimkan karya orisinal sesuai tema yang ditentukan. Penilaian didasarkan pada kreativitas, kesesuaian tema, dan efektivitas penyampaian pesan.',
    imageUrl: 'https://i.ibb.co.com/FFzh2th/Gemini-Generated-Image-bs7wh4bs7wh4bs7w-2.png',
    location: 'Online / Mataram',
    coordinator: 'Ebin Firmansyah',
    status: 'Upcoming'
  },
  {
    id: '3',
    title: 'Santunan Panti Asuhan',
    date: 'Pertengahan Ramadan 2026',
    category: 'Sosial',
    description: 'Aksi nyata kepedulian sosial mahasiswa hukum terhadap kesejahteraan anak panti asuhan.',
    fullDescription: 'Kunjungan sosial ke panti asuhan di wilayah Lombok Timur sebagai wujud kepedulian mahasiswa hukum. Rangkaian acara meliputi silaturahmi, doa bersama, fun games sederhana untuk menghibur anak-anak, serta penyerahan bantuan berupa sembako dan santunan dana pendidikan.',
    imageUrl: 'https://i.ibb.co.com/b5kKd9Q6/Gemini-Generated-Image-dsqvdtdsqvdtdsqv-1.png',
    location: 'Lombok Timur',
    coordinator: 'Lidiya Sera Warni',
    status: 'Upcoming'
  },
  {
    id: '4',
    title: 'Malam Puncak Dies Natalis',
    date: '2 April 2026',
    category: 'Celebration',
    description: 'Seremonial penutup menampilkan kreativitas, budaya, dan penghargaan.',
    fullDescription: 'Perayaan puncak Dies Natalis KMH LOTIM ke-6 yang dikemas dalam nuansa kebudayaan dan kekeluargaan. Agenda acara mencakup penampilan seni tradisional Gendang Beleq, pertunjukan Peresean, potong tumpeng, penganugerahan pemenang lomba, serta pentas seni dari anggota dan alumni.',
    imageUrl: 'https://i.ibb.co.com/3K9ZXHW/MC-acara.jpg',
    location: 'Taman Budaya',
    coordinator: 'Yusron Kholit Mazit',
    status: 'Upcoming'
  }
];

// --- DOKUMEN PUBLIK (PERMANEN DI KODINGAN) ---
// Agar terbaca di Vercel/semua device, masukkan link Google Drive atau path file public di sini.
export const DOCUMENTS: Document[] = [
  {
    id: 'prop-dn6-official',
    title: 'PROPOSAL PENDANAAN DIES NATALIS KMH KE-6',
    type: 'PDF',
    date: '29 Desember 2025',
    size: '4.8 MB',
    category: 'Proposal Resmi',
    // GANTI '#' dengan link Google Drive atau taruh file di folder public dan tulis '/nama-file.pdf'
    url: '#' 
  }
];

export const COMMITTEE: CommitteeMember[] = [
  // --- BPH (BADAN PENGURUS HARIAN) ---
  { 
    id: 'pj', 
    name: 'Lalu Isfan Aulia Rahman', 
    role: 'Penanggung Jawab',
    imageUrl: 'https://i.ibb.co.com/YBh2Mmmd/foto-kak-ketum.png'
  },
  { 
    id: 'ketua', 
    name: 'Yusron Kholit Mazit', 
    role: 'Ketua Panitia',
    imageUrl: 'https://i.ibb.co.com/ycwjgBy7/Whats-App-Image-2026-01-13-at-18-24-53.jpg'
  },
  { 
    id: 'sekretaris', 
    name: 'M. Zivana AR Salasa', 
    role: 'Sekretaris Panitia',
    imageUrl: 'https://i.ibb.co.com/C37NzWVd/foto-arsa.jpg'
  },
  { 
    id: 'bendahara', 
    name: 'Azka Wigantari', 
    role: 'Bendahara Panitia',
    imageUrl: 'https://i.ibb.co.com/SzT1Mf9/foto-ummi.jpg'
  },
  
  // --- DIVISI ACARA ---
  { 
    id: 'k-acara', 
    name: 'Khazainu Rahmati Rabbi', 
    role: 'Koordinator',
    division: 'Divisi Acara',
    imageUrl: 'https://picsum.photos/seed/coord1/400/400'
  },
  { id: 'a-acara-1', name: 'Chantika Hukmu Adilla', role: 'Staff', division: 'Divisi Acara' },
  { id: 'a-acara-2', name: 'M. Daffa Arbi Firmansyah', role: 'Staff', division: 'Divisi Acara' },
  { id: 'a-acara-3', name: 'Putria Maysha Kholilah', role: 'Staff', division: 'Divisi Acara' },
  { id: 'a-acara-4', name: 'Rizwa Deswira Adeliya', role: 'Staff', division: 'Divisi Acara' },
  { id: 'a-acara-5', name: 'Alana Wahyuni', role: 'Staff', division: 'Divisi Acara' },
  { id: 'a-acara-6', name: 'Reza Juniar Safitri', role: 'Staff', division: 'Divisi Acara' },
  { id: 'a-acara-7', name: 'Baiq Gerda Jenivaliantari', role: 'Staff', division: 'Divisi Acara' },
  { id: 'a-acara-8', name: 'Ahmad Iqbal Jjk', role: 'Staff', division: 'Divisi Acara' },
  { id: 'a-acara-9', name: 'Livya Ayu Lestari', role: 'Staff', division: 'Divisi Acara' },

  // --- DIVISI KONSUMSI ---
  { 
    id: 'k-konsumsi', 
    name: 'Lidiya Sera Warni', 
    role: 'Koordinator',
    division: 'Divisi Konsumsi',
    imageUrl: 'https://picsum.photos/seed/coord2/400/400'
  },
  { id: 'a-konsumsi-1', name: 'Zulfa Nurmadania', role: 'Staff', division: 'Divisi Konsumsi' },
  { id: 'a-konsumsi-2', name: 'Siti Maream', role: 'Staff', division: 'Divisi Konsumsi' },
  { id: 'a-konsumsi-3', name: 'Intan Permata Yuri', role: 'Staff', division: 'Divisi Konsumsi' },
  { id: 'a-konsumsi-4', name: 'Agitanzila', role: 'Staff', division: 'Divisi Konsumsi' },
  { id: 'a-konsumsi-5', name: 'Sindi Auladia', role: 'Staff', division: 'Divisi Konsumsi' },
  { id: 'a-konsumsi-6', name: 'Mutiara Anjani', role: 'Staff', division: 'Divisi Konsumsi' },
  { id: 'a-konsumsi-7', name: 'Resti Ananda Wirianti', role: 'Staff', division: 'Divisi Konsumsi' },
  { id: 'a-konsumsi-8', name: 'Cici Ulul Azmi', role: 'Staff', division: 'Divisi Konsumsi' },

  // --- DIVISI HUMAS ---
  { 
    id: 'k-humas', 
    name: 'Sri Maryanti', 
    role: 'Koordinator',
    division: 'Divisi Humas',
    imageUrl: 'https://picsum.photos/seed/coord3/400/400'
  },
  { id: 'a-humas-1', name: 'Maitsa Simayani', role: 'Staff', division: 'Divisi Humas' },
  { id: 'a-humas-2', name: 'Yeni Nafila Lita', role: 'Staff', division: 'Divisi Humas' },
  { id: 'a-humas-4', name: 'Alya Septi Wiliyani', role: 'Staff', division: 'Divisi Humas' },
  { id: 'a-humas-5', name: 'Gelsi Adella Yusman', role: 'Staff', division: 'Divisi Humas' },
  { id: 'a-humas-6', name: 'M. Saufan Firdaus', role: 'Staff', division: 'Divisi Humas' },

  // --- DIVISI PERLENGKAPAN ---
  { 
    id: 'k-perlengkapan', 
    name: 'Abdul Malik Hidayat', 
    role: 'Koordinator',
    division: 'Divisi Perlengkapan',
    imageUrl: 'https://picsum.photos/seed/coord4/400/400'
  },
  { id: 'a-perkap-1', name: 'Lalu Johan Andika', role: 'Staff', division: 'Divisi Perlengkapan' },
  { id: 'a-perkap-2', name: 'Burhan Mukmin Suharyono', role: 'Staff', division: 'Divisi Perlengkapan' },
  { id: 'a-perkap-3', name: 'Fahisa Apriyani', role: 'Staff', division: 'Divisi Perlengkapan' },
  { id: 'a-perkap-4', name: 'Lalu Ayyas Thoriq Attsyaqif', role: 'Staff', division: 'Divisi Perlengkapan' },
  { id: 'a-perkap-5', name: 'Azwardi Hasnan', role: 'Staff', division: 'Divisi Perlengkapan' },
  { id: 'a-perkap-6', name: 'Gunawan', role: 'Staff', division: 'Divisi Perlengkapan' },

  // --- DIVISI MEDIA & DOKUMENTASI ---
  { 
    id: 'k-media', 
    name: 'Ebin Firmansyah', 
    role: 'Koordinator',
    division: 'Divisi Media',
    imageUrl: 'https://picsum.photos/seed/coord5/400/400'
  },
  { id: 'a-media-1', name: 'Baiq Shifra Kalila', role: 'Staff', division: 'Divisi Media' },
  { id: 'a-media-2', name: 'Rahmi Ayu', role: 'Staff', division: 'Divisi Media' },
  { id: 'a-media-3', name: 'Tasya Febina', role: 'Staff', division: 'Divisi Media' },
  { id: 'a-media-5', name: 'Hanum', role: 'Staff', division: 'Divisi Media' },

  // --- DIVISI KEAMANAN ---
  { 
    id: 'k-keamanan', 
    name: 'Moh Surya Jaya', 
    role: 'Koordinator',
    division: 'Divisi Keamanan',
    imageUrl: 'https://picsum.photos/seed/coord6/400/400'
  },
  { id: 'a-keamanan-1', name: 'Lalu Faisal Vedarama', role: 'Staff', division: 'Divisi Keamanan' },
  { id: 'a-keamanan-2', name: 'Selamat Rifki', role: 'Staff', division: 'Divisi Keamanan' },
  { id: 'a-keamanan-3', name: 'Muhammad Rizki Almubarok', role: 'Staff', division: 'Divisi Keamanan' },
  { id: 'a-keamanan-4', name: 'Bading yahya Saputra', role: 'Staff', division: 'Divisi Keamanan' },
  { id: 'a-keamanan-5', name: 'Sohibani Azaly', role: 'Staff', division: 'Divisi Keamanan' },
  { id: 'a-keamanan-6', name: 'Moh Naufal Tamam Athaulloh', role: 'Staff', division: 'Divisi Keamanan' },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  // --- DN 6 (CURRENT YEAR) ---
  // NEW PHOTOS
  { id: 'dn6-new-1', type: 'image', url: 'https://i.ibb.co.com/zHVnLG5j/Whats-App-Image-2026-01-13-at-18-06-17.jpg', caption: 'Latihan Perdana Talent', category: 'DN6' },
  { id: 'dn6-new-2', type: 'image', url: 'https://i.ibb.co.com/c4tWZD0/Whats-App-Image-2026-01-13-at-18-06-08.jpg', caption: 'Kumpul Perdana Panitia', category: 'DN6' },
  { id: 'dn6-new-3', type: 'image', url: 'https://i.ibb.co.com/vvXcycNg/Whats-App-Image-2026-01-13-at-18-06-14.jpg', caption: 'Rapat Panitia Inti', category: 'DN6' },
  { id: 'dn6-new-4', type: 'image', url: 'https://i.ibb.co.com/ndws9R6/Whats-App-Image-2026-01-13-at-18-06-10.jpg', caption: 'Rapat Divisi Keamanan', category: 'DN6' },
  { id: 'dn6-new-5', type: 'image', url: 'https://i.ibb.co.com/trhDZpD/Whats-App-Image-2026-01-13-at-18-39-18-1.jpg', caption: 'Penyerahan Mandat Kepanitiaan', category: 'DN6' },
  { id: 'dn6-new-6', type: 'image', url: 'https://i.ibb.co.com/Lhz4dX4k/Whats-App-Image-2026-01-13-at-18-39-18.jpg', caption: 'Sambutan Ketua Panitia Terpilih', category: 'DN6' },
  { id: 'dn6-new-7', type: 'image', url: 'https://i.ibb.co.com/JW2yXRRv/Whats-App-Image-2026-01-13-at-18-48-34.jpg', caption: 'Latihan Talent & Rapat Panitia (1)', category: 'DN6' },
  { id: 'dn6-new-8', type: 'image', url: 'https://i.ibb.co.com/SXRQgcds/Whats-App-Image-2026-01-13-at-18-48-33-1.jpg', caption: 'Latihan Talent & Rapat Panitia (2)', category: 'DN6' },

  // EXISTING PHOTOS
  { id: '1', type: 'image', url: 'https://i.ibb.co.com/BVmwH6BT/foto-2.jpg', caption: 'Pra Acara - Foto Kepanitiaan', category: 'DN6' },
  { id: '2', type: 'image', url: 'https://i.ibb.co.com/3yfZ4jsM/foto-1.jpg', caption: 'Pra Acara - Foto Kepanitiaan', category: 'DN6' },
  { id: '3', type: 'image', url: 'https://i.ibb.co.com/KxG7c9Lb/foto-3.jpg', caption: 'Pra Acara - Foto Kepanitiaan', category: 'DN6' },
  { id: '4', type: 'image', url: 'https://i.ibb.co.com/B5mG5y3Z/foto-4.jpg', caption: 'Pra Acara - Foto Kepanitiaan', category: 'DN6' },
  { id: '5', type: 'image', url: 'https://i.ibb.co.com/ds8dNryc/foto-5.jpg', caption: 'Pra Acara - Foto Kepanitiaan', category: 'DN6' },
  { id: '6', type: 'image', url: 'https://i.ibb.co.com/GfScrpqs/foto-6.jpg', caption: 'Pra Acara - Foto Kepanitiaan', category: 'DN6' },
  
  // --- DN 5 (PAST YEAR) ---
  { id: 'dn5-1', type: 'image', url: 'https://i.ibb.co.com/MygTsVxz/baca-puisi.jpg', caption: 'Pembacaan Puisi', category: 'DN5' },
  { id: 'dn5-2', type: 'image', url: 'https://i.ibb.co.com/FLzTKMWH/foto-bersama.jpg', caption: 'Foto Kebersamaan', category: 'DN5' },
  { id: 'dn5-3', type: 'image', url: 'https://i.ibb.co.com/SDBHt2QS/hiburan-nyanyi.jpg', caption: 'Hiburan Nyanyi oleh Kak Aldi', category: 'DN5' },
  { id: 'dn5-4', type: 'image', url: 'https://i.ibb.co.com/RT0KPLQK/malam-puncak.jpg', caption: 'Acara Puncak', category: 'DN5' },
  { id: 'dn5-5', type: 'image', url: 'https://i.ibb.co.com/5WPJJfg5/MC-acara.jpg', caption: 'Pembukaan oleh MC Formal', category: 'DN5' },
  { id: 'dn5-6', type: 'image', url: 'https://i.ibb.co.com/0yHtHcVF/peresean.jpg', caption: 'Peresean', category: 'DN5' },
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  // Completed Events (Based on Image)
  { 
    id: '1', 
    date: '06 Nov 2025', 
    title: 'Pembentukan Kepanitiaan', 
    description: 'Penetapan struktur dan pemilihan ketua pelaksana.',
    status: 'completed'
  },
  { 
    id: '2', 
    date: '12 Nov 2025', 
    title: 'Rapat Perdana Kepanitiaan', 
    description: 'Konsolidasi awal seluruh panitia DN KMH LOTIM.',
    status: 'completed'
  },
  { 
    id: '3', 
    date: '27 Nov 2025', 
    title: 'Rapat Besar I', 
    description: 'Pembahasan konsep dan rancangan anggaran biaya.',
    status: 'completed'
  },
  { 
    id: '4', 
    date: '04 Des 2025', 
    title: 'Rapat Besar II', 
    description: 'Finalisasi konsep acara dan teknis lapangan.',
    status: 'completed'
  },
  { 
    id: '5', 
    date: '27 Des 2025', 
    title: 'Latihan Talent & Rapat', 
    description: 'Latihan pengisi acara dirangkaikan dengan rapat evaluasi.',
    status: 'completed'
  },
  { 
    id: '6', 
    date: '10 Jan 2026', 
    title: 'Latihan Talent & Rapat', 
    description: 'Pemantapan talent show dan koordinasi divisi.',
    status: 'completed'
  },
  
  // Future Events (Based on Prompt)
  { 
    id: '7', 
    date: '04 Feb 2026', 
    title: 'Seminar Hukum', 
    description: 'Diskusi panel dengan pemateri ahli di Auditorium.',
    status: 'upcoming'
  },
  { 
    id: '8', 
    date: 'Maret 2026', 
    title: 'Santunan Ramadhan', 
    description: 'Bakti sosial di panti asuhan (Pertengahan Ramadhan).',
    status: 'upcoming'
  },
  { 
    id: '9', 
    date: '02 Apr 2026', 
    title: 'Malam Puncak Dies Natalis', 
    description: 'Perayaan puncak, pentas seni, dan seremonial penutup.',
    status: 'upcoming'
  },
];