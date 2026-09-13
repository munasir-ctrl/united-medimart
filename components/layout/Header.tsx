'use client';

import Link from 'next/link';
import { Search, ShoppingCart, User, MapPin, ChevronDown, FileText } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      {/* Top Announcement Bar */}
      <div className="bg-[#0b2265] text-white text-xs py-2 px-4 flex flex-wrap justify-between items-center">
        <div className="flex items-center gap-2 overflow-hidden">
          <span className="bg-[#e53935] text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
            Offer
          </span>
          <span className="truncate">Get 20% off on your 1st online order! Use code: <strong className="underline font-bold">NEW20</strong></span>
        </div>

        <div className="flex items-center gap-6 text-gray-200 text-xs">
          <div className="hidden md:flex items-center gap-1.5 cursor-pointer hover:text-white">
            <MapPin className="w-3.5 h-3.5 text-sky-400" />
            <span>Deliver to: <strong className="text-white">Perumbavoor</strong></span>
            <button className="text-sky-300 underline text-[11px] ml-1">Change</button>
          </div>
          <Link href="/upload-prescription" className="hover:text-white flex items-center gap-1 text-sky-300 font-medium">
            Upload Prescription ›
          </Link>
        </div>
      </div>

      {/* Main Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
          <div className="bg-[#0b2265] text-white font-black text-xl rounded-xl p-2.5 tracking-tighter flex items-center justify-center shadow-md">
            UM
          </div>
          <div>
            <span className="text-xl font-extrabold text-[#0b2265] tracking-tight block leading-none">
              United Medimart
            </span>
            <span className="text-[11px] text-gray-500 font-medium">
              Medical Supermarket, Perumbavoor
            </span>
          </div>
        </Link>

        {/* Central Search Bar */}
        <div className="flex-1 max-w-2xl hidden md:block">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
              <Search className="w-4 h-4" />
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for medicines, skincare, baby care..."
              className="w-full pl-10 pr-16 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:bg-white focus:border-sky-600 transition-colors shadow-inner"
            />
            <div className="absolute inset-y-0 right-0 pr-2.5 flex items-center pointer-events-none">
              <kbd className="bg-gray-200 text-gray-600 text-[10px] font-semibold px-1.5 py-0.5 rounded border border-gray-300 shadow-sm">
                Ctrl + K
              </kbd>
            </div>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="hidden lg:flex items-center gap-1 text-xs font-semibold text-gray-700">
            <span>🇮🇳</span>
            <span>IND</span>
          </div>

          <Link href="/account" className="flex flex-col items-center text-gray-700 hover:text-sky-600 text-xs font-medium">
            <User className="w-5 h-5 mb-0.5" />
            <span className="hidden sm:inline">Account</span>
          </Link>

          <Link href="/cart" className="relative flex flex-col items-center text-gray-700 hover:text-sky-600 text-xs font-medium">
            <div className="relative">
              <ShoppingCart className="w-5 h-5 mb-0.5" />
              <span className="absolute -top-1.5 -right-2 bg-sky-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow">
                0
              </span>
            </div>
            <span className="hidden sm:inline">Cart</span>
          </Link>
        </div>
      </div>

      {/* Secondary Navigation & Category Bar */}
      <div className="border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between overflow-x-auto text-sm">
          <div className="flex items-center gap-8 py-2.5 whitespace-nowrap">
            <Link href="/categories/baby-care" className="flex items-center gap-2 bg-[#0b2265] text-white font-semibold px-4 py-2 rounded-lg text-xs hover:bg-[#123188] transition-colors shadow-sm">
              <span>Shop By Category</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </Link>

            <Link href="/categories/skin-care" className="text-gray-700 font-medium hover:text-[#0b2265] transition-colors">
              Skincare
            </Link>
            <Link href="/categories/supplements" className="text-gray-700 font-medium hover:text-[#0b2265] transition-colors">
              Supplements
            </Link>
            <Link href="/offers" className="text-[#e53935] font-bold hover:opacity-80 transition-opacity">
              Offers
            </Link>
          </div>

          <div className="hidden xl:flex items-center gap-4 text-xs font-medium text-gray-600">
            <span className="text-gray-400">Drug Lic. No: <strong className="text-gray-700">KL-PKR-210426</strong></span>
            <Link href="/prescription" className="border border-[#0b2265] text-[#0b2265] px-3 py-1.5 rounded-md font-bold flex items-center gap-1.5 hover:bg-[#0b2265] hover:text-white transition-colors">
              <FileText className="w-3.5 h-3.5" />
              PRESCRIPTION
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}