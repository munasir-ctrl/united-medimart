'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FAQ } from '@/types';
import { cn } from '@/lib/utils';

interface FAQAccordionProps {
  faqs: FAQ[];
}

export function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="border border-border rounded-xl bg-white overflow-hidden"
          >
            <button
              className="flex items-center justify-between w-full px-5 py-4 text-left"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              aria-controls={`faq-content-${index}`}
            >
              <span className="font-semibold text-sm sm:text-base text-foreground pr-4">
                {faq.question}
              </span>
              <ChevronDown
                className={cn(
                  'h-5 w-5 text-muted-foreground shrink-0 transition-transform',
                  isOpen && 'rotate-180'
                )}
              />
            </button>
            <div
              id={`faq-content-${index}`}
              className={cn(
                'overflow-hidden transition-all',
                isOpen ? 'max-h-96' : 'max-h-0'
              )}
            >
              <div className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed">
                {faq.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
