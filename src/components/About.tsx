import { CheckCircle, Target, Eye } from 'lucide-react';

const missionPoints = [
  'Provide accessible, high-quality healthcare to all',
  'Employ the latest medical technologies and techniques',
  'Ensure patient-centered, compassionate care',
  'Foster a culture of continuous medical education',
];

const visionPoints = [
  'Be Gujarat\'s most trusted multi-speciality hospital',
  'Pioneer innovative healthcare solutions',
  'Achieve zero-compromise quality standards',
  'Serve every patient with dignity and respect',
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Who We Are
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Navjivan Hospital
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            For over 15 years, Navjivan Hospital has been a beacon of hope and healing in Gujarat, bringing world-class medical care to every patient we serve.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Mission */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Target className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              To deliver compassionate, patient-centric healthcare of the highest quality, making advanced medical services accessible to every individual and family in our community.
            </p>
            <ul className="space-y-3">
              {missionPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <Eye className="text-green-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              To be recognized as Gujarat's most trusted and innovative multi-speciality hospital, setting new standards in healthcare excellence and patient safety across India.
            </p>
            <ul className="space-y-3">
              {visionPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-blue-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom highlight bar */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold mb-1">15+</div>
              <div className="text-blue-200 text-sm font-medium">Years of Service</div>
            </div>
            <div className="sm:border-x border-blue-500 px-6">
              <div className="text-4xl font-bold mb-1">50+</div>
              <div className="text-blue-200 text-sm font-medium">Medical Staff</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-1">100%</div>
              <div className="text-blue-200 text-sm font-medium">Commitment to Care</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
