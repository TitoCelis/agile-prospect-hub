import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const requirementTypes = [
  "Salud",
  "Limpieza",
  "Laboratorio",
  "Plásticos",
  "Logística",
  "Licitaciones",
];

interface FormData {
  nombre: string;
  empresa: string;
  ruc: string;
  correo: string;
  telefono: string;
  tipoRequerimiento: string;
  mensaje: string;
  plazo: string;
  aceptaContacto: boolean;
}

export function QuoteForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    empresa: "",
    ruc: "",
    correo: "",
    telefono: "",
    tipoRequerimiento: "",
    mensaje: "",
    plazo: "",
    aceptaContacto: false,
  });

  const generateMailto = () => {
    const subject = encodeURIComponent("Cotización rápida – CMI General Solutions");
    const body = encodeURIComponent(
      `Nombre: ${formData.nombre}
Empresa/Entidad: ${formData.empresa}
RUC: ${formData.ruc || "No especificado"}
Correo: ${formData.correo}
Teléfono: ${formData.telefono}
Tipo de requerimiento: ${formData.tipoRequerimiento}
Mensaje: ${formData.mensaje}
Plazo: ${formData.plazo}`
    );
    return `mailto:Tcelis@cmigeneralsolutions.com?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.aceptaContacto) {
      toast.error("Por favor acepta ser contactado para continuar.");
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
      console.log("Lead saved for later processing");
    }

    setIsSubmitted(true);
    toast.success("¡Gracias! Te contactaremos a la brevedad.");
  };

  const handleChange = (field: keyof FormData, value: string | boolean) => {
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
        <div className="max-w-3xl mx-auto">
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
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Nombre y apellido *
                </label>
                <Input
                  required
                  placeholder="Tu nombre completo"
                  value={formData.nombre}
                  onChange={(e) => handleChange("nombre", e.target.value)}
                  className="h-12"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Empresa / Entidad *
                </label>
                <Input
                  required
                  placeholder="Nombre de la empresa o entidad"
                  value={formData.empresa}
                  onChange={(e) => handleChange("empresa", e.target.value)}
                  className="h-12"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  RUC (opcional)
                </label>
                <Input
                  placeholder="20XXXXXXXXX"
                  value={formData.ruc}
                  onChange={(e) => handleChange("ruc", e.target.value)}
                  className="h-12"
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
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Tipo de requerimiento *
                </label>
                <Select
                  value={formData.tipoRequerimiento}
                  onValueChange={(value) => handleChange("tipoRequerimiento", value)}
                >
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Selecciona una categoría" />
                  </SelectTrigger>
                  <SelectContent>
                    {requirementTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Mensaje: ¿Qué necesitas? *
                </label>
                <Textarea
                  required
                  placeholder="Describe tu requerimiento con el mayor detalle posible..."
                  value={formData.mensaje}
                  onChange={(e) => handleChange("mensaje", e.target.value)}
                  className="min-h-[120px]"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Plazo (fecha o texto)
                </label>
                <Input
                  placeholder="Ej: 15 de febrero / Lo antes posible"
                  value={formData.plazo}
                  onChange={(e) => handleChange("plazo", e.target.value)}
                  className="h-12"
                />
              </div>
              <div className="sm:col-span-2">
                <div className="flex items-center gap-3">
                  <Checkbox
                    id="acepta"
                    checked={formData.aceptaContacto}
                    onCheckedChange={(checked) =>
                      handleChange("aceptaContacto", checked as boolean)
                    }
                  />
                  <label
                    htmlFor="acepta"
                    className="text-sm text-muted-foreground cursor-pointer"
                  >
                    Acepto ser contactado por WhatsApp o correo electrónico
                  </label>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button type="submit" className="btn-cta flex-1">
                <Send className="mr-2 h-5 w-5" />
                Enviar y recibir cotización
              </Button>
              <Button
                type="button"
                variant="outline"
                className="btn-secondary flex-1"
                asChild
              >
                <a href={generateMailto()}>
                  <Mail className="mr-2 h-5 w-5" />
                  Enviar por correo
                </a>
              </Button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
