import React from 'react';
import { TIMELINE_EVENTS } from '../constants';
import { CheckCircle, Clock, Calendar, AlertCircle } from 'lucide-react';

const TimelineView: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen animate-fadeIn overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center mb-12 md:mb-20 relative z-10">
          <h2 className="text-2xl md:text-5xl font-bold text-navy-900 mb-2 md:mb-4">Jejak Langkah</h2>
          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
            Timeline persiapan hingga puncak acara Dies Natalis KMH LOTIM ke-6.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Gradient Vertical Line (The Spine) - Adjusted for mobile (left-6 instead of left-8) */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-navy-900 via-sky-500 to-slate-200 transform md:-translate-x-1/2 rounded-full"></div>

          <div className="space-y-10 md:space-y-24 pb-12">
            {TIMELINE_EVENTS.map((event, index) => {
              const isEven = index % 2 === 0;
              const isCompleted = event.status === 'completed';

              return (
                <div key={event.id} className={`relative flex items-center md:justify-between group ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  
                  {/* Central Node - Adjusted left position for mobile */}
                  <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-20">
                    <div className={`w-4 h-4 md:w-6 md:h-6 rounded-full border-4 transition-all duration-500 relative
                        ${isCompleted 
                            ? 'bg-navy-900 border-navy-200 shadow-[0_0_15px_rgba(17,56,93,0.5)] group-hover:scale-150' 
                            : 'bg-white border-slate-300 shadow-sm group-hover:border-sky-400 group-hover:scale-125'
                        }
                    `}>
                        {!isCompleted && index === TIMELINE_EVENTS.filter(e => e.status === 'completed').length && (
                             <span className="absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75 animate-ping"></span>
                        )}
                    </div>
                  </div>

                  {/* Horizontal Connector Line (Desktop Only) */}
                  <div className={`hidden md:block absolute top-1/2 h-0.5 w-16 bg-slate-200 transition-all duration-500 group-hover:bg-navy-300
                    ${isEven ? 'left-1/2 ml-0.5' : 'right-1/2 mr-0.5'}
                  `}></div>

                  {/* Spacer */}
                  <div className="hidden md:block w-1/2"></div>

                  {/* Content Card - Adjusted padding left for mobile */}
                  <div className={`w-full pl-12 md:pl-0 md:w-[42%] relative`}>
                    <div className={`
                        p-4 md:p-8 rounded-xl md:rounded-2xl border transition-all duration-500 relative overflow-hidden backdrop-blur-sm
                        ${isCompleted 
                            ? 'bg-white border-slate-100 shadow-md group-hover:shadow-2xl group-hover:-translate-y-1' 
                            : 'bg-white/60 border-dashed border-slate-300 shadow-sm hover:bg-white hover:border-solid hover:border-sky-300'
                        }
                    `}>
                         {/* Decorative Background Blob */}
                         <div className={`absolute -top-10 -right-10 w-20 h-20 md:w-32 md:h-32 rounded-full opacity-10 transition-transform duration-700 group-hover:scale-150
                            ${isCompleted ? 'bg-navy-900' : 'bg-amber-500'}
                         `}></div>

                        <div className="relative z-10">
                            {/* Date & Status Header */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 md:mb-4 gap-2">
                                <span className={`text-[10px] md:text-sm font-bold px-2 md:px-3 py-1 rounded-full flex items-center gap-1 md:gap-2 w-fit
                                    ${isCompleted ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}
                                `}>
                                    {isCompleted ? <CheckCircle size={12} /> : <Clock size={12} />}
                                    {isCompleted ? 'Selesai' : 'Segera'}
                                </span>
                                <span className="font-mono text-xs md:text-sm text-slate-500 font-bold flex items-center gap-2">
                                    <Calendar size={12} className="md:w-4 md:h-4"/> {event.date}
                                </span>
                            </div>

                            <h3 className={`text-lg md:text-2xl font-bold mb-1 md:mb-3 leading-tight ${isCompleted ? 'text-navy-900' : 'text-slate-700'}`}>
                                {event.title}
                            </h3>
                            
                            <p className="text-slate-500 leading-relaxed text-xs md:text-sm">
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
           <div className="flex justify-center mt-8 relative z-10">
                <div className="bg-navy-900 text-white px-6 py-2 md:px-8 md:py-3 rounded-full font-bold shadow-xl border-4 border-white flex items-center gap-2 transform hover:scale-110 transition-transform cursor-default text-sm md:text-base">
                    🎉 Puncak Acara
                </div>
           </div>

        </div>
      </div>
    </div>
  );
};

export default TimelineView;