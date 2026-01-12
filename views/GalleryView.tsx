import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../constants';
import { X, ChevronLeft, ChevronRight, PlayCircle, Camera, History } from 'lucide-react';

const GalleryView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'DN6' | 'DN5'>('DN6');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // Filter items based on active tab
  const filteredItems = GALLERY_ITEMS.filter(item => item.category === activeTab);

  const openLightbox = (index: number) => setSelectedImageIndex(index);
  const closeLightbox = () => setSelectedImageIndex(null);
  
  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
        setSelectedImageIndex((selectedImageIndex + 1) % filteredItems.length);
    }
  };
  
  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
        setSelectedImageIndex((selectedImageIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const handleTabChange = (tab: 'DN6' | 'DN5') => {
      setActiveTab(tab);
      setSelectedImageIndex(null); // Close lightbox if open to prevent index mismatch
  };

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen animate-fadeIn">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-2">Galeri Kegiatan</h2>
          <p className="text-sm md:text-base text-slate-500">Momen kebersamaan dalam bingkai visual.</p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-8 md:mb-12">
            <div className="bg-slate-100 p-1 rounded-full inline-flex relative overflow-x-auto max-w-full">
                <button
                    onClick={() => handleTabChange('DN6')}
                    className={`flex items-center gap-2 px-4 md:px-6 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 relative z-10 whitespace-nowrap ${
                        activeTab === 'DN6' 
                        ? 'bg-navy-900 text-white shadow-md' 
                        : 'text-slate-500 hover:text-navy-700'
                    }`}
                >
                    <Camera size={14} className="md:w-4 md:h-4" />
                    Dies Natalis Ke-6
                </button>
                
                <button
                    onClick={() => handleTabChange('DN5')}
                    className={`flex items-center gap-2 px-4 md:px-6 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 relative z-10 whitespace-nowrap ${
                        activeTab === 'DN5' 
                        ? 'bg-navy-900 text-white shadow-md' 
                        : 'text-slate-500 hover:text-navy-700'
                    }`}
                >
                    <History size={14} className="md:w-4 md:h-4" />
                    Flashback (DN 5)
                </button>
            </div>
        </div>

        {/* Gallery Grid - 2 cols on mobile, 3 on tablet+ */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 animate-fadeIn" key={activeTab}>
          {filteredItems.map((item, index) => (
            <div 
              key={item.id} 
              className="group relative aspect-square overflow-hidden rounded-lg md:rounded-xl cursor-pointer bg-slate-100 border border-slate-200"
              onClick={() => openLightbox(index)}
            >
              <img 
                src={item.url} 
                alt={item.caption} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/40 transition-colors duration-300 flex items-center justify-center">
                 {item.type === 'video' && <PlayCircle className="text-white opacity-0 group-hover:opacity-100 transition-opacity transform scale-75 group-hover:scale-100" size={48} />}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-2 md:p-4 bg-gradient-to-t from-navy-900/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-xs md:text-sm font-medium truncate">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
            <div className="text-center py-20 bg-slate-50 rounded-xl border border-dashed border-slate-200">
                <p className="text-slate-400">Belum ada dokumentasi untuk kategori ini.</p>
            </div>
        )}
      </div>

      {/* Lightbox Overlay */}
      {selectedImageIndex !== null && filteredItems[selectedImageIndex] && (
        <div 
            className="fixed inset-0 z-[100] bg-navy-950/95 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
            onClick={closeLightbox}
        >
            {/* Close Button - Moved safely into visual area */}
            <button className="absolute top-4 right-4 md:top-6 md:right-6 text-white hover:text-sky-400 transition-colors bg-black/20 p-2 rounded-full z-[110]" onClick={closeLightbox}>
                <X size={24} />
            </button>

            <button 
                className="absolute left-2 md:left-8 text-white hover:text-sky-400 transition-colors p-2 md:p-3 bg-black/20 rounded-full hover:bg-white/20 z-[105]"
                onClick={prevImage}
            >
                <ChevronLeft size={24} className="md:w-8 md:h-8" />
            </button>

            <div className="max-w-5xl max-h-[85vh] w-full flex flex-col items-center justify-center relative" onClick={(e) => e.stopPropagation()}>
                <div className="relative rounded-lg overflow-hidden shadow-2xl border border-white/10">
                    <img 
                        src={filteredItems[selectedImageIndex].url} 
                        alt={filteredItems[selectedImageIndex].caption} 
                        className="max-w-full max-h-[70vh] md:max-h-[80vh] object-contain"
                    />
                </div>
                <div className="mt-4 text-center px-4">
                    <h3 className="text-white font-bold text-base md:text-lg">{filteredItems[selectedImageIndex].caption}</h3>
                    <p className="text-slate-400 text-xs md:text-sm mt-1">
                        {activeTab === 'DN6' ? 'Dokumentasi Dies Natalis ke-6' : 'Arsip Dies Natalis ke-5'}
                    </p>
                </div>
                <div className="mt-4 text-white/50 text-[10px] md:text-xs">
                    {selectedImageIndex + 1} / {filteredItems.length}
                </div>
            </div>

            <button 
                className="absolute right-2 md:right-8 text-white hover:text-sky-400 transition-colors p-2 md:p-3 bg-black/20 rounded-full hover:bg-white/20 z-[105]"
                onClick={nextImage}
            >
                <ChevronRight size={24} className="md:w-8 md:h-8" />
            </button>
        </div>
      )}
    </div>
  );
};

export default GalleryView;