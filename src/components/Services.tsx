import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import serviceHealth from "@/assets/service-health.jpg";
import serviceCleaning from "@/assets/service-cleaning.jpg";
import servicePlastics from "@/assets/service-plastics.jpg";
import serviceLogistics from "@/assets/service-logistics.jpg";
import serviceSupport from "@/assets/service-support.jpg";

const services = [
  {
    title: "Productos de Salud",
    description: "Reactivos, equipos médicos y de laboratorio, insumos.",
    image: serviceHealth,
  },
  {
    title: "Limpieza y desinfección",
    description: "Reactivos e insumos de limpieza.",
    image: serviceCleaning,
  },
  {
    title: "Plásticos y acondicionamiento",
    description: "Baldes, contenedores, cajas portavacunas, paquetes fríos.",
    image: servicePlastics,
  },
  {
    title: "Logística y transporte",
    description: "Gestión logística para entidades públicas y privadas.",
    image: serviceLogistics,
  },
  {
    title: "Soporte en licitaciones y financiamiento",
    description: "Acompañamiento para participar y ganar.",
    image: serviceSupport,
  },
];

export function Services() {
  const scrollToQuote = () => {
    const element = document.querySelector("#cotizacion");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="servicios" className="section-padding bg-muted/30">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="chip mb-4">Líneas de producto</p>
          <h2 className="heading-2 text-foreground mb-4">Nuestros Servicios</h2>
          <p className="body-text text-muted-foreground max-w-2xl mx-auto">
            Soluciones integrales de abastecimiento para el sector público y privado.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="card-premium overflow-hidden group"
            >
              <div className="relative h-48 -mx-6 -mt-6 mb-5 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <h3 className="heading-4 text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                {service.description}
              </p>
              <Button
                variant="ghost"
                size="sm"
                className="text-primary hover:text-primary hover:bg-primary/5 p-0 h-auto font-semibold"
                onClick={scrollToQuote}
              >
                Solicitar cotización
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </motion.div>
          ))}
        </div>

        {/* PDF CTA */}
        <div className="text-center mt-10">
          <Button variant="outline" className="btn-secondary" asChild>
            <a
              href="/assets/lineas-de-producto.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="mr-2 h-5 w-5" />
              Ver líneas de producto (PDF)
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
