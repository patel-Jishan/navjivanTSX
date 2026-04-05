import { Link } from 'wouter';
import { Heart, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Doctors', href: '#doctors' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  'Cardiology',
  'Dental Care (Aura Dental)',
  'Emergency Care',
  'General Consultation',
  'Diagnostics & Lab',
  'Health Checkup Packages',
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center">
                <Heart size={18} className="text-white fill-white" />
              </div>
              <div className="leading-tight">
                <span className="block text-white font-bold text-lg leading-none">Navjivan</span>
                <span className="block text-gray-400 text-xs font-medium tracking-widest uppercase">Hospital</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              A multi-speciality hospital in Gujarat dedicated to delivering compassionate, world-class healthcare to every patient we serve.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 bg-gray-800 hover:bg-blue-600 text-gray-400 hover:text-white rounded-lg flex items-center justify-center transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <button
                    onClick={() => handleNavClick(href)}
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 bg-blue-600 rounded-full group-hover:w-2 transition-all duration-200"></span>
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">Our Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="/appointment"
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 bg-green-500 rounded-full group-hover:w-2 transition-all duration-200"></span>
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-blue-400 shrink-0 mt-0.5" />
                <span className="text-sm text-gray-400 leading-relaxed">
                  Near Civil Hospital, Ahmedabad – 380001, Gujarat, India
                </span>
              </li>
              <li>
                <a href="tel:+911234567890" className="flex items-center gap-3 text-sm text-gray-400 hover:text-blue-400 transition-colors">
                  <Phone size={16} className="text-blue-400 shrink-0" />
                  +91 1234 567 890
                </a>
              </li>
              <li>
                <a href="mailto:info@navjivanhospital.in" className="flex items-center gap-3 text-sm text-gray-400 hover:text-blue-400 transition-colors">
                  <Mail size={16} className="text-blue-400 shrink-0" />
                  info@navjivanhospital.in
                </a>
              </li>
            </ul>

            <div className="mt-6 bg-red-600/20 border border-red-600/30 rounded-xl p-4">
              <p className="text-red-400 text-xs font-semibold uppercase tracking-wide mb-1">Emergency Helpline</p>
              <a href="tel:+911234567890" className="text-white font-bold text-lg hover:text-red-300 transition-colors">
                +91 1234 567 890
              </a>
              <p className="text-gray-400 text-xs mt-1">Available 24 / 7</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <p>© {new Date().getFullYear()} Navjivan Hospital. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
