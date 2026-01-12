import React, { useState } from 'react';
import { COMMITTEE, DIVISION_DETAILS } from '../constants';
import { 
  User, Crown, Sparkles, Quote, Users, Star
} from 'lucide-react';

const CommitteeView: React.FC = () => {
  const [activeDivision, setActiveDivision] = useState(DIVISION_DETAILS[0].key);

  // Logic to separate roles
  const penanggungJawab = COMMITTEE.find(m => m.id === 'pj');
  const coreCommittee = COMMITTEE.filter(m => ['ketua', 'sekretaris', 'bendahara'].includes(m.id));
  
  // Get members for the currently active division
  const activeMembers = COMMITTEE.filter(m => m.division === activeDivision);
  const activeCoordinator = activeMembers.find(m => m.role.includes('Koordinator'));
  const activeStaff = activeMembers.filter(m => !m.role.includes('Koordinator'));
  const activeDivisionDetails = DIVISION_DETAILS.find(d => d.key === activeDivision);

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen animate-fadeIn">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-navy-100 text-navy-900 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                <Sparkles size={14} /> Struktur Organisasi
            </div>
            <h2 className="text-2xl md:text-5xl font-bold text-navy-900 mb-2 md:mb-4">Kabinet Dies Natalis VI</h2>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
                Sinergi tim solid di balik layar yang bekerja keras mewujudkan visi "Harmoni Justitia di Bumi Patuh Karya".
            </p>
        </div>

        {/* SECTION 1: Penanggung Jawab - Compact Mobile Design */}
        {penanggungJawab && (
            <div className="flex justify-center mb-12 md:mb-16">
                <div className="group relative w-full max-w-3xl bg-white rounded-xl md:rounded-2xl p-5 md:p-8 shadow-lg md:shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100">
                     <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-navy-50 rounded-full -mr-10 -mt-10 md:-mr-20 md:-mt-20 opacity-50 blur-3xl group-hover:bg-navy-100 transition-colors"></div>
                     
                     <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10 relative z-10">
                        {/* Image Circle */}
                        <div className="relative flex-shrink-0">
                            <div className="w-28 h-28 md:w-48 md:h-48 rounded-full p-1 bg-gradient-to-br from-navy-900 to-navy-700 shadow-lg">
                                <div className="w-full h-full rounded-full overflow-hidden bg-slate-200 border-2 md:border-4 border-white">
                                    {penanggungJawab.imageUrl ? (
                                        <img 
                                            src={penanggungJawab.imageUrl} 
                                            alt={penanggungJawab.name} 
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-navy-900/30">
                                            <Crown size={40} className="md:w-[60px] md:h-[60px]" />
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-navy-900 text-white px-2 py-0.5 md:px-3 md:py-1 rounded-full text-[10px] md:text-xs font-bold shadow-md whitespace-nowrap">
                                Penanggung Jawab
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="text-center md:text-left">
                            <Quote className="text-navy-200 mb-2 md:mb-3 mx-auto md:mx-0 transform -scale-x-100 w-6 h-6 md:w-8 md:h-8" />
                            <h3 className="text-xl md:text-3xl font-bold text-navy-900 mb-1 md:mb-2">{penanggungJawab.name}</h3>
                            <div className="h-1 w-12 md:w-16 bg-navy-900 mx-auto md:mx-0 mb-2 md:mb-3 rounded-full"></div>
                            <p className="text-slate-600 leading-relaxed italic text-xs md:text-lg">
                                "Menjadikan Dies Natalis ke-6 sebagai momentum kebangkitan integritas dan solidaritas mahasiswa hukum Lombok Timur."
                            </p>
                        </div>
                     </div>
                </div>
            </div>
        )}

        {/* SECTION 2: Core Committee */}
        <div className="mb-16 md:mb-20">
            <h3 className="text-lg md:text-2xl font-bold text-navy-900 text-center mb-6 md:mb-8 relative">
                <span className="relative z-10 bg-slate-50 px-4">Badan Pengurus Harian</span>
                <div className="absolute top-1/2 left-0 w-full h-px bg-slate-200 -z-0"></div>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto px-4 md:px-0">
                {coreCommittee.map((member, idx) => (
                    <div 
                        key={member.id} 
                        className="group relative h-[300px] md:h-[400px] rounded-xl md:rounded-2xl overflow-hidden shadow-md md:shadow-lg cursor-pointer"
                    >
                        <div className="absolute inset-0 bg-slate-200">
                             {member.imageUrl ? (
                                <img 
                                    src={member.imageUrl} 
                                    alt={member.name} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                />
                             ) : (
                                <div className="w-full h-full flex items-center justify-center text-slate-400">
                                    <User size={64} />
                                </div>
                             )}
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/40 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-300"></div>
                        <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <div className="mb-1 overflow-hidden">
                                <span className={`inline-block px-2 py-0.5 rounded text-[10px] uppercase font-bold text-white mb-1 md:mb-2 shadow-sm
                                    ${idx === 0 ? 'bg-amber-500' : idx === 1 ? 'bg-emerald-500' : 'bg-sky-500'}
                                `}>
                                    {member.role}
                                </span>
                            </div>
                            <h3 className="text-lg md:text-xl font-bold text-white mb-1 drop-shadow-md">{member.name}</h3>
                            <div className="h-0.5 w-0 group-hover:w-full bg-white/50 transition-all duration-500 mb-2"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* SECTION 3: INTERACTIVE DIVISIONS */}
        <div className="max-w-6xl mx-auto">
             <h3 className="text-lg md:text-2xl font-bold text-navy-900 text-center mb-4 md:mb-6 relative">
                <span className="relative z-10 bg-slate-50 px-4">Divisi & Tim Kerja</span>
                <div className="absolute top-1/2 left-0 w-full h-px bg-slate-200 -z-0"></div>
            </h3>

            {/* Division Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-6 md:mb-8 px-2">
                {DIVISION_DETAILS.map((div) => (
                    <button
                        key={div.key}
                        onClick={() => setActiveDivision(div.key)}
                        className={`px-3 md:px-5 py-1.5 md:py-2 rounded-full text-[10px] md:text-sm font-bold transition-all duration-300 border ${
                            activeDivision === div.key 
                                ? 'bg-navy-900 text-white border-navy-900 shadow-md transform scale-105' 
                                : 'bg-white text-slate-600 border-slate-200 hover:border-navy-300 hover:bg-slate-50'
                        }`}
                    >
                        {div.key}
                    </button>
                ))}
            </div>

            {/* Active Division Content - COMPACT LAYOUT */}
            <div className="bg-white rounded-xl md:rounded-2xl shadow-lg overflow-hidden border border-slate-100 flex flex-col md:flex-row transition-all duration-500 animate-fadeIn key={activeDivision}">
                
                {/* Left Side: Photo */}
                <div className="w-full md:w-[40%] relative h-40 md:h-auto md:min-h-[400px]">
                    <img 
                        src={activeDivisionDetails?.groupPhotoUrl} 
                        alt={activeDivision}
                        className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-navy-950/10"></div>
                    
                    {/* Floating Label on Mobile ONLY */}
                    <div className="absolute bottom-3 left-3 md:hidden">
                        <h2 className="text-xl font-bold text-white drop-shadow-md">{activeDivision}</h2>
                    </div>
                </div>

                {/* Right Side: Content */}
                <div className="w-full md:w-[60%] p-5 md:p-8 flex flex-col justify-center bg-white">
                    {/* Desktop Title */}
                    <div className="hidden md:block mb-4">
                        <h2 className="text-3xl font-bold text-navy-900 mb-2">{activeDivision}</h2>
                        <div className="w-16 h-1.5 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></div>
                    </div>

                    <div className="mb-5 md:mb-6">
                        <p className="text-xs md:text-base text-slate-600 leading-relaxed italic font-serif border-l-4 border-navy-100 pl-3 md:pl-4 py-1">
                            "{activeDivisionDetails?.description}"
                        </p>
                    </div>

                    {/* Coordinator Section */}
                    {activeCoordinator && (
                        <div className="mb-5 md:mb-6 bg-navy-50 p-3 md:p-4 rounded-lg border border-navy-100 flex items-center justify-between">
                            <div>
                                <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest mb-0.5 block">Koordinator Divisi</span>
                                <h3 className="text-base md:text-lg font-bold text-navy-900">{activeCoordinator.name}</h3>
                            </div>
                            <div className="h-8 w-8 bg-navy-900 rounded-full flex items-center justify-center text-white shadow-md">
                                <Star size={16} fill="currentColor" />
                            </div>
                        </div>
                    )}

                    {/* Staff Grid - 2 columns on mobile */}
                    <div>
                        <div className="flex items-center gap-2 mb-3 text-slate-400 font-bold uppercase text-[10px] tracking-wider">
                            <Users size={12} /> Anggota Tim ({activeStaff.length})
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-2 gap-x-2 gap-y-2">
                            {activeStaff.map((staff) => (
                                <div key={staff.id} className="flex items-center p-1.5 rounded hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100 group/item">
                                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mr-2 group-hover/item:bg-navy-500 transition-colors flex-shrink-0"></div>
                                    <span className="text-slate-700 font-medium group-hover/item:text-navy-900 text-[11px] md:text-sm truncate">
                                        {staff.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </div>
    </div>
  );
};

export default CommitteeView;