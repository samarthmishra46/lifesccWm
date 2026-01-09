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
    <section className="bg-neutral-light py-16 md:py-24">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-text mb-4">
              Two focused programs.
            </h2>
            <p className="text-2xl md:text-3xl text-neutral-text">
              One complete body transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="card bg-gradient-soft">
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-text mb-6">
                Metabolic Reset Program
              </h3>

              <div className="mb-6">
                <h4 className="text-xl font-semibold text-neutral-text mb-4">
                  Who this is for:
                </h4>
                <ul className="space-y-3">
                  {metabolicResetPoints.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-accent-green mr-3 mt-1">•</span>
                      <span className="text-neutral-text-secondary">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Before/After Images */}
              <div className="mb-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="bg-neutral-border rounded-lg h-64 mb-2 overflow-hidden">
                      <img 
                        src="https://res.cloudinary.com/dqyizevct/image/upload/v1767810502/1st_subrogram_before_image_ref8zy.png"
                        alt="Metabolic Reset Before"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="font-semibold text-neutral-text">Before</p>
                    
                  </div>
                  <div className="text-center">
                    <div className="bg-neutral-border rounded-lg h-64 mb-2 overflow-hidden">
                      <img 
                        src="https://res.cloudinary.com/dqyizevct/image/upload/v1767810501/after_image_sskfyt.jpg"
                        alt="Metabolic Reset After"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="font-semibold text-neutral-text">After</p>
                    <p className="text-sm text-neutral-text-secondary opacity-0">placeholder</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-neutral-text mb-3">
                  What this program focuses on:
                </h4>
                <p className="text-neutral-text-secondary text-lg">
                  Correcting how your body stores and burns fat, so metabolism starts responding again.
                </p>
              </div>
            </div>

            <div className="card bg-neutral-light">
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-text mb-6">
                Muscle Gain Program
              </h3>

              <div className="mb-6 pb-8">
                <h4 className="text-xl font-semibold text-neutral-text mb-4">
                  Who this is for:
                </h4>
                <ul className="space-y-3">
                  {muscleGainPoints.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-accent-green mr-3 mt-1">•</span>
                      <span className="text-neutral-text-secondary">{point}</span>
                    </li>
                  ))}
                </ul>
                <p></p>
              </div>

              {/* Before/After Images */}
              <div className="mb-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="bg-neutral-border rounded-lg h-64 mb-2 overflow-hidden">
                      <img 
                        src="https://res.cloudinary.com/dqyizevct/image/upload/v1767810501/before_2nd_subprogrm_tbevxo.jpg"
                        alt="Muscle Gain Before"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="font-semibold text-neutral-text">Before</p>
                    
                  </div>
                  <div className="text-center">
                    <div className="bg-neutral-border rounded-lg h-64 mb-2 overflow-hidden">
                      <img 
                        src="https://res.cloudinary.com/dqyizevct/image/upload/v1767810502/after_image_2nd_subprogram_kpyymm.jpg"
                        alt="Muscle Gain After"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="font-semibold text-neutral-text">After</p>
                    <p className="text-sm text-neutral-text-secondary opacity-0">placeholder</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-neutral-text mb-3">
                  What this program focuses on:
                </h4>
                <p className="text-neutral-text-secondary text-lg">
                  Building lean muscle to support long-term fat loss and improve how your body looks and feels.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <p className="text-xl md:text-2xl text-neutral-text-secondary max-w-4xl mx-auto leading-relaxed">
              Together, these programs form the Lifescc Weight Management System — where fat loss and muscle gain happen at the same time.
            </p>
          </div>

          <CTAForm sourceSection="programs" />
        </div>
      </div>
    </section>
  );
}
