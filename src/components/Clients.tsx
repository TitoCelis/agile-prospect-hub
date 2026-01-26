import { motion } from "framer-motion";

// Import client logos
import logoOPS from "@/assets/clients/logo-ops.png";
import logoOMS from "@/assets/clients/logo-oms.png";
import logoBCR from "@/assets/clients/logo-bcr.png";
import logoProductosForma from "@/assets/clients/logo-productos-forma.png";
import logoZurece from "@/assets/clients/logo-zurece.png";
import logoTgestiona from "@/assets/clients/logo-tgestiona.png";

const clients = [
  { name: "Organización Panamericana de la Salud", logo: logoOPS },
  { name: "Organización Mundial de la Salud", logo: logoOMS },
  { name: "Banco Central de Reserva del Perú", logo: logoBCR },
  { name: "Productos Forma", logo: logoProductosForma },
  { name: "Zurece", logo: logoZurece },
  { name: "Tgestiona", logo: logoTgestiona },
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
          className="max-w-5xl mx-auto"
        >
          {/* Logo Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="logo-tile group"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="logo-image"
                />
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
