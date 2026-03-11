import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface LegalSection {
  title: string;
  content: string;
}

interface LegalPageData {
  title: string;
  content?: string;
  sections?: LegalSection[];
}

const legalContent: Record<string, LegalPageData> = {
  "condiciones-generales": {
    title: "Condiciones Generales",
    sections: [
      {
        title: "Reservas y Pagos",
        content:
          "Los pagos deberán realizarse en los plazos y formas acordados, debiendo estar cancelado el precio total 45 días antes de la salida. Para el caso de servicios aéreos, los mismos deberán encontrarse totalmente abonados al momento de la emisión. Los servicios de turismo nacionales serán cotizados y contratados en pesos mientras que los servicios de turismo en el extranjero serán cotizados y contratados en dólares estadounidenses, por lo que todos los pagos que el pasajero realice a los fines de cancelar el precio de los servicios, ya sean parciales o totales, deberán ser abonados en dólares estadounidenses mediante depósito o transferencia bancaria o en su defecto, en la cantidad de pesos suficientes para la obtención de dólares en el mercado conforme el tipo de cambio que Plaza Bohemia Viajes SRL. establezca para cada día y que será informado por el vendedor al momento de la confección del recibo, comprometiéndose el pasajero a tal efecto a ingresar los pagos necesarios hasta la cancelación total de las sumas acordadas en dólares estadounidenses. El precio y/o reservación de los servicios que componen el tour quedan sujetos a modificaciones sin previo aviso cuando se produzca una alteración en los servicios, modificaciones en los costos o en los tipos de cambio previstos, por causas no imputables a las partes. Todos los importes pagados antes de la confirmación definitiva de los servicios, son percibidos en concepto de reserva. La confirmación definitiva de los servicios y precios respectivos se producirá con la emisión de pasajes y/u órdenes de servicios y la facturación correspondiente. Las operaciones a crédito deberán satisfacer los requisitos propios fijados para las mismas. En su defecto el interesado deberá cumplimentar el pago de los saldos en los plazos y condiciones establecidos en la contratación.",
      },
      {
        title: "Los Precios Incluyen",
        content:
          "Los servicios que se especifican en cada itinerario. Alojamiento en hoteles, apart hoteles, posadas o tiempos compartidos previstos y/o similares en categoría, según tarifa elegida. La cantidad prevista de días de alojamiento teniendo en cuenta que el día de alojamiento hotelero se computa desde las quince horas y finaliza a las doce horas del día siguiente, independientemente de la hora de llegada y de salida y de la utilización completa o fraccionada del mismo, salvo que en el voucher se aclare lo contrario. La duración del tour será indicada en cada caso tomando como primer día, el de salida y como último incluido el día de salida del destino, independientemente del horario de salida o de llegada en el primer día o en el último.",
      },
      {
        title: "Los Precios No Incluyen",
        content:
          "Ningún servicio no detallado en el itinerario, impuestos, IVA, DNT (impuestos de la dirección nacional de turismo), QN (impuestos de ingresos de brutos aéreos), tasas de aeropuerto, peajes, exceso de equipaje. Comidas no especificadas, bebidas, etc. Extras de ningún tipo como ser: lavado de ropa, propinas, llamadas telefónicas en ningún caso y en general, gastos de visas consulares de ser necesarias, etc. Estadías y/o gastos adicionales producidos por cancelaciones, cambios de horarios, demoras etc. de los medios de transporte (aviones, buses, etc.) por razones imprevistas y/o ajenas a nuestra voluntad. Ningún tipo de seguro ni personal ni de equipaje. Cualquier otro servicio o gasto de índole personal que no esté específicamente detallado en el recorrido de los tours o vouchers de nuestra empresa o en las respectivas condiciones generales. Caso contrario deberá estar debidamente aclarado en el voucher. Alimentación en ruta, excepto aquellas que estuviesen expresamente incluidas en los programas. Los gastos e intereses en las operaciones a crédito.",
      },
      {
        title: "Documentación",
        content:
          "El pasajero deberá indicar nombre y apellido como figuran en el pasaporte para la contratación de servicios. Es responsabilidad exclusiva del pasajero contar con la documentación personal según que exijan las autoridades de cada destino.",
      },
      {
        title: "Cancelaciones",
        content:
          "No tendrán reembolso los importes abonados en concepto de informes, gastos administrativos, sellados e intereses. Cuando se trate de desistimiento que afecte a servicios contratados en firme por la agencia, el reembolso de los mismos estará sujeto a las condiciones contractuales bajo las cuales presten sus servicios las empresas respectivas. En todos los casos de reintegros, la agencia retendrá el precio de los gastos incurridos más la comisión del diez por ciento de los servicios contratados con terceros. En todos los caso la cancelación debe ser notificada fehacientemente. Las cancelaciones, cambios de fecha o de tour por indicación o causa de pasajero, implicarán los cargos que se informan al momento de la contratación, de acuerdo al tipo de servicio y la proximidad del desistimiento con la fecha prevista de salida. Decreto 2182/72 Art. 21: cuando se trate de desistimiento que afecten a servicios contratados en firme por la agencia, el reembolso de los mismos estará sujeto a las condiciones contractuales bajo las cuales presten sus servicios a las empresas respectivas- en caso que los reembolsos sean efectuados, las agencias tendrán derecho a deducir para si hasta un 10% de los mismos. En todos los casos la no presentación voluntaria por parte del pasajero a la utilización de servicios turísticos contratados en la fecha y hora establecidos, cualquiera sea la causa o motivo, no dará derecho a devolución alguna.",
      },
      {
        title: "Devoluciones",
        content:
          "Serán recepcionadas dentro de los 10 días de finalización del último servicio contratado por nuestro intermedio. Pasado este lapso el pasajero y/o la agencia de viajes vendedora del servicio, no tendrá derecho a solicitar devolución de los servicios, cualquiera fuera la causa. Las mismas se procesarán en el plazo de 30 días hábiles a partir del pedido de los mismos. Para el caso de devoluciones de servicios aéreos las mismas se procesarán respetando los plazos que determinen las aerolíneas. Salidas chárter Los pasajes para vuelos no regulares, especiales o charters únicamente son válidos para los mismos, no admitiendo cambios o modificaciones de ninguna especie. La no presentación a la hora del embarque, cualquiera sea la causa, no da derecho a devolución alguna.",
      },
      {
        title: "Responsabilidad de la Empresa",
        content:
          "La agencia de viajes no se responsabiliza por daños y perjuicios que pudieran sufrir los pasajeros en las personas y los bienes, cualquiera sea la causa que los origine. Se notifica que Plaza Bohemia Viajes SRL.y/o sus agentes actúan para los servicios contenidos en la presente orden de contratación, sólo en el carácter de intermediaria en la reserva o contratación de los distintos servicios vinculados e incluidos en el respectivo tour y los distintos prestatarios de servicios, que se incluyen en estos programas, limitando por ello su responsabilidad en los términos del art. 14, según párrafo, Decreto 2.181/72 reglamentario de la Ley 18.829 de Agentes de Viajes, siendo por lo tanto responsable del cumplimiento y ejecución de las Obligaciones que impone a los mismos el art. 22 de la Ley 19.918 (Convención Internacional Relativa al Contrato de Viajes). Declina en consecuencia toda responsabilidad por deficiencias en los servicios prestados, accidentes, daños, prejuicios, falta de documentación valida para viajar, perdida de equipajes, rastros y/u otros inconvenientes no previstos, cualquiera sea la causa que los originó. Las compañías transportadoras no serán responsables de cualquier acto u omisión mientras los pasajeros no estén a bordo de sus unidades. El contrato de transporte en uso de las compañías transportadoras en el desarrollo de nuestros programas, cuando sea emitido, constituirá el único contrato entre las mismas y el comprador. No obstante ello, las responsabilidades de la empresa, sea que intervenga como organizadora o intermediaria de viaje será determinada conforme las disposiciones contenidas en la Convención Internacional Relativa al Contrato de Viaje aprobada por la Ley N° 19918. PlazaBohemia Viajes SRL no se responsabiliza por los hechos que se produzcan por caso fortuito o fuerza mayor, fenómenos climáticos o hechos de la naturaleza que acontezcan antes o durante el desarrollo del tour que impidan demoren o de cualquier modo obstaculicen la ejecución total o parcial de las prestaciones comprometidas con la empresa, de conformidad con lo dispuesto por el código civil.",
      },
      {
        title: "Responsabilidad de los Pasajeros",
        content:
          "De acuerdo a las nuevas normas de bio-seguridad, se notifica a los pasajeros que deberán interiorizarse e informarse sobre formas de conducirse y actuar así como sobre artículos prohibidos y peligrosos para el transporte además de su forma de empaque o manipulación, siendo de su exclusiva responsabilidad las situaciones que de las mismas deriven y que el cuidado de los efectos personales es de exclusiva responsabilidad de los pasajeros.",
      },
      {
        title: "Alteraciones o Modificaciones",
        content:
          "La agencia se reserva el derecho, por razones técnicas u operativas, de alterar total o parcialmente el ordenamiento diario y/o servicios que componen el viaje (tour), antes o durante la ejecución del mismo Respecto de estas variaciones el pasajero no tendrá derecho a indemnización alguna. La empresa podrá anular cualquier tour cuando se configure alguna de las circunstancias prevista en el Art. 24 del Decreto N° 2182/72. Una vez comenzado el viaje, la suspensión, modificación o interrupción del los servicios por parte del pasajero por razones personales de cualquier índole, no dará lugar a reclamo, reembolso o devolución alguna. La prestación de los servicios, se regirá exclusivamente por estas condiciones generales, por la Ley N°18.829 y su reglamentación y por la Convención de Bruselas aprobada por la Ley N°19.918. Las presentes condiciones generales junto con la restante documentación que se entregue a los pasajeros conformarán el Contrato de Viaje.",
      },
      {
        title: "Conocimiento de Condiciones",
        content:
          "Con el simple hecho del pago de la reserva de los servicios cotizados, queda automáticamente asentado que el/los pasajeros se notifican y aceptan todas las presentes Condiciones Generales, Asimismo declara/n conocer la documentación necesaria para viajar al extranjero.",
      },
    ],
  },
  "politica-de-privacidad": {
    title: "Política de Privacidad",
    content:
      "Plaza Bohemia Viajes SRL se encuentra comprometido con el resguardo de la intimidad de sus clientes, en virtud de ello es que realizará los esfuerzos que crea necesarios para que los clientes y usuarios de su Sitio Web, www.plazabohemiaviajes.tur.ar, (en adelante el \"SITIO\") se encuentren protegidos. La presente política de privacidad se aplica exclusivamente a la información ofrecida a Plaza Bohemia Viajes SRL mediante su SITIO, y no a la ofrecida a otras compañías u organizaciones o Sitios web con los que el SITIO contenga enlaces. Plaza Bohemia Viajes SRL no se responsabiliza por el actuar de los Sitios web a los cuales se puede acceder por medio del SITIO, por lo que recomendamos la lectura de la Política de Privacidad de cada uno ellos. Nuestro sistema obtiene automáticamente información acerca de la conducta de usted cuando navega por el SITIO, a través de un \"cookie\". Un cookie es un pequeño archivo de datos que puede contener tal información como la identificación del usuario que el sitio utiliza para rastrear las páginas que usted ha visitado. Pero la única información personal que un cookie puede contener es información que usted mismo suministra. Si usted ha ajustado su navegador para que le avise antes de aceptar cookies, recibirá el mensaje de advertencia. Usted puede rehusar aceptar cookies, desactivándolos en su navegador. Usted no necesita tener los cookies activados para usar el SITIO de Plaza Bohemia Viajes SRL. Si usted rehúsa aceptar cookies, existe la posibilidad de que no tenga acceso a ciertos servicios brindados por el SITIO. En algunas ocasiones Plaza Bohemia Viajes SRL tiene la posibilidad de acceder a datos personales suyos, como por ejemplo su nombre completo, su domicilio, su dirección de e-mail o su número telefónico. Plaza Bohemia Viajes SRL necesita dicha información para poder brindar los servicios que ofrece a través del SITIO. Plaza Bohemia Viajes SRL garantiza la confidencialidad de dicha información, no permitiendo que terceros ajenos a la empresa accedan a la misma. El titular de los datos personales tiene la facultad de ejercer el derecho de acceso a los mismos en forma gratuita a intervalos no inferiores a seis meses, salvo que se acredite un interés legítimo al efecto conforme lo establecido en el artículo 14, inciso 3 de la Ley N° 25.326. La Dirección Nacional de Protección de Datos Personales, órgano de control de la Ley N° 25.326, tiene la atribución de atender las denuncias y reclamos que se interpongan con relación al incumplimiento de las normas sobre protección de datos personales.",
  },
  "defensa-al-consumidor": {
    title: "Defensa al Consumidor",
    content:
      "Obligaciones de proveedores de bienes o servicios hacia los Consumidores\n\nArticulo 10 ter de las Leyes 24.240 (texto conforme a la Ley 26.361) y 2.697 (B.O.: 1.432/08 -C.B.A.-): Modos de Rescisión. Cuando la contratación de un servicio, incluidos los servicios públicos domiciliarios, haya sido realizada en forma telefónica, electrónica o similar, podrá ser rescindida a elección del consumidor o usuario mediante el mismo medio utilizado en la contratación. La empresa receptora del pedido de rescisión del servicio deberá enviar sin cargo al domicilio del consumidor o usuario una constancia fehaciente dentro de las setenta y dos (72) horas posteriores a la recepción del pedido de rescisión. Esta disposición debe ser publicada en la factura o documento equivalente que la empresa enviare regularmente al domicilio del consumidor o usuario.",
  },
};

const LegalPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const page = slug ? legalContent[slug] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!page) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="font-display text-3xl font-bold text-foreground mb-4">
            Página no encontrada
          </h1>
          <Link to="/" className="text-secondary font-semibold hover:underline">
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container py-16 md:py-24 max-w-3xl pt-28">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-body text-sm mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al inicio
        </Link>

        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
          {page.title}
        </h1>

        {page.sections ? (
          <Accordion type="single" collapsible className="w-full">
            {page.sections.map((section, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="font-display text-lg font-semibold text-foreground text-left">
                  {section.title}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground font-body text-base leading-relaxed">
                    {section.content}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        ) : (
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground font-body text-lg leading-relaxed whitespace-pre-line">
              {page.content}
            </p>
            {slug === "defensa-al-consumidor" && (
              <p className="mt-6 font-body text-lg">
                Para obtener mayor información ingresa a:{" "}
                <a
                  href="https://www.argentina.gob.ar/servicio/iniciar-un-reclamo-ante-defensa-del-consumidor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary font-semibold hover:underline"
                >
                  Dirección Nacional de Defensa del Consumidor
                </a>
              </p>
            )}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default LegalPage;
