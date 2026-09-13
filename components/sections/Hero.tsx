'use client';

import Link from 'next/link';
import { ArrowRight, Flame, Sparkles, Zap, Timer, Percent, ShieldCheck } from 'lucide-react';
import { WhatsAppButton, DirectionsButton } from '@/components/shared/ActionButtons';

export function Hero() {
  return (
    <section className="relative pt-4 lg:pt-8 overflow-hidden bg-gradient-to-b from-slate-900 via-[#0b2265] to-slate-900 text-white">
      {/* Background glowing effects for high energy */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(229,57,53,0.15)_0%,_transparent_70%)] pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-red-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        
        {/* Top High-Energy Flash Banner Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-2xl">
          <div className="flex items-center gap-3">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            <div className="flex items-center gap-2 text-amber-300 font-extrabold text-xs sm:text-sm tracking-wider uppercase">
              <Flame className="w-4 h-4 text-red-500 animate-bounce" />
              <span>BHOOOM! MEGA MONSOON FLASH SALE IS LIVE!</span>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow">
            <Timer className="w-3.5 h-3.5 animate-pulse" />
            <span>ENDS TONIGHT AT MIDNIGHT</span>
          </div>
        </div>

        {/* Main Explosive Hero Banner Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold shadow-inner">
              <Sparkles className="w-4 h-4 text-amber-400" />
              United Medimart • Pattal, Perumbavoor
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight uppercase leading-none drop-shadow-lg">
              MEGA OFFERS <br />
              <span className="bg-gradient-to-r from-amber-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
                GUARANTEED LOWEST!
              </span>
            </h1>

            <p className="text-base sm:text-xl text-gray-200 font-medium max-w-2xl mx-auto lg:mx-0">
              Get <strong className="text-amber-300 underline font-bold">UP TO 70% OFF</strong> on top skincare, baby care essentials, nutritional formulas, and health supplements with 30-min express delivery!
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
              <Link
                href="/categories/skin-care"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-black text-white bg-gradient-to-r from-red-600 to-pink-600 rounded-xl hover:from-red-500 hover:to-pink-500 transition-all shadow-xl hover:scale-105 active:scale-95"
              >
                <span>SHOP EXPLOSIVE DEALS</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <WhatsAppButton size="lg" />
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-6 pt-4 text-xs text-gray-300 font-semibold">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% Authentic Brands</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Express Local Delivery</span>
              </div>
            </div>
          </div>

          {/* Right Hero Dynamic Visual & Price Callout Bubbles */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-md bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-600 text-white font-black text-xs px-4 py-1.5 rounded-bl-2xl uppercase tracking-wider shadow">
                HOT DEAL
              </div>

              <div className="text-center mb-6">
                <span className="text-xs uppercase tracking-widest text-amber-300 font-bold block mb-1">Special Discount Code</span>
                <div className="bg-white/20 border border-dashed border-amber-300/60 rounded-2xl py-3 px-4 text-2xl font-black tracking-widest text-white shadow-inner">
                  NEW20
                </div>
                <span className="text-xs text-gray-300 mt-2 block">Use code at checkout for an extra 20% off your 1st order</span>
              </div>

              {/* Floating Sale Bubbles */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-amber-400 to-yellow-500 text-slate-900 rounded-2xl p-4 text-center font-black shadow-lg transform -rotate-2 hover:rotate-0 transition-transform">
                  <span className="text-[10px] uppercase block tracking-wider opacity-80">Skincare Under</span>
                  <span className="text-2xl sm:text-3xl">₹499</span>
                </div>
                <div className="bg-gradient-to-br from-red-600 to-pink-600 text-white rounded-2xl p-4 text-center font-black shadow-lg transform rotate-2 hover:rotate-0 transition-transform">
                  <span className="text-[10px] uppercase block tracking-wider opacity-80">Baby Care Savings</span>
                  <span className="text-2xl sm:text-3xl">MIN 50%</span>
                </div>
              </div>

              <div className="mt-6 text-center">
                <Link href="/categories/supplements" className="text-xs text-sky-300 font-bold hover:underline inline-flex items-center gap-1">
                  Explore Wellness & Supplement Offers ›
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Bottom High-Impact Promo Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <Link href="/categories/skin-care" className="group bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/15 rounded-2xl p-5 transition-all shadow-lg hover:border-amber-400/50">
            <div className="flex justify-between items-start mb-3">
              <span className="bg-red-500 text-white font-extrabold text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider">
                MEGA DROP
              </span>
              <Percent className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-white font-extrabold text-base mb-1 group-hover:text-amber-300 transition-colors">
              Skincare & Serums
            </h3>
            <p className="text-xs text-gray-300">The Ordinary, CeraVe & K-Beauty up to 46% off</p>
          </Link>

          <Link href="/categories/baby-care" className="group bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/15 rounded-2xl p-5 transition-all shadow-lg hover:border-amber-400/50">
            <div className="flex justify-between items-start mb-3">
              <span className="bg-amber-500 text-slate-900 font-extrabold text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider">
                BEST VALUE
              </span>
              <Percent className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-white font-extrabold text-base mb-1 group-hover:text-amber-300 transition-colors">
              Baby Milk & Wipes
            </h3>
            <p className="text-xs text-gray-300">S-26 Gold, gentle lotions & premium care</p>
          </Link>

          <Link href="/categories/hair-care" className="group bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/15 rounded-2xl p-5 transition-all shadow-lg hover:border-amber-400/50">
            <div className="flex justify-between items-start mb-3">
              <span className="bg-pink-600 text-white font-extrabold text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider">
                LIMITED TIME
              </span>
              <Percent className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-white font-extrabold text-base mb-1 group-hover:text-amber-300 transition-colors">
              Hair Repair Masks
            </h3>
            <p className="text-xs text-gray-300">K18 & professional anti-dandruff care</p>
          </Link>

          <Link href="/categories/supplements" className="group bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/15 rounded-2xl p-5 transition-all shadow-lg hover:border-amber-400/50">
            <div className="flex justify-between items-start mb-3">
              <span className="bg-emerald-600 text-white font-extrabold text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider">
                TOP SELLER
              </span>
              <Percent className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-white font-extrabold text-base mb-1 group-hover:text-amber-300 transition-colors">
              Vitamins & Ensure
            </h3>
            <p className="text-xs text-gray-300">Nutritional powders & daily health supplements</p>
          </Link>

        </div>

      </div>
    </section>
  );
}