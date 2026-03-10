import { Link } from "react-router-dom";
import { cruises } from "@/data/cruises";
import { Ship, Clock } from "lucide-react";

const Cruises = () => {
  return (
    <section id="cruises" className="py-24 md:py-32 bg-card">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-secondary font-body text-sm uppercase tracking-[0.3em] mb-4">
            Experiencias en el Mar
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Cruceros de Ensueño
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cruises.map((cruise) => (
            <Link
              key={cruise.slug}
              to={`/crucero/${cruise.slug}`}
              className="group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer block"
            >
              <img
                src={cruise.image}
                alt={`Crucero ${cruise.name}`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />

              <div className="absolute top-4 left-4">
                <span className="rounded-full bg-secondary/90 px-3 py-1 text-xs font-semibold text-secondary-foreground uppercase tracking-wider">
                  {cruise.tag}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 text-primary-foreground/70 text-xs font-body mb-1">
                  <Ship className="w-3 h-3" />
                  <span>{cruise.region}</span>
                  <span className="mx-1">•</span>
                  <Clock className="w-3 h-3" />
                  <span>{cruise.duration}</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-primary-foreground mb-2">
                  {cruise.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cruises;
