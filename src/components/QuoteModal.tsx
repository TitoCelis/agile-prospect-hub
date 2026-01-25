import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

interface QuoteModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const requirementTypes = [
  "Salud",
  "Limpieza",
  "Laboratorio",
  "Plásticos",
  "Logística",
  "Licitaciones",
];

export function QuoteModal({ open, onOpenChange }: QuoteModalProps) {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    empresa: "",
    tipoRequerimiento: "",
    mensaje: "",
    plazo: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (!formData.nombre || !formData.telefono) {
      toast.error("Por favor completa todos los campos requeridos.");
      return;
    }
    setStep(2);
  };

  const handleSubmit = async () => {
    if (!formData.correo || !formData.empresa || !formData.tipoRequerimiento) {
      toast.error("Por favor completa todos los campos requeridos.");
      return;
    }

    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    } catch (error) {
      console.log("Lead saved for later processing");
    }

    setIsSubmitted(true);
    toast.success("¡Gracias! Te contactaremos pronto.");
  };

  const handleClose = () => {
    onOpenChange(false);
    // Reset after animation
    setTimeout(() => {
      setStep(1);
      setIsSubmitted(false);
      setFormData({
        nombre: "",
        telefono: "",
        correo: "",
        empresa: "",
        tipoRequerimiento: "",
        mensaje: "",
        plazo: "",
      });
    }, 300);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md p-0 overflow-hidden">
        <AnimatePresence mode="wait">
          {isSubmitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="p-8 text-center"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="h-8 w-8 text-accent" />
              </div>
              <h3 className="heading-3 text-foreground mb-2">¡Listo!</h3>
              <p className="text-muted-foreground mb-6">
                Te contactaremos a la brevedad.
              </p>
              <Button onClick={handleClose} className="btn-cta">
                Cerrar
              </Button>
            </motion.div>
          ) : (
            <motion.div
              key={`step-${step}`}
              initial={{ opacity: 0, x: step === 1 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: step === 1 ? 20 : -20 }}
              transition={{ duration: 0.2 }}
            >
              <DialogHeader className="p-6 pb-4 border-b border-border">
                <DialogTitle className="text-lg font-semibold">
                  Cotización rápida
                </DialogTitle>
                <div className="flex items-center gap-2 mt-2">
                  <div
                    className={`h-1.5 flex-1 rounded-full ${
                      step >= 1 ? "bg-primary" : "bg-border"
                    }`}
                  />
                  <div
                    className={`h-1.5 flex-1 rounded-full ${
                      step >= 2 ? "bg-primary" : "bg-border"
                    }`}
                  />
                </div>
              </DialogHeader>

              <div className="p-6">
                {step === 1 && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Nombre y apellido *
                      </label>
                      <Input
                        placeholder="Tu nombre completo"
                        value={formData.nombre}
                        onChange={(e) => handleChange("nombre", e.target.value)}
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Teléfono *
                      </label>
                      <Input
                        placeholder="999 999 999"
                        value={formData.telefono}
                        onChange={(e) => handleChange("telefono", e.target.value)}
                        className="h-12"
                      />
                    </div>
                    <Button
                      onClick={handleNext}
                      className="btn-cta w-full mt-4"
                    >
                      Continuar
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Correo *
                      </label>
                      <Input
                        type="email"
                        placeholder="tucorreo@empresa.com"
                        value={formData.correo}
                        onChange={(e) => handleChange("correo", e.target.value)}
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Empresa / Entidad *
                      </label>
                      <Input
                        placeholder="Nombre de la empresa"
                        value={formData.empresa}
                        onChange={(e) => handleChange("empresa", e.target.value)}
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Tipo de requerimiento *
                      </label>
                      <Select
                        value={formData.tipoRequerimiento}
                        onValueChange={(value) =>
                          handleChange("tipoRequerimiento", value)
                        }
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
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Mensaje (opcional)
                      </label>
                      <Input
                        placeholder="¿Qué necesitas?"
                        value={formData.mensaje}
                        onChange={(e) => handleChange("mensaje", e.target.value)}
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Plazo (opcional)
                      </label>
                      <Input
                        placeholder="Ej: 15 de febrero"
                        value={formData.plazo}
                        onChange={(e) => handleChange("plazo", e.target.value)}
                        className="h-12"
                      />
                    </div>
                    <div className="flex gap-3 mt-4">
                      <Button
                        variant="outline"
                        onClick={() => setStep(1)}
                        className="flex-1"
                      >
                        Atrás
                      </Button>
                      <Button onClick={handleSubmit} className="btn-cta flex-1">
                        Enviar
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}
