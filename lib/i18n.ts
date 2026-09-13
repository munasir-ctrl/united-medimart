import type { Locale } from '@/types';

export const locales: Locale[] = ['en', 'ml'];

export const localeNames: Record<Locale, string> = {
  en: 'English',
  ml: 'മലയാളം',
};

export const localeLabels: Record<Locale, string> = {
  en: 'EN',
  ml: 'മല',
};

export const translations = {
  en: {
    nav: {
      home: 'Home',
      products: 'Products',
      surgical: 'Surgical Supplies',
      rehabilitation: 'Rehabilitation',
      bodySupports: 'Body Supports',
      babyCare: 'Baby Care',
      cosmetics: 'Cosmetics',
      about: 'About',
      contact: 'Contact',
      faqs: 'FAQs',
      guides: 'Guides',
      categories: 'Categories',
    },
    cta: {
      whatsapp: 'WhatsApp Us',
      call: 'Call',
      directions: 'Get Directions',
      exploreProducts: 'Explore Products',
      checkPrice: 'Check Price & Availability',
      whatsappEnquiry: 'WhatsApp Enquiry',
      enquireNow: 'Enquire Now',
      askProduct: 'Ask About This Product',
      readMore: 'Read More',
      exploreCategory: 'Explore',
      viewAll: 'View All',
    },
    sections: {
      everythingYouNeed: 'Everything You Need for Better Care',
      exploreCategories: 'Explore our healthcare product categories.',
      featuredProducts: 'Popular Products',
      featuredProductsSub: 'Some of the products available at United Medimart.',
      whyChoose: 'Why Choose United Medimart?',
      localArea: 'Serving Perumbavoor & Nearby Areas',
      healthcareGuide: 'Healthcare & Product Guide',
      healthcareGuideSub: 'Helpful guides to support your healthcare product decisions.',
      visitUs: 'Visit United Medimart',
      aboutUs: 'About United Medimart',
      finalCtaTitle: 'Looking for a Healthcare Product?',
      finalCtaText:
        'Whether you need medical supplies, surgical products, rehabilitation equipment, body supports, baby-care products or personal-care items, contact United Medimart to check availability.',
    },
    footer: {
      products: 'Products',
      quickLinks: 'Quick Links',
      location: 'Location',
      actions: 'Actions',
    },
    product: {
      checkAvailability: 'Check Availability',
    },
    common: {
      home: 'Home',
      backToHome: 'Back to Home',
      pageNotFound: 'Page Not Found',
      pageNotFoundDesc: 'The page you are looking for does not exist or has been moved.',
      loading: 'Loading...',
    },
  },
  ml: {
    nav: {
      home: 'ഹോം',
      products: 'ഉൽപ്പന്നങ്ങൾ',
      surgical: 'സർജിക്കൽ സപ്ലൈസ്',
      rehabilitation: 'റിഹാബിലിറ്റേഷൻ',
      bodySupports: 'ബോഡി സപ്പോർട്ടുകൾ',
      babyCare: 'ബേബി കെയർ',
      cosmetics: 'കോസ്മെറ്റിക്സ്',
      about: 'ഞങ്ങളെക്കുറിച്ച്',
      contact: 'ബന്ധപ്പെടുക',
      faqs: 'പതിവായി ചോദിക്കുന്ന ചോദ്യങ്ങൾ',
      guides: 'ഗൈഡുകൾ',
      categories: 'വിഭാഗങ്ങൾ',
    },
    cta: {
      whatsapp: 'വാട്സ്ആപ്പ്',
      call: 'വിളിക്കുക',
      directions: 'ദിശ നേടുക',
      exploreProducts: 'ഉൽപ്പന്നങ്ങൾ കാണുക',
      checkPrice: 'വിലയും ലഭ്യതയും അറിയുക',
      whatsappEnquiry: 'വാട്സ്ആപ്പ് അന്വേഷണം',
      enquireNow: 'ഇപ്പോൾ അന്വേഷിക്കുക',
      askProduct: 'ഈ ഉൽപ്പന്നത്തെക്കുറിച്ച് ചോദിക്കുക',
      readMore: 'കൂടുതൽ വായിക്കുക',
      exploreCategory: 'കാണുക',
      viewAll: 'എല്ലാം കാണുക',
    },
    sections: {
      everythingYouNeed: 'മികച്ച പരിചരണത്തിനായി നിങ്ങൾക്ക് വേണ്ടതെല്ലാം',
      exploreCategories: 'ഞങ്ങളുടെ ഹെൽത്ത്കെയർ ഉൽപ്പന്ന വിഭാഗങ്ങൾ കാണുക.',
      featuredProducts: 'പ്രിയപ്പെട്ട ഉൽപ്പന്നങ്ങൾ',
      featuredProductsSub: 'യുണൈറ്റഡ് മെഡിമാർട്ടിൽ ലഭ്യമായ ചില ഉൽപ്പന്നങ്ങൾ.',
      whyChoose: 'യുണൈറ്റഡ് മെഡിമാർട്ട് എന്തുകൊണ്ട്?',
      localArea: 'പെരുമ്പാവൂരും സമീപ പ്രദേശങ്ങളും',
      healthcareGuide: 'ഹെൽത്ത്കെയർ & ഉൽപ്പന്ന ഗൈഡ്',
      healthcareGuideSub: 'നിങ്ങളുടെ ഹെൽത്ത്കെയർ ഉൽപ്പന്ന തീരുമാനങ്ങളെ സഹായിക്കുന്ന ഗൈഡുകൾ.',
      visitUs: 'യുണൈറ്റഡ് മെഡിമാർട്ട് സന്ദർശിക്കുക',
      aboutUs: 'യുണൈറ്റഡ് മെഡിമാർട്ടിനെക്കുറിച്ച്',
      finalCtaTitle: 'ഒരു ഹെൽത്ത്കെയർ ഉൽപ്പന്നം തിരയുകയാണോ?',
      finalCtaText:
        'മെഡിക്കൽ സപ്ലൈസ്, സർജിക്കൽ ഉൽപ്പന്നങ്ങൾ, റിഹാബിലിറ്റേഷൻ ഉപകരണങ്ങൾ, ബോഡി സപ്പോർട്ടുകൾ, ബേബി കെയർ ഉൽപ്പന്നങ്ങൾ അല്ലെങ്കിൽ പേഴ്സണൽ കെയർ സാധനങ്ങൾ എന്തെങ്കിലും ആവശ്യമുണ്ടെങ്കിൽ, ലഭ്യത പരിശോധിക്കാൻ യുണൈറ്റഡ് മെഡിമാർട്ടുമായി ബന്ധപ്പെടുക.',
    },
    footer: {
      products: 'ഉൽപ്പന്നങ്ങൾ',
      quickLinks: 'ലിങ്കുകൾ',
      location: 'സ്ഥാനം',
      actions: 'പ്രവർത്തനങ്ങൾ',
    },
    product: {
      checkAvailability: 'ലഭ്യത പരിശോധിക്കുക',
    },
    common: {
      home: 'ഹോം',
      backToHome: 'ഹോമിലേക്ക് മടങ്ങുക',
      pageNotFound: 'പേജ് കണ്ടെത്താനായില്ല',
      pageNotFoundDesc: 'നിങ്ങൾ തിരയുന്ന പേജ് നിലവിലില്ല അല്ലെങ്കിൽ മാറ്റപ്പെട്ടിട്ടുണ്ട്.',
      loading: 'ലോഡ് ചെയ്യുന്നു...',
    },
  },
} as const;

export type TranslationKeys = typeof translations.en;
