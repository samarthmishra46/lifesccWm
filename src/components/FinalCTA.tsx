import { CTAForm } from './CTAForm';

export function FinalCTA() {
  return (
    <section className="bg-[#fff18a] py-16 md:py-24">
      <div className="section-container pb-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6" style={{ fontFamily: 'Georgia, serif' }}>
            Your New Body Starts With a Single Decision
          </h2>

          <div className="text-xl md:text-2xl mb-12 space-y-4 leading-relaxed text-black" style={{ fontFamily: 'Georgia, serif' }}>
            <p>You&apos;ve waited long enough.</p>
            <p>You deserve a body that feels strong, toned, energetic and confident.</p>
            <p>LIFESCC gives you a transformation that stays with you for life.</p>
            <p className="font-semibold text-black">Start your personalised evaluation today.</p>
          </div>

          <div className="max-w-md mx-auto">
            <CTAForm
              sourceSection="final-cta"
              buttonText="Begin My Journey"
              variant="primary"
            />

           
          </div>
        </div>
      </div>
       <div className="border-t border-black "></div>
    </section>
    
  );
}
