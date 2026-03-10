import groupUk from "@/assets/group-uk.jpg";
import groupNyc from "@/assets/group-nyc.jpg";

export interface GroupTrip {
  slug: string;
  name: string;
  location: string;
  price: string;
  image: string;
  tag: string;
  description: string;
  highlights: string[];
  dates: string;
  duration: string;
  included: string[];
}

export const groupTrips: GroupTrip[] = [
  {
    slug: "uk-living-english",
    name: "UK Living English",
    location: "Londres, Inglaterra",
    price: "Desde $2,899",
    image: groupUk,
    tag: "Idiomas",
    description:
      "Vive una experiencia de inmersión total en inglés en el corazón de Londres. Clases intensivas con profesores nativos, actividades culturales, visitas a universidades prestigiosas y excursiones a los lugares más icónicos de Inglaterra. Ideal para estudiantes y jóvenes profesionales que buscan mejorar su inglés mientras descubren la cultura británica.",
    highlights: [
      "Clases de inglés con profesores nativos certificados",
      "Visita a la Universidad de Oxford",
      "Tour por el Big Ben y el Palacio de Buckingham",
      "Excursión a Stonehenge y Bath",
      "Actividades culturales y sociales diarias",
      "Certificado de estudios al finalizar",
    ],
    dates: "Julio 5 - Julio 25, 2026",
    duration: "21 días",
    included: [
      "Vuelos internacionales",
      "Alojamiento con familia anfitriona",
      "Clases de inglés (20h/semana)",
      "Desayuno y cena diarios",
      "Transporte local",
      "Excursiones programadas",
      "Seguro de viaje",
      "Acompañante grupal",
    ],
  },
  {
    slug: "nyc",
    name: "NYC",
    location: "Nueva York, Estados Unidos",
    price: "Desde $2,499",
    image: groupNyc,
    tag: "Aventura Urbana",
    description:
      "Descubre la ciudad que nunca duerme en un viaje grupal lleno de energía. Recorre Times Square, Central Park, la Estatua de la Libertad y los barrios más vibrantes de Manhattan y Brooklyn. Una experiencia diseñada para jóvenes aventureros que quieren vivir Nueva York al máximo.",
    highlights: [
      "Tour guiado por Manhattan y Brooklyn",
      "Visita a la Estatua de la Libertad y Ellis Island",
      "Recorrido por el High Line y Chelsea Market",
      "Noche en Broadway (show incluido)",
      "Experiencia gastronómica multicultural",
      "Visita al One World Observatory",
    ],
    dates: "Agosto 10 - Agosto 22, 2026",
    duration: "13 días",
    included: [
      "Vuelos internacionales",
      "Hotel céntrico en Manhattan",
      "Desayuno diario",
      "MetroCard ilimitada",
      "Entradas a atracciones",
      "Show de Broadway",
      "Seguro de viaje",
      "Guía acompañante",
    ],
  },
];
