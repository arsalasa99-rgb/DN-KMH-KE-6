import React, { useState, useRef, useEffect } from 'react';
import { Document } from '../types';
import { DOCUMENTS } from '../constants';
import { Search, FileText, Upload, Eye, Trash2, Plus, Download, Globe, HardDrive, AlertTriangle } from 'lucide-react';

const DocumentsView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState<string | null>(null);
  
  // STATE 1: Dokumen User (Diambil dari Local Storage)
  const [userDocs, setUserDocs] = useState<Document[]>(() => {
    try {
      const savedDocs = localStorage.getItem('kmh_user_uploads_v2');
      return savedDocs ? JSON.parse(savedDocs) : [];
    } catch (e) {
      console.error('Gagal memuat dokumen user', e);
      return [];
    }
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  // EFFECT: Simpan otomatis setiap ada perubahan pada userDocs
  useEffect(() => {
    try {
      localStorage.setItem('kmh_user_uploads_v2', JSON.stringify(userDocs));
    } catch (e) {
      // Menangani error jika LocalStorage penuh (QuotaExceededError)
      console.error('Storage penuh', e);
      setError('Memori penyimpanan lokal penuh. Harap hapus beberapa file.');
    }
  }, [userDocs]);

  // COMBINED: Menggabungkan Dokumen User + Dokumen Publik (CONSTANTS)
  const allDocs = [...userDocs, ...DOCUMENTS];

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);
    const file = event.target.files?.[0];
    if (file) {
      // Limit file size to 4MB (LocalStorage safe limit is usually 5MB total)
      const MAX_SIZE_MB = 4; 
      if (file.size > MAX_SIZE_MB * 1024 * 1024) {
        alert(`Maaf, ukuran file maksimal adalah ${MAX_SIZE_MB}MB agar dapat disimpan permanen di browser.`);
        return;
      }

      const reader = new FileReader();
      
      reader.onload = () => {
        try {
            const base64String = reader.result as string;
            
            const newDoc: Document = {
              id: `user-${Date.now()}`, // ID unik
              title: file.name,
              type: file.name.split('.').pop()?.toUpperCase() || 'FILE',
              date: new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' }),
              size: (file.size / 1024 / 1024).toFixed(2) + ' MB',
              category: 'Dokumen Publik', // User requested uploaded files to be public
              url: base64String // Simpan Base64 agar persisten
            };
            
            // Coba simpan ke state (yang akan memicu useEffect localStorage)
            try {
                // Test quota check before adding to state
                localStorage.setItem('test_quota', base64String);
                localStorage.removeItem('test_quota');
                
                setUserDocs(prev => [newDoc, ...prev]);
            } catch (quotaError) {
                alert('Penyimpanan browser penuh! File tidak dapat disimpan permanen.');
            }

        } catch (err) {
            console.error("Error reading file", err);
            alert("Gagal memproses file.");
        }
      };

      reader.onerror = () => {
          alert("Gagal membaca file.");
      };

      reader.readAsDataURL(file);
    }
    // Reset input
    if (fileInputRef.current) {
        fileInputRef.current.value = '';
    }
  };

  const handleDelete = (id: string) => {
      if (confirm('Apakah Anda yakin ingin menghapus dokumen ini dari penyimpanan publik?')) {
          setUserDocs(prev => prev.filter(doc => doc.id !== id));
      }
  };

  const handleView = (doc: Document) => {
      if(doc.url) {
        if(doc.url === '#') {
            alert('File ini belum tersedia untuk dilihat.');
            return;
        }
        
        const win = window.open();
        if(win) {
             // Jika PDF, gunakan iframe viewer. Jika gambar, tampilkan gambar.
             if (doc.type === 'PDF') {
                 win.document.write(`<iframe src="${doc.url}" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>`);
             } else if (['JPG', 'JPEG', 'PNG'].includes(doc.type)) {
                 win.document.write(`<div style="display:flex;justify-content:center;align-items:center;height:100vh;background:#f0f0f0;"><img src="${doc.url}" style="max-width:100%;max-height:100%;box-shadow:0 0 20px rgba(0,0,0,0.1);"/></div>`);
             } else {
                 // Fallback untuk file lain
                 win.document.write(`<iframe src="${doc.url}" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>`);
             }
        }
      }
  };

  const handleDownload = (doc: Document) => {
     if (doc.url && doc.url !== '#') {
         const a = document.createElement('a');
         a.href = doc.url;
         a.download = doc.title;
         document.body.appendChild(a);
         a.click();
         document.body.removeChild(a);
     } else {
         alert('Link download tidak tersedia.');
     }
  };

  const filteredDocs = allDocs.filter((doc) => {
    return doc.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen animate-fadeIn">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-navy-900">Arsip Digital & Cloud</h2>
            <p className="text-slate-500 mt-1 flex items-center gap-2">
                <Globe size={14}/> Dokumen Publik (Open Access)
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto items-center">
             {/* Search */}
             <div className="relative w-full sm:w-auto">
                <input 
                    type="text" 
                    placeholder="Cari dokumen..." 
                    className="pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-navy-900 w-full sm:w-64"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-3 top-2.5 text-slate-400" size={18} />
             </div>
             
             {/* Upload Button */}
             <div className="relative">
                 <input 
                    type="file" 
                    ref={fileInputRef}
                    onChange={handleFileUpload}
                    className="hidden"
                    accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png"
                 />
                 <button 
                    onClick={() => fileInputRef.current?.click()}
                    className="flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white px-6 py-2 rounded-lg font-medium transition-colors shadow-md w-full sm:w-auto justify-center"
                 >
                     <Plus size={20} />
                     Unggah File
                 </button>
             </div>
          </div>
        </div>

        {error && (
            <div className="bg-red-50 text-red-700 p-4 rounded-lg mb-6 flex items-center gap-3 border border-red-200">
                <AlertTriangle size={20} />
                {error}
            </div>
        )}

        {/* Table / List */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden min-h-[400px]">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="p-4 font-semibold text-sm text-navy-900 uppercase tracking-wider">Nama Dokumen</th>
                  <th className="p-4 font-semibold text-sm text-navy-900 uppercase tracking-wider">Tipe</th>
                  <th className="p-4 font-semibold text-sm text-navy-900 uppercase tracking-wider">Akses</th>
                  <th className="p-4 font-semibold text-sm text-navy-900 uppercase tracking-wider">Ukuran</th>
                  <th className="p-4 font-semibold text-sm text-navy-900 uppercase tracking-wider text-right">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {filteredDocs.length > 0 ? (
                  filteredDocs.map((doc) => {
                      return (
                        <tr key={doc.id} className="border-b border-slate-100 hover:bg-navy-50 transition-colors group">
                        <td className="p-4">
                            <div className="flex items-center">
                            <div className="p-2 rounded-lg mr-3 bg-navy-100 text-navy-700">
                                <FileText size={20} />
                            </div>
                            <div>
                                <span className="font-medium text-slate-700 group-hover:text-navy-900 transition-colors block">
                                    {doc.title}
                                </span>
                                <span className="text-xs text-slate-400">
                                    {doc.date}
                                </span>
                            </div>
                            </div>
                        </td>
                        <td className="p-4">
                            <span className="inline-block px-2 py-1 text-xs bg-slate-100 text-slate-600 rounded-md font-medium">
                                {doc.type}
                            </span>
                        </td>
                        <td className="p-4">
                            <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full border border-emerald-100">
                                <Globe size={12} /> Publik
                            </span>
                        </td>
                        <td className="p-4 text-sm text-slate-500 font-mono">{doc.size}</td>
                        <td className="p-4 text-right">
                            <div className="flex items-center justify-end gap-2">
                                <button 
                                    onClick={() => handleDownload(doc)}
                                    className="text-green-600 hover:text-green-800 hover:bg-green-50 p-2 rounded-full transition-colors"
                                    title="Download File"
                                >
                                    <Download size={20} />
                                </button>
                                <button 
                                    onClick={() => handleView(doc)}
                                    className="text-navy-900 hover:text-navy-700 hover:bg-navy-100 p-2 rounded-full transition-colors"
                                    title="Lihat Dokumen"
                                >
                                    <Eye size={20} />
                                </button>
                                <button 
                                    onClick={() => handleDelete(doc.id)}
                                    className="text-red-400 hover:text-red-600 hover:bg-red-50 p-2 rounded-full transition-colors"
                                    title="Hapus"
                                >
                                    <Trash2 size={20} />
                                </button>
                            </div>
                        </td>
                        </tr>
                      );
                  })
                ) : (
                    <tr>
                        <td colSpan={5} className="p-16 text-center text-slate-400 flex flex-col items-center justify-center w-full">
                            <div className="bg-slate-50 p-6 rounded-full mb-4">
                                <Upload size={48} className="text-slate-300" />
                            </div>
                            <p className="text-lg font-medium text-slate-500">Belum ada dokumen publik.</p>
                            <p className="text-sm">Jadilah yang pertama mengunggah file.</p>
                        </td>
                    </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentsView;