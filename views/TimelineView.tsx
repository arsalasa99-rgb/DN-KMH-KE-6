import React from 'react';
import { TIMELINE_EVENTS } from '../constants';
import { CheckCircle, Clock, Calendar } from 'lucide-react';

const TimelineView: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-navy-950 min-h-screen overflow-hidden relative">
      {/* Background Image Setup - Stacked for scrolling */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="w-full h-full relative">
            {/* Layer 1 */}
            <img 
                src="https://i.ibb.co.com/M42sjzx/Gemini-Generated-Image-g3n9ing3n9ing3n9-1.png" 
                alt="Background Layer 1" 
                className="w-full h-screen object-cover object-center absolute top-0 left-0"
            />
            {/* Layer 2 */}
            <img 
                src="https://i.ibb.co.com/M42sjzx/Gemini-Generated-Image-g3n9ing3n9ing3n9-1.png" 
                alt="Background Layer 2" 
                className="w-full h-screen object-cover object-center absolute top-[100vh] left-0"
            />
            {/* Layer 3 */}
            <img 
                src="https://i.ibb.co.com/M42sjzx/Gemini-Generated-Image-g3n9ing3n9ing3n9-1.png" 
                alt="Background Layer 3" 
                className="w-full h-screen object-cover object-center absolute top-[200vh] left-0"
            />
        </div>
        <div className="fixed inset-0 bg-navy-950/85 mix-blend-multiply"></div>
        <div className="fixed inset-0 bg-gradient-to-b from-navy-950 via-transparent to-navy-950/90"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <div className="text-center mb-12 md:mb-20 reveal">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">Jejak Langkah</h2>
          <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto font-light tracking-wide">
            Timeline persiapan hingga puncak acara Dies Natalis KMH LOTIM ke-6.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Gradient Vertical Line (The Spine) - Adjusted colors for dark bg */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1.5 bg-gradient-to-b from-sky-500 via-sky-300 to-navy-900 transform md:-translate-x-1/2 rounded-full overflow-hidden shadow-[0_0_15px_rgba(56,189,248,0.5)]">
             <div className="absolute top-0 left-0 w-full h-full bg-white/50 animate-pulse-slow"></div>
          </div>

          <div className="space-y-12 md:space-y-24 pb-12">
            {TIMELINE_EVENTS.map((event, index) => {
              const isEven = index % 2 === 0;
              const isCompleted = event.status === 'completed';

              return (
                <div key={event.id} className={`relative flex items-center md:justify-between group ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  
                  {/* Central Node */}
                  <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-20 reveal">
                    <div className={`w-5 h-5 md:w-8 md:h-8 rounded-full border-4 transition-all duration-500 relative flex items-center justify-center
                        ${isCompleted 
                            ? 'bg-sky-500 border-sky-200 shadow-[0_0_20px_rgba(56,189,248,0.8)] scale-110' 
                            : 'bg-navy-800 border-slate-600 shadow-sm'
                        }
                    `}>
                        {isCompleted && (
                            <div className="absolute inset-0 rounded-full bg-sky-400 animate-ping opacity-40"></div>
                        )}
                        <div className={`w-2 h-2 rounded-full ${isCompleted ? 'bg-white' : 'bg-slate-400'}`}></div>
                    </div>
                  </div>

                  {/* Horizontal Connector Line */}
                  <div className={`hidden md:block absolute top-1/2 h-0.5 bg-slate-600/50 transition-all duration-700 group-hover:bg-sky-400 group-hover:w-24 w-12
                    ${isEven ? 'left-1/2 ml-1' : 'right-1/2 mr-1'}
                  `}></div>

                  {/* Spacer */}
                  <div className="hidden md:block w-1/2"></div>

                  {/* Content Card */}
                  <div className={`w-full pl-16 md:pl-0 md:w-[42%] relative reveal`} style={{ transitionDelay: `${index * 100}ms` }}>
                    <div className={`
                        p-6 md:p-8 rounded-2xl border transition-all duration-500 relative overflow-hidden backdrop-blur-md group-hover:-translate-y-2
                        ${isCompleted 
                            ? 'bg-white/95 border-sky-200 shadow-[0_10px_30px_rgba(0,0,0,0.3)]' 
                            : 'bg-white/10 border-white/10 hover:bg-white/90 hover:border-sky-300'
                        }
                    `}>
                         {/* Decorative Background Blob */}
                         <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-10 transition-transform duration-700 group-hover:scale-150
                            ${isCompleted ? 'bg-navy-900' : 'bg-amber-500'}
                         `}></div>

                        <div className="relative z-10">
                            {/* Date & Status Header */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                                <span className={`text-xs md:text-sm font-bold px-3 py-1 rounded-full flex items-center gap-2 w-fit
                                    ${isCompleted ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}
                                `}>
                                    {isCompleted ? <CheckCircle size={14} /> : <Clock size={14} />}
                                    {isCompleted ? 'Selesai' : 'Segera'}
                                </span>
                                <span className={`font-mono text-sm font-bold flex items-center gap-2 ${isCompleted ? 'text-slate-500' : 'text-slate-200 group-hover:text-slate-600 transition-colors'}`}>
                                    <Calendar size={14} className={isCompleted ? 'text-navy-900' : 'text-sky-300 group-hover:text-navy-900'}/> {event.date}
                                </span>
                            </div>

                            <h3 className={`text-xl md:text-2xl font-bold mb-3 leading-tight transition-colors ${isCompleted ? 'text-navy-900 group-hover:text-sky-700' : 'text-white group-hover:text-navy-900'}`}>
                                {event.title}
                            </h3>
                            
                            <p className={`leading-relaxed text-sm md:text-base ${isCompleted ? 'text-slate-600' : 'text-slate-300 group-hover:text-slate-600'}`}>
                                {event.description}
                            </p>
                        </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
          
           {/* Finish Line */}
           <div className="flex justify-center mt-8 relative z-10 reveal delay-300">
                <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-white px-8 py-3 rounded-full font-bold shadow-[0_0_25px_rgba(245,158,11,0.5)] border-4 border-white/20 flex items-center gap-2 transform hover:scale-110 transition-transform cursor-default text-base md:text-lg z-20">
                    🎉 Puncak Acara
                </div>
           </div>

        </div>
      </div>
    </div>
  );
};

export default TimelineView;