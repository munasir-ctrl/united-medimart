'use client';

import { useState, useEffect } from 'react';
import { Sparkles, Zap, Percent, ArrowRight, Flame } from 'lucide-react';
import Link from 'next/link';

export function BoomIntroAnimation() {
  const [showAnimation, setShowAnimation] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Check if user has already seen the intro this session
    const hasSeenBoom = sessionStorage.getItem('has_seen_boom_intro');
    
    // Respect accessibility settings (reduced motion)
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!hasSeenBoom && !prefersReducedMotion) {
      setShowAnimation(true);
      sessionStorage.setItem('has_seen_boom_intro', 'true');
    }
  }, []);

  const handleSkipOrComplete = () => {
    setIsExiting(true);
    setTimeout(() => {
      setShowAnimation(false);
    }, 400); // match exit transition duration
  };

  if (!showAnimation) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-slate-950 text-white overflow-hidden transition-opacity duration-500 ${
        isExiting ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Dynamic Background Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(229,57,53,0.25)_0%,_transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-600/10 rounded-full blur-3xl pointer-events-none animate-pulse" />

      {/* Skip Button */}
      <button 
        onClick={handleSkipOrComplete}
        className="absolute top-6 right-6 text-xs font-bold uppercase tracking-widest bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full backdrop-blur-md transition-colors z-20 text-gray-300"
      >
        Skip Intro ›
      </button>

      {/* Central Animation Stage */}
      <div className="relative max-w-4xl w-full mx-4 text-center flex flex-col items-center justify-center">
        
        {/* Floating Flying Discount Badges (Pop into view) */}
        <div className="absolute -top-16 sm:-top-20 left-4 sm:left-12 animate-[bounce_2s_infinite] bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 font-black text-xs sm:text-sm px-3.5 py-1.5 rounded-full shadow-2xl rotate-[-8deg] flex items-center gap-1">
          <Percent className="w-3.5 h-3.5" /> 50% OFF
        </div>
        <div className="absolute -top-12 sm:-top-16 right-4 sm:right-16 animate-[pulse_1.5s_infinite] bg-gradient-to-r from-red-600 to-pink-600 text-white font-black text-xs sm:text-sm px-3.5 py-1.5 rounded-full shadow-2xl rotate-[10deg] flex items-center gap-1">
          <Flame className="w-3.5 h-3.5" /> 70% OFF
        </div>
        <div className="absolute bottom-4 left-6 sm:left-24 hidden sm:flex items-center gap-1 bg-white/10 backdrop-blur-md border border-white/20 text-sky-300 font-bold text-xs px-3 py-1 rounded-full rotate-[-4deg]">
          <Zap className="w-3.5 h-3.5 text-amber-400" /> 30% OFF SKINCARE
        </div>

        {/* Central Pulse & BOOM! Typography */}
        <div className="relative py-8">
          
          {/* Radial Burst Ring Effect */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full border-2 border-red-500/40 animate-[ping_0.8s_cubic-bezier(0,0,0.2,1)_infinite]" />
          </div>

          <div className="relative z-10 animate-[scaleUp_0.4s_cubic-bezier(0.175,0.885,0.32,1.275)_forwards]">
            <span className="text-xs uppercase tracking-[0.3em] text-amber-400 font-extrabold block mb-2">
              United Medimart Flash Sale
            </span>
            <h1 className="text-6xl sm:text-8xl lg:text-9xl font-black tracking-tighter uppercase italic bg-gradient-to-r from-amber-300 via-red-500 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_10px_20px_rgba(229,57,53,0.5)]">
              BOOM!
            </h1>
          </div>
        </div>

        {/* Subtitle Reveals */}
        <div className="space-y-3 mt-2 animate-[fadeIn_0.6s_ease-out_0.3s_forwards] opacity-0 [animation-fill-mode:forwards]">
          <h2 className="text-xl sm:text-3xl font-black tracking-tight text-white uppercase">
            MEGA PHARMACY OFFERS
          </h2>
          <p className="text-lg sm:text-xl font-extrabold text-amber-300 tracking-wide">
            UP TO 70% OFF ON ALL WELLNESS & BABY CARE
          </p>
        </div>

        {/* Action Buttons CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mt-8 animate-[fadeIn_0.6s_ease-out_0.5s_forwards] opacity-0 [animation-fill-mode:forwards]">
          <button
            onClick={handleSkipOrComplete}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-black text-slate-950 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 rounded-2xl hover:brightness-110 transition-all shadow-2xl shadow-amber-500/30 hover:scale-105 active:scale-95"
          >
            <span>🔥 SHOP BOOM DEALS</span>
            <ArrowRight className="h-5 w-5" />
          </button>
          
          <button
            onClick={handleSkipOrComplete}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl backdrop-blur-md transition-all"
          >
            EXPLORE ALL OFFERS
          </button>
        </div>

      </div>

      {/* Tailwind Custom Keyframes Injection */}
      <style jsx global>{`
        @keyframes scaleUp {
          0% { transform: scale(0.4); opacity: 0; }
          70% { transform: scale(1.08); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}