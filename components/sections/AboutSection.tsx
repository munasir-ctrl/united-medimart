export function AboutSection() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            About United Medimart
          </h2>
        </div>
        <div className="prose prose-lg max-w-none fade-up">
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-center">
            United Medimart is a medical supermarket located at Pattal on the Perumbavoor–Kuruppampady Road in Ernakulam, Kerala. The store provides a range of medical, surgical, baby-care, cosmetic, body-support and rehabilitation products for customers in Perumbavoor and surrounding areas.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed text-center mt-4">
            With a focus on being a complete healthcare-product destination, United Medimart aims to make it convenient for local residents to find the medical and personal-care products they need. Customers can contact the store through WhatsApp to check product availability before visiting.
          </p>
        </div>
      </div>
    </section>
  );
}
