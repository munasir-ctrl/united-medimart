    'use client';

import React from 'react';
import Link from 'next/link';

const wellnessGoals = [
  { name: "Women's Health", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400" },
  { name: "Immunity & Wellbeing", image: "https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?auto=format&fit=crop&q=80&w=400" },
  { name: "Gut Health", image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=400" },
  { name: "Skin & Hair", image: "https://images.unsplash.com/photo-1512290900673-7002b5217822?auto=format&fit=crop&q=80&w=400" },
  { name: "Bone & Joint", image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=400" },
  { name: "Brain & Memory", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=400" },
  { name: "Men's Health", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400" },
  { name: "Energy & Wellness", image: "https://images.unsplash.com/photo-1483721074892-4a8580712694?auto=format&fit=crop&q=80&w=400" },
  { name: "Sleep & Stress Support", image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&q=80&w=400" },
  { name: "Weight Management", image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=400" },
  { name: "Heart Health", image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=400" },
  { name: "Children's Growth", image: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?auto=format&fit=crop&q=80&w=400" }
];

const healthConcerns = [
  { name: "Headaches & Migraines", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=250" },
  { name: "Back Pain", image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=250" },
  { name: "Depression & Low Mood", image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=250" },
  { name: "Tiredness & Fatigue", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=250" },
  { name: "Insomnia", image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&q=80&w=250" },
  { name: "High Blood Pressure", image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=250" },
  { name: "Anxiety", image: "https://images.unsplash.com/photo-1512290900673-7002b5217822?auto=format&fit=crop&q=80&w=250" }
];

const everydayCare = [
  { name: "Allergy Relief", brand: "Telfast" },
  { name: "Nasal Preparations", brand: "Otrivin" },
  { name: "Pain Relief", brand: "Panadol" },
  { name: "Cough", brand: "PanaNatural" },
  { name: "Kids Health", brand: "Adol" },
  { name: "Cold & Flu", brand: "Fludrex" }
];

const topCategories = [
  { name: "Min 50% Off", badge: "MIN 50% OFF", bg: "bg-gradient-to-br from-amber-50 to-orange-100 text-red-600 border-orange-200" },
  { name: "K-Beauty", bg: "bg-gradient-to-br from-rose-50 to-pink-100 text-rose-900 border-rose-200" },
  { name: "Personal Care", bg: "bg-gradient-to-br from-orange-50 to-amber-50 text-amber-900 border-orange-100" },
  { name: "Top Deals", badge: "TOP DEALS", bg: "bg-gradient-to-br from-slate-100 to-slate-200 text-slate-900 border-slate-200" },
  { name: "Health & Wellness", bg: "bg-gradient-to-br from-emerald-50 to-teal-100 text-teal-900 border-teal-200" },
  { name: "Mother & Baby", bg: "bg-gradient-to-br from-blue-50 to-indigo-100 text-indigo-900 border-blue-200" },
  { name: "Health Picks", badge: "HEALTH PICKS", bg: "bg-gradient-to-br from-sky-50 to-blue-100 text-blue-900 border-sky-200" },
  { name: "Beauty", bg: "bg-gradient-to-br from-pink-50 to-rose-100 text-rose-900 border-pink-200" },
  { name: "Hair Care", bg: "bg-gradient-to-br from-amber-50/60 to-yellow-100 text-amber-900 border-amber-200" },
  { name: "New Arrival", badge: "NEW ARRIVAL", bg: "bg-gradient-to-br from-violet-50 to-purple-100 text-violet-900 border-violet-200" },
  { name: "Home Health", bg: "bg-gradient-to-br from-teal-50 to-emerald-100 text-emerald-900 border-teal-200" },
  { name: "Medical Essentials", bg: "bg-gradient-to-br from-slate-50 to-blue-50 text-slate-900 border-slate-200" }
];

export function WellnessGoalsSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 bg-white">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">Shop by Wellness Goals</h2>
        <Link href="/products" className="text-sm font-bold text-teal-600 hover:text-teal-800 hover:underline transition-all">
          View All &rarr;
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5">
        {wellnessGoals.map((item, idx) => (
          <Link key={idx} href="/products" className="group text-center bg-slate-50/70 p-3.5 rounded-3xl border border-slate-100/80 hover:border-teal-300 hover:bg-teal-50/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="relative h-28 w-full rounded-2xl overflow-hidden mb-3 shadow-inner bg-slate-200">
              <img src={item.image} alt={item.name} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
            </div>
            <span className="text-xs font-extrabold text-slate-800 tracking-tight group-hover:text-teal-700 transition-colors line-clamp-1">
              {item.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function MedimartRemainingSections() {
  return (
    <div className="space-y-16 py-10 bg-white">
      
      {/* Redesigned E-Commerce Medical Supermarket Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-[2.5rem] bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 p-8 sm:p-12 overflow-hidden shadow-2xl text-white border border-teal-900/50">
          
          {/* Background glow effects */}
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute right-1/3 -bottom-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content Area */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-extrabold tracking-wide uppercase shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                📍 Pattal, Perumbavoor, Kerala
              </div>

              <div className="space-y-2">
                <h3 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
                  United <span className="text-teal-400">Medimart</span>
                </h3>
                <p className="text-slate-300 text-lg sm:text-xl font-medium tracking-tight">
                  Your Complete Medical Supermarket
                </p>
              </div>

              {/* Category Pills/Tags */}
              <div className="flex flex-wrap gap-2 pt-1">
                {['Medical', 'Surgical', 'Baby Care', 'Cosmetics', 'Body Supports', 'Rehabilitation'].map((tag, i) => (
                  <span key={i} className="text-xs font-semibold px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-slate-300 backdrop-blur-md">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-3">
                <Link href="/products" className="inline-flex items-center justify-center bg-teal-500 text-slate-950 font-extrabold px-7 py-3.5 rounded-2xl hover:bg-teal-400 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-teal-500/25">
                  Explore Products &rarr;
                </Link>
                
                <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-emerald-600/90 text-white font-extrabold px-6 py-3.5 rounded-2xl hover:bg-emerald-500 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-emerald-900/20">
                  <span>WhatsApp Us</span>
                </a>

                <Link href="/contact" className="inline-flex items-center gap-1.5 bg-white/10 text-white font-bold px-5 py-3.5 rounded-2xl hover:bg-white/20 transition-all border border-white/10 backdrop-blur-md">
                  <span>Get Directions</span>
                </Link>
              </div>
            </div>

            {/* Right Image Card Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group bg-slate-800">
                <img 
                  src="https://images.unsplash.com/photo-1586015518255-b732b29264a2?auto=format&fit=crop&q=80&w=800" 
                  alt="United Medimart Store" 
                  className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                />
                
                {/* Floating Glassmorphism Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/80 backdrop-blur-xl border border-white/10 p-4 rounded-2xl flex items-center justify-between shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-400 font-bold">
                      🏥
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">Visit Our Supermarket</p>
                      <p className="text-[11px] text-slate-300 font-medium">Pattal, Perumbavoor</p>
                    </div>
                  </div>
                  <span className="text-xs font-extrabold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">
                    Open Now
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Health Concerns Grid Below */}
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-3 sm:gap-4 mt-8">
          {healthConcerns.map((concern, idx) => (
            <Link key={idx} href="/products" className="group text-center bg-slate-50/80 p-3 rounded-2xl border border-slate-100 hover:border-teal-300 hover:shadow-md hover:-translate-y-0.5 transition-all">
              <div className="h-20 w-full rounded-xl overflow-hidden mb-2 bg-slate-200 shadow-inner">
                <img src={concern.image} alt={concern.name} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="text-[11px] font-bold text-slate-700 leading-tight block group-hover:text-teal-700">
                {concern.name}
              </span>
            </Link>
          ))}
          
          <Link href="/products" className="flex flex-col items-center justify-center h-28 rounded-2xl bg-teal-50/50 border border-dashed border-teal-300 hover:bg-teal-100/60 hover:scale-[1.02] transition-all text-teal-800 shadow-sm">
            <span className="text-xs font-extrabold">View All</span>
          </Link>
        </div>
      </section>

      {/* Everyday Care */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-6 tracking-tight">Everyday Care</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {everydayCare.map((item, idx) => (
            <div key={idx} className="relative bg-gradient-to-b from-sky-50 to-blue-100/60 rounded-3xl p-5 h-60 flex flex-col justify-between items-center border border-sky-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-24 h-32 bg-white/90 rounded-2xl flex items-center justify-center font-black text-sky-900 text-center text-xs p-3 shadow-sm border border-sky-100 group-hover:scale-105 transition-transform">
                {item.brand}
              </div>
              <div className="w-full bg-slate-900 text-white text-center py-2.5 rounded-xl text-xs font-extrabold tracking-wide shadow-sm group-hover:bg-teal-600 transition-colors">
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Top Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-6 tracking-tight">Top Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {topCategories.map((cat, idx) => (
            <Link key={idx} href="/products" className={`group flex flex-col items-center justify-center p-5 rounded-3xl h-32 ${cat.bg} border hover:scale-105 hover:shadow-lg transition-all duration-300`}>
              {cat.badge ? (
                <span className="text-sm sm:text-base font-black tracking-tight text-center leading-tight group-hover:scale-105 transition-transform">
                  {cat.badge}
                </span>
              ) : (
                <span className="text-sm font-extrabold text-slate-900 text-center tracking-tight group-hover:scale-105 transition-transform">
                  {cat.name}
                </span>
              )}
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}