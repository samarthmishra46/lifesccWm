import { Star } from 'lucide-react';

export function SocialProof() {
  return (
    <section className="bg-neutral-light py-12 overflow-hidden">
      <div className="section-container">
        <div className="mb-8">
          <div className="flex items-center justify-center overflow-hidden">
            <div className="animate-marquee whitespace-nowrap">
              <span className="text-neutral-text-secondary text-lg md:text-xl mx-8">
                Trusted by 25,000+ people across South India for medically guided weight management.
              </span>
              <span className="text-neutral-text-secondary text-lg md:text-xl mx-8">
                Trusted by 25,000+ people across South India for medically guided weight management.
              </span>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="card bg-gradient-soft">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=160&h=160&fit=crop&crop=faces" 
                  alt="Priya R."
                  className="w-20 h-20 rounded-full object-cover border-2 border-primary-200"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent-green text-accent-green" />
                  ))}
                </div>
                <p className="text-neutral-text-secondary mb-2">
                  "I've tried everything for years, but Lifescc was the first program that actually helped me lose fat while building muscle. The doctor-guided approach made all the difference."
                </p>
                <p className="text-sm text-neutral-text-secondary font-medium">Priya R., Bangalore</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
