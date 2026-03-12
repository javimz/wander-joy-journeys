import { Instagram, Facebook, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const socialLinks = [
  { Icon: Instagram, href: "https://www.instagram.com/plazabohemiaviajes/" },
  { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=100092842754719" },
  { Icon: Twitter, href: "https://x.com/plaza_bohemia" },
];

const Footer = () => {
  return (
    <footer className="bg-dark-surface text-dark-surface-foreground py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
          <div className="md:col-span-2">
            <a href="/#hero" className="flex items-center">
              <img src={logo} alt="Logo" className="h-10 w-auto" />
            </a>
            <p className="text-dark-surface-foreground/60 mt-4 max-w-sm font-body text-sm leading-relaxed">
              Tu agencia de viajes premium. Creamos experiencias inolvidables en
              los destinos más increíbles del mundo.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-dark-surface-foreground/20 flex items-center justify-center transition-colors hover:border-secondary hover:text-secondary"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Destinos</h4>
            <ul className="space-y-2 text-sm text-dark-surface-foreground/60 font-body">
              {["Europa", "Asia", "América", "África"].map((d) => (
                <li key={d}>
                  <a href="/#destinations" className="hover:text-secondary transition-colors">
                    {d}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Compañía</h4>
            <ul className="space-y-2 text-sm text-dark-surface-foreground/60 font-body">
              <li>
                <a href="/#services" className="hover:text-secondary transition-colors">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="/#cta" className="hover:text-secondary transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Legales</h4>
            <ul className="space-y-2 text-sm text-dark-surface-foreground/60 font-body">
              <li>
                <Link to="/legales/condiciones-generales" className="hover:text-secondary transition-colors">
                  Condiciones Generales
                </Link>
              </li>
              <li>
                <Link to="/legales/politica-de-privacidad" className="hover:text-secondary transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link to="/legales/defensa-al-consumidor" className="hover:text-secondary transition-colors">
                  Defensa al Consumidor
                </Link>
              </li>
            </ul>
            <div className="mt-4">
              <Link
                to="/arrepentimiento"
                className="inline-block rounded-full bg-secondary px-5 py-2 text-secondary-foreground text-sm font-semibold transition-transform hover:scale-105"
              >
                Botón de Arrepentimiento
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-dark-surface-foreground/10 pt-8 text-center text-sm text-dark-surface-foreground/40 font-body">
          © 2026 Plaza Bohemia Viajes. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
