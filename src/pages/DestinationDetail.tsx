import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { destinations } from "@/data/destinations";
import { ArrowLeft, Calendar, Sun, Check, MapPin } from "lucide-react";
import InquiryForm from "@/components/InquiryForm";

const DestinationDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const dest = destinations.find((d) => d.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!dest) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="font-display text-3xl font-bold text-foreground mb-4">
            Destino no encontrado
          </h1>
          <Link to="/" className="text-secondary font-semibold hover:underline">
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <img src={dest.image} alt={dest.name} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />

        <Link
          to="/#destinations"
          className="absolute top-6 left-6 z-20 flex items-center gap-2 rounded-full bg-background/20 backdrop-blur-md px-4 py-2 text-primary-foreground text-sm font-medium transition-colors hover:bg-background/40"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver
        </Link>

        <div className="relative z-10 h-full flex items-end">
          <div className="container pb-12">
            <span className="inline-block rounded-full bg-secondary/90 px-4 py-1.5 text-xs font-semibold text-secondary-foreground uppercase tracking-wider mb-4">
              {dest.tag}
            </span>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-2">
              {dest.name}
            </h1>
            <div className="flex items-center gap-2 text-primary-foreground/70">
              <MapPin className="w-4 h-4" />
              <span className="font-body">{dest.country}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              <div className="sticky top-28 rounded-2xl border border-border bg-card p-8 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-secondary" />
                    <div>
                      <p className="text-xs text-muted-foreground font-body">Duración</p>
                      <p className="text-sm font-semibold text-foreground font-body">{dest.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Sun className="w-5 h-5 text-secondary" />
                    <div>
                      <p className="text-xs text-muted-foreground font-body">Mejor Época</p>
                      <p className="text-sm font-semibold text-foreground font-body">{dest.bestSeason}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main content */}
            <div className="lg:col-span-2 space-y-10 order-1 lg:order-2">
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Sobre el Destino
                </h2>
                <p className="text-muted-foreground font-body text-lg leading-relaxed">
                  {dest.description}
                </p>
              </div>

              {/* Highlights */}
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-5">
                  Experiencias Destacadas
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {dest.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-3 rounded-xl bg-card p-4 border border-border">
                      <div className="w-8 h-8 rounded-full bg-secondary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-secondary" />
                      </div>
                      <span className="font-body text-foreground text-sm">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Included */}
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-5">
                  ¿Qué Incluye?
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {dest.included.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-secondary flex-shrink-0" />
                      <span className="font-body text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Inquiry Form - Full width at bottom */}
          <div className="mt-16" id="inquiry-form">
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">
              Solicitar Información
            </h3>
            <p className="text-muted-foreground font-body text-sm mb-6">
              Completa el formulario y te contactaremos con una propuesta personalizada.
            </p>
            <div className="rounded-2xl border border-border bg-card p-6 md:p-8 max-w-3xl">
              <InquiryForm destination={dest.name} />
            </div>
          </div>
        </div>
      </section>

      {/* Other destinations */}
      <section className="py-16 border-t border-border">
        <div className="container">
          <h3 className="font-display text-2xl font-bold text-foreground mb-8 text-center">
            Otros Destinos
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {destinations
              .filter((d) => d.slug !== dest.slug)
              .slice(0, 3)
              .map((d) => (
                <Link
                  key={d.slug}
                  to={`/destino/${d.slug}`}
                  className="group relative rounded-2xl overflow-hidden aspect-[4/3]"
                >
                  <img
                    src={d.image}
                    alt={d.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-primary-foreground/60 text-xs font-body">{d.country}</p>
                    <h4 className="font-display text-xl font-bold text-primary-foreground">{d.name}</h4>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DestinationDetail;
