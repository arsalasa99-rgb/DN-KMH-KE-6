import React from 'react';
import Hero from '../components/Hero';
import { View } from '../types';
import { Users, Target, BookOpen } from 'lucide-react';

interface HomeViewProps {
  onNavigate: (view: View) => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  return (
    <div className="overflow-hidden">
      <Hero onNavigate={onNavigate} />
      
      {/* Latar Belakang & Tujuan */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="reveal">
              <h2 className="text-3xl font-bold text-navy-900 mb-6 border-l-8 border-navy-900 pl-6 relative">
                Tentang Kegiatan
                <span className="absolute -left-2 top-0 w-8 h-8 bg-navy-900/20 rounded-full blur-xl -z-10"></span>
              </h2>
              <div className="space-y-4">
                <p className="text-slate-600 leading-relaxed text-justify hover:text-slate-900 transition-colors duration-300">
                    Keluarga Mahasiswa Hukum Lombok Timur (KMH LOTIM) Fakultas Hukum Universitas Mataram adalah wadah paguyuban berasaskan kekeluargaan yang berdiri sejak 10 Maret 2020. Organisasi ini bertujuan mempererat silaturahmi serta menjalankan pengabdian masyarakat melalui kegiatan akademik, minat, dan bakat.
                </p>
                <p className="text-slate-600 leading-relaxed text-justify hover:text-slate-900 transition-colors duration-300">
                    Dies Natalis ke-6 ini bukan sekadar perayaan, melainkan momentum refleksi untuk memperkuat komitmen kami dalam mengawal isu-isu hukum dan memberikan dampak nyata bagi masyarakat.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group reveal delay-100">
                    <div className="bg-navy-50 w-10 h-10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-navy-900 transition-colors duration-300">
                         <Users className="text-navy-900 w-5 h-5 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                        <h3 className="font-bold text-navy-900 text-sm group-hover:text-sky-600 transition-colors">Solidaritas</h3>
                        <p className="text-xs text-slate-500 mt-1">Mempererat silaturahmi alumni & pengurus.</p>
                    </div>
                </div>
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group reveal delay-200">
                     <div className="bg-navy-50 w-10 h-10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-navy-900 transition-colors duration-300">
                        <Target className="text-navy-900 w-5 h-5 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                        <h3 className="font-bold text-navy-900 text-sm group-hover:text-sky-600 transition-colors">Kontribusi Nyata</h3>
                        <p className="text-xs text-slate-500 mt-1">Kerja nyata untuk masyarakat Lombok Timur.</p>
                    </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-2xl relative overflow-hidden group hover:shadow-navy-900/20 transition-all duration-500 reveal delay-300">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-sky-100 to-indigo-100 rounded-full filter blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2 group-hover:scale-125 transition-transform duration-700"></div>
                
                <h3 className="text-xl font-bold text-navy-900 mb-6 flex items-center gap-3 relative z-10">
                    <div className="p-2 bg-navy-900 rounded-lg text-white shadow-lg group-hover:rotate-12 transition-transform duration-300">
                        <BookOpen size={20}/>
                    </div>
                    Filosofi Tema
                </h3>
                
                <blockquote className="text-lg font-serif italic text-navy-800 mb-8 leading-relaxed relative z-10 pl-4 border-l-2 border-amber-400">
                    "Menjaga Simfoni Biru di Bawah Naungan Sang Merah, Harmoni Justitia di Bumi Patuh Karya"
                </blockquote>
                
                <div className="space-y-4 text-sm relative z-10">
                    {[
                        { label: 'Simfoni Biru', desc: 'Hukum, ketertiban, dan keadilan.', color: 'text-sky-700' },
                        { label: 'Sang Merah', desc: 'Keberanian & semangat juang.', color: 'text-red-600' },
                        { label: 'Harmoni Justitia', desc: 'Keadilan yang selaras nilai sosial.', color: 'text-indigo-700' },
                        { label: 'Bumi Patuh Karya', desc: 'Identitas Lombok Timur.', color: 'text-emerald-700' },
                    ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors">
                            <div className={`w-2 h-2 rounded-full mt-1.5 ${item.color.replace('text', 'bg')}`}></div>
                            <p className="text-slate-600">
                                <strong className={`${item.color} block mb-0.5`}>{item.label}</strong>
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics/Impact Strip - Animated Counters */}
      <section className="py-16 bg-navy-900 text-white relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute w-96 h-96 bg-sky-500 rounded-full mix-blend-overlay filter blur-3xl animate-blob -top-20 -left-20"></div>
            <div className="absolute w-96 h-96 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000 bottom-0 right-0"></div>
        </div>

        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
            {[
                { val: '6', label: 'Tahun Berkarya', delay: '0' },
                { val: '4', label: 'Agenda Utama', delay: '100' },
                { val: '2026', label: 'Dies Natalis VI', delay: '200' },
                { val: '100%', label: 'Dedikasi', delay: '300' }
            ].map((stat, idx) => (
                <div key={idx} className={`group hover:-translate-y-2 transition-transform duration-300 reveal`} style={{transitionDelay: `${idx * 100}ms`}}>
                    <div className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 mb-2 group-hover:to-sky-300 transition-all">
                        {stat.val}
                    </div>
                    <div className="text-xs md:text-sm text-sky-200 uppercase tracking-widest font-semibold group-hover:text-white transition-colors">
                        {stat.label}
                    </div>
                </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default HomeView;