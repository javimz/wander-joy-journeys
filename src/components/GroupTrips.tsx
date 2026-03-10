import { Link } from "react-router-dom";
import { groupTrips } from "@/data/groupTrips";
import { Users, Calendar } from "lucide-react";

const GroupTrips = () => {
  return (
    <section id="grupales" className="py-24 md:py-32 bg-card">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-secondary font-body text-sm uppercase tracking-[0.3em] mb-4">
            Viajes en Grupo
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Grupales
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {groupTrips.map((trip) => (
            <Link
              key={trip.slug}
              to={`/grupal/${trip.slug}`}
              className="group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer block"
            >
              <img
                src={trip.image}
                alt={`Viaje grupal ${trip.name}`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />

              <div className="absolute top-4 left-4">
                <span className="rounded-full bg-secondary/90 px-3 py-1 text-xs font-semibold text-secondary-foreground uppercase tracking-wider">
                  {trip.tag}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 text-primary-foreground/70 text-xs font-body mb-1">
                  <Users className="w-3 h-3" />
                  <span>{trip.location}</span>
                  <span className="mx-1">•</span>
                  <Calendar className="w-3 h-3" />
                  <span>{trip.duration}</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-primary-foreground mb-2">
                  {trip.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GroupTrips;
