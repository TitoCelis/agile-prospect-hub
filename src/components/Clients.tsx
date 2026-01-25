import { motion } from "framer-motion";

const clients = [
  "OPS",
  "EsSalud",
  "Zurece",
  "Gobiernos Regionales",
  "Productos Forma",
  "BCR",
  "Tgestiona",
];

export function Clients() {
  return (
    <section id="clientes" className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center mb-12">
          <p className="chip mb-4">Confianza</p>
          <h2 className="heading-2 text-foreground">
            Han confiado en nosotros
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {clients.map((client, index) => (
              <motion.div
                key={client}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="card-premium flex items-center justify-center py-6 px-4"
              >
                <span className="font-semibold text-foreground text-center">
                  {client}
                </span>
              </motion.div>
            ))}
          </div>
          
          <p className="text-center text-sm text-muted-foreground mt-8">
            Las marcas pertenecen a sus respectivos dueños.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
