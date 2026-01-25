import { motion } from "framer-motion";
import { MessageCircle, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/51990292579?text=Hola%20CMI%20General%20Solutions%2C%20quiero%20una%20cotizaci%C3%B3n%20r%C3%A1pida.%20Mi%20requerimiento%20es%3A%20";
const EMAIL = "Tcelis@cmigeneralsolutions.com";

export function Contact() {
  return (
    <section id="contacto" className="section-padding bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="chip mb-4">Contacto</p>
          <h2 className="heading-2 text-foreground mb-4">Contáctanos</h2>
          <p className="body-text text-muted-foreground mb-8">
            Cuéntanos tu requerimiento y te respondemos a la brevedad.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button className="btn-whatsapp" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                Hablar por WhatsApp
              </a>
            </Button>
            <Button variant="outline" className="btn-secondary" asChild>
              <a href={`mailto:${EMAIL}`}>
                <Mail className="mr-2 h-5 w-5" />
                Enviar correo
              </a>
            </Button>
          </div>

          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            {EMAIL}
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
