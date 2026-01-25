import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Trabajan con Estado y empresas privadas?",
    answer:
      "Sí, atendemos tanto a entidades del Estado como a empresas privadas. Conocemos los procesos de licitación pública y los requerimientos del sector privado, adaptando nuestro servicio a cada caso.",
  },
  {
    question: "¿Qué información necesitan para cotizar rápido?",
    answer:
      "Para darte una cotización precisa, necesitamos: descripción del producto o servicio, cantidades, plazo de entrega, lugar de destino y, si aplica, especificaciones técnicas o términos de referencia. Mientras más detalle, más rápida y precisa será nuestra respuesta.",
  },
  {
    question: "¿Pueden apoyar en licitaciones desde la búsqueda hasta la entrega?",
    answer:
      "Absolutamente. Ofrecemos un servicio integral que incluye búsqueda de oportunidades, armado de propuesta, soporte documental, compliance y coordinación de la entrega. Te acompañamos en todo el proceso.",
  },
  {
    question: "¿Qué tipos de productos manejan?",
    answer:
      "Manejamos productos de salud (reactivos, equipos médicos, laboratorio), limpieza y desinfección, plásticos y acondicionamiento (baldes, contenedores, cajas portavacunas, paquetes fríos), y servicios de logística y transporte.",
  },
  {
    question: "¿Cómo coordinamos la logística y tiempos de entrega?",
    answer:
      "Coordinamos directamente contigo los tiempos y condiciones de entrega. Contamos con trazabilidad en tiempo real y un equipo dedicado a asegurar que cada entrega cumpla con las fechas y requisitos acordados.",
  },
];

export function FAQ() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-10">
            <p className="chip mb-4">FAQ</p>
            <h2 className="heading-2 text-foreground">Preguntas frecuentes</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-2xl border border-border px-6 data-[state=open]:shadow-card"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
