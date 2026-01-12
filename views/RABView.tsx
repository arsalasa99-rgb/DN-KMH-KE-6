import React from 'react';
import { Calculator, Wallet, Award, Gift, PartyPopper, ChevronRight } from 'lucide-react';

// Helper component for Mobile Card Item
const MobileItemCard = ({ no, name, unit, price, total, isHeader = false }: any) => (
  <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col gap-2 mb-3">
    <div className="flex justify-between items-start">
      <div className="flex gap-3">
         {no && <span className="flex-shrink-0 w-6 h-6 bg-navy-50 text-navy-900 rounded-full flex items-center justify-center text-xs font-bold">{no}</span>}
         <div>
            <h5 className="font-bold text-navy-900 text-sm">{name}</h5>
            {!isHeader && <p className="text-xs text-slate-500 mt-0.5">{unit} x Rp{price}</p>}
         </div>
      </div>
    </div>
    <div className="border-t border-slate-100 pt-2 mt-1 flex justify-between items-center">
        <span className="text-xs font-semibold text-slate-400 uppercase">Total</span>
        <span className="font-bold text-navy-900">Rp{total}</span>
    </div>
  </div>
);

const RABView: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen animate-fadeIn">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-navy-100 text-navy-900 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                <Calculator size={14} /> Transparansi Anggaran
            </div>
            <h2 className="text-2xl md:text-5xl font-bold text-navy-900 mb-4">Rancangan Anggaran Biaya</h2>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
                Rincian estimasi biaya untuk setiap rangkaian kegiatan Dies Natalis KMH LOTIM ke-6.
            </p>
        </div>

        <div className="space-y-8 md:space-y-12 max-w-5xl mx-auto">
            
            {/* 1. SEMINAR HUKUM */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="bg-navy-900 px-4 md:px-6 py-4 flex items-center gap-3">
                    <div className="p-2 bg-white/10 rounded-lg">
                        <Wallet className="text-amber-400" size={20} />
                    </div>
                    <div>
                        <h3 className="text-lg md:text-xl font-bold text-white">1. Seminar Hukum</h3>
                        <p className="text-navy-200 text-xs md:hidden">Ketuk untuk detail</p>
                    </div>
                </div>
                
                <div className="p-4 md:p-6 space-y-8">
                    {/* Perlengkapan */}
                    <div>
                        <h4 className="font-bold text-navy-900 mb-3 border-b pb-2 flex items-center gap-2">
                            <span className="w-2 h-6 bg-amber-400 rounded-full"></span> 1.1 Perlengkapan
                        </h4>
                        
                        {/* MOBILE VIEW (Cards) */}
                        <div className="block md:hidden">
                            {[
                                { no: 1, name: 'Banner', unit: '7x5', price: '700.000', total: '700.000' },
                                { no: 2, name: 'Pulpen', unit: '3', price: '5.000', total: '15.000' },
                                { no: 3, name: 'Map', unit: '5', price: '5.000', total: '25.000' },
                                { no: 4, name: 'Sewa Sound', unit: '1', price: '300.000', total: '300.000' },
                                { no: 5, name: 'Bingkai', unit: '3', price: '60.000', total: '180.000' },
                                { no: 6, name: 'Print', unit: '1', price: '50.000', total: '50.000' },
                                { no: 7, name: 'Kertas HVS', unit: '2 Rim', price: '150.000', total: '300.000' },
                                { no: 8, name: 'Amplop', unit: '1 Pack', price: '25.000', total: '25.000' },
                                { no: 10, name: 'Sertifikat', unit: '3', price: '5.000', total: '15.000' },
                            ].map((item, idx) => (
                                <MobileItemCard key={idx} {...item} />
                            ))}
                            <div className="bg-navy-50 p-4 rounded-xl flex justify-between items-center mt-2 border border-navy-100">
                                <span className="font-bold text-navy-900 text-sm">Subtotal Perlengkapan</span>
                                <span className="font-bold text-navy-900">Rp1.610.000</span>
                            </div>
                        </div>

                        {/* DESKTOP VIEW (Table) */}
                        <div className="hidden md:block overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead className="bg-slate-50 text-navy-900 font-bold border-y border-slate-200">
                                    <tr>
                                        <th className="px-4 py-3 text-left w-12">No</th>
                                        <th className="px-4 py-3 text-left">Nama Barang</th>
                                        <th className="px-4 py-3 text-center">Unit</th>
                                        <th className="px-4 py-3 text-right">Harga/Unit</th>
                                        <th className="px-4 py-3 text-right">Jumlah</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {[
                                        { no: 1, name: 'Banner', unit: '7x5', price: '700.000', total: '700.000' },
                                        { no: 2, name: 'Pulpen', unit: '3', price: '5.000', total: '15.000' },
                                        { no: 3, name: 'Map', unit: '5', price: '5.000', total: '25.000' },
                                        { no: 4, name: 'Sewa Sound', unit: '1', price: '300.000', total: '300.000' },
                                        { no: 5, name: 'Bingkai', unit: '3', price: '60.000', total: '180.000' },
                                        { no: 6, name: 'Print', unit: '1', price: '50.000', total: '50.000' },
                                        { no: 7, name: 'Kertas HVS', unit: '2 Rim', price: '150.000', total: '300.000' },
                                        { no: 8, name: 'Amplop', unit: '1 Pack', price: '25.000', total: '25.000' },
                                        { no: 10, name: 'Sertifikat', unit: '3', price: '5.000', total: '15.000' },
                                    ].map((row, idx) => (
                                        <tr key={idx} className="hover:bg-slate-50 transition-colors">
                                            <td className="px-4 py-3 text-slate-500">{row.no}</td>
                                            <td className="px-4 py-3 font-medium text-navy-900">{row.name}</td>
                                            <td className="px-4 py-3 text-center text-slate-600">{row.unit}</td>
                                            <td className="px-4 py-3 text-right text-slate-600 whitespace-nowrap">Rp{row.price}</td>
                                            <td className="px-4 py-3 text-right font-bold text-navy-900 whitespace-nowrap">Rp{row.total}</td>
                                        </tr>
                                    ))}
                                    <tr className="bg-navy-50 font-bold text-navy-900">
                                        <td colSpan={4} className="px-4 py-3 text-right">Subtotal Perlengkapan</td>
                                        <td className="px-4 py-3 text-right whitespace-nowrap">Rp1.610.000</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Konsumsi */}
                    <div>
                        <h4 className="font-bold text-navy-900 mb-3 border-b pb-2 flex items-center gap-2">
                            <span className="w-2 h-6 bg-amber-400 rounded-full"></span> 1.2 Konsumsi
                        </h4>

                        {/* MOBILE VIEW */}
                        <div className="block md:hidden">
                            <div className="bg-slate-50 p-3 rounded-lg mb-3 text-sm font-bold text-navy-900 text-center border border-slate-200">
                                Konsumsi Pemateri
                            </div>
                            {[
                                { name: 'Nasi Kotak', unit: '4', price: '30.000', total: '120.000' },
                                { name: 'Buah', unit: '4', price: '50.000', total: '200.000' },
                                { name: 'Hampers', unit: '4', price: '100.000', total: '400.000' },
                                { name: 'Snack', unit: '4', price: '30.000', total: '120.000' },
                            ].map((item, idx) => (
                                <MobileItemCard key={idx} {...item} />
                            ))}
                            <div className="bg-navy-50 p-4 rounded-xl flex justify-between items-center mt-2 border border-navy-100">
                                <span className="font-bold text-navy-900 text-sm">Subtotal Konsumsi</span>
                                <span className="font-bold text-navy-900">Rp840.000</span>
                            </div>
                             <div className="bg-navy-900 p-4 rounded-xl flex justify-between items-center mt-4 shadow-lg">
                                <span className="font-bold text-white text-sm">TOTAL SEMINAR</span>
                                <span className="font-bold text-amber-400 text-lg">Rp2.450.000</span>
                            </div>
                        </div>

                        {/* DESKTOP VIEW */}
                        <div className="hidden md:block overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead className="bg-slate-50 text-navy-900 font-bold border-y border-slate-200">
                                    <tr>
                                        <th className="px-4 py-3 text-left w-12">No</th>
                                        <th className="px-4 py-3 text-left">Nama Barang</th>
                                        <th className="px-4 py-3 text-center">Unit</th>
                                        <th className="px-4 py-3 text-right">Harga/Unit</th>
                                        <th className="px-4 py-3 text-right">Jumlah</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    <tr className="bg-slate-50/50">
                                        <td className="px-4 py-3 text-slate-500">1</td>
                                        <td colSpan={4} className="px-4 py-3 font-bold text-navy-900">Konsumsi Pemateri</td>
                                    </tr>
                                    {[
                                        { name: '- Nasi Kotak', unit: '4', price: '30.000', total: '120.000' },
                                        { name: '- Buah', unit: '4', price: '50.000', total: '200.000' },
                                        { name: '- Hampers', unit: '4', price: '100.000', total: '400.000' },
                                        { name: '- Snack', unit: '4', price: '30.000', total: '120.000' },
                                    ].map((row, idx) => (
                                        <tr key={idx} className="hover:bg-slate-50 transition-colors">
                                            <td className="px-4 py-2"></td>
                                            <td className="px-4 py-2 pl-8 text-slate-700">{row.name}</td>
                                            <td className="px-4 py-2 text-center text-slate-600">{row.unit}</td>
                                            <td className="px-4 py-2 text-right text-slate-600 whitespace-nowrap">Rp{row.price}</td>
                                            <td className="px-4 py-2 text-right font-bold text-navy-900 whitespace-nowrap">Rp{row.total}</td>
                                        </tr>
                                    ))}
                                    <tr className="bg-navy-50 font-bold text-navy-900">
                                        <td colSpan={4} className="px-4 py-3 text-right">Subtotal Konsumsi</td>
                                        <td className="px-4 py-3 text-right whitespace-nowrap">Rp840.000</td>
                                    </tr>
                                    <tr className="bg-navy-900 text-white font-bold text-base">
                                        <td colSpan={4} className="px-4 py-4 text-right">TOTAL SEMINAR HUKUM</td>
                                        <td className="px-4 py-4 text-right whitespace-nowrap text-amber-400">Rp2.450.000</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. SANTUNAN PANTI ASUHAN */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="bg-navy-900 px-4 md:px-6 py-4 flex items-center gap-3">
                    <div className="p-2 bg-white/10 rounded-lg">
                        <Gift className="text-amber-400" size={20} />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white">2. Santunan Panti Asuhan</h3>
                </div>
                
                <div className="p-4 md:p-6">
                    {/* MOBILE VIEW */}
                    <div className="block md:hidden">
                        {[
                            { no: 1, name: 'Beras', amount: '4 Kwintal', price: '15.000/kg', total: '6.000.000' },
                            { no: 2, name: 'Telur', amount: '30 trai', price: '55.000/trai', total: '1.650.000' },
                            { no: 3, name: 'Gula', amount: '50 kg', price: '14.000/kg', total: '700.000' },
                            { no: 4, name: 'Mie Instan', amount: '10 dus', price: '110.000/dus', total: '1.100.000' },
                            { no: 5, name: 'Minyak', amount: '50 liter', price: '20.000/l', total: '1.000.000' },
                            { no: 6, name: 'Buku dan Alat Tulis', amount: '10 lusin', price: '70.000', total: '700.000' },
                            { no: 7, name: "Al-Qur'an", amount: '30', price: '90.000', total: '2.700.000' },
                        ].map((item, idx) => (
                             <MobileItemCard key={idx} no={item.no} name={item.name} unit={item.amount} price={item.price.replace('Rp.', '')} total={item.total} />
                        ))}
                         <div className="bg-navy-900 p-4 rounded-xl flex justify-between items-center mt-4 shadow-lg">
                            <span className="font-bold text-white text-sm">TOTAL SANTUNAN</span>
                            <span className="font-bold text-amber-400 text-lg">Rp13.990.000</span>
                        </div>
                    </div>

                    {/* DESKTOP VIEW */}
                    <div className="hidden md:block overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead className="bg-slate-50 text-navy-900 font-bold border-y border-slate-200">
                                <tr>
                                    <th className="px-4 py-3 text-left w-12">No</th>
                                    <th className="px-4 py-3 text-left">Nama Barang</th>
                                    <th className="px-4 py-3 text-center">Jumlah</th>
                                    <th className="px-4 py-3 text-right">Harga Satuan</th>
                                    <th className="px-4 py-3 text-right">Jumlah</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {[
                                    { no: 1, name: 'Beras', amount: '4 Kwintal', price: '15.000/kg', total: '6.000.000' },
                                    { no: 2, name: 'Telur', amount: '30 trai', price: '55.000/trai', total: '1.650.000' },
                                    { no: 3, name: 'Gula', amount: '50 kg', price: '14.000/kg', total: '700.000' },
                                    { no: 4, name: 'Mie Instan', amount: '10 dus', price: '110.000/dus', total: '1.100.000' },
                                    { no: 5, name: 'Minyak', amount: '50 liter', price: '20.000/l', total: '1.000.000' },
                                    { no: 6, name: 'Buku dan Alat Tulis', amount: '10 lusin', price: '70.000', total: '700.000' },
                                    { no: 7, name: "Al-Qur'an", amount: '30', price: '90.000', total: '2.700.000' },
                                ].map((row, idx) => (
                                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                                        <td className="px-4 py-3 text-slate-500">{row.no}</td>
                                        <td className="px-4 py-3 font-medium text-navy-900">{row.name}</td>
                                        <td className="px-4 py-3 text-center text-slate-600">{row.amount}</td>
                                        <td className="px-4 py-3 text-right text-slate-600 whitespace-nowrap">Rp{row.price.replace('Rp.', '')}</td>
                                        <td className="px-4 py-3 text-right font-bold text-navy-900 whitespace-nowrap">Rp{row.total}</td>
                                    </tr>
                                ))}
                                <tr className="bg-navy-900 text-white font-bold text-base">
                                    <td colSpan={4} className="px-4 py-4 text-right">TOTAL SANTUNAN</td>
                                    <td className="px-4 py-4 text-right whitespace-nowrap text-amber-400">Rp13.990.000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* 3. SERANGKAIAN LOMBA DN */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="bg-navy-900 px-4 md:px-6 py-4 flex items-center gap-3">
                    <div className="p-2 bg-white/10 rounded-lg">
                        <Award className="text-amber-400" size={20} />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white">3. Serangkaian Lomba DN</h3>
                </div>
                
                <div className="p-4 md:p-6">
                    {/* MOBILE VIEW */}
                    <div className="block md:hidden">
                        {[
                            { no: 1, name: 'Piala', unit: '6', price: '50.000', total: '300.000' },
                            { no: 2, name: 'Sertifikat', unit: '6', price: '8.500', total: '50.000' },
                            { no: 3, name: 'Uang untuk Juara 1 Poster', unit: '-', price: '-', total: '200.000' },
                            { no: 4, name: 'Uang untuk Juara 2 Poster', unit: '-', price: '-', total: '150.000' },
                            { no: 8, name: 'Uang untuk Juara 3 Poster', unit: '-', price: '-', total: '100.000' },
                        ].map((item, idx) => (
                             <MobileItemCard key={idx} {...item} />
                        ))}
                         <div className="bg-navy-900 p-4 rounded-xl flex justify-between items-center mt-4 shadow-lg">
                            <span className="font-bold text-white text-sm">TOTAL LOMBA</span>
                            <span className="font-bold text-amber-400 text-lg">Rp1.250.000</span>
                        </div>
                    </div>

                    {/* DESKTOP VIEW */}
                    <div className="hidden md:block overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead className="bg-slate-50 text-navy-900 font-bold border-y border-slate-200">
                                <tr>
                                    <th className="px-4 py-3 text-left w-12">No</th>
                                    <th className="px-4 py-3 text-left">Nama Barang</th>
                                    <th className="px-4 py-3 text-center">Unit</th>
                                    <th className="px-4 py-3 text-right">Barang/Unit</th>
                                    <th className="px-4 py-3 text-right">Jumlah</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {[
                                    { no: 1, name: 'Piala', unit: '6', price: '50.000', total: '300.000' },
                                    { no: 2, name: 'Sertifikat', unit: '6', price: '8.500', total: '50.000' },
                                    { no: 3, name: 'Uang untuk Juara 1 Poster', unit: '', price: '', total: '200.000' },
                                    { no: 4, name: 'Uang untuk Juara 2 Poster', unit: '', price: '', total: '150.000' },
                                    { no: 8, name: 'Uang untuk Juara 3 Poster', unit: '', price: '', total: '100.000' },
                                ].map((row, idx) => (
                                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                                        <td className="px-4 py-3 text-slate-500">{row.no}</td>
                                        <td className="px-4 py-3 font-medium text-navy-900">{row.name}</td>
                                        <td className="px-4 py-3 text-center text-slate-600">{row.unit}</td>
                                        <td className="px-4 py-3 text-right text-slate-600 whitespace-nowrap">{row.price ? `Rp. ${row.price}` : '-'}</td>
                                        <td className="px-4 py-3 text-right font-bold text-navy-900 whitespace-nowrap">Rp. {row.total}</td>
                                    </tr>
                                ))}
                                <tr className="bg-navy-900 text-white font-bold text-base">
                                    <td colSpan={4} className="px-4 py-4 text-right">TOTAL LOMBA</td>
                                    <td className="px-4 py-4 text-right whitespace-nowrap text-amber-400">Rp1.250.000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* 4. ACARA SEREMONIAL PUNCAK */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="bg-navy-900 px-4 md:px-6 py-4 flex items-center gap-3">
                    <div className="p-2 bg-white/10 rounded-lg">
                        <PartyPopper className="text-amber-400" size={20} />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white">4. Acara Seremonial Puncak</h3>
                </div>
                
                <div className="p-4 md:p-6">
                    <h4 className="font-bold text-navy-900 mb-3 border-b pb-2 flex items-center gap-2">
                        <span className="w-2 h-6 bg-amber-400 rounded-full"></span> 1. Perlengkapan
                    </h4>
                    
                    {/* MOBILE VIEW */}
                    <div className="block md:hidden">
                        {[
                            { no: 1, name: 'Kain Putih', unit: '1', price: '300.000', total: '300.000' },
                            { no: 2, name: 'Pulpen', unit: '3', price: '4.000', total: '12.000' },
                            { no: 3, name: 'Map', unit: '5', price: '3.000', total: '15.000' },
                            { no: 4, name: 'Trash Bag', unit: '1', price: '10.000', total: '10.000' },
                            { no: 5, name: 'Print', unit: '1', price: '30.000', total: '30.000' },
                            { no: 6, name: 'Sewa gedung', unit: '1', price: '2.500.000', total: '2.500.000' },
                            { no: 7, name: 'Dekorasi', unit: '-', price: '300.000', total: '300.000' },
                            { no: 8, name: 'Photobooth', unit: '1', price: '1.500.000', total: '1.500.000' },
                            { no: 9, name: 'HT', unit: '10', price: '20.000', total: '200.000' },
                            { no: 10, name: 'Alat Peresean', unit: '2', price: '110.000', total: '220.000' },
                            { no: 11, name: 'Kamera', unit: '1', price: '100.000', total: '100.000' },
                            { no: 12, name: 'Baterai AAA', unit: '20', price: '5.000', total: '100.000' },
                            { no: 13, name: 'Dana Darurat', unit: '-', price: '250.000', total: '250.000' },
                        ].map((item, idx) => (
                             <MobileItemCard key={idx} {...item} />
                        ))}
                        <div className="bg-navy-900 p-4 rounded-xl flex justify-between items-center mt-4 shadow-lg">
                            <span className="font-bold text-white text-sm">TOTAL PUNCAK</span>
                            <span className="font-bold text-amber-400 text-lg">Rp4.702.000</span>
                        </div>
                    </div>

                    {/* DESKTOP VIEW */}
                    <div className="hidden md:block overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead className="bg-slate-50 text-navy-900 font-bold border-y border-slate-200">
                                <tr>
                                    <th className="px-4 py-3 text-left w-12">No</th>
                                    <th className="px-4 py-3 text-left">Nama Barang</th>
                                    <th className="px-4 py-3 text-center">Unit</th>
                                    <th className="px-4 py-3 text-right">Harga/Unit</th>
                                    <th className="px-4 py-3 text-right">Jumlah</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {[
                                    { no: 1, name: 'Kain Putih', unit: '1', price: '300.000', total: '300.000' },
                                    { no: 2, name: 'Pulpen', unit: '3', price: '4.000', total: '12.000' },
                                    { no: 3, name: 'Map', unit: '5', price: '3.000', total: '15.000' },
                                    { no: 4, name: 'Trash Bag', unit: '1', price: '10.000', total: '10.000' },
                                    { no: 5, name: 'Print', unit: '1', price: '30.000', total: '30.000' },
                                    { no: 6, name: 'Sewa gedung', unit: '1', price: '2.500.000', total: '2.500.000' },
                                    { no: 7, name: 'Dekorasi', unit: '-', price: '300.000', total: '300.000' },
                                    { no: 8, name: 'Photobooth', unit: '1', price: '1.500.000', total: '1.500.000' },
                                    { no: 9, name: 'HT', unit: '10', price: '20.000', total: '200.000' },
                                    { no: 10, name: 'Alat Peresean', unit: '2', price: '110.000', total: '220.000' },
                                    { no: 11, name: 'Kamera', unit: '1', price: '100.000', total: '100.000' },
                                    { no: 12, name: 'Baterai AAA', unit: '20', price: '5.000', total: '100.000' },
                                    { no: 13, name: 'Dana Darurat', unit: '-', price: '250.000', total: '250.000' },
                                ].map((row, idx) => (
                                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                                        <td className="px-4 py-3 text-slate-500">{row.no}</td>
                                        <td className="px-4 py-3 font-medium text-navy-900">{row.name}</td>
                                        <td className="px-4 py-3 text-center text-slate-600">{row.unit}</td>
                                        <td className="px-4 py-3 text-right text-slate-600 whitespace-nowrap">Rp{row.price}</td>
                                        <td className="px-4 py-3 text-right font-bold text-navy-900 whitespace-nowrap">Rp{row.total}</td>
                                    </tr>
                                ))}
                                <tr className="bg-navy-900 text-white font-bold text-base">
                                    <td colSpan={4} className="px-4 py-4 text-right">TOTAL PERLENGKAPAN</td>
                                    <td className="px-4 py-4 text-right whitespace-nowrap text-amber-400">Rp4.702.000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* TOTAL REKAPITULASI */}
            <div className="bg-gradient-to-br from-navy-900 to-navy-800 text-white rounded-3xl shadow-2xl overflow-hidden border border-navy-700 relative">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
                 
                 <div className="p-6 md:p-12 text-center relative z-10">
                    <h3 className="text-xl md:text-4xl font-bold mb-6 md:mb-8 leading-tight">TOTAL RANCANGAN<br className="md:hidden"/> ANGGARAN BIAYA</h3>
                    
                    {/* MOBILE RECAP VIEW */}
                    <div className="md:hidden space-y-3 mb-6">
                         {[
                            { no: 1, name: 'Seminar Hukum', total: 'Rp. 2.285.000' },
                            { no: 2, name: 'Santunan Panti Asuhan', total: 'Rp13.990.000' },
                            { no: 3, name: 'Lomba Hut DN KMH ke-6', total: 'Rp1.250.000' },
                            { no: 5, name: 'Acara Puncak DN KMH Ke-6', total: 'Rp6.272.000' },
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 flex justify-between items-center text-left">
                                <div>
                                    <div className="text-xs text-slate-300 mb-1">Program 0{item.no}</div>
                                    <div className="font-bold text-white text-sm">{item.name}</div>
                                </div>
                                <div className="font-mono font-bold text-amber-400">{item.total}</div>
                            </div>
                        ))}
                    </div>

                    {/* DESKTOP RECAP VIEW */}
                    <div className="hidden md:block max-w-3xl mx-auto bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/20 mb-8">
                        <table className="w-full text-left">
                            <thead className="bg-navy-950/50 text-amber-400 font-bold uppercase text-sm tracking-wider">
                                <tr>
                                    <th className="px-6 py-4">No</th>
                                    <th className="px-6 py-4">Nama Program Kerja</th>
                                    <th className="px-6 py-4 text-right">Total Keseluruhan</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/10 text-lg">
                                {[
                                    { no: 1, name: 'Seminar Hukum', total: 'Rp. 2.285.000' },
                                    { no: 2, name: 'Santunan Panti Asuhan', total: 'Rp13.990.000' },
                                    { no: 3, name: 'Lomba Hut DN KMH ke-6', total: 'Rp1.250.000' },
                                    { no: 5, name: 'Acara Puncak DN KMH Ke-6', total: 'Rp6.272.000' },
                                ].map((row, idx) => (
                                    <tr key={idx} className="hover:bg-white/5 transition-colors">
                                        <td className="px-6 py-4">{row.no}</td>
                                        <td className="px-6 py-4 font-medium">{row.name}</td>
                                        <td className="px-6 py-4 text-right font-mono font-bold">{row.total}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* GRAND TOTAL - Responsive */}
                    <div className="bg-amber-500 text-navy-900 rounded-xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-4 shadow-lg mx-auto max-w-3xl">
                        <span className="text-lg md:text-2xl font-bold uppercase tracking-wider text-center md:text-left">Total Anggaran<br className="md:hidden"/> Keseluruhan</span>
                        <span className="text-3xl md:text-4xl font-black font-mono">Rp23.797.000</span>
                    </div>

                 </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default RABView;