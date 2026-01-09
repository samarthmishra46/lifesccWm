import { MapPin } from 'lucide-react';

const clinics = [
  { city: 'Bangalore', name: 'Lifescc – Bangalore' },
  { city: 'Hyderabad', name: 'Lifescc – Hyderabad' },
  { city: 'Chennai', name: 'Lifescc – Chennai' },
  { city: 'Coimbatore', name: 'Lifescc – Coimbatore' },
];

export function ClinicsSection() {
  return (
    <section className="bg-neutral-light py-16 md:py-24">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-text mb-4">
              Visit a Lifescc clinic near you
            </h2>
            <p className="text-xl text-neutral-text-secondary">
              Get assessed, consulted, and guided by doctors — at a real Lifescc clinic in your city.
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl h-96 mb-8 flex items-center justify-center relative overflow-hidden">
            <p className="text-neutral-text-secondary text-lg">Map showing clinic locations</p>
            {/* Map pin icons overlay */}
            <div className="absolute top-1/4 left-1/3">
              <MapPin className="w-8 h-8 text-primary-600 fill-primary-600" />
            </div>
            <div className="absolute top-1/3 right-1/4">
              <MapPin className="w-8 h-8 text-primary-600 fill-primary-600" />
            </div>
            <div className="absolute bottom-1/3 left-1/4">
              <MapPin className="w-8 h-8 text-primary-600 fill-primary-600" />
            </div>
          </div>

          <div className="overflow-x-auto pb-4 mb-8 -mx-4 px-4 md:mx-0 md:px-0">
            <div className="flex gap-6 md:grid md:grid-cols-3 min-w-max md:min-w-0">
              {clinics.slice(0, 3).map((clinic) => (
                <div key={clinic.city} className="text-center flex-shrink-0 w-72 md:w-auto">
                  <div className="bg-neutral-border rounded-xl h-48 mb-4 flex items-center justify-center overflow-hidden">
                    <span className="text-neutral-text-secondary">Clinic Image</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <MapPin className="w-5 h-5 text-primary-600" />
                    <h3 className="text-lg font-semibold text-neutral-text">
                      {clinic.city}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center card bg-gradient-soft">
            <p className="text-lg text-neutral-text-secondary max-w-3xl mx-auto">
              Safe and medically supervised care trusted by thousands.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
