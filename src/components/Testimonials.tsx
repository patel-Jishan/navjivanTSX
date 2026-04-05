import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Sharma',
    location: 'Ahmedabad, Gujarat',
    rating: 5,
    text: 'Dr. Nikhil Patel is an exceptional cardiologist. His diagnosis was spot-on and the care I received at Navjivan Hospital was world-class. The staff was compassionate and professional throughout my treatment.',
    initials: 'RS',
    service: 'Cardiology',
  },
  {
    id: 2,
    name: 'Priya Mehta',
    location: 'Surat, Gujarat',
    rating: 5,
    text: 'My experience at Aura Dental Clinic with Dr. Riya Patel was fantastic. She is incredibly skilled and made me feel completely at ease. The results of my smile makeover are beyond what I had hoped for.',
    initials: 'PM',
    service: 'Dental Care',
  },
  {
    id: 3,
    name: 'Amit Joshi',
    location: 'Vadodara, Gujarat',
    rating: 5,
    text: 'When my father had a cardiac emergency at midnight, the Navjivan Hospital team responded swiftly and professionally. Their 24/7 emergency services truly saved his life. Forever grateful.',
    initials: 'AJ',
    service: 'Emergency',
  },
  {
    id: 4,
    name: 'Sunita Patel',
    location: 'Rajkot, Gujarat',
    rating: 4,
    text: 'Very clean facilities, friendly staff and expert doctors. The appointment booking process was smooth and I did not have to wait long. I highly recommend Navjivan Hospital for routine check-ups.',
    initials: 'SP',
    service: 'General Care',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Patient Stories
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            The trust and satisfaction of our patients is the greatest recognition we can receive. Here is what they have to share.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-all duration-300 flex flex-col"
            >
              {/* Quote icon */}
              <Quote size={28} className="text-blue-200 mb-4 shrink-0" />

              {/* Rating */}
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < t.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200 fill-gray-200'}
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-5">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-bold shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-gray-400 text-xs">{t.location}</div>
                </div>
                <span className="ml-auto text-xs font-medium bg-blue-50 text-blue-600 px-2.5 py-1 rounded-full whitespace-nowrap">
                  {t.service}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { value: '98%', label: 'Patient Satisfaction' },
            { value: '10K+', label: 'Patients Treated' },
            { value: '4.9/5', label: 'Average Rating' },
            { value: '0', label: 'Compromise on Quality' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center bg-blue-600 rounded-2xl p-6 text-white">
              <div className="text-3xl font-bold mb-1">{value}</div>
              <div className="text-blue-200 text-sm">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
