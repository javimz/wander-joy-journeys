import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { groupTrips } from "@/data/groupTrips";
import { ArrowLeft, Calendar, Clock, Check, MapPin, Users } from "lucide-react";
import InquiryForm from "@/components/InquiryForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const GroupTripDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const trip = groupTrips.find((t) => t.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!trip) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="font-display text-3xl font-bold text-foreground mb-4">
            Viaje grupal no encontrado
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
      <Navbar />
      {/* Hero */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <img src={trip.image} alt={trip.name} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />

        <Link
          to="/#grupales"
          className="absolute top-6 left-6 z-20 flex items-center gap-2 rounded-full bg-background/20 backdrop-blur-md px-4 py-2 text-primary-foreground text-sm font-medium transition-colors hover:bg-background/40"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver
        </Link>

        <div className="relative z-10 h-full flex items-end">
          <div className="container pb-12">
            <span className="inline-block rounded-full bg-secondary/90 px-4 py-1.5 text-xs font-semibold text-secondary-foreground uppercase tracking-wider mb-4">
              {trip.tag}
            </span>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-2">
              {trip.name}
            </h1>
            <div className="flex items-center gap-2 text-primary-foreground/70">
              <MapPin className="w-4 h-4" />
              <span className="font-body">{trip.location}</span>
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
                      <p className="text-xs text-muted-foreground font-body">Fechas</p>
                      <p className="text-sm font-semibold text-foreground font-body">{trip.dates}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-secondary" />
                    <div>
                      <p className="text-xs text-muted-foreground font-body">Duración</p>
                      <p className="text-sm font-semibold text-foreground font-body">{trip.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-secondary" />
                    <div>
                      <p className="text-xs text-muted-foreground font-body">Modalidad</p>
                      <p className="text-sm font-semibold text-foreground font-body">Viaje Grupal</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main content */}
            <div className="lg:col-span-2 space-y-10 order-1 lg:order-2">
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Sobre el Viaje
                </h2>
                <p className="text-muted-foreground font-body text-lg leading-relaxed">
                  {trip.description}
                </p>
              </div>

              {/* Highlights */}
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-5">
                  Experiencias Destacadas
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {trip.highlights.map((h) => (
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
                  {trip.included.map((item) => (
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
              Completa el formulario y te contactaremos con toda la información del viaje grupal.
            </p>
            <div className="rounded-2xl border border-border bg-card p-6 md:p-8 max-w-3xl">
              <InquiryForm destination={`Grupal: ${trip.name}`} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default GroupTripDetail;
