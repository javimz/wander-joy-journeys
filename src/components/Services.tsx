import { Compass, Shield, Gem, Headphones } from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "Itinerarios Personalizados",
    description:
      "Diseñamos cada viaje según tus preferencias, intereses y ritmo. Sin rutas genéricas.",
  },
  {
    icon: Shield,
    title: "Viajes Seguros",
    description:
      "Seguro de viaje completo, asistencia 24/7 y protocolos de seguridad en cada destino.",
  },
  {
    icon: Gem,
    title: "Experiencias Exclusivas",
    description:
      "Acceso a experiencias privadas, tours VIP y alojamientos de lujo seleccionados.",
  },
  {
    icon: Headphones,
    title: "Soporte Dedicado",
    description:
      "Un asesor personal te acompaña antes, durante y después de tu viaje.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-dark-surface text-dark-surface-foreground">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-secondary font-body text-sm uppercase tracking-[0.3em] mb-4">
            Nuestros Servicios
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            ¿Por Qué Elegirnos?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group text-center p-8 rounded-2xl border border-dark-surface-foreground/10 transition-all duration-300 hover:border-secondary/40 hover:bg-dark-surface-foreground/5"
            >
              <div className="w-14 h-14 rounded-full bg-secondary/15 flex items-center justify-center mx-auto mb-6 transition-colors group-hover:bg-secondary/25">
                <service.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-dark-surface-foreground/70 font-body text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
