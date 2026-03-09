import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "Destinos", href: "#destinations" },
  { label: "Cruceros", href: "#cruises" },
  { label: "Servicios", href: "#services" },
  { label: "Contacto", href: "#cta" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#hero" className="font-display text-2xl font-bold tracking-tight">
          <span className={scrolled ? "text-foreground" : "text-primary-foreground"}>
            Voyage
          </span>
          <span className="text-secondary">.</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-secondary ${
                scrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta"
            className="rounded-full bg-secondary px-6 py-2.5 text-sm font-semibold text-secondary-foreground transition-transform hover:scale-105"
          >
            Reservar Ahora
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t mt-2 animate-fade-in">
          <div className="container py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-foreground text-lg font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setMobileOpen(false)}
              className="rounded-full bg-secondary px-6 py-3 text-center font-semibold text-secondary-foreground"
            >
              Reservar Ahora
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
