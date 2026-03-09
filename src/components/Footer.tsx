import { Instagram, Facebook, Twitter } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-dark-surface text-dark-surface-foreground py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <a href="#hero" className="font-display text-2xl font-bold">
              Voyage<span className="text-secondary">.</span>
            </a>
            <p className="text-dark-surface-foreground/60 mt-4 max-w-sm font-body text-sm leading-relaxed">
              Tu agencia de viajes premium. Creamos experiencias inolvidables en
              los destinos más increíbles del mundo.
            </p>
            <div className="flex gap-4 mt-6">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
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
                  <a href="#destinations" className="hover:text-secondary transition-colors">
                    {d}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Compañía</h4>
            <ul className="space-y-2 text-sm text-dark-surface-foreground/60 font-body">
              {["Sobre Nosotros", "Blog", "Testimonios", "Contacto"].map((d) => (
                <li key={d}>
                  <a href="#" className="hover:text-secondary transition-colors">
                    {d}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-surface-foreground/10 pt-8 text-center text-sm text-dark-surface-foreground/40 font-body">
          © 2026 Voyage. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
