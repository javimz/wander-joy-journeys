import destIguazu from "@/assets/dest-iguazu.jpg";
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
    slug: "iguazu",
    name: "Cataratas del Iguazú",
    country: "Argentina",
    image: destIguazu,
    tag: "Naturaleza",
    dates: "Consultar disponibilidad",
    description:
      "Descubrí una de las Siete Maravillas Naturales del Mundo. Las Cataratas del Iguazú te esperan con más de 275 saltos de agua rodeados de selva misionera. Sentí la fuerza de la Garganta del Diablo, navegá en lancha bajo las cascadas y explorá la biodiversidad única de este paraíso natural en el corazón de Misiones.",
    highlights: [
      "Garganta del Diablo desde las pasarelas",
      "Navegación en gomón bajo las cataratas",
      "Sendero Macuco por la selva",
      "Lado brasileño con vista panorámica",
      "Minas de Wanda y ruinas de San Ignacio",
    ],
    duration: "3 - 5 días",
    bestSeason: "Marzo - Mayo / Agosto - Octubre",
    included: [
      "Vuelos de cabotaje",
      "Hotel 4/5 estrellas",
      "Traslados privados",
      "Entradas al Parque Nacional",
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
