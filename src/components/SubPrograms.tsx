import { CTAForm } from './CTAForm';

const metabolicResetPoints = [
  'You gain weight easily',
  'Fat loss feels unusually slow',
  'You feel bloated, sluggish, or low on energy',
  'Diet and workouts stop working after a point',
  'Weight comes back even after effort',
];

const muscleGainPoints = [
  'You want a firmer, more toned body',
  "You've lost weight before but still feel soft",
  'You want visible definition and strength',
  'You want better posture and daily energy',
];

export function SubPrograms() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Two focused programs.
            </h2>
            <p className="text-2xl md:text-3xl text-gray-900">
              One complete body transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-green-50 rounded-2xl p-8 md:p-10">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Metabolic Reset Program
              </h3>

              <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  Who this is for:
                </h4>
                <ul className="space-y-3">
                  {metabolicResetPoints.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-600 mr-3 mt-1">•</span>
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Before/After Images */}
              <div className="mb-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="bg-gray-200 rounded-lg h-64 mb-2 overflow-hidden">
                      <img 
                        src="https://res.cloudinary.com/dqyizevct/image/upload/v1767810502/1st_subrogram_before_image_ref8zy.png"
                        alt="Metabolic Reset Before"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="font-semibold text-gray-900">Before</p>
                    <p className="text-sm text-gray-600">Results after Lifescc Metabolic Reset Program<br />(actual client)</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-gray-200 rounded-lg h-64 mb-2 overflow-hidden">
                      <img 
                        src="https://res.cloudinary.com/dqyizevct/image/upload/v1767810501/after_image_sskfyt.jpg"
                        alt="Metabolic Reset After"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="font-semibold text-gray-900">After</p>
                    <p className="text-sm text-gray-600 opacity-0">placeholder</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  What this program focuses on:
                </h4>
                <p className="text-gray-700 text-lg">
                  Correcting how your body stores and burns fat, so metabolism starts responding again.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 md:p-10">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Muscle Gain Program
              </h3>

              <div className="mb-6 pb-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  Who this is for:
                </h4>
                <ul className="space-y-3">
                  {muscleGainPoints.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-600 mr-3 mt-1">•</span>
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
                <p></p>
              </div>

              {/* Before/After Images */}
              <div className="mb-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="bg-gray-200 rounded-lg h-64 mb-2 overflow-hidden">
                      <img 
                        src="https://res.cloudinary.com/dqyizevct/image/upload/v1767810501/before_2nd_subprogrm_tbevxo.jpg"
                        alt="Muscle Gain Before"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="font-semibold text-gray-900">Before</p>
                    <p className="text-sm text-gray-600">Results after Lifescc Muscle Gain Program<br />(actual client)</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-gray-200 rounded-lg h-64 mb-2 overflow-hidden">
                      <img 
                        src="https://res.cloudinary.com/dqyizevct/image/upload/v1767810502/after_image_2nd_subprogram_kpyymm.jpg"
                        alt="Muscle Gain After"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="font-semibold text-gray-900">After</p>
                    <p className="text-sm text-gray-600 opacity-0">placeholder</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  What this program focuses on:
                </h4>
                <p className="text-gray-700 text-lg">
                  Building lean muscle to support long-term fat loss and improve how your body looks and feels.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Together, these programs form the Lifescc Weight Management System — where fat loss and muscle gain happen at the same time.
            </p>
          </div>

          <CTAForm sourceSection="programs" />
        </div>
      </div>
    </section>
  );
}
