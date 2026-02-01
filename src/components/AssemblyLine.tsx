'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const RealVial = ({ type }: { type: 'primary' | 'secondary' }) => (
  <div className="relative w-16 h-24 flex items-center justify-center">
    {/* Glass Vial with Lyophilized Powder */}
    <div className="relative w-10 h-20 bg-white/5 rounded-b-md border border-white/20 backdrop-blur-[1px] overflow-hidden">
      {/* Lyophilized Powder Cake */}
      <div className="absolute bottom-0 w-full h-[35%] bg-white/90 shadow-[inset_0_2px_10px_rgba(0,0,0,0.1)]">
        {/* Powder Texture/Grain */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.2)_1px,transparent_1px)] bg-[size:3px_3px]" />
        {/* Top of the cake - slightly uneven */}
        <div className="absolute -top-1 left-0 w-full h-2 bg-white rounded-[50%] shadow-sm" />
      </div>
      
      {/* Glass Reflection & Highlights */}
      <div className="absolute inset-y-0 left-1 w-[2px] bg-white/20 blur-[1px]" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </div>
    
    {/* Cap (The part that makes it look like a 3ml vial) */}
    <div className={`absolute top-0 w-11 h-4 rounded-t-sm shadow-sm ${type === 'primary' ? 'bg-primary' : 'bg-secondary'}`}>
      <div className="absolute inset-x-1 top-0.5 h-1 bg-white/20 rounded-full" />
    </div>
    
    {/* Label with Helivex Logo */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-8 bg-white/95 rounded-[1px] shadow-sm flex flex-col items-center justify-center py-1 px-0.5 border-x border-black/5">
      {/* Mini Helivex Logo SVG */}
      <svg viewBox="0 0 100 100" className={`w-4 h-4 mb-0.5 ${type === 'primary' ? 'text-primary' : 'text-secondary'}`} fill="currentColor">
        <path d="M50 10C35 10 25 25 25 40C25 55 35 60 40 70C45 80 50 90 50 90C50 90 55 80 60 70C65 60 75 55 75 40C75 25 65 10 50 10ZM50 25C55 25 60 30 60 35C60 40 55 45 50 45C45 45 40 40 40 35C40 30 45 25 50 25Z" />
        <path d="M30 30C25 35 20 45 20 55C20 65 25 75 35 80" stroke="currentColor" fill="none" strokeWidth="3" strokeLinecap="round" />
        <path d="M70 30C75 35 80 45 80 55C80 65 75 75 65 80" stroke="currentColor" fill="none" strokeWidth="3" strokeLinecap="round" />
      </svg>
      <div className="w-full h-[2px] bg-black/10 scale-x-75" />
      <p className="text-[3px] font-bold text-black/40 mt-0.5 tracking-tighter uppercase">Helivex Labs</p>
    </div>
  </div>
);

export default function AssemblyLine() {
  const vials = Array.from({ length: 15 });

  return (
    <div className="relative w-full h-56 bg-foreground overflow-hidden flex items-center border-y border-white/5 shadow-inner">
      {/* Industrial Lighting Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05),transparent)] pointer-events-none" />
      
      {/* Conveyor Belt Track (More Realistic) */}
      <div className="absolute w-full h-4 bg-zinc-900 bottom-12 border-y border-white/5" />
      <div className="absolute w-full h-[2px] bg-white/5 bottom-[46px]" />
      
      {/* Moving Vials Container */}
      <motion.div 
        className="flex gap-20 items-end pb-10"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ 
          repeat: Infinity, 
          duration: 25, 
          ease: "linear" 
        }}
      >
        {[...vials, ...vials].map((_, i) => (
          <div key={i} className="relative flex flex-col items-center group">
            {/* Soft Shadow on the belt */}
            <div className="absolute -bottom-1 w-12 h-3 bg-black/60 blur-md rounded-full" />
            
            {/* The 3ml Vial Visual */}
            <div className="relative transform-gpu transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2">
              <RealVial type={i % 2 === 0 ? 'primary' : 'secondary'} />
              
              {/* Data Readout on Hover */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100">
                <div className="bg-zinc-900/90 backdrop-blur-md border border-white/10 p-2 rounded shadow-2xl">
                  <p className="text-[7px] font-mono text-white/40 uppercase tracking-tighter">Unit Identification</p>
                  <p className="text-[10px] font-mono text-white font-bold tracking-tight">HVX-3ML-{1024 + i}</p>
                  <div className="mt-1 h-0.5 w-full bg-white/5 overflow-hidden">
                    <motion.div 
                      className={`h-full ${i % 2 === 0 ? 'bg-primary' : 'bg-secondary'}`}
                      animate={{ width: ["0%", "100%"] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Mechanical Holder Clip */}
            <div className="w-14 h-2 bg-zinc-800 border-x border-t border-white/10 mt-1 rounded-t-sm" />
          </div>
        ))}
      </motion.div>

      {/* Industrial Scanning Station (Static) */}
      <div className="absolute inset-0 pointer-events-none z-10 flex justify-around opacity-30">
        {[1, 2, 3].map((s) => (
          <div key={s} className="relative h-full w-24">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-white/50 to-transparent shadow-[0_0_20px_rgba(255,255,255,0.3)]" />
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-4 h-[1px] bg-white/50 shadow-[0_0_10px_white]" />
          </div>
        ))}
      </div>

      {/* Control Panel Label */}
      <div className="absolute top-6 left-8 z-20 flex items-center gap-3">
        <div className="flex gap-1">
          <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />
          <div className="w-1 h-1 rounded-full bg-green-500/50" />
        </div>
        <p className="text-[9px] font-mono font-bold tracking-[0.4em] text-white/30 uppercase">Automated Filling Sequence 042 // Optimal</p>
      </div>
    </div>
  );
}
