import React, { useState, useEffect } from 'react';
import { View } from '../types';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentView: View;
  onNavigate: (view: View) => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Beranda', view: View.HOME },
    { label: 'RAB', view: View.RAB },
    { label: 'Kegiatan', view: View.ACTIVITIES },
    { label: 'Timeline', view: View.TIMELINE },
    { label: 'Galeri', view: View.GALLERY },
    { label: 'Panitia', view: View.COMMITTEE },
    { label: 'Kontak', view: View.CONTACT },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-navy-950/95 backdrop-blur-sm shadow-md py-3' 
          : 'bg-navy-950 py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center text-white">
        {/* Logo Area */}
        <div 
          className="flex items-center gap-3 cursor-pointer group" 
          onClick={() => onNavigate(View.HOME)}
        >
          <div className="bg-white/10 p-1 rounded-lg group-hover:bg-white/20 transition-colors">
            <img 
              src="https://i.ibb.co.com/9HzZKk4Z/Screenshot-2026-01-12-103512.png" 
              alt="Logo KMH LOTIM" 
              className="w-8 h-8 object-contain rounded-md" 
            />
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-lg leading-tight tracking-wide">DIES NATALIS VI</h1>
            <span className="text-xs text-slate-300 tracking-wider">KMH LOTIM FH UNRAM</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => onNavigate(item.view)}
              className={`relative text-sm font-medium transition-colors hover:text-white py-2 ${
                currentView === item.view ? 'text-white' : 'text-slate-300'
              }`}
            >
              {item.label}
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transform origin-left transition-transform duration-300 ${
                currentView === item.view ? 'scale-x-100' : 'scale-x-0'
              }`} />
            </button>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white p-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-navy-900 border-t border-navy-800 shadow-xl md:hidden flex flex-col p-4 animate-slideDown">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  onNavigate(item.view);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-left py-3 px-2 border-b border-navy-800 last:border-0 ${
                  currentView === item.view ? 'text-white font-bold' : 'text-slate-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;