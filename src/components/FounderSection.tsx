import { CTAForm } from './CTAForm';

export function FounderSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-shrink-0">
              <div className="w-64 h-64 bg-gray-200 rounded-2xl overflow-hidden">
                <img 
                  src="https://res.cloudinary.com/dqyizevct/image/upload/c_crop,w_1358,h_1450,x_42,y_161/v1767811201/6203693d-e016-4fb5-a493-aff42702471b_ulwoks.jpg"
                  alt="Dr. Founder"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex-1">
              <div className="mb-6">
                <div className="text-3xl font-serif text-gray-400 mb-4">~Signature~</div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Dr. [Founder Name]
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Founder, Lifescc<br />
                Doctor-led weight management clinics
              </p>
              <blockquote className="text-xl md:text-2xl text-gray-800 italic border-l-4 border-green-600 pl-6">
                "Every body responds differently. Our job is to understand it before treating it."
              </blockquote>
            </div>
          </div>

          <div className="mt-16">
            <CTAForm sourceSection="founder" />
          </div>
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    title: 'Metabolic correction',
    description: 'Correcting how your body stores and burns fat',
  },
  {
    title: 'Targeted fat reduction',
    description: 'Focusing on stubborn problem areas',
  },
  {
    title: 'Muscle strengthening',
    description: 'Building lean muscle for long-term results',
  },
  {
    title: 'Doctor-guided monitoring',
    description: 'Continuous medical supervision throughout your journey',
  },
];

export function HowLifesccHelps() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              How Lifescc Helps
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-4">
              At Lifescc, weight management is not treated as "weight loss".
            </p>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              We focus on correcting how your body functions so fat reduction and muscle rebuilding happen together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {features.map((feature) => (
              <div key={feature.title} className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-700 text-lg">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              To do this effectively, Lifescc uses two complementary programs that work together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
