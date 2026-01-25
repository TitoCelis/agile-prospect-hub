import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

interface FormData {
  nombre: string;
  telefono: string;
  correo: string;
  mensaje: string;
}

const WHATSAPP_URL = "https://wa.me/51990292579";

export function QuoteForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    telefono: "",
    correo: "",
    mensaje: "",
  });

  const generateWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hola CMI General Solutions, quiero una cotización.\n\nNombre: ${formData.nombre}\nTeléfono: ${formData.telefono}\nCorreo: ${formData.correo}\nMensaje: ${formData.mensaje}`
    );
    return `${WHATSAPP_URL}?text=${text}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nombre.trim() || !formData.telefono.trim() || !formData.correo.trim() || !formData.mensaje.trim()) {
      toast.error("Por favor completa todos los campos.");
      return;
    }

    // Attempt to send to placeholder API
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    } catch (error) {
      // API not connected yet, that's okay
    }

    // Open WhatsApp with the form data
    window.open(generateWhatsAppUrl(), "_blank");

    setIsSubmitted(true);
    toast.success("¡Gracias! Te contactaremos a la brevedad.");
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <section id="cotizacion" className="section-padding bg-primary">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-xl mx-auto text-center py-12"
          >
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="h-10 w-10 text-white" />
            </div>
            <h2 className="heading-2 text-white mb-4">
              ¡Gracias por tu mensaje!
            </h2>
            <p className="text-white/90 mb-6">
              Te contactaremos a la brevedad con una propuesta clara.
            </p>
            <Button
              variant="outline"
              className="bg-white text-primary hover:bg-white/90 border-white"
              onClick={() => setIsSubmitted(false)}
            >
              Enviar otra cotización
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="cotizacion" className="section-padding bg-primary">
      <div className="section-container">
        <div className="max-w-xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="heading-2 text-white mb-4">
              Pide una cotización rápida
            </h2>
            <p className="text-white/85 body-text">
              Dinos qué necesitas y te respondemos con una propuesta clara.
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl p-6 md:p-10 shadow-lg"
          >
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Nombre *
                </label>
                <Input
                  required
                  placeholder="Tu nombre completo"
                  value={formData.nombre}
                  onChange={(e) => handleChange("nombre", e.target.value)}
                  className="h-12"
                  maxLength={100}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Teléfono *
                </label>
                <Input
                  required
                  placeholder="999 999 999"
                  value={formData.telefono}
                  onChange={(e) => handleChange("telefono", e.target.value)}
                  className="h-12"
                  maxLength={20}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Correo *
                </label>
                <Input
                  required
                  type="email"
                  placeholder="tucorreo@empresa.com"
                  value={formData.correo}
                  onChange={(e) => handleChange("correo", e.target.value)}
                  className="h-12"
                  maxLength={100}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Mensaje: ¿Qué necesitas? *
                </label>
                <Textarea
                  required
                  placeholder="Describe tu requerimiento..."
                  value={formData.mensaje}
                  onChange={(e) => handleChange("mensaje", e.target.value)}
                  className="min-h-[120px]"
                  maxLength={1000}
                />
              </div>
            </div>

            <div className="mt-8">
              <Button type="submit" className="btn-cta w-full">
                <Send className="mr-2 h-5 w-5" />
                Enviar cotización
              </Button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
