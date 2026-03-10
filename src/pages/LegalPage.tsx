import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const legalContent: Record<string, { title: string; content: string }> = {
  "condiciones-generales": {
    title: "Condiciones Generales",
    content:
      "Aquí se incluirán las condiciones generales de contratación de servicios turísticos ofrecidos por Plaza Bohemia Viajes. Este texto es un placeholder y deberá ser reemplazado por el contenido legal correspondiente.",
  },
  "politica-de-privacidad": {
    title: "Política de Privacidad",
    content:
      "Aquí se incluirá la política de privacidad y tratamiento de datos personales de Plaza Bohemia Viajes. Este texto es un placeholder y deberá ser reemplazado por el contenido legal correspondiente.",
  },
  "defensa-al-consumidor": {
    title: "Defensa al Consumidor",
    content:
      "Aquí se incluirá la información correspondiente a la defensa del consumidor según la legislación vigente. Este texto es un placeholder y deberá ser reemplazado por el contenido legal correspondiente.",
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
      <div className="container py-16 md:py-24 max-w-3xl">
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
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground font-body text-lg leading-relaxed">
            {page.content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LegalPage;
