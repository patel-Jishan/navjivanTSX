import { Link } from 'wouter';
import { GraduationCap, Star, Calendar } from 'lucide-react';

const doctors = [
  {
    id: 'dr-nikhil',
    name: 'Dr. Nikhilkumar Patel',
    specialty: 'Cardiologist',
    qualification: 'MBBS, MD (Cardiology), DM',
    experience: '12+ Years Experience',
    image: '/images/dr-nikhil.png',
    rating: 4.9,
    reviews: 320,
    available: 'Mon – Sat, 10 AM – 4 PM',
    tags: ['Heart Disease', 'Angioplasty', 'Echocardiography'],
    accentColor: 'blue',
  },
  {
    id: 'dr-riya',
    name: 'Dr. Riya Patel',
    specialty: 'Dentist — Aura Dental Clinic',
    qualification: 'BDS, MDS (Orthodontics)',
    experience: '8+ Years Experience',
    image: '/images/dr-riya.png',
    rating: 4.8,
    reviews: 215,
    available: 'Mon – Fri, 9 AM – 6 PM',
    tags: ['Braces', 'Root Canal', 'Smile Design'],
    accentColor: 'green',
  },
];

export default function Doctors() {
  return (
    <section id="doctors" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Meet Our Experts
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Specialist Doctors
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Our team of experienced specialists is dedicated to providing the highest standard of medical care with empathy and expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {doctors.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Image */}
              <div className={`relative h-64 ${doc.accentColor === 'blue' ? 'bg-gradient-to-br from-blue-50 to-blue-100' : 'bg-gradient-to-br from-green-50 to-green-100'} overflow-hidden`}>
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    parent.innerHTML = `<div class="w-full h-full flex items-center justify-center"><div class="w-24 h-24 rounded-full ${doc.accentColor === 'blue' ? 'bg-blue-200' : 'bg-green-200'} flex items-center justify-center text-4xl font-bold ${doc.accentColor === 'blue' ? 'text-blue-600' : 'text-green-600'}">${doc.name.charAt(4)}</div></div>`;
                  }}
                />
                {/* Rating badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-1.5 flex items-center gap-1 shadow-sm">
                  <Star size={14} className="text-yellow-400 fill-yellow-400" />
                  <span className="text-sm font-bold text-gray-800">{doc.rating}</span>
                  <span className="text-xs text-gray-500">({doc.reviews})</span>
                </div>
              </div>

              {/* Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{doc.name}</h3>
                <p className={`text-sm font-semibold mt-0.5 ${doc.accentColor === 'blue' ? 'text-blue-600' : 'text-green-600'}`}>
                  {doc.specialty}
                </p>

                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <GraduationCap size={15} className="text-gray-400 shrink-0" />
                    {doc.qualification}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar size={15} className="text-gray-400 shrink-0" />
                    {doc.available}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {doc.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs font-medium px-3 py-1 rounded-full ${
                        doc.accentColor === 'blue'
                          ? 'bg-blue-50 text-blue-700'
                          : 'bg-green-50 text-green-700'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href="/appointment"
                  className={`mt-5 w-full inline-flex items-center justify-center gap-2 font-semibold text-sm px-5 py-3 rounded-xl transition-all duration-200 ${
                    doc.accentColor === 'blue'
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-green-600 hover:bg-green-700 text-white'
                  }`}
                >
                  Book Consultation
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
