import heroImg from "@/assets/hero-travel.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <img
        src={heroImg}
        alt="Vista aérea de Santorini al atardecer"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--hero-overlay)" }}
      />

      <div className="relative z-10 container text-center px-4">
        <p
          className="text-secondary font-body text-sm md:text-base uppercase tracking-[0.3em] mb-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Agencia de Viajes Premium
        </p>
        <h1
          className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-[1.1] mb-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          Plaza Bohemia Viajes
        </h1>
        <p
          className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-body opacity-0 animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          Experiencias de viaje únicas diseñadas a la medida de tus sueños.
          Lujo, aventura y cultura en cada destino.
        </p>
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up"
          style={{ animationDelay: "0.8s" }}
        >
          <a
            href="#destinations"
            className="rounded-full bg-secondary px-8 py-4 text-secondary-foreground font-semibold text-lg transition-transform hover:scale-105"
          >
            Explorar Destinos
          </a>
          <a
            href="#services"
            className="rounded-full border-2 border-primary-foreground/40 px-8 py-4 text-primary-foreground font-semibold text-lg transition-all hover:bg-primary-foreground/10"
          >
            Nuestros Servicios
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "1.5s" }}>
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/40 flex justify-center pt-2">
          <div className="w-1 h-3 rounded-full bg-primary-foreground/60 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
