import { Link } from 'wouter';
import { ArrowRight, Users, Award, Clock, Stethoscope } from 'lucide-react';

const stats = [
  { icon: Users, value: '10,000+', label: 'Patients Served' },
  { icon: Award, value: '15+', label: 'Years of Excellence' },
  { icon: Stethoscope, value: '20+', label: 'Specialist Doctors' },
  { icon: Clock, value: '24/7', label: 'Emergency Care' },
];

export default function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-36">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Multi-Speciality Hospital, Gujarat
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Your Health, <br />
              <span className="text-green-400">Our Priority</span>
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed mb-8 max-w-xl">
              Navjivan Hospital provides world-class medical care with compassion and expertise. From emergency services to specialized treatments, we are here for you around the clock.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/appointment"
                className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-7 py-3.5 rounded-xl hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Book Appointment
                <ArrowRight size={18} />
              </Link>
              <button
                onClick={() => scrollToSection('#services')}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/20 transition-all duration-200"
              >
                Our Services
              </button>
            </div>
          </div>

          {/* Hero image */}
          <div className="hidden lg:flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-blue-400/30 rounded-3xl blur-2xl transform rotate-6"></div>
              <img
                src="/images/hero-bg.png"
                alt="Navjivan Hospital modern building exterior"
                className="relative rounded-3xl shadow-2xl w-full object-cover h-96"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Award className="text-green-600" size={24} />
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-800">NABH Accredited</div>
                  <div className="text-xs text-gray-500">Quality Healthcare</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 text-white text-center hover:bg-white/15 transition-all duration-200"
            >
              <Icon size={28} className="mx-auto mb-2 text-green-400" />
              <div className="text-2xl font-bold">{value}</div>
              <div className="text-blue-200 text-sm mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
