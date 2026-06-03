import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const contactDetails = [
  {
    icon: MapPin,
    title: 'Address',
    lines: ['Navjivan Hospital, Near Civil Hospital', 'Ahmedabad – 380001, Gujarat, India'],
    color: 'blue',
  },
  {
    icon: Phone,
    title: 'Phone',
    lines: ['+91 1234 567 890', '+91 9876 543 210'],
    color: 'green',
    href: 'tel:+911234567890',
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['info@navjivanhospital.in', 'appointments@navjivanhospital.in'],
    color: 'purple',
    href: 'mailto:info@navjivanhospital.in',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    lines: ['Mon – Sat: 8 AM – 8 PM', 'Emergency: 24 Hours / 7 Days'],
    color: 'orange',
  },
];

const colorMap = {
  blue: 'bg-blue-100 text-blue-600',
  green: 'bg-green-100 text-green-600',
  purple: 'bg-purple-100 text-purple-600',
  orange: 'bg-orange-100 text-orange-600',
};

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            We are here to help. Reach out to us for appointments, inquiries, or emergency assistance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact info cards */}
          <div>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {contactDetails.map(({ icon: Icon, title, lines, color, href }) => (
                <div
                  key={title}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-shadow duration-300"
                >
                  <div className={`w-11 h-11 rounded-xl ${colorMap[color]} flex items-center justify-center mb-4`}>
                    <Icon size={20} />
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 mb-2">{title}</h3>
                  {lines.map((line, i) =>
                    href && i === 0 ? (
                      <a key={line} href={href} className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                        {line}
                      </a>
                    ) : (
                      <p key={line} className="text-sm text-gray-600">
                        {line}
                      </p>
                    )
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Google Maps embed */}
          <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 min-h-80">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.8797571826537!2d72.56880451543212!3d23.022504784954483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f9c3e1e849%3A0x0!2sCivil+Hospital%2C+Asarwa%2C+Ahmedabad!5e0!3m2!1sen!2sin!4v1617803367567!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ minHeight: '380px', border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Navjivan Hospital Location on Google Maps"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
