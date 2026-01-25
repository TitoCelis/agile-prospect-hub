import { motion } from "framer-motion";
import logoFull from "@/assets/logo-cmi-full.jpg";

const values = [
  "Eficiencia",
  "Eficacia",
  "Efectividad",
  "Transparencia",
  "Cumplimiento",
];

export function AboutUs() {
  return (
    <section id="nosotros" className="section-padding bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-12">
          <p className="chip mb-4">Nosotros</p>
          <h2 className="heading-2 text-foreground">Quiénes somos</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Logo and image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="bg-white rounded-3xl p-8 shadow-card">
              <img
                src={logoFull}
                alt="CMI General Solutions"
                className="w-full max-w-md h-auto"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* About */}
            <p className="body-text text-foreground mb-8">
              CMI General Solutions es una empresa especializada en licitaciones
              y abastecimiento institucional para el sector público y privado.
              Integramos suministro, logística, acondicionamiento y soporte de
              compra con enfoque en cumplimiento, trazabilidad y tiempos.
            </p>

            {/* Mission */}
            <div className="mb-6">
              <h3 className="heading-4 text-foreground mb-3">Misión</h3>
              <p className="text-muted-foreground">
                Brindar soluciones integrales y confiables en licitaciones,
                suministro de bienes y servicios, logística y acondicionamiento,
                para entidades públicas y privadas, garantizando eficiencia,
                cumplimiento y resultados medibles que generen valor a nuestros
                clientes.
              </p>
            </div>

            {/* Vision */}
            <div className="mb-8">
              <h3 className="heading-4 text-foreground mb-3">Visión</h3>
              <p className="text-muted-foreground">
                Ser la empresa referente en Perú en soluciones para licitaciones
                y abastecimiento institucional, reconocida por su eficiencia,
                transparencia y capacidad de ejecución, consolidando alianzas
                estratégicas y expandiendo nuestra presencia a nivel nacional en
                los sectores salud, laboratorio, limpieza y plásticos.
              </p>
            </div>

            {/* Values */}
            <div>
              <h3 className="heading-4 text-foreground mb-4">Valores</h3>
              <div className="flex flex-wrap gap-2">
                {values.map((value) => (
                  <span
                    key={value}
                    className="chip"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
