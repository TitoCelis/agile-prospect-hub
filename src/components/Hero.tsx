import { ArrowRight, MessageCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const WHATSAPP_URL = "https://wa.me/51990292579?text=Hola%20CMI%20General%20Solutions%2C%20quiero%20una%20cotizaci%C3%B3n%20r%C3%A1pida.%20Mi%20requerimiento%20es%3A%20";

export function Hero() {
  const scrollToQuote = () => {
    const element = document.querySelector("#cotizacion");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="CMI General Solutions - Licitaciones y abastecimiento"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Content */}
      <div className="section-container relative z-10 py-16 md:py-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">
              Soluciones integrales para el sector público y privado
            </span>
          </div>

          {/* H1 */}
          <h1 className="heading-1 text-white mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Licitaciones y abastecimiento sin retrasos.
          </h1>

          {/* Subheadline */}
          <p
            className="body-text text-white/85 max-w-2xl mb-8 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Gestionamos oportunidades, cotizamos rápido y entregamos con
            compliance, trazabilidad y tiempos.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4 mb-6 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <Button
              size="lg"
              className="btn-cta text-base px-8 py-4"
              onClick={scrollToQuote}
            >
              Cotización rápida
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" className="btn-whatsapp text-base px-8 py-4" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                Hablar por WhatsApp
              </a>
            </Button>
          </div>

          {/* Microcopy */}
          <p
            className="flex items-center gap-2 text-white/70 text-sm animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <Clock className="h-4 w-4" />
            Respuesta ágil en horario laboral
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float hidden md:block">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
