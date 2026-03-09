import { MapPin, Phone, Mail } from "lucide-react";

const CTASection = () => {
  return (
    <section id="cta" className="py-24 md:py-32 bg-background">
      <div className="container">
        <div className="rounded-3xl bg-card p-10 md:p-16 text-center border border-border">
          <p className="text-secondary font-body text-sm uppercase tracking-[0.3em] mb-4">
            ¿Listo para la Aventura?
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Comienza a Planear tu
            <br />
            <span className="italic font-normal">Próximo Viaje</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-10 text-lg">
            Contáctanos y uno de nuestros asesores expertos te ayudará a crear
            la experiencia de viaje perfecta.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="mailto:info@voyage.com"
              className="rounded-full bg-secondary px-8 py-4 text-secondary-foreground font-semibold text-lg transition-transform hover:scale-105"
            >
              Solicitar Cotización
            </a>
            <a
              href="tel:+1234567890"
              className="rounded-full border-2 border-foreground/20 px-8 py-4 text-foreground font-semibold text-lg transition-all hover:border-secondary hover:text-secondary"
            >
              Llamar Ahora
            </a>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-muted-foreground text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-secondary" />
              <span>Av. Principal 1234, Ciudad</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-secondary" />
              <span>+1 (234) 567-890</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-secondary" />
              <span>info@voyage.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
