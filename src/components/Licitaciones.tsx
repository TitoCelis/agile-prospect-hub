import { motion } from "framer-motion";
import { Search, FileText, ClipboardCheck, PackageCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import licitacionesImage from "@/assets/licitaciones-image.jpg";

const whatWeDo = [
  "Búsqueda e identificación de oportunidades",
  "Armado y soporte de propuesta",
  "Soporte documental y compliance",
  "Seguimiento y coordinación de entrega",
];

const steps = [
  { icon: Search, title: "Requerimiento", step: 1 },
  { icon: FileText, title: "Cotización", step: 2 },
  { icon: ClipboardCheck, title: "Documentación / Compliance", step: 3 },
  { icon: PackageCheck, title: "Entrega", step: 4 },
];

export function Licitaciones() {
  const scrollToQuote = () => {
    const element = document.querySelector("#cotizacion");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="licitaciones" className="section-padding bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-card">
              <img
                src={licitacionesImage}
                alt="Soporte en licitaciones"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-corporate/20 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground font-semibold px-6 py-3 rounded-2xl shadow-lg">
              Soporte integral
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="chip mb-4">Licitaciones</p>
            <h2 className="heading-2 text-foreground mb-6">
              Apoyo integral en licitaciones públicas y privadas
            </h2>

            {/* What we do */}
            <div className="mb-8">
              <h3 className="heading-4 text-foreground mb-4">Qué hacemos:</h3>
              <ul className="space-y-3">
                {whatWeDo.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                    </span>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button className="btn-cta" onClick={scrollToQuote}>
              Quiero apoyo para una licitación
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>

        {/* Process Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <h3 className="heading-3 text-foreground text-center mb-10">
            Cómo trabajamos
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={step.step} className="relative">
                <div className="card-premium text-center">
                  <div className="w-12 h-12 rounded-2xl bg-primary text-primary-foreground font-bold text-lg flex items-center justify-center mx-auto mb-4">
                    {step.step}
                  </div>
                  <step.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold text-foreground">{step.title}</h4>
                </div>
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 left-full w-6 h-0.5 bg-border -translate-y-1/2 z-10" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
