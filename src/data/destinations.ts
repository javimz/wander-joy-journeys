import destBali from "@/assets/dest-bali.jpg";
import destMaldives from "@/assets/dest-maldives.jpg";
import destParis from "@/assets/dest-paris.jpg";
import destPeru from "@/assets/dest-peru.jpg";

export interface Destination {
  slug: string;
  name: string;
  country: string;
  image: string;
  tag: string;
  description: string;
  highlights: string[];
  dates: string;
  duration: string;
  bestSeason: string;
  included: string[];
}

export const destinations: Destination[] = [
  {
    slug: "bali",
    name: "Bali",
    country: "Indonesia",
    image: destBali,
    tag: "Naturaleza",
    dates: "Consultar disponibilidad",
    description:
      "Sumérgete en la magia de Bali, la Isla de los Dioses. Desde los exuberantes arrozales de Tegallalang hasta los templos sagrados de Uluwatu, cada rincón de esta isla tropical ofrece una experiencia única. Disfruta de playas paradisíacas, spas de clase mundial y una gastronomía que despierta los sentidos.",
    highlights: [
      "Terrazas de arroz de Tegallalang",
      "Templo de Tanah Lot al atardecer",
      "Snorkel en las islas Nusa",
      "Ceremonia de purificación balinesa",
      "Surf en Uluwatu",
    ],
    duration: "7 - 14 días",
    bestSeason: "Abril - Octubre",
    included: [
      "Vuelos internacionales",
      "Hotel 5 estrellas",
      "Traslados privados",
      "Guía bilingüe",
      "Excursiones incluidas",
      "Seguro de viaje",
    ],
  },
  {
    slug: "maldivas",
    name: "Maldivas",
    country: "Asia",
    image: destMaldives,
    tag: "Playa",
    dates: "Consultar disponibilidad",
    description:
      "Las Maldivas son el destino definitivo para quienes buscan lujo y serenidad. Imagina despertar en una villa sobre el agua cristalina del Océano Índico, con el sonido suave de las olas como tu alarma. Arrecifes de coral vibrantes, cenas bajo las estrellas y privacidad absoluta te esperan.",
    highlights: [
      "Villas overwater con piscina privada",
      "Buceo con mantarrayas y tiburones ballena",
      "Cena privada en banco de arena",
      "Crucero al atardecer con delfines",
      "Spa submarino",
    ],
    duration: "5 - 10 días",
    bestSeason: "Noviembre - Abril",
    included: [
      "Vuelos internacionales",
      "Resort todo incluido",
      "Hidroavión de llegada",
      "Actividades acuáticas",
      "Cena romántica",
      "Seguro de viaje",
    ],
  },
  {
    slug: "paris",
    name: "París",
    country: "Francia",
    image: destParis,
    tag: "Cultura",
    dates: "Consultar disponibilidad",
    description:
      "París, la Ciudad de la Luz, es un festín para los sentidos. Pasea por las orillas del Sena, descubre obras maestras en el Louvre, saborea croissants recién horneados en cafés centenarios y deja que el encanto de Montmartre te conquiste. Una ciudad que enamora en cada esquina.",
    highlights: [
      "Tour privado del Louvre",
      "Cena en la Torre Eiffel",
      "Paseo en barco por el Sena",
      "Cata de vinos en Montmartre",
      "Visita al Palacio de Versalles",
    ],
    duration: "5 - 8 días",
    bestSeason: "Abril - Junio / Sept - Oct",
    included: [
      "Vuelos internacionales",
      "Hotel boutique céntrico",
      "Pase de metro ilimitado",
      "Guía experto",
      "Experiencias gastronómicas",
      "Seguro de viaje",
    ],
  },
  {
    slug: "machu-picchu",
    name: "Machu Picchu",
    country: "Perú",
    image: destPeru,
    tag: "Aventura",
    dates: "Consultar disponibilidad",
    description:
      "Camina por los senderos ancestrales de los Incas hasta llegar a una de las maravillas del mundo moderno. Machu Picchu te espera entre nubes y montañas sagradas. Combina la aventura del Camino Inca con la riqueza cultural de Cusco y el Valle Sagrado.",
    highlights: [
      "Camino Inca clásico de 4 días",
      "Amanecer en Machu Picchu",
      "Exploración del Valle Sagrado",
      "Gastronomía peruana de autor",
      "Visita a comunidades quechuas",
    ],
    duration: "7 - 12 días",
    bestSeason: "Mayo - Septiembre",
    included: [
      "Vuelos internacionales",
      "Hoteles seleccionados",
      "Tren panorámico",
      "Porteadores y guía",
      "Entradas a sitios",
      "Seguro de viaje",
    ],
  },
];
