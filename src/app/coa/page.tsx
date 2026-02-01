'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, ArrowLeft, CheckCircle2, ShieldCheck, Search, Download, FlaskConical } from 'lucide-react';
import Link from 'next/link';

const COA_DATA = [
  {
    id: 'reta',
    name: 'RETATRUTIDE',
    batch: 'HXV-RETA-2026-01',
    purity: '99.421%',
    weight: '5162.34 g/mol',
    date: 'JAN 15, 2026',
    ref: '#HXV-2026-0882'
  },
  {
    id: 'tirz',
    name: 'TIRZEPATIDE',
    batch: 'HXV-TIRZ-2026-05',
    purity: '99.242%',
    weight: '4813.52 g/mol',
    date: 'FEB 01, 2026',
    ref: '#HXV-2026-0442'
  },
  {
    id: 'mots-c',
    name: 'MOTS-C',
    batch: 'HXV-MOTS-2026-12',
    purity: '99.115%',
    weight: '2174.62 g/mol',
    date: 'JAN 28, 2026',
    ref: '#HXV-2026-1129'
  }
];

export default function COAPage() {
  const [selectedCOA, setSelectedCOA] = useState<null | typeof COA_DATA[0]>(null);

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-primary/10 overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center pointer-events-none">
        <Link href="/" className="pointer-events-auto flex items-center gap-2 text-[10px] font-black tracking-[0.3em] text-zinc-400 hover:text-primary transition-colors">
          <ArrowLeft size={14} />
          BACK_TO_TERMINAL
        </Link>
      </nav>

      <div className="container mx-auto min-h-screen flex flex-col items-center justify-center py-20 relative">
        <AnimatePresence mode="wait">
          {!selectedCOA ? (
            <motion.div 
              key="table"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex flex-col items-center gap-16 w-full max-w-6xl"
            >
              <div className="text-center space-y-4">
                <h1 className="text-5xl font-black tracking-tighter">RESEARCH ARCHIVE</h1>
                <p className="text-zinc-400 text-sm font-mono tracking-widest uppercase">Select a compound from the lab table to view verified analysis</p>
              </div>

              {/* The Lab Table */}
              <div className="relative w-full h-[500px] flex items-center justify-center perspective-[2000px]">
                {/* Table Surface */}
                <div className="absolute bottom-0 w-[120%] h-[300px] bg-zinc-50 border-t border-zinc-200 rounded-[100px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] -rotate-x-12 translate-z-[-100px]" />
                
                {/* COA Documents on Table */}
                <div className="flex gap-12 relative z-10">
                  {COA_DATA.map((coa, i) => (
                    <motion.div
                      key={coa.id}
                      initial={{ opacity: 0, y: 50, rotateX: 45 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0, 
                        rotateX: 20,
                        rotateY: (i - 1) * 15,
                        z: Math.abs(i - 1) * -50
                      }}
                      whileHover={{ 
                        y: -40, 
                        rotateX: 0, 
                        rotateY: 0,
                        scale: 1.1,
                        z: 100,
                        transition: { type: "spring", stiffness: 300, damping: 20 }
                      }}
                      onClick={() => setSelectedCOA(coa)}
                      className="cursor-pointer group relative"
                    >
                      {/* Document Shadow */}
                      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-4/5 h-10 bg-black/5 blur-2xl rounded-full" />
                      
                      {/* Document Body */}
                      <div className="bg-white border border-zinc-200 w-56 h-72 shadow-xl p-8 flex flex-col justify-between group-hover:border-primary/30 transition-all duration-500">
                        <div className="space-y-4">
                          <div className="flex justify-between items-start">
                            <div className="w-10 h-10 bg-zinc-50 rounded-lg flex items-center justify-center text-zinc-300 group-hover:text-primary transition-colors">
                              <FlaskConical size={20} />
                            </div>
                            <div className="text-[8px] font-mono text-zinc-300">BATCH_{coa.batch.split('-')[1]}</div>
                          </div>
                          <div className="space-y-1">
                            <h3 className="text-sm font-black tracking-tight uppercase group-hover:text-primary transition-colors">{coa.name}</h3>
                            <div className="w-full h-[1px] bg-zinc-100" />
                          </div>
                          <div className="space-y-2 pt-2">
                            <div className="w-full h-1 bg-zinc-50" />
                            <div className="w-3/4 h-1 bg-zinc-50" />
                            <div className="w-full h-1 bg-zinc-50" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="text-[9px] font-mono text-zinc-400">PURITY: <span className="text-green-600 font-bold">{coa.purity}</span></div>
                          <div className="text-[7px] font-mono text-zinc-300">CLICK_TO_ANALYZE_FULL_DATA</div>
                        </div>
                      </div>

                      {/* Floating Indicator */}
                      <motion.div 
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <div className="bg-primary text-white text-[9px] font-black px-3 py-1.5 rounded-full whitespace-nowrap tracking-widest shadow-lg">
                          OPEN REPORT
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="flex gap-12 text-zinc-300">
                <div className="flex items-center gap-3">
                  <ShieldCheck size={20} />
                  <span className="text-[10px] font-black tracking-widest uppercase">Secure Protocol</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={20} />
                  <span className="text-[10px] font-black tracking-widest uppercase">Verified Origin</span>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="coa-viewer"
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              className="w-full max-w-5xl bg-zinc-50 border border-zinc-200 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[700px] z-50"
            >
              {/* Sidebar Info */}
              <div className="w-full md:w-80 bg-zinc-900 text-white p-10 flex flex-col justify-between">
                <div className="space-y-12">
                  <div className="space-y-4">
                    <button 
                      onClick={() => setSelectedCOA(null)}
                      className="flex items-center gap-2 text-[9px] font-black tracking-widest text-zinc-500 hover:text-white transition-colors mb-4"
                    >
                      <ArrowLeft size={12} /> BACK_TO_TABLE
                    </button>
                    <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center">
                      <ShieldCheck size={24} />
                    </div>
                    <h2 className="text-2xl font-black tracking-tight uppercase">ANALYSIS<br/>COMPLETE</h2>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="space-y-1">
                      <p className="text-[10px] text-zinc-500 font-black uppercase tracking-widest">Sample ID</p>
                      <p className="font-mono text-sm uppercase">{selectedCOA.batch}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] text-zinc-500 font-black uppercase tracking-widest">Purity Level</p>
                      <p className="font-mono text-sm text-green-400">{selectedCOA.purity}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] text-zinc-500 font-black uppercase tracking-widest">Verified Date</p>
                      <p className="font-mono text-sm">{selectedCOA.date}</p>
                    </div>
                  </div>
                </div>

                <button className="w-full py-4 bg-primary text-white text-xs font-black tracking-[0.2em] rounded-xl hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                  <Download size={14} /> DOWNLOAD PDF
                </button>
              </div>

              {/* Main Document Area */}
              <div className="flex-1 bg-white p-12 overflow-y-auto">
                <div className="max-w-2xl mx-auto space-y-12">
                  <div className="flex justify-between items-start border-b border-zinc-100 pb-12">
                    <div className="space-y-2">
                      <h3 className="text-3xl font-black tracking-tighter">HELIVEX LABS</h3>
                      <p className="text-[10px] font-mono text-zinc-400">RESEARCH PROTOCOL // CERTIFICATE OF ANALYSIS</p>
                    </div>
                    <div className="text-right space-y-1">
                      <p className="text-[10px] font-black text-zinc-400">REF NO.</p>
                      <p className="font-mono text-sm">{selectedCOA.ref}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-12">
                    <div className="space-y-4">
                      <h4 className="text-[10px] font-black tracking-widest uppercase text-zinc-400">Product Specification</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between py-2 border-b border-zinc-50">
                          <span className="text-xs text-zinc-500">Compound</span>
                          <span className="text-xs font-bold uppercase">{selectedCOA.name}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-zinc-50">
                          <span className="text-xs text-zinc-500">Molecular Weight</span>
                          <span className="text-xs font-bold uppercase">{selectedCOA.weight}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-zinc-50">
                          <span className="text-xs text-zinc-500">Form</span>
                          <span className="text-xs font-bold uppercase">Lyophilized Powder</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-[10px] font-black tracking-widest uppercase text-zinc-400">Analytical Results</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between py-2 border-b border-zinc-50">
                          <span className="text-xs text-zinc-500">HPLC Purity</span>
                          <span className="text-xs font-bold text-green-600">{selectedCOA.purity}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-zinc-50">
                          <span className="text-xs text-zinc-500">MS Analysis</span>
                          <span className="text-xs font-bold text-blue-600">CONFORMS</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-zinc-50">
                          <span className="text-xs text-zinc-500">Bio-Identity</span>
                          <span className="text-xs font-bold text-primary">MATCHED</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6 bg-zinc-50 p-8 rounded-2xl">
                    <h4 className="text-[10px] font-black tracking-widest uppercase text-zinc-400">Chromatogram Summary</h4>
                    <div className="h-32 flex items-end gap-1 opacity-20">
                      {[...Array(30)].map((_, i) => (
                        <div 
                          key={i} 
                          className="flex-1 bg-zinc-900 rounded-t-sm" 
                          style={{ height: `${Math.random() * 100}%` }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="pt-12 border-t border-zinc-100 flex justify-between items-center">
                    <div className="space-y-1">
                      <p className="text-[10px] font-black text-zinc-400 uppercase">Authorized Signature</p>
                      <p className="font-serif italic text-lg">Dr. A. Helivex</p>
                    </div>
                    <div className="flex gap-4">
                      <button 
                        onClick={() => setSelectedCOA(null)}
                        className="text-[10px] font-black tracking-widest text-zinc-400 hover:text-zinc-900"
                      >
                        CLOSE_VIEWER
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
