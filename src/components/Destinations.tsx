import destBali from "@/assets/dest-bali.jpg";
import destMaldives from "@/assets/dest-maldives.jpg";
import destParis from "@/assets/dest-paris.jpg";
import destPeru from "@/assets/dest-peru.jpg";

const destinations = [
  {
    name: "Bali",
    country: "Indonesia",
    price: "Desde $1,299",
    image: destBali,
    tag: "Naturaleza",
  },
  {
    name: "Maldivas",
    country: "Asia",
    price: "Desde $2,499",
    image: destMaldives,
    tag: "Playa",
  },
  {
    name: "París",
    country: "Francia",
    price: "Desde $1,599",
    image: destParis,
    tag: "Cultura",
  },
  {
    name: "Machu Picchu",
    country: "Perú",
    price: "Desde $1,199",
    image: destPeru,
    tag: "Aventura",
  },
];

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
          {destinations.map((dest, i) => (
            <div
              key={dest.name}
              className="group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <img
                src={dest.image}
                alt={`Destino ${dest.name}`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />

              {/* Tag */}
              <div className="absolute top-4 left-4">
                <span className="rounded-full bg-secondary/90 px-3 py-1 text-xs font-semibold text-secondary-foreground uppercase tracking-wider">
                  {dest.tag}
                </span>
              </div>

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-primary-foreground/70 text-sm font-body mb-1">
                  {dest.country}
                </p>
                <h3 className="font-display text-2xl font-bold text-primary-foreground mb-2">
                  {dest.name}
                </h3>
                <p className="text-secondary font-semibold text-sm">
                  {dest.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
