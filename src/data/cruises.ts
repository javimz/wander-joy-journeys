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
    shipName: "Consultar",
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
    dates: "6 de Marzo 2027",
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
    shipName: "Consultar",
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
    slug: "transatlantico-buenos-aires-europa",
    name: "Transatlántico BA – Europa",
    region: "Transatlántico",
    image: cruiseTransatlantico,
    tag: "Gran Travesía",
    dates: "31 de Marzo 2027",
    duration: "21 noches",
    shipName: "MSC Splendida",
    departurePort: "Buenos Aires, Argentina",
    description:
      "La gran travesía transatlántica a bordo del MSC Splendida. Zarpá desde Buenos Aires y cruzá el Atlántico rumbo a Europa, con escalas en Río de Janeiro, Maceió, Las Palmas de Gran Canaria, Tarragona, Ajaccio (Córcega), Roma, Corfú y llegada a Bari. Una experiencia única de 22 días que combina la emoción de cruzar el océano con la cultura y gastronomía de dos continentes.",
    highlights: [
      "Cruce del Océano Atlántico",
      "Río de Janeiro y el Pan de Azúcar",
      "Islas Canarias (Las Palmas)",
      "Roma y el Coliseo desde Civitavecchia",
      "Isla de Corfú, Grecia",
    ],
    itinerary: [
      { day: 1, port: "Buenos Aires, Argentina", description: "Embarque y zarpe a las 18:00. Inicio de la gran travesía." },
      { day: 2, port: "Navegación", description: "Primer día en alta mar. Descubrí las instalaciones del MSC Splendida." },
      { day: 3, port: "Navegación", description: "Día de relax con spa, piscinas y actividades a bordo." },
      { day: 4, port: "Río de Janeiro, Brasil", description: "Día completo en la Ciudad Maravillosa. Cristo Redentor y Copacabana (10:00-20:00)." },
      { day: 5, port: "Navegación", description: "Navegación por la costa brasileña rumbo al norte." },
      { day: 6, port: "Navegación", description: "Actividades a bordo, shows nocturnos y gastronomía internacional." },
      { day: 7, port: "Maceió, Brasil", description: "Playas paradisíacas de Alagoas. Praia do Gunga y piscinas naturales (8:00-17:00)." },
      { day: 8, port: "Navegación", description: "Inicio del cruce del Atlántico. Fiesta temática a bordo." },
      { day: 9, port: "Navegación", description: "Alta mar. Spa, casino y cine bajo las estrellas." },
      { day: 10, port: "Navegación", description: "Cruzando el Atlántico. Charlas culturales y degustaciones." },
      { day: 11, port: "Navegación", description: "Día de navegación con competencias deportivas a bordo." },
      { day: 12, port: "Navegación", description: "Navegación oceánica. Noche de gala del capitán." },
      { day: 13, port: "Navegación", description: "Último día de travesía atlántica antes de avistar tierra." },
      { day: 14, port: "Las Palmas, Gran Canaria", description: "Islas Canarias. Barrio de Vegueta, playa de Las Canteras y mercados locales (7:00-17:00)." },
      { day: 15, port: "Navegación", description: "Navegación por el Mediterráneo occidental." },
      { day: 16, port: "Navegación", description: "Acercándose a la costa española." },
      { day: 17, port: "Tarragona, España", description: "Anfiteatro romano, catedral gótica y patrimonio UNESCO (8:00-18:00)." },
      { day: 18, port: "Ajaccio, Córcega (Francia)", description: "Ciudad natal de Napoleón. Maison Bonaparte e Îles Sanguinaires (13:00-19:00)." },
      { day: 19, port: "Civitavecchia (Roma), Italia", description: "Día completo para visitar Roma: Coliseo, Vaticano y Fontana di Trevi (7:00-19:00)." },
      { day: 20, port: "Navegación", description: "Navegación por el Adriático rumbo a Grecia." },
      { day: 21, port: "Corfú, Grecia", description: "Casco antiguo UNESCO, Fortaleza y playas de aguas cristalinas (8:00-18:00)." },
      { day: 22, port: "Bari, Italia", description: "Llegada a las 7:00. Desembarque. Fin de la travesía." },
    ],
    included: [
      "Camarote con balcón",
      "Pensión completa",
      "Entretenimiento 24 horas",
      "Acceso a piscinas y spa",
      "Shows y espectáculos",
      "Seguro de viaje",
    ],
    bestSeason: "Marzo - Abril",
    gallery: [cruiseTransatlantico],
  },
];
