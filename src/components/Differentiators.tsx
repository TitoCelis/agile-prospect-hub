import { motion } from "framer-motion";
import { ShieldCheck, Building2, Zap, Boxes } from "lucide-react";

const differentiators = [
  {
    icon: ShieldCheck,
    title: "Enfoque en compliance",
    description: "Cumplimiento normativo y documentación en orden.",
  },
  {
    icon: Building2,
    title: "Experiencia con entidades públicas y privadas",
    description: "Conocemos los procesos de ambos sectores.",
  },
  {
    icon: Zap,
    title: "Respuesta ágil y trazabilidad",
    description: "Seguimiento en tiempo real de cada requerimiento.",
  },
  {
    icon: Boxes,
    title: "Abastecimiento + logística en un solo aliado",
    description: "Todo el proceso integrado de principio a fin.",
  },
];

export function Differentiators() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-12">
          <p className="chip mb-4">Nuestros diferenciadores</p>
          <h2 className="heading-2 text-foreground">
            Lo que nos hace diferentes
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center p-6"
            >
              <div className="value-icon mb-4">
                <item.icon className="h-7 w-7" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
