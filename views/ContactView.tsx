import React, { useState } from 'react';
import { MapPin, Mail, Phone, Instagram, HelpCircle, Check, CreditCard, Copy, ChevronDown, ChevronUp } from 'lucide-react';

const ContactView: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleCopyRekening = () => {
    navigator.clipboard.writeText('1974531050');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleFaq = (index: number) => {
      setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const contactPersons = [
    {
      role: 'Ketua Panitia',
      name: 'Yusron Kholit Mazit',
      phone: '+62 878-6543-2109',
      type: 'primary'
    },
    {
      role: 'Sekretaris (Admin)',
      name: 'M. Zivana AR Salasa',
      phone: '+62 822-7788-5930',
      type: 'secondary'
    },
  ];

  const faqData = [
      {
          question: "Apa tema Dies Natalis tahun ini dan maknanya?",
          answer: "Tema tahun ini adalah \"Menjaga Simfoni Biru di Bawah Naungan Sang Merah, Harmoni Justitia di Bumi Patuh Karya\". Maknanya adalah menjaga keseimbangan hukum (Biru) dengan semangat keberanian (Merah) untuk menciptakan keadilan yang harmonis di Lombok Timur (Bumi Patuh Karya)."
      },
      {
          question: "Siapa saja yang boleh mengikuti rangkaian acara?",
          answer: "Rangkaian acara terbuka untuk umum, khususnya mahasiswa Fakultas Hukum Universitas Mataram, alumni KMH LOTIM, serta masyarakat umum yang berminat pada Seminar Hukum dan acara puncak."
      },
      {
          question: "Bagaimana cara mendaftar Lomba Desain Infografis?",
          answer: "Pendaftaran lomba dilakukan secara online melalui link yang tersedia di Instagram resmi @diesnatalis.kmhlotim. Peserta wajib mengirimkan karya orisinal sesuai tema hukum yang ditentukan."
      },
      {
          question: "Apakah Seminar Hukum Nasional berbayar?",
          answer: "Seminar Hukum Nasional dikenakan biaya kontribusi (HTM) yang terjangkau, sudah termasuk sertifikat digital, snack, dan materi dari narasumber ahli. Detail harga akan diinfokan di Instagram."
      },
      {
          question: "Kapan dan di mana malam puncak dilaksanakan?",
          answer: "Malam puncak Dies Natalis ke-6 akan dilaksanakan pada tanggal 2 April 2026 bertempat di Taman Budaya. Acara ini akan menampilkan pentas seni budaya dan penganugerahan pemenang lomba."
      },
      {
          question: "Bagaimana jika saya ingin berdonasi untuk Santunan Panti Asuhan?",
          answer: "Kami sangat mengapresiasi donasi Anda. Donasi dapat berupa uang tunai melalui transfer ke rekening panitia (BRI: 1974 5310 50 a.n Azka Wigantari) atau barang sembako yang dapat diantar langsung ke Sekretariat Panitia."
      },
      {
          question: "Apakah peserta mendapatkan sertifikat?",
          answer: "Ya, seluruh peserta Seminar Hukum dan pemenang lomba akan mendapatkan e-Sertifikat resmi yang ditandatangani oleh panitia dan pihak Fakultas Hukum."
      }
  ];

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen animate-fadeIn">
      
      {/* Header Section */}
      <div className="bg-navy-900 text-white py-12 md:py-16 mb-8 md:mb-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-sky-500 opacity-10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Pusat Informasi</h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm md:text-lg">
            Media komunikasi resmi Dies Natalis KMH LOTIM ke-6. <br className="hidden md:block"/>
            Informasi lengkap seputar kegiatan dan partisipasi.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Left Column: Sponsorship & Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            
            {/* SPONSORSHIP CARD (HIGHLIGHT) */}
            <div className="bg-gradient-to-br from-navy-900 to-navy-800 text-white p-5 md:p-6 rounded-2xl shadow-xl border border-navy-700 relative overflow-hidden group">
                {/* Decorative Effect */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-5 rounded-full -mr-10 -mt-10 blur-3xl group-hover:opacity-10 transition-opacity"></div>
                
                <h3 className="text-lg md:text-xl font-bold mb-2 flex items-center gap-2 relative z-10">
                    <CreditCard className="text-amber-400" size={20} /> Sponsorship & Donasi
                </h3>
                <p className="text-slate-300 text-xs md:text-sm mb-6 leading-relaxed relative z-10">
                    Dukung kesuksesan acara ini. Dana partisipasi dapat disalurkan melalui rekening resmi bendahara panitia:
                </p>

                <div className="bg-white/10 backdrop-blur-md p-4 md:p-5 rounded-xl border border-white/10 mb-5 relative z-10">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Bank BRI</span>
                        <button 
                            onClick={handleCopyRekening}
                            className="text-slate-300 hover:text-white transition-colors flex items-center gap-1 text-xs"
                            title="Salin Nomor Rekening"
                        >
                            {copied ? <span className="text-green-400 font-bold">Tersalin!</span> : 'Salin'}
                            {copied ? <Check size={14} className="text-green-400"/> : <Copy size={14} />}
                        </button>
                    </div>
                    {/* Responsive font size for account number */}
                    <div className="text-xl md:text-2xl font-mono font-bold tracking-wider mb-1 text-white tabular-nums truncate">
                        1974 5310 50
                    </div>
                    <div className="text-xs md:text-sm text-slate-300 uppercase font-medium truncate">
                        a.n. AZKA WIGANTARI
                    </div>
                </div>

                <a
                    href="https://wa.me/6281908081234?text=Halo%20Kak%20Azka,%20saya%20ingin%20konfirmasi%20transfer%20sponsorship%20untuk%20Dies%20Natalis%20KMH..."
                    target="_blank"
                    rel="noreferrer"
                    className="block w-full text-center bg-amber-500 hover:bg-amber-600 text-navy-900 font-bold py-3 rounded-lg transition-all shadow-lg hover:shadow-amber-500/20 relative z-10 text-sm md:text-base"
                >
                    Konfirmasi Transfer
                </a>
            </div>

            {/* Main Office Card */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <h3 className="text-lg md:text-xl font-bold text-navy-900 mb-6 flex items-center gap-2">
                <MapPin className="text-navy-500" /> Sekretariat
              </h3>
              <address className="not-italic text-slate-600 space-y-4 text-sm leading-relaxed">
                <p className="font-medium text-navy-900">Gedung PKM Fakultas Hukum</p>
                <p>Universitas Mataram</p>
                <p>Jl. Majapahit No. 62, Gomong, Kec. Selaparang, Kota Mataram, Nusa Tenggara Barat 83125</p>
                
                <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
                    <a href="mailto:kmhlotim@unram.ac.id" className="flex items-center gap-3 text-slate-600 hover:text-navy-900 transition-colors group">
                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-navy-50">
                            <Mail size={16} />
                        </div>
                        kmhlotim@unram.ac.id
                    </a>
                    <a href="https://instagram.com/diesnatalis.kmhlotim" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-600 hover:text-navy-900 transition-colors group">
                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-navy-50">
                            <Instagram size={16} />
                        </div>
                        @diesnatalis.kmhlotim
                    </a>
                </div>
              </address>
            </div>

            {/* Contact Persons List (Simplified) */}
            <div>
              <h3 className="text-lg font-bold text-navy-900 mb-4 flex items-center gap-2">
                <Phone size={20} /> Narahubung Cepat
              </h3>
              <div className="space-y-3">
                {contactPersons.map((person, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 flex items-center justify-between group hover:border-navy-300 transition-colors">
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{person.role}</p>
                      <p className="font-bold text-navy-900 text-sm md:text-base">{person.name}</p>
                    </div>
                    <a 
                      href={`https://wa.me/${person.phone.replace(/[^0-9]/g, '')}`} 
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center hover:bg-green-600 hover:text-white transition-all shadow-sm"
                      title="Chat WhatsApp"
                    >
                      <Phone size={18} />
                    </a>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: FAQ Section (Replaces Form) */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 md:p-10 sticky top-24">
                
                <div className="mb-8 flex flex-col md:flex-row md:items-center gap-4 border-b border-slate-100 pb-6">
                    <div className="w-12 h-12 bg-navy-50 rounded-full text-navy-900 flex items-center justify-center flex-shrink-0">
                        <HelpCircle size={28} />
                    </div>
                    <div>
                        <h3 className="text-xl md:text-2xl font-bold text-navy-900">Pertanyaan Umum (FAQ)</h3>
                        <p className="text-slate-500 text-sm mt-1">
                            Temukan jawaban cepat untuk pertanyaan yang sering diajukan terkait Dies Natalis KMH LOTIM ke-6.
                        </p>
                    </div>
                </div>

                <div className="space-y-4">
                    {faqData.map((item, idx) => {
                        const isOpen = openFaqIndex === idx;
                        return (
                            <div 
                                key={idx} 
                                className={`border rounded-xl transition-all duration-300 overflow-hidden ${
                                    isOpen ? 'border-navy-200 bg-navy-50/50 shadow-sm' : 'border-slate-200 hover:border-navy-200 bg-white'
                                }`}
                            >
                                <button 
                                    onClick={() => toggleFaq(idx)}
                                    className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                                >
                                    <h4 className={`font-bold text-sm md:text-base pr-4 ${isOpen ? 'text-navy-900' : 'text-slate-700'}`}>
                                        {item.question}
                                    </h4>
                                    <div className={`flex-shrink-0 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-navy-900' : ''}`}>
                                        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                    </div>
                                </button>
                                
                                <div 
                                    className={`px-5 text-sm md:text-base text-slate-600 leading-relaxed overflow-hidden transition-all duration-300 ${
                                        isOpen ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                                >
                                    <div className="pt-2 border-t border-navy-100/50">
                                        {item.answer}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 text-center">
                    <p className="text-slate-500 text-sm mb-4">Masih memiliki pertanyaan lain?</p>
                    <a 
                        href="https://instagram.com/diesnatalis.kmhlotim" 
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-navy-900 font-bold px-6 py-3 rounded-lg transition-colors text-sm"
                    >
                        <Instagram size={18} /> DM Instagram Kami
                    </a>
                </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactView;