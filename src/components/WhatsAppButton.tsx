import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "5491123740303";
  const message = encodeURIComponent("Hola, me gustaría solicitar información sobre sus paquetes de viaje.");

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 animate-fade-in"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
};

export default WhatsAppButton;
