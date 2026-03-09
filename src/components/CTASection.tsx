import { MapPin, Phone, Mail } from "lucide-react";
import InquiryForm from "@/components/InquiryForm";

const CTASection = () => {
  return (
    <section id="cta" className="py-24 md:py-32 bg-background">
      <div className="container">
        <div className="rounded-3xl bg-card p-10 md:p-16 border border-border">
          <div className="text-center mb-10">
            <p className="text-secondary font-body text-sm uppercase tracking-[0.3em] mb-4">
              ¿Listo para la Aventura?
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
              Solicita tu
              <br />
              <span className="italic font-normal">Cotización Gratis</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Completa el formulario y uno de nuestros asesores expertos te
              contactará con una propuesta personalizada.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <InquiryForm destination="General" />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-muted-foreground text-sm mt-12 pt-8 border-t border-border">
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
              <span>info@plazabohemiaviajes.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
