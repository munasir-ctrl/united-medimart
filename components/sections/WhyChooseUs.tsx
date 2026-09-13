import { ShieldCheck, MessageCircle, MapPin, PackageSearch, HeartHandshake, Clock, Truck } from 'lucide-react';

const features = [
  {
    icon: PackageSearch,
    title: 'Wide Product Range',
    description: 'Medical, surgical, rehabilitation, baby-care, cosmetics and body-support products all under one roof in Perumbavoor.',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Enquiries',
    description: 'Check product availability and pricing before visiting. Just send a quick message and we will respond.',
  },
  {
    icon: MapPin,
    title: 'Convenient Location',
    description: 'Located at Pattal on the Perumbavoor–Kuruppampady Road, near Indian Oil Petrol Pump — easy to find and reach.',
  },
  {
    icon: HeartHandshake,
    title: 'Helpful Guidance',
    description: 'Our staff can help you understand product options and features so you can make an informed choice.',
  },
  {
    icon: ShieldCheck,
    title: 'Trusted Local Store',
    description: 'A medical supermarket built on trust, serving Perumbavoor and surrounding Ernakulam communities.',
  },
  {
    icon: Clock,
    title: 'Quick Response',
    description: 'Send a WhatsApp message to check stock and pricing — no need to travel just to find out.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-14 fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-3 text-balance">
            Why Customers Choose United Medimart
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A complete healthcare-product destination serving Perumbavoor and nearby areas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group flex flex-col p-6 bg-white rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 fade-up"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/10 mb-4 group-hover:bg-secondary/20 transition-colors">
                  <Icon className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
