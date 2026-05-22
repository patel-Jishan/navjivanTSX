import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '911234567890';
const MESSAGE = encodeURIComponent('Hello! I would like to book an appointment at Navjivan Hospital.');

export default function WhatsAppButton() {
  return (
    <a
      id="whatsapp-float-btn"
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-3"
    >
      {/* Tooltip */}
      <span className="hidden group-hover:flex items-center bg-white text-gray-800 text-sm font-medium px-4 py-2 rounded-xl shadow-lg border border-gray-100 whitespace-nowrap transition-all duration-200">
        Chat with us on WhatsApp
      </span>

      {/* Button */}
      <div className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110">
        <MessageCircle size={26} className="text-white fill-white" />
        {/* Pulse ring */}
        <span className="absolute w-14 h-14 rounded-full bg-green-400 animate-ping opacity-40"></span>
      </div>
    </a>
  );
}
