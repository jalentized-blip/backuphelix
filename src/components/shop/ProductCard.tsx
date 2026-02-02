'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Eye } from 'lucide-react';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group flex flex-col bg-white rounded-2xl border border-border overflow-hidden transition-all hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20">
      {/* Image Section */}
      <Link href={`/product/${product.id}`} className="aspect-[4/5] relative bg-zinc-50 overflow-hidden flex items-center justify-center p-8">
        {product.isNew && (
          <span className="absolute top-4 left-4 z-10 bg-secondary text-secondary-foreground text-[10px] font-bold px-2.5 py-1 rounded-full">NEW</span>
        )}
        {product.isBestSeller && (
          <span className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground text-[10px] font-bold px-2.5 py-1 rounded-full">BEST SELLER</span>
        )}
        
        <div className="relative w-full h-full group-hover:scale-110 transition-all duration-700">
          <Image 
            src={product.image} 
            alt={product.name}
            fill
            className="object-contain drop-shadow-2xl"
            priority
          />
        </div>
        
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none reflective-glow" />
      </Link>
      
      {/* Info Section */}
      <div className="p-5 flex flex-col gap-4">
        <div className="space-y-1">
          <Link href={`/product/${product.id}`} className="block">
            <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{product.name}</h3>
          </Link>
          <div className="flex items-center justify-between">
            <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-medium">{product.category}</p>
            <p className="text-primary font-black text-sm tracking-tight">{product.priceRange}</p>
          </div>
        </div>

        <Link 
          href={`/product/${product.id}`}
          className="w-full bg-primary text-white text-[10px] font-black tracking-[0.2em] py-3.5 rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group/btn relative overflow-hidden transition-all hover:bg-accent active:scale-[0.98]"
        >
          <Eye className="h-3.5 w-3.5 relative z-10" />
          <span className="relative z-10 uppercase">VIEW</span>
          <div className="absolute inset-0 bg-white/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
        </Link>
      </div>
    </div>
  );
}
