import React from 'react';
import { View } from '../types';
import { Calculator, Phone } from 'lucide-react';

interface HeroProps {
  onNavigate: (view: View) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-navy-950 pt-20 pb-10">
      {/* Pattern Background */}
      <div className="absolute inset-0 z-0">
        {/* Base Color */}
        <div className="absolute inset-0 bg-navy-950"></div>
        
        {/* Geometric Pattern Overlay (CSS implementation of the user's requested pattern) */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Gradient Overlay for Depth and Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/90 to-navy-900/60" />
        
        {/* Additional Decorative Blobs for "Simfoni Biru" vibe */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-sky-600/10 rounded-full blur-[80px]"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center flex flex-col items-center">
        <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white text-[10px] md:text-sm font-medium mb-4 md:mb-6 animate-fadeIn backdrop-blur-sm">
          Keluarga Mahasiswa Hukum Lombok Timur
        </span>
        
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight tracking-tight max-w-5xl animate-slideUp drop-shadow-2xl">
          Dies Natalis <span className="text-sky-300">Ke-6</span>
        </h1>
        
        <div className="max-w-4xl mx-auto mb-8 md:mb-10 animate-slideUp delay-100 px-2">
            <p className="text-base sm:text-lg md:text-2xl text-slate-200 font-light italic leading-relaxed drop-shadow-md">
            "Menjaga Simfoni Biru di Bawah Naungan Sang Merah,<br className="hidden md:block"/> Harmoni Justitia di Bumi Patuh Karya"
            </p>
        </div>

        <div className="flex flex-col w-full sm:w-auto sm:flex-row gap-3 md:gap-4 animate-slideUp delay-300 px-4">
          <button 
            onClick={() => onNavigate(View.RAB)}
            className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-slate-100 text-navy-950 font-bold rounded-lg transition-all flex items-center justify-center gap-2 text-sm md:text-base shadow-lg hover:shadow-white/20"
          >
            <Calculator size={18} />
            Cek Anggaran (RAB)
          </button>
          <button 
            onClick={() => onNavigate(View.CONTACT)}
            className="w-full sm:w-auto px-6 py-3 bg-navy-900/50 border border-slate-500 hover:border-slate-300 text-white hover:bg-navy-800/50 font-medium rounded-lg transition-all flex items-center justify-center gap-2 text-sm md:text-base backdrop-blur-md"
          >
            <Phone size={18} />
            Hubungi Panitia
          </button>
        </div>
      </div>

      {/* Decorative Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-16 md:h-24 bg-gradient-to-t from-white to-transparent opacity-5" />
    </section>
  );
};

export default Hero;