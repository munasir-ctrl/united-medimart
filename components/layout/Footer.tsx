import Link from 'next/link';
import { Phone, MessageCircle, MapPin, QrCode, FileText, Clock, ShieldCheck } from 'lucide-react';
import { business, getGeneralWhatsAppUrl, getPhoneUrl, getDirectionsUrl } from '@/lib/business';

const productLinks = [
  { href: '/surgical-supplies-perumbavoor', label: 'Surgical Supplies' },
  { href: '/medical-healthcare-products-perumbavoor', label: 'Medical Products' },
  { href: '/rehabilitation-equipment-perumbavoor', label: 'Rehabilitation' },
  { href: '/body-supports-braces-perumbavoor', label: 'Body Supports' },
  { href: '/baby-care-products-perumbavoor', label: 'Baby Care' },
  { href: '/cosmetics-personal-care-perumbavoor', label: 'Cosmetics' },
];

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
  { href: '/faqs', label: 'FAQs' },
  { href: '/guides', label: 'Healthcare Guide' },
];

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        {/* Top Feature Bar */}
        <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-4 rounded-2xl bg-slate-800/60 p-6 border border-slate-700/50 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
              <FileText className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">WhatsApp Prescription</p>
              <p className="text-xs text-slate-400">Instant verification & medicine orders</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
              <QrCode className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">Direct UPI Payment</p>
              <p className="text-xs text-slate-400">GPay, PhonePe & Paytm accepted</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">100% Genuine Products</p>
              <p className="text-xs text-slate-400">Trusted pharmacy in Perumbavoor</p>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary font-black text-lg text-white shadow-lg shadow-primary/30">
                UM
              </div>
              <div>
                <div className="font-bold text-lg leading-tight text-white">{business.name}</div>
                <div className="text-xs text-slate-400 leading-tight">Medical Supermarket, Perumbavoor</div>
              </div>
            </div>
            
            <p className="text-sm text-slate-300 leading-relaxed">
              Your complete medical supermarket in Perumbavoor. Medical, surgical, baby-care, cosmetics, body supports, and rehabilitation products.
            </p>

            {/* Live Store Status */}
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 border border-emerald-500/20 text-xs text-emerald-400 font-medium">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              <Clock className="h-3.5 w-3.5" />
              Open Daily: 8:00 AM – 9:00 PM
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
              <span className="font-medium text-white">EN</span>
              <span className="text-slate-600">|</span>
              <span className="font-malayalam text-slate-300">മലയാളം</span>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h3 className="font-bold text-xs uppercase tracking-wider text-slate-400 mb-4">Categories</h3>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-300 hover:text-emerald-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="font-bold text-xs uppercase tracking-wider text-slate-400 mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-300 hover:text-emerald-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Quick Actions */}
          <div>
            <h3 className="font-bold text-xs uppercase tracking-wider text-slate-400 mb-4">Store Location</h3>
            <address className="not-italic text-sm text-slate-300 leading-relaxed space-y-1 mb-5">
              <div className="font-semibold text-white">Pattal, Near Indian Oil Petrol Pump</div>
              <div>Perumbavoor–Kuruppampady Road</div>
              <div>Perumbavoor, Ernakulam – 683542</div>
              <div>Kerala, India</div>
            </address>

            <div className="space-y-2.5">
              <a
                href={getPhoneUrl()}
                className="flex items-center gap-2.5 text-sm text-slate-300 hover:text-emerald-400 transition-colors group"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800 group-hover:bg-emerald-500/20">
                  <Phone className="h-4 w-4 text-emerald-400" />
                </div>
                <span>Call Store Direct</span>
              </a>

              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-slate-300 hover:text-emerald-400 transition-colors group"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800 group-hover:bg-emerald-500/20">
                  <MessageCircle className="h-4 w-4 text-emerald-400" />
                </div>
                <span>WhatsApp Prescription & Inquiry</span>
              </a>

              <a
                href={getDirectionsUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-slate-300 hover:text-emerald-400 transition-colors group"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800 group-hover:bg-emerald-500/20">
                  <MapPin className="h-4 w-4 text-emerald-400" />
                </div>
                <span>Get Google Maps Directions</span>
              </a>
            </div>
          </div>
        </div>

        {/* Payment Methods & Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400 text-center md:text-left">
            &copy; {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>

          {/* Accepted Payment Badges */}
          <div className="flex items-center gap-2 text-[11px] text-slate-400">
            <span>Accepted Payments:</span>
            <span className="rounded bg-slate-800 px-2 py-1 font-semibold text-slate-300">UPI</span>
            <span className="rounded bg-slate-800 px-2 py-1 font-semibold text-slate-300">GPay</span>
            <span className="rounded bg-slate-800 px-2 py-1 font-semibold text-slate-300">PhonePe</span>
            <span className="rounded bg-slate-800 px-2 py-1 font-semibold text-slate-300">Paytm</span>
            <span className="rounded bg-slate-800 px-2 py-1 font-semibold text-slate-300">Cash</span>
          </div>
        </div>
      </div>
    </footer>
  );
}