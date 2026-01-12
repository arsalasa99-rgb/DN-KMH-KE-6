import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SplashScreen from './components/SplashScreen';
import HomeView from './views/HomeView';
import ActivitiesView from './views/ActivitiesView';
import ActivityDetailView from './views/ActivityDetailView';
import TimelineView from './views/TimelineView';
import GalleryView from './views/GalleryView';
import CommitteeView from './views/CommitteeView';
import ContactView from './views/ContactView';
import RABView from './views/RABView';
import { View, Activity } from './types';
import { Instagram } from 'lucide-react';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [currentView, setCurrentView] = useState<View>(View.HOME);
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const handleNavigate = (view: View) => {
    setCurrentView(view);
    if (view !== View.ACTIVITY_DETAIL) {
      setSelectedActivity(null);
    }
  };

  const handleSelectActivity = (activity: Activity) => {
    setSelectedActivity(activity);
    setCurrentView(View.ACTIVITY_DETAIL);
  };

  const renderView = () => {
    switch (currentView) {
      case View.HOME:
        return <HomeView onNavigate={handleNavigate} />;
      case View.ACTIVITIES:
        return <ActivitiesView onSelectActivity={handleSelectActivity} />;
      case View.ACTIVITY_DETAIL:
        return selectedActivity ? (
          <ActivityDetailView 
            activity={selectedActivity} 
            onBack={() => handleNavigate(View.ACTIVITIES)} 
          />
        ) : <ActivitiesView onSelectActivity={handleSelectActivity} />;
      case View.TIMELINE:
        return <TimelineView />;
      case View.GALLERY:
        return <GalleryView />;
      case View.COMMITTEE:
        return <CommitteeView />;
      case View.CONTACT:
        return <ContactView />;
      case View.RAB:
        return <RABView />;
      default:
        return <HomeView onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800">
      
      {/* SPLASH SCREEN */}
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}

      <Header currentView={currentView} onNavigate={handleNavigate} />
      
      <main className="flex-grow">
        {/* Key prop ensures the component remounts and triggers animation on view change */}
        <div key={currentView} className="animate-fadeIn">
          {renderView()}
        </div>
      </main>

      {/* Standard Footer */}
      <footer className="bg-navy-950 text-white py-12 border-t border-navy-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <img 
                  src="https://i.ibb.co.com/9HzZKk4Z/Screenshot-2026-01-12-103512.png" 
                  alt="Logo KMH" 
                  className="w-10 h-10 object-contain rounded-md bg-white/10 p-1" 
                />
                KMH LOTIM
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Menjaga Simfoni Biru di Bawah Naungan Sang Merah, Harmoni Justitia di Bumi Patuh Karya.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-white">Tautan Cepat</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li><button onClick={() => handleNavigate(View.ACTIVITIES)} className="hover:text-white transition-colors">Kegiatan</button></li>
                <li><button onClick={() => handleNavigate(View.RAB)} className="hover:text-white transition-colors">Anggaran (RAB)</button></li>
                <li><button onClick={() => handleNavigate(View.TIMELINE)} className="hover:text-white transition-colors">Timeline</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-white">Ikuti Kami</h4>
              <div className="flex gap-4">
                <a href="https://instagram.com/diesnatalis.kmhlotim" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-pink-600 transition-colors">
                    <Instagram size={20} />
                </a>
              </div>
              <div className="mt-4 text-sm text-slate-400">
                Email: kmhlotim@unram.ac.id
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-navy-900 text-center text-xs text-slate-500">
            &copy; 2026 Dies Natalis KMH LOTIM FH UNRAM VI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;