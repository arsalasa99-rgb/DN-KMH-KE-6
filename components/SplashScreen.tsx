import React, { useEffect, useState } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Total durasi loading sekitar 4.5 detik
    const duration = 4500; 
    const intervalTime = 50; 
    const steps = duration / intervalTime;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = Math.min((currentStep / steps) * 100, 100);
      setLoadingProgress(progress);

      if (progress >= 100) {
        clearInterval(interval);
        
        // Jeda sebentar saat 100% agar user melihat teks penuh (1 detik)
        setTimeout(() => {
          setIsExiting(true); // Trigger animasi exit
          
          // Tunggu animasi exit selesai (1 detik) baru masuk app
          setTimeout(() => {
            onComplete();
          }, 1000);
        }, 800);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-navy-950 transition-all duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        isExiting ? '-translate-y-full opacity-0 scale-105' : 'translate-y-0 opacity-100 scale-100'
      }`}
    >
      {/* 1. BACKGROUND IMAGE with Ken Burns Effect */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.ibb.co.com/M42sjzx/Gemini-Generated-Image-g3n9ing3n9ing3n9-1.png" 
          alt="Splash Background" 
          className="w-full h-full object-cover animate-ken-burns opacity-50"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/90 to-navy-950/70 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* 2. DECORATIVE GLOWS */}
      <div className="absolute inset-0 z-1 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-sky-600/20 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-purple-600/15 rounded-full blur-[100px] animate-pulse-slow delay-1000"></div>
      </div>

      {/* 3. MAIN CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full max-w-4xl">
        
        {/* Logo Container - Floating */}
        <div className="relative mb-12 animate-float">
            {/* Glowing Ring */}
            <div className="absolute inset-0 bg-sky-400/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="relative bg-white/5 backdrop-blur-xl p-6 rounded-3xl border border-white/10 shadow-[0_0_60px_rgba(56,189,248,0.15)]">
                <img 
                    src="https://i.ibb.co.com/k6cGgdMH/logo-dn.png" 
                    alt="Logo Dies Natalis KMH" 
                    className="w-32 h-32 md:w-52 md:h-52 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" 
                />
            </div>
        </div>

        {/* Text Content - Animated per section */}
        <div className="space-y-4 mb-16 relative">
            {/* Top Text - Blur In + Tracking Expand */}
            <h2 className="text-sky-300 text-xs md:text-sm font-bold tracking-[0.2em] uppercase animate-tracking-in opacity-0" style={{ animationDelay: '0.2s' }}>
                SELAMAT DATANG DI WEBSITE
            </h2>
            
            {/* Main Title - Blur In + Scale Up */}
            <div className="relative">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight drop-shadow-2xl animate-blur-in opacity-0" style={{ animationDelay: '0.5s' }}>
                    DIES NATALIS
                </h1>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-white to-sky-400 animate-blur-in opacity-0" style={{ animationDelay: '0.8s' }}>
                    KE-6
                </h1>
            </div>

            {/* Subtext - Fade Up */}
            <p className="text-slate-400 text-xs md:text-sm tracking-[0.3em] mt-6 animate-fade-in-up opacity-0" style={{ animationDelay: '1.2s' }}>
                KMH LOTIM - FAKULTAS HUKUM UNRAM
            </p>
        </div>

        {/* 4. LOADING INDICATOR (Futuristic Line) */}
        <div className="w-full max-w-xs mx-auto relative h-1 bg-white/10 rounded-full overflow-hidden">
            <div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-sky-500 via-white to-sky-500 shadow-[0_0_20px_#38bdf8]"
                style={{ 
                    width: `${loadingProgress}%`,
                    transition: 'width 0.1s linear'
                }}
            ></div>
        </div>
        
        <div className="mt-3 text-[10px] text-sky-200/50 font-mono tracking-widest animate-pulse">
            MEMUAT DATA... {Math.round(loadingProgress)}%
        </div>

      </div>

    </div>
  );
};

export default SplashScreen;