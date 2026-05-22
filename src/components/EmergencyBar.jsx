import { Phone, Clock } from 'lucide-react';

export default function EmergencyBar() {
  return (
    <div className="bg-red-600 text-white py-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-sm">
        <div className="flex items-center gap-2 font-semibold">
          <span className="animate-pulse w-2 h-2 bg-white rounded-full inline-block"></span>
          Emergency Services Available 24/7
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="tel:+911234567890"
            className="flex items-center gap-1.5 hover:text-red-100 transition-colors font-medium"
          >
            <Phone size={14} />
            +91 1234 567 890
          </a>
          <div className="flex items-center gap-1.5">
            <Clock size={14} />
            <span>Open 24 Hours</span>
          </div>
        </div>
      </div>
    </div>
  );
}
