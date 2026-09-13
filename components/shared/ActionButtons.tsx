import { MessageCircle, Phone, MapPin } from 'lucide-react';
import { getWhatsAppUrl, getGeneralWhatsAppUrl, getPhoneUrl, getDirectionsUrl } from '@/lib/business';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'outline' | 'white';

const variantClasses: Record<Variant, string> = {
  primary: 'bg-[#25D366] text-white hover:bg-[#1da851] shadow-sm',
  secondary: 'bg-primary text-white hover:bg-primary-light shadow-sm',
  outline: 'border border-border text-foreground hover:bg-accent',
  white: 'bg-white text-primary hover:bg-white/90 shadow-sm',
};

const sizeClasses = {
  sm: 'px-3 py-2 text-xs gap-1.5',
  md: 'px-4 py-2.5 text-sm gap-2',
  lg: 'px-6 py-3 text-base gap-2',
};

interface BaseProps {
  variant?: Variant;
  size?: keyof typeof sizeClasses;
  className?: string;
  label?: string;
}

export function WhatsAppButton({
  message,
  variant = 'primary',
  size = 'md',
  className,
  label = 'WhatsApp Us',
}: BaseProps & { message?: string }) {
  const href = message ? getWhatsAppUrl(message) : getGeneralWhatsAppUrl();
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-flex items-center justify-center font-semibold rounded-lg transition-colors',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      aria-label={label}
    >
      <MessageCircle className={size === 'sm' ? 'h-4 w-4' : 'h-5 w-5'} />
      {label}
    </a>
  );
}

export function CallButton({
  variant = 'outline',
  size = 'md',
  className,
  label = 'Call Us',
}: BaseProps) {
  return (
    <a
      href={getPhoneUrl()}
      className={cn(
        'inline-flex items-center justify-center font-semibold rounded-lg transition-colors',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      aria-label={label}
    >
      <Phone className={size === 'sm' ? 'h-4 w-4' : 'h-5 w-5'} />
      {label}
    </a>
  );
}

export function DirectionsButton({
  variant = 'outline',
  size = 'md',
  className,
  label = 'Get Directions',
}: BaseProps) {
  return (
    <a
      href={getDirectionsUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-flex items-center justify-center font-semibold rounded-lg transition-colors',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      aria-label={label}
    >
      <MapPin className={size === 'sm' ? 'h-4 w-4' : 'h-5 w-5'} />
      {label}
    </a>
  );
}
