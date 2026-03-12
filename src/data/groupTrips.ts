import groupUk from "@/assets/group-uk.jpg";
import groupNyc from "@/assets/group-nyc.jpg";

export interface SubProgram {
  title: string;
  description?: string;
  included: string[];
}

export interface GroupTrip {
  slug: string;
  name: string;
  location: string;
  image: string;
  tag: string;
  description: string;
  subPrograms?: SubProgram[];
  highlights: string[];
  dates: string;
  duration: string;
  included: string[];
  notIncluded?: string[];
  importantNotes?: string[];
  downloadPdf?: string;
}

export const groupTrips: GroupTrip[] = [
  {
    slug: "uk-living-english",
    name: "LIVING ENGLISH UK",
    location: "Oxford, Reino Unido",
    image: groupUk,
    tag: "Idiomas",
    description:
      "Cursos de inglés en una de las ciudades universitarias más bellas del mundo. Ideal para quienes buscan aprender, perfeccionar el idioma y viajar.",
    subPrograms: [
      {
        title: "LIVING ENGLISH UK – Oxford",
        description:
          "Cursos de inglés en una de las ciudades universitarias más bellas del mundo. Ideal para quienes buscan aprender, perfeccionar el idioma y viajar.",
        included: [
          "Alojamiento en residencia o casa de familia",
          "Media pensión",
          "Clases por nivel",
          "Actividades culturales",
          "Excursiones a Londres, Cambridge, Bath, etc.",
          "Coordinación y acompañamiento permanente",
          "Plus de turismo: city tours, experiencias locales, visitas guiadas y paseos emblemáticos",
          "Salida grupal con coordinación en julio + opciones individuales todo el año",
        ],
      },
      {
        title: "LIVING MUSIC UK – Londres",
        description:
          "La experiencia perfecta para músicos y artistas que buscan formación de primer nivel y una inmersión total en la capital mundial de la música.",
        included: [
          "Clases y workshops en institutos de prestigio",
          "Grabación en estudio + sesiones creativas",
          "Presentaciones y coaching artístico",
          "Actividades culturales",
          "Plus de turismo: tours por Londres, barrios icónicos, museos, mercados y más",
          "Salida grupal con coordinación en julio + programas individuales todo el año",
        ],
      },
    ],
    highlights: [
      "Programas Junior (13 a 17 años)",
      "Programas para Adultos",
      "Programas para Profesionales (incluye opción salud)",
    ],
    dates: "Julio 2026",
    duration: "2 a 4 semanas",
    included: [
      "Alojamiento en residencia o casa de familia",
      "Media pensión",
      "Clases por nivel",
      "Actividades culturales",
      "Excursiones",
      "Coordinación y acompañamiento permanente",
    ],
    downloadPdf: "/docs/JUNIOR_UK_2026.pdf",
  },
  {
    slug: "nyc",
    name: "NYC",
    location: "Nueva York, Estados Unidos",
    image: groupNyc,
    tag: "Aventura Urbana",
    description:
      "Tu aventura en Nueva York te está esperando 🗽\n\nImaginate caminar por las calles de la Gran Manzana, descubrir sus secretos y compartir esa magia con un grupo de personas con tu misma energía. Te invitamos a descubrir la fantástica ciudad de Nueva York en un viaje grupal diseñado para crear recuerdos que te van a acompañar toda la vida.\n\nViajá sin preocupaciones: tenemos todo fríamente calculado. Desde los vuelos directos y un hotel con ubicación privilegiada, hasta guías locales que hablan en tu idioma. Además, vas a contar con un acompañante permanente que se encargará de que explotes al máximo cada día de recorrido, lleno de actividades y sorpresas.\n\nEste grupo es para todos: no importa la edad ni el género. El único pasaporte que necesitas son tus ganas de explorar la ciudad.\n\n¿Te unís a la aventura? Completá el formulario para conocer el itinerario completo.",
    highlights: [],
    dates: "Agosto 10 - Agosto 22, 2026",
    duration: "13 días",
    included: [
      "Pasaje aéreo American Airlines en clase económica con 1 equipaje en bodega 23Kgs",
      "Traslado de llegada y salida",
      "City tour privado",
      "Tour nocturno en privado por la ciudad",
      "Tour de Compras",
      "Tour a pie por West Village – Financial District y más",
      "PICNIC en el Central Park",
      "Pase a la Estatua de la Libertad",
      "Entrada al mirador Summit",
      "07 noches de alojamiento CON DESAYUNO",
      "Coordinador permanente desde Bs As",
    ],
    notIncluded: [
      "Entradas donde no estén debidamente indicadas",
      "Propinas de todo tipo tales como guías, conductores, guías locales, restaurantes, hoteles, etc.",
      "Maleteros en Aeropuertos ni en Hoteles",
      "Excursiones y visitas opcionales",
      "Cualquier servicio que no esté especificado como incluido",
      "Bebidas/gastos/maleteros/entradas para cualquier visita adicional/actividades opcionales",
      "2,5% gasto bancario y administrativo",
    ],
    importantNotes: [
      "LA DOCUMENTACIÓN ES EXCLUSIVA RESPONSABILIDAD DEL PASAJERO",
      "Se requiere contar con pasaporte vigente y con VISA o ESTA vigente para ingresar a los Estados Unidos. Firmar el contrato de viaje y llenar la declaración jurada de salud.",
      "FORMA DE PAGO: Se requiere una seña de u$d 1000 al confirmar el lugar. Financiación en cuotas sin interés sin tarjeta de crédito. Válido hasta alcanzar máximo disponible o fin de la promoción.",
      "Precios para pago en efectivo dólar estadounidense.",
      "Las salidas aéreas quedan sujetas a las re-programaciones o cambios que pueda efectuar unilateralmente la compañía aérea. Así mismo las actividades previstas en destino podrán ser modificadas o re programadas por factores climáticos adversos que impidan el normal desarrollo del itinerario.",
      "Los boletos aéreos no son reembolsables. Los servicios terrestres permiten cambios sujetos a gastos y diferencias de tarifa según corresponda.",
      "Los asientos los asigna la compañía aérea luego de la emisión de los boletos del grupo. Asientos especiales o en ubicación determinada son con costo extra.",
      "Consultar cobertura médica.",
      "Coordinador permanente desde Ezeiza con base mínima 6 pasajeros.",
      "Las tarifas publicadas son para pago contado, están sujetas a disponibilidad y cambios sin aviso previo. El precio publicado no incluye 2.2% correspondiente a IVA, gastos bancarios y administrativos.",
      "REUNIONES INFORMATIVAS: antes del inicio del tour se realizan reuniones informativas a través de un grupo de WhatsApp creado exclusivamente con los participantes del viaje. Esto inicia un medio de comunicación en donde se comparte información relativa al tour, asesoramiento sobre inquietudes y genera interacción entre los futuros compañeros de viaje.",
    ],
  },
];
