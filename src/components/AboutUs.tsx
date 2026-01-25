import { motion } from "framer-motion";

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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          {/* About */}
          <p className="body-text text-foreground mb-8 text-center">
            CMI General Solutions es una empresa especializada en licitaciones
            y abastecimiento institucional para el sector público y privado.
            Integramos suministro, logística, acondicionamiento y soporte de
            compra con enfoque en cumplimiento, trazabilidad y tiempos.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Mission */}
            <div className="card-premium">
              <h3 className="heading-4 text-foreground mb-3">Misión</h3>
              <p className="text-muted-foreground text-sm">
                Brindar soluciones integrales y confiables en licitaciones,
                suministro de bienes y servicios, logística y acondicionamiento,
                para entidades públicas y privadas, garantizando eficiencia,
                cumplimiento y resultados medibles que generen valor a nuestros
                clientes.
              </p>
            </div>

            {/* Vision */}
            <div className="card-premium">
              <h3 className="heading-4 text-foreground mb-3">Visión</h3>
              <p className="text-muted-foreground text-sm">
                Ser la empresa referente en Perú en soluciones para licitaciones
                y abastecimiento institucional, reconocida por su eficiencia,
                transparencia y capacidad de ejecución, consolidando alianzas
                estratégicas y expandiendo nuestra presencia a nivel nacional en
                los sectores salud, laboratorio, limpieza y plásticos.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="text-center">
            <h3 className="heading-4 text-foreground mb-4">Valores</h3>
            <div className="flex flex-wrap gap-2 justify-center">
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
    </section>
  );
}
