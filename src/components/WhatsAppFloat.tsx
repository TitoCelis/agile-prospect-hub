import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/51990292579";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
