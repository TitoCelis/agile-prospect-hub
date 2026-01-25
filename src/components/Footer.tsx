import { MessageCircle, Linkedin, Instagram, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoIcon from "@/assets/logo-cmi-icon.png";

const WHATSAPP_URL = "https://wa.me/51990292579";
const LINKEDIN_URL = "https://www.linkedin.com/company/cmi-general-solutions/";
const INSTAGRAM_URL = "https://www.instagram.com/cmi.gs?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
const EMAIL = "Tcelis@cmigeneralsolutions.com";

export function Footer() {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Logo and description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white rounded-xl p-2">
                <img
                  src={logoIcon}
                  alt="CMI General Solutions"
                  className="h-8 w-auto"
                />
              </div>
              <div>
                <span className="font-heading font-bold text-lg">CMI</span>
                <span className="block text-xs text-white/70 tracking-wider">
                  GENERAL SOLUTIONS
                </span>
              </div>
            </div>
            <p className="text-white/70 text-sm">
              Soluciones integrales para el sector público y privado.
              Eficiencia, eficacia y efectividad.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <p className="text-white/70 text-sm mb-2">Tito Celis</p>
            <a
              href={`mailto:${EMAIL}`}
              className="text-accent hover:underline text-sm"
            >
              {EMAIL}
            </a>
          </div>

          {/* Actions */}
          <div>
            <h4 className="font-semibold mb-4">Recursos</h4>
            <Button
              variant="ghost"
              size="sm"
              className="text-white/80 hover:text-white hover:bg-white/10 p-0 h-auto mb-3"
              asChild
            >
              <a
                href="/assets/lineas-de-producto.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Download className="h-4 w-4" />
                Descargar líneas de producto
              </a>
            </Button>

            {/* Social links */}
            <div className="flex gap-3 mt-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <hr className="border-white/10 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>© {new Date().getFullYear()} CMI General Solutions. Todos los derechos reservados.</p>
          <p>Lima, Perú</p>
        </div>
      </div>
    </footer>
  );
}
