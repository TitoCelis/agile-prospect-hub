import { motion } from "framer-motion";
import { Zap, FileCheck, Truck } from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "Cotización rápida y precisa",
    description:
      "Respuestas claras para tomar decisiones y cumplir plazos.",
  },
  {
    icon: FileCheck,
    title: "Cumplimiento documental y trazabilidad",
    description:
      "Orden, soporte y seguimiento para evitar observaciones.",
  },
  {
    icon: Truck,
    title: "Logística y entrega a tiempo",
    description:
      "Coordinación y control para cumplir fechas y condiciones.",
  },
];

export function ValueProposition() {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="chip mb-4">Eficiencia, eficacia y efectividad</p>
          <h2 className="heading-2 text-foreground">
            ¿Por qué elegirnos?
          </h2>
        </div>

        {/* Value Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="card-premium text-center"
            >
              <div className="value-icon mx-auto">
                <value.icon className="h-7 w-7" />
              </div>
              <h3 className="heading-4 text-foreground mb-3">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
