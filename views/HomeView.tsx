import React from 'react';
import Hero from '../components/Hero';
import { View } from '../types';
import { ShieldCheck, Users, Target, BookOpen } from 'lucide-react';

interface HomeViewProps {
  onNavigate: (view: View) => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  return (
    <div className="animate-fadeIn">
      <Hero onNavigate={onNavigate} />
      
      {/* Latar Belakang & Tujuan */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-navy-900 mb-6 border-l-4 border-navy-900 pl-4">
                Tentang Kegiatan
              </h2>
              <p className="text-slate-600 mb-4 leading-relaxed text-justify">
                Keluarga Mahasiswa Hukum Lombok Timur (KMH LOTIM) Fakultas Hukum Universitas Mataram adalah wadah paguyuban berasaskan kekeluargaan yang berdiri sejak 10 Maret 2020. Organisasi ini bertujuan mempererat silaturahmi serta menjalankan pengabdian masyarakat melalui kegiatan akademik, minat, dan bakat.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed text-justify">
                Dies Natalis ke-6 ini bukan sekadar perayaan, melainkan momentum refleksi untuk memperkuat komitmen kami dalam mengawal isu-isu hukum dan memberikan dampak nyata bagi masyarakat. Kegiatan ini diharapkan mendorong peran aktif mahasiswa dalam kerja sama dengan instansi pemerintah dan masyarakat luas.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 flex items-start gap-3">
                    <Users className="text-navy-900 w-6 h-6 mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="font-bold text-navy-900 text-sm">Solidaritas</h3>
                        <p className="text-xs text-slate-500 mt-1">Mempererat silaturahmi alumni, pengurus, dan anggota.</p>
                    </div>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 flex items-start gap-3">
                    <Target className="text-navy-900 w-6 h-6 mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="font-bold text-navy-900 text-sm">Kontribusi Nyata</h3>
                        <p className="text-xs text-slate-500 mt-1">Kerja nyata untuk kampus dan masyarakat Lombok Timur.</p>
                    </div>
                </div>
              </div>
            </div>
            
            <div className="bg-navy-50 rounded-2xl p-8 border border-navy-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-navy-200 rounded-full filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
                <h3 className="text-xl font-bold text-navy-900 mb-4 flex items-center gap-2">
                    <BookOpen className="text-navy-900" size={24}/>
                    Filosofi Tema
                </h3>
                <blockquote className="text-lg font-serif italic text-navy-900 mb-6 leading-relaxed">
                    "Menjaga Simfoni Biru di Bawah Naungan Sang Merah, Harmoni Justitia di Bumi Patuh Karya"
                </blockquote>
                <div className="space-y-4 text-sm text-slate-700">
                    <p>
                        <strong className="text-navy-900">Simfoni Biru:</strong> Melambangkan hukum, ketertiban, dan keadilan yang harus dijaga keseimbangannya.
                    </p>
                    <p>
                        <strong className="text-red-700">Naungan Sang Merah:</strong> Merepresentasikan keberanian, semangat juang, dan nilai kebangsaan sebagai fondasi penegakan hukum.
                    </p>
                    <p>
                        <strong className="text-navy-700">Harmoni Justitia:</strong> Keadilan yang tidak kaku, namun selaras dengan nilai sosial dan moral.
                    </p>
                    <p>
                        <strong className="text-green-700">Bumi Patuh Karya:</strong> Representasi Lombok Timur yang menjunjung tinggi kepatuhan hukum melalui kerja nyata.
                    </p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics/Impact Strip */}
      <section className="py-12 bg-navy-900 text-white">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
                <div className="text-4xl font-bold text-white mb-2">6</div>
                <div className="text-sm text-slate-300 uppercase tracking-wider">Tahun Berkarya</div>
            </div>
            <div>
                <div className="text-4xl font-bold text-white mb-2">4</div>
                <div className="text-sm text-slate-300 uppercase tracking-wider">Agenda Utama</div>
            </div>
            <div>
                <div className="text-4xl font-bold text-white mb-2">Apr</div>
                <div className="text-sm text-slate-300 uppercase tracking-wider">2026</div>
            </div>
            <div>
                <div className="text-4xl font-bold text-white mb-2">100%</div>
                <div className="text-sm text-slate-300 uppercase tracking-wider">Dedikasi</div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default HomeView;