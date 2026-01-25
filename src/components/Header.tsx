import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logoIcon from "@/assets/logo-cmi-icon.png";

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Licitaciones", href: "#licitaciones" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Clientes", href: "#clientes" },
  { label: "Cotización rápida", href: "#cotizacion" },
  { label: "Contacto", href: "#contacto" },
];

const WHATSAPP_URL = "https://wa.me/51990292579?text=Hola%20CMI%20General%20Solutions%2C%20quiero%20una%20cotizaci%C3%B3n%20r%C3%A1pida.%20Mi%20requerimiento%20es%3A%20";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`header-sticky ${
        isScrolled ? "shadow-soft" : "border-transparent"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img
              src={logoIcon}
              alt="CMI General Solutions"
              className="h-10 w-auto"
            />
            <div className="hidden sm:flex flex-col">
              <span className="font-heading font-bold text-foreground text-lg leading-tight">
                CMI
              </span>
              <span className="font-heading text-xs text-muted-foreground tracking-wider">
                GENERAL SOLUTIONS
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors link-underline"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA Buttons Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="btn-secondary text-sm py-2 px-4"
              asChild
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </Button>
            <Button
              size="sm"
              className="btn-cta text-sm py-2 px-5"
              onClick={() => scrollToSection("#cotizacion")}
            >
              Cotizar ahora
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] pt-12">
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="text-left text-lg font-medium text-foreground py-2 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
                <hr className="my-4 border-border" />
                <Button
                  className="btn-cta w-full"
                  onClick={() => scrollToSection("#cotizacion")}
                >
                  Cotizar ahora
                </Button>
                <Button className="btn-whatsapp w-full" asChild>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp
                  </a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
