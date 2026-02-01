'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, ShieldCheck, Cpu, Zap, Beaker, Search, Database, Fingerprint } from 'lucide-react';

const DataRow = ({ label, value, color }: { label: string, value: string, color: string }) => (
  <div className="flex justify-between items-center py-1 border-b border-white/5">
    <span className="text-[10px] uppercase tracking-wider text-white/40">{label}</span>
    <span className={`text-[10px] font-mono font-bold ${color}`}>{value}</span>
  </div>
);

export default function MedicalCore() {
  const [activeScan, setActiveScan] = useState(0);
  const [metrics, setMetrics] = useState({
    purity: '99.82%',
    stability: 'Optimal',
    sequence: 'HVX-77-ALPHA',
    temp: '4.2°C'
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        ...prev,
        purity: (99.8 + Math.random() * 0.1).toFixed(2) + '%',
        temp: (4.1 + Math.random() * 0.3).toFixed(1) + '°C'
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-[500px] bg-foreground overflow-hidden py-20 px-6">
      {/* Background Tech Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02),transparent)]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[size:40px_40px] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]" />
      </div>

      <div className="container relative z-10 mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Left Side: Visual Analysis Core */}
          <div className="w-full lg:w-1/2 relative aspect-square max-w-[450px]">
            {/* Pulsing Outer Ring */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border border-primary/20 rounded-full border-dashed"
            />
            
            {/* Scanning Laser */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_90deg,rgba(var(--primary),0.1)_100deg)] rounded-full"
            />

            {/* Central Molecular Visualization */}
            <div className="absolute inset-12 border border-white/5 rounded-full flex items-center justify-center bg-zinc-900/50 backdrop-blur-xl overflow-hidden shadow-2xl">
              <motion.div 
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="text-primary"
              >
                <Activity size={120} strokeWidth={0.5} />
              </motion.div>
              
              {/* Overlay HUD elements */}
              <div className="absolute top-8 left-8">
                <div className="w-8 h-8 border-t border-l border-primary/40" />
              </div>
              <div className="absolute bottom-8 right-8">
                <div className="w-8 h-8 border-b border-r border-primary/40" />
              </div>
            </div>

            {/* Floating Data Nodes */}
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                animate={{ 
                  y: [0, -10, 0],
                  x: [0, i % 2 === 0 ? 5 : -5, 0]
                }}
                transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
                className={`absolute p-2 bg-zinc-900/80 border border-white/10 rounded-md backdrop-blur-sm z-20
                  ${i === 0 ? 'top-0 right-0' : ''}
                  ${i === 1 ? 'bottom-0 left-0' : ''}
                  ${i === 2 ? 'top-1/4 -left-4' : ''}
                  ${i === 3 ? 'bottom-1/4 -right-4' : ''}
                `}
              >
                <div className="flex items-center gap-2">
                  <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${i % 2 === 0 ? 'bg-primary' : 'bg-secondary'}`} />
                  <span className="text-[8px] font-mono text-white/60 tracking-tighter">NODE_V.{104+i}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side: Data Interface */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <Cpu size={20} />
                </div>
                <h3 className="text-[10px] font-bold tracking-[0.4em] text-primary uppercase">Precision Core Interface</h3>
              </div>
              <h2 className="text-4xl font-bold tracking-tighter text-white">MOLECULAR ANALYSIS <br />REAL-TIME FEED</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Metrics Card */}
              <div className="bg-zinc-900/50 border border-white/5 p-6 rounded-xl space-y-4">
                <div className="flex items-center gap-2 text-white/40 mb-2">
                  <Database size={14} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Synthesis Metrics</span>
                </div>
                <DataRow label="Batch Purity" value={metrics.purity} color="text-green-400" />
                <DataRow label="Stability Index" value={metrics.stability} color="text-primary" />
                <DataRow label="Thermal State" value={metrics.temp} color="text-blue-400" />
                <DataRow label="Sequence ID" value={metrics.sequence} color="text-white" />
              </div>

              {/* Security/Verification Card */}
              <div className="bg-zinc-900/50 border border-white/5 p-6 rounded-xl space-y-4">
                <div className="flex items-center gap-2 text-white/40 mb-2">
                  <ShieldCheck size={14} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Verification Status</span>
                </div>
                <div className="flex items-center gap-4 py-2">
                  <div className="relative">
                    <Fingerprint size={32} className="text-secondary opacity-50" />
                    <motion.div 
                      animate={{ top: ['0%', '100%', '0%'] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute top-0 left-0 w-full h-0.5 bg-secondary shadow-[0_0_10px_rgba(var(--secondary),0.8)]"
                    />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-white">AUTHENTICATED</p>
                    <p className="text-[8px] text-white/40">3RD PARTY LAB VERIFIED</p>
                  </div>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    animate={{ width: ['0%', '100%'] }}
                    transition={{ duration: 10, repeat: Infinity }}
                    className="h-full bg-primary"
                  />
                </div>
              </div>
            </div>

            {/* Bottom Status Bar */}
            <div className="p-4 border border-primary/10 bg-primary/5 rounded-lg flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
                <p className="text-[10px] font-mono text-primary font-bold tracking-widest uppercase">System Online // All Parameters Within Range</p>
              </div>
              <Search size={14} className="text-primary/40" />
            </div>
          </div>

        </div>
      </div>

      {/* Edge Decor */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />
    </div>
  );
}
