import { MapPin } from 'lucide-react';

const clinics = [
  { city: 'Bangalore', name: 'Lifescc – Bangalore' },
  { city: 'Hyderabad', name: 'Lifescc – Hyderabad' },
  { city: 'Chennai', name: 'Lifescc – Chennai' },
  { city: 'Coimbatore', name: 'Lifescc – Coimbatore' },
];

export function ClinicsSection() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Visit a Lifescc clinic near you
            </h2>
            <p className="text-xl text-gray-700">
              Get assessed, consulted, and guided by doctors — at a real Lifescc clinic in your city.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl h-96 mb-8 flex items-center justify-center relative overflow-hidden">
            <p className="text-gray-500 text-lg">Map showing clinic locations</p>
            {/* Map pin icons overlay */}
            <div className="absolute top-1/4 left-1/3">
              <MapPin className="w-8 h-8 text-green-600 fill-green-600" />
            </div>
            <div className="absolute top-1/3 right-1/4">
              <MapPin className="w-8 h-8 text-green-600 fill-green-600" />
            </div>
            <div className="absolute bottom-1/3 left-1/4">
              <MapPin className="w-8 h-8 text-green-600 fill-green-600" />
            </div>
          </div>

          <div className="overflow-x-auto pb-4 mb-8 -mx-4 px-4 md:mx-0 md:px-0">
            <div className="flex gap-6 md:grid md:grid-cols-3 min-w-max md:min-w-0">
              {clinics.slice(0, 3).map((clinic) => (
                <div key={clinic.city} className="text-center flex-shrink-0 w-72 md:w-auto">
                  <div className="bg-gray-200 rounded-xl h-48 mb-4 flex items-center justify-center overflow-hidden">
                    <span className="text-gray-400">Clinic Image</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <MapPin className="w-5 h-5 text-green-600" />
                    <h3 className="text-lg font-semibold text-gray-900">
                      {clinic.city}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center bg-green-50 rounded-xl p-8">
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Safe and medically supervised care trusted by thousands.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
