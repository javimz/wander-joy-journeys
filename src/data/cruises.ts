import cruiseCaribbean from "@/assets/cruise-caribbean.jpg";
import cruiseMscFantasia from "@/assets/cruise-msc-fantasia.jpg";
import cruiseFjords from "@/assets/cruise-fjords.jpg";
import cruiseTransatlantico from "@/assets/cruise-transatlantico.jpg";

export interface CruiseItineraryDay {
  day: number;
  port: string;
  description: string;
}

export interface Cruise {
  slug: string;
  name: string;
  region: string;
  image: string;
  tag: string;
  dates: string;
  duration: string;
  shipName: string;
  departurePort: string;
  description: string;
  highlights: string[];
  itinerary: CruiseItineraryDay[];
  included: string[];
  bestSeason: string;
  gallery: string[];
}

export const cruises: Cruise[] = [
  {
    slug: "caribe-tropical",
    name: "Caribe Tropical",
    region: "Caribe",
    image: cruiseCaribbean,
    tag: "Más Popular",
    dates: "Consultar disponibilidad",
    duration: "7 noches",
    shipName: "Voyage Explorer",
    departurePort: "Miami, FL",
    description:
      "Navega por las aguas cristalinas del Caribe a bordo del Voyage Explorer. Visita islas paradisíacas, disfruta de playas de arena blanca y sumérgete en la cultura vibrante de cada puerto. Con entretenimiento de clase mundial, gastronomía gourmet y spa a bordo.",
    highlights: [
      "Playas de arena blanca en Cozumel",
      "Snorkel en Gran Caimán",
      "Compras en St. Thomas",
      "Shows y casino a bordo",
      "Piscina infinity con vista al mar",
    ],
    itinerary: [
      { day: 1, port: "Miami, Florida", description: "Embarque y zarpe al atardecer. Cena de bienvenida del capitán." },
      { day: 2, port: "Navegación", description: "Día completo en el mar. Disfruta del spa, piscinas y actividades a bordo." },
      { day: 3, port: "Cozumel, México", description: "Explora las ruinas mayas de Tulum y snorkel en arrecifes de coral." },
      { day: 4, port: "Gran Caimán", description: "Visita Stingray City y disfruta de Seven Mile Beach." },
      { day: 5, port: "Jamaica", description: "Cascadas del Río Dunn y cultura reggae en Ocho Ríos." },
      { day: 6, port: "Navegación", description: "Día de relajación con tratamientos de spa y fiesta en la piscina." },
      { day: 7, port: "Bahamas", description: "Paraíso tropical con aguas turquesas y cerdos nadadores." },
      { day: 8, port: "Miami, Florida", description: "Desembarque por la mañana con desayuno buffet final." },
    ],
    included: [
      "Camarote con balcón",
      "Pensión completa",
      "Entretenimiento a bordo",
      "Acceso a piscinas y gimnasio",
      "Propinas incluidas",
      "Seguro de viaje",
    ],
    bestSeason: "Noviembre - Abril",
    gallery: [cruiseCaribbean],
  },
  {
    slug: "msc-fantasia-brasil",
    name: "MSC Fantasia Brasil",
    region: "Sudamérica",
    image: cruiseMscFantasia,
    tag: "Salida Buenos Aires",
    dates: "6 de Marzo 2026",
    duration: "9 noches",
    shipName: "MSC Fantasia",
    departurePort: "Buenos Aires, Argentina",
    description:
      "Embarcá desde Buenos Aires a bordo del MSC Fantasia y navegá por las costas de Brasil y Uruguay. Descubrí las playas más espectaculares de Sudamérica: desde el glamour de Río de Janeiro y la exclusividad de Búzios hasta la belleza natural de Ilhabela. Con gastronomía de primer nivel, entretenimiento las 24 horas y un spa de clase mundial.",
    highlights: [
      "Río de Janeiro y el Cristo Redentor",
      "Playas exclusivas de Búzios",
      "Naturaleza virgen de Ilhabela",
      "Paseo por la Rambla de Montevideo",
      "Aqua Park y spa a bordo",
    ],
    itinerary: [
      { day: 1, port: "Buenos Aires, Argentina", description: "Embarque y zarpe a las 18:00. Cena de bienvenida del capitán." },
      { day: 2, port: "Navegación", description: "Día completo en el mar. Disfrutá del Aqua Park, piscinas y shows a bordo." },
      { day: 3, port: "Navegación", description: "Segundo día de navegación rumbo a Brasil. Spa, casino y entretenimiento." },
      { day: 4, port: "Río de Janeiro, Brasil", description: "Llegada a la Ciudad Maravillosa. Cristo Redentor, Pan de Azúcar y playas de Copacabana." },
      { day: 5, port: "Búzios, Brasil", description: "Paraíso de playas exclusivas. Rua das Pedras, Praia de Geribá y deportes acuáticos." },
      { day: 6, port: "Ilhabela, Brasil", description: "Isla paradisíaca con cascadas, senderos en la selva atlántica y playas vírgenes." },
      { day: 7, port: "Navegación", description: "Día de relax a bordo con actividades, fiesta en la piscina y cena de gala." },
      { day: 8, port: "Navegación", description: "Navegación de regreso disfrutando de las últimas actividades a bordo." },
      { day: 9, port: "Montevideo, Uruguay", description: "Recorrido por Ciudad Vieja, Mercado del Puerto y la Rambla." },
      { day: 10, port: "Buenos Aires, Argentina", description: "Desembarque por la mañana." },
    ],
    included: [
      "Camarote con balcón",
      "Pensión completa",
      "Entretenimiento a bordo",
      "Acceso a piscinas y gimnasio",
      "Club infantil MSC",
      "Seguro de viaje",
    ],
    bestSeason: "Enero - Marzo",
    gallery: [cruiseMscFantasia],
  },
  {
    slug: "fiordos-noruegos",
    name: "Fiordos Noruegos",
    region: "Escandinavia",
    image: cruiseFjords,
    tag: "Aventura",
    dates: "Consultar disponibilidad",
    duration: "8 noches",
    shipName: "Voyage Nordic",
    departurePort: "Bergen, Noruega",
    description:
      "Navega entre los fiordos más espectaculares del mundo. Cascadas imponentes, montañas nevadas y pueblos vikingos te esperan en esta ruta épica por la costa noruega. Una experiencia que combina naturaleza salvaje con el confort de un crucero de lujo.",
    highlights: [
      "Fiordo de Geiranger (UNESCO)",
      "Avistamiento de auroras boreales",
      "Pueblos pesqueros tradicionales",
      "Excursión en kayak por fiordos",
      "Tren de Flåm panorámico",
    ],
    itinerary: [
      { day: 1, port: "Bergen, Noruega", description: "Embarque en la ciudad hanseática. Visita al mercado de pescado." },
      { day: 2, port: "Fiordo de Sognefjord", description: "Navegación por el fiordo más largo de Noruega." },
      { day: 3, port: "Flåm", description: "Recorrido en el famoso tren de Flåm entre montañas." },
      { day: 4, port: "Fiordo de Geiranger", description: "Patrimonio UNESCO. Cascadas de las Siete Hermanas." },
      { day: 5, port: "Ålesund", description: "Ciudad Art Nouveau con vistas panorámicas desde el monte Aksla." },
      { day: 6, port: "Trondheim", description: "Catedral de Nidaros y barrio histórico de Bakklandet." },
      { day: 7, port: "Navegación", description: "Cruzando el Círculo Polar Ártico. Ceremonia del bautismo." },
      { day: 8, port: "Islas Lofoten", description: "Pueblos pesqueros rojos y paisajes árticos impresionantes." },
      { day: 9, port: "Bergen, Noruega", description: "Desembarque por la mañana." },
    ],
    included: [
      "Camarote exterior premium",
      "Pensión completa gourmet",
      "Excursiones en zodiacs",
      "Equipo de abrigo",
      "Charlas de naturalistas",
      "Seguro de viaje",
    ],
    bestSeason: "Junio - Septiembre",
    gallery: [cruiseFjords],
  },
  {
    slug: "alaska-glaciares",
    name: "Alaska & Glaciares",
    region: "América del Norte",
    image: cruiseAlaska,
    tag: "Naturaleza",
    dates: "Consultar disponibilidad",
    duration: "7 noches",
    shipName: "Voyage Wilderness",
    departurePort: "Seattle, WA",
    description:
      "Descubre la última frontera americana. Glaciares milenarios, osos grizzly, águilas calvas y ballenas jorobadas son solo parte del espectáculo. Alaska ofrece una inmersión en la naturaleza más pura y salvaje del planeta desde la comodidad de un crucero premium.",
    highlights: [
      "Glaciar Hubbard",
      "Avistamiento de ballenas",
      "Sobrevuelo en helicóptero",
      "Pesca de salmón en Ketchikan",
      "Tren White Pass en Skagway",
    ],
    itinerary: [
      { day: 1, port: "Seattle, Washington", description: "Embarque en el puerto de Seattle. Zarpe nocturno." },
      { day: 2, port: "Navegación (Inside Passage)", description: "Navegación escénica por el Inside Passage con avistamiento de fauna." },
      { day: 3, port: "Juneau, Alaska", description: "Capital de Alaska. Excursión al glaciar Mendenhall y avistamiento de ballenas." },
      { day: 4, port: "Skagway, Alaska", description: "Ruta del oro del Klondike. Tren White Pass & Yukon Route." },
      { day: 5, port: "Glacier Bay", description: "Día completo en el Parque Nacional Glacier Bay. Navegación entre glaciares." },
      { day: 6, port: "Ketchikan, Alaska", description: "Capital del salmón. Tótems nativos y pesca deportiva." },
      { day: 7, port: "Victoria, Canadá", description: "Jardines Butchart y té de la tarde en estilo británico." },
      { day: 8, port: "Seattle, Washington", description: "Desembarque por la mañana." },
    ],
    included: [
      "Camarote con balcón",
      "Pensión completa",
      "Naturalistas a bordo",
      "Binoculares de préstamo",
      "Entretenimiento temático",
      "Seguro de viaje",
    ],
    bestSeason: "Mayo - Septiembre",
    gallery: [cruiseAlaska],
  },
];
