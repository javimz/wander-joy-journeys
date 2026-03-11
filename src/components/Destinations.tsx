import { Link } from "react-router-dom";
import { destinations } from "@/data/destinations";

const Destinations = () => {
  return (
    <section id="destinations" className="py-24 md:py-32 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-secondary font-body text-sm uppercase tracking-[0.3em] mb-4">
            Destinos Populares
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Lugares que Inspiran
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest) => (
            <Link
              key={dest.slug}
              to={`/destino/${dest.slug}`}
              className="group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer block"
            >
              <img
                src={dest.image}
                alt={`Destino ${dest.name}`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />

              <div className="absolute top-4 left-4">
                <span className="rounded-full bg-secondary/90 px-3 py-1 text-xs font-semibold text-secondary-foreground uppercase tracking-wider">
                  {dest.tag}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-primary-foreground/70 text-sm font-body mb-1">
                  {dest.country}
                </p>
                <h3 className="font-display text-2xl font-bold text-primary-foreground mb-1">
                  {dest.name}
                </h3>
                <p className="text-primary-foreground/60 text-xs font-body">
                  {dest.dates} • {dest.duration}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
