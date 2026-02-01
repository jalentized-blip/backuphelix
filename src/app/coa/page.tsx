'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, ArrowLeft, CheckCircle2, ShieldCheck, Search, Download } from 'lucide-react';
import Link from 'next/link';

export default function COAPage() {
  const [isDropped, setIsDropped] = useState(false);
  const [isHoveringHand, setIsHoveringHand] = useState(false);
  const constraintsRef = useRef(null);
  const handRef = useRef<HTMLDivElement>(null);

  const handleDragEnd = (event: any, info: any) => {
    if (!handRef.current) return;
    
    const handRect = handRef.current.getBoundingClientRect();
    const dropPoint = info.point;

    // Check if the drop point is within the hand's bounding box (with some padding)
    if (
      dropPoint.x >= handRect.left - 50 &&
      dropPoint.x <= handRect.right + 50 &&
      dropPoint.y >= handRect.top - 50 &&
      dropPoint.y <= handRect.bottom + 50
    ) {
      setIsDropped(true);
    }
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-primary/10">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center pointer-events-none">
        <Link href="/" className="pointer-events-auto flex items-center gap-2 text-[10px] font-black tracking-[0.3em] text-zinc-400 hover:text-primary transition-colors">
          <ArrowLeft size={14} />
          BACK_TO_TERMINAL
        </Link>
      </nav>

      <div className="container mx-auto min-h-screen flex flex-col items-center justify-center py-20">
        <AnimatePresence mode="wait">
          {!isDropped ? (
            <motion.div 
              key="interaction"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex flex-col items-center gap-20 w-full max-w-4xl"
            >
              <div className="text-center space-y-4">
                <h1 className="text-5xl font-black tracking-tighter">CERTIFICATE VERIFICATION</h1>
                <p className="text-zinc-400 text-sm font-mono tracking-widest uppercase">Drag the lab report to the researcher to begin analysis</p>
              </div>

              <div className="relative w-full h-[400px] flex items-center justify-between px-20" ref={constraintsRef}>
                {/* Draggable Paper Slip */}
                <motion.div
                  drag
                  dragConstraints={constraintsRef}
                  dragElastic={0.1}
                  whileDrag={{ scale: 1.1, rotate: 5, zIndex: 50 }}
                  onDragEnd={handleDragEnd}
                  className="relative cursor-grab active:cursor-grabbing group"
                >
                  <div className="bg-white border-2 border-zinc-200 w-48 h-64 shadow-2xl p-6 flex flex-col justify-between group-hover:border-primary/30 transition-colors">
                    <div className="space-y-3">
                      <div className="w-12 h-1 bg-zinc-100" />
                      <div className="w-full h-1 bg-zinc-100" />
                      <div className="w-3/4 h-1 bg-zinc-100" />
                      <div className="pt-4">
                         <FileText size={32} className="text-zinc-200 group-hover:text-primary/20 transition-colors" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-[8px] font-mono text-zinc-300">BATCH_ID: R30-00-1111</div>
                      <div className="text-[8px] font-mono text-zinc-300">PURITY: VERIFIED</div>
                    </div>
                    {/* Floating Handle */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white shadow-lg animate-pulse">
                      <Search size={14} />
                    </div>
                  </div>
                </motion.div>

                {/* The Researcher's Hand (Simplified SVG Representation) */}
                <div className="relative" ref={handRef}>
                  <motion.div 
                    animate={{ 
                      x: isHoveringHand ? -10 : 0,
                      scale: isHoveringHand ? 1.05 : 1
                    }}
                    className="relative z-10"
                  >
                    <svg width="240" height="320" viewBox="0 0 240 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-zinc-100 drop-shadow-2xl">
                      {/* Stylized Arm/Hand */}
                      <path d="M240 320C240 320 200 300 180 240C160 180 140 160 100 160C60 160 40 180 20 180L0 120C0 120 40 100 100 100C160 100 200 140 220 200C240 260 240 320 240 320Z" fill="currentColor" />
                      {/* Fingers */}
                      <rect x="10" y="100" width="80" height="20" rx="10" fill="currentColor" />
                      <rect x="0" y="130" width="90" height="20" rx="10" fill="currentColor" />
                      <rect x="5" y="160" width="85" height="20" rx="10" fill="currentColor" />
                    </svg>
                    
                    {/* Drop Zone Glow */}
                    <div className="absolute inset-0 flex items-center justify-center">
                       <div className="w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse" />
                    </div>
                  </motion.div>
                  
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[10px] font-black tracking-widest text-zinc-300 uppercase">
                    Drop Here for analysis
                  </div>
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
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full max-w-5xl bg-zinc-50 border border-zinc-200 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[700px]"
            >
              {/* Sidebar Info */}
              <div className="w-full md:w-80 bg-zinc-900 text-white p-10 flex flex-col justify-between">
                <div className="space-y-12">
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center">
                      <ShieldCheck size={24} />
                    </div>
                    <h2 className="text-2xl font-black tracking-tight">ANALYSIS<br/>COMPLETE</h2>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="space-y-1">
                      <p className="text-[10px] text-zinc-500 font-black uppercase tracking-widest">Sample ID</p>
                      <p className="font-mono text-sm">HXV-99242-R30</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] text-zinc-500 font-black uppercase tracking-widest">Purity Level</p>
                      <p className="font-mono text-sm text-green-400">99.242%</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] text-zinc-500 font-black uppercase tracking-widest">Verified Date</p>
                      <p className="font-mono text-sm">FEB 01, 2026</p>
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
                      <p className="font-mono text-sm">#HXV-2026-0442</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-12">
                    <div className="space-y-4">
                      <h4 className="text-[10px] font-black tracking-widest uppercase text-zinc-400">Product Specification</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between py-2 border-b border-zinc-50">
                          <span className="text-xs text-zinc-500">Compound</span>
                          <span className="text-xs font-bold uppercase">Research Peptide-V1</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-zinc-50">
                          <span className="text-xs text-zinc-500">Molecular Weight</span>
                          <span className="text-xs font-bold uppercase">3421.14 g/mol</span>
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
                          <span className="text-xs font-bold text-green-600">99.242%</span>
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
                    <button 
                      onClick={() => setIsDropped(false)}
                      className="text-[10px] font-black tracking-widest text-primary hover:underline"
                    >
                      RESET_ANALYSIS
                    </button>
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
