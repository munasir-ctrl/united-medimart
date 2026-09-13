'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Grid3x3, MessageCircle, MapPin } from 'lucide-react';
import { getGeneralWhatsAppUrl, getDirectionsUrl } from '@/lib/business';
import { cn } from '@/lib/utils';

export function MobileBottomNav() {
  const pathname = usePathname();

  const items = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/products', label: 'Categories', icon: Grid3x3 },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(href + '/');
  };

  return (
    <nav
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-border shadow-lg"
      aria-label="Mobile bottom navigation"
    >
      <div className="grid grid-cols-4 h-16">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex flex-col items-center justify-center gap-0.5 text-xs font-medium transition-colors',
                isActive(item.href) ? 'text-primary' : 'text-muted-foreground'
              )}
            >
              <Icon className="h-5 w-5" />
              {item.label}
            </Link>
          );
        })}
        <a
          href={getGeneralWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-0.5 text-xs font-medium text-[#25D366]"
        >
          <MessageCircle className="h-5 w-5" />
          WhatsApp
        </a>
        <a
          href={getDirectionsUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-0.5 text-xs font-medium text-muted-foreground"
        >
          <MapPin className="h-5 w-5" />
          Directions
        </a>
      </div>
    </nav>
  );
}
