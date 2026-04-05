import { Link } from 'wouter';
import { Heart, Smile, Zap, Stethoscope, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 'cardiology',
    icon: Heart,
    title: 'Cardiology',
    description:
      'Comprehensive heart care including diagnostics, interventional procedures, and long-term cardiac management with state-of-the-art equipment.',
    features: ['ECG & Echocardiography', 'Angiography & Angioplasty', 'Holter Monitoring', 'Cardiac Rehabilitation'],
    color: 'red',
  },
  {
    id: 'dental',
    icon: Smile,
    title: 'Dental Care',
    description:
      'Complete dental solutions at Aura Dental Clinic — from routine check-ups to advanced cosmetic dentistry and orthodontic treatments.',
    features: ['Orthodontics & Braces', 'Root Canal Treatment', 'Cosmetic Dentistry', 'Teeth Whitening'],
    color: 'blue',
  },
  {
    id: 'emergency',
    icon: Zap,
    title: 'Emergency Care',
    description:
      'Round-the-clock emergency services with rapid response teams, fully-equipped trauma bays, and critical care specialists on standby.',
    features: ['24/7 Emergency Room', 'Trauma Management', 'Ambulance Services', 'ICU & Critical Care'],
    color: 'orange',
  },
  {
    id: 'general',
    icon: Stethoscope,
    title: 'General Consultation',
    description:
      'Expert primary care consultations for routine check-ups, chronic disease management, preventive healthcare, and health screenings.',
    features: ['Routine Check-ups', 'Chronic Disease Management', 'Preventive Care', 'Health Screenings'],
    color: 'green',
  },
];

const colorMap: Record<string, { bg: string; icon: string; tag: string; border: string }> = {
  red: { bg: 'bg-red-50', icon: 'bg-red-100 text-red-600', tag: 'bg-red-50 text-red-700', border: 'group-hover:border-red-200' },
  blue: { bg: 'bg-blue-50', icon: 'bg-blue-100 text-blue-600', tag: 'bg-blue-50 text-blue-700', border: 'group-hover:border-blue-200' },
  orange: { bg: 'bg-orange-50', icon: 'bg-orange-100 text-orange-600', tag: 'bg-orange-50 text-orange-700', border: 'group-hover:border-orange-200' },
  green: { bg: 'bg-green-50', icon: 'bg-green-100 text-green-600', tag: 'bg-green-50 text-green-700', border: 'group-hover:border-green-200' },
};

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Medical Services
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            We offer a wide range of specialized medical services, each delivered with the highest standards of care and cutting-edge technology.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ id, icon: Icon, title, description, features, color }) => {
            const c = colorMap[color];
            return (
              <div
                key={id}
                id={`service-${id}`}
                className={`group bg-white rounded-2xl border border-gray-100 ${c.border} shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col`}
              >
                <div className={`${c.bg} p-6`}>
                  <div className={`w-13 h-13 rounded-xl ${c.icon} w-12 h-12 flex items-center justify-center mb-4`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <ul className="space-y-2 flex-1">
                    {features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className={`w-1.5 h-1.5 rounded-full ${c.icon.split(' ')[0].replace('bg-', 'bg-').replace('100', '500')}`}></span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/appointment"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 group/link"
                  >
                    Book Now
                    <ArrowRight size={15} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
