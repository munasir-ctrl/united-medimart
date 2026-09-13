'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { CartDrawer } from '@/components/cart/CartDrawer';
import { CheckoutModal } from '@/components/checkout/CheckoutModal';
import { Tag, MapPin, ChevronRight } from 'lucide-react';

export function AppHeader() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  return (
    <>
      {/* Top myAster-Style Utility & Promo Banner */}
      <div className="bg-emerald-900 text-white text-xs py-1.5 px-4 border-b border-emerald-800">
        <div className="mx-auto max-w-7xl flex justify-between items-center">
          
          {/* Promo Offer Badge */}
          <div className="flex items-center gap-2">
            <span className="bg-amber-400 text-slate-900 font-extrabold px-1.5 py-0.5 rounded text-[10px] uppercase tracking-wider">
              Offer
            </span>
            <span className="font-medium text-emerald-100">
              Get 20% off on your 1st online order! Use code: <strong className="text-amber-300">NEW20</strong>
            </span>
          </div>

          {/* Quick Actions / Location Pin */}
          <div className="hidden md:flex items-center gap-4 text-emerald-200">
            <div className="flex items-center gap-1.5 cursor-pointer hover:text-white transition-colors">
              <MapPin className="h-3.5 w-3.5 text-amber-300" />
              <span>Deliver to: <strong>Perumbavoor</strong></span>
            </div>
            
            <button 
              onClick={() => setIsCheckoutOpen(true)}
              className="flex items-center gap-1 text-amber-300 hover:text-white font-semibold transition-colors"
            >
              <span>Upload Prescription</span>
              <ChevronRight className="h-3 w-3" />
            </button>
          </div>

        </div>
      </div>

      {/* Main Navigation Header */}
      <Header 
        onOpenCart={() => setIsCartOpen(true)} 
        onOpenCheckout={() => setIsCheckoutOpen(true)}
      />

      {/* Cart Drawer */}
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)}
        onOpenCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      {/* Global Checkout Modal */}
      <CheckoutModal 
        isOpen={isCheckoutOpen} 
        onClose={() => setIsCheckoutOpen(false)} 
      />
    </>
  );
}