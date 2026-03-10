import { useParams, Link } from "react-router-dom";
import { cruises } from "@/data/cruises";
import { ArrowLeft, Calendar, Sun, Check, Ship, MapPin, Anchor } from "lucide-react";
import InquiryForm from "@/components/InquiryForm";

const CruiseDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const cruise = cruises.find((c) => c.slug === slug);

  if (!cruise) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="font-display text-3xl font-bold text-foreground mb-4">
            Crucero no encontrado
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
        <img src={cruise.image} alt={cruise.name} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />

        <Link
          to="/#cruises"
          className="absolute top-6 left-6 z-20 flex items-center gap-2 rounded-full bg-background/20 backdrop-blur-md px-4 py-2 text-primary-foreground text-sm font-medium transition-colors hover:bg-background/40"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver
        </Link>

        <div className="relative z-10 h-full flex items-end">
          <div className="container pb-12">
            <span className="inline-block rounded-full bg-secondary/90 px-4 py-1.5 text-xs font-semibold text-secondary-foreground uppercase tracking-wider mb-4">
              {cruise.tag}
            </span>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-2">
              {cruise.name}
            </h1>
            <div className="flex items-center gap-4 text-primary-foreground/70">
              <div className="flex items-center gap-2">
                <Ship className="w-4 h-4" />
                <span className="font-body">{cruise.shipName}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span className="font-body">{cruise.departurePort}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Sobre el Crucero
                </h2>
                <p className="text-muted-foreground font-body text-lg leading-relaxed">
                  {cruise.description}
                </p>
              </div>

              {/* Itinerary */}
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-5">
                  <Anchor className="inline w-5 h-5 mr-2 text-secondary" />
                  Itinerario
                </h3>
                <div className="space-y-3">
                  {cruise.itinerary.map((day) => (
                    <div
                      key={day.day}
                      className="flex gap-4 rounded-xl bg-card p-4 border border-border"
                    >
                      <div className="w-12 h-12 rounded-full bg-secondary/15 flex items-center justify-center flex-shrink-0">
                        <span className="text-secondary font-display font-bold text-sm">
                          D{day.day}
                        </span>
                      </div>
                      <div>
                        <p className="font-body font-semibold text-foreground text-sm">
                          {day.port}
                        </p>
                        <p className="font-body text-muted-foreground text-sm mt-0.5">
                          {day.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-5">
                  Experiencias Destacadas
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {cruise.highlights.map((h) => (
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
                  {cruise.included.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-secondary flex-shrink-0" />
                      <span className="font-body text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inquiry Form */}
              <div className="mt-12" id="inquiry-form">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  Solicitar Información
                </h3>
                <p className="text-muted-foreground font-body text-sm mb-6">
                  Completa el formulario y te contactaremos con una propuesta personalizada.
                </p>
                <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
                  <InquiryForm destination={`Crucero: ${cruise.name}`} />
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 rounded-2xl border border-border bg-card p-8 space-y-6">
                <div>
                  <p className="text-muted-foreground text-sm font-body mb-1">Precio por persona</p>
                  <p className="font-display text-3xl font-bold text-foreground">
                    {cruise.price.replace("Desde ", "")}
                  </p>
                  <p className="text-xs text-muted-foreground font-body mt-1">
                    *Precio base por persona en camarote doble
                  </p>
                </div>

                <div className="space-y-4 border-t border-border pt-6">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-secondary" />
                    <div>
                      <p className="text-xs text-muted-foreground font-body">Duración</p>
                      <p className="text-sm font-semibold text-foreground font-body">{cruise.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Sun className="w-5 h-5 text-secondary" />
                    <div>
                      <p className="text-xs text-muted-foreground font-body">Mejor Época</p>
                      <p className="text-sm font-semibold text-foreground font-body">{cruise.bestSeason}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Ship className="w-5 h-5 text-secondary" />
                    <div>
                      <p className="text-xs text-muted-foreground font-body">Barco</p>
                      <p className="text-sm font-semibold text-foreground font-body">{cruise.shipName}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-secondary" />
                    <div>
                      <p className="text-xs text-muted-foreground font-body">Puerto de Salida</p>
                      <p className="text-sm font-semibold text-foreground font-body">{cruise.departurePort}</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other cruises */}
      <section className="py-16 border-t border-border">
        <div className="container">
          <h3 className="font-display text-2xl font-bold text-foreground mb-8 text-center">
            Otros Cruceros
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {cruises
              .filter((c) => c.slug !== cruise.slug)
              .slice(0, 3)
              .map((c) => (
                <Link
                  key={c.slug}
                  to={`/crucero/${c.slug}`}
                  className="group relative rounded-2xl overflow-hidden aspect-[4/3]"
                >
                  <img
                    src={c.image}
                    alt={c.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-primary-foreground/60 text-xs font-body">{c.region} • {c.duration}</p>
                    <h4 className="font-display text-xl font-bold text-primary-foreground">{c.name}</h4>
                    <p className="text-secondary text-sm font-semibold">{c.price}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CruiseDetail;
