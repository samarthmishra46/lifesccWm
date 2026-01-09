import { CTAForm } from './CTAForm';

const steps = [
  {
    number: '1',
    title: 'You visit your nearest Lifescc clinic',
    description: 'A calm, private consultation — no pressure, no commitments.',
    image: 'https://res.cloudinary.com/dqyizevct/image/upload/v1767810501/doctor_private_consultation_what_happens_after_you_book_an_appointment_1st_img_iw3xnd.jpg',
  },
  {
    number: '2',
    title: 'Your body is analysed, not guessed',
    description: "Fat percentage, muscle levels, metabolism and problem areas are checked to understand what's really happening inside your body.",
    image: 'https://res.cloudinary.com/dqyizevct/image/upload/v1767810502/what_happens_image_2_xrl5kb.jpg',
  },
  {
    number: '3',
    title: 'A doctor explains your results clearly',
    description: "You're told why your body is holding fat or losing strength — in simple, understandable terms.",
    image: 'https://res.cloudinary.com/dqyizevct/image/upload/v1767810503/what_happens_image_3_vmxhgd.jpg',
  },
  {
    number: '4',
    title: 'A personalised plan is suggested',
    description: 'Based on your body, age and lifestyle — focusing on fat reduction + muscle building together.',
    image: 'https://res.cloudinary.com/dqyizevct/image/upload/v1767810503/what_happens_image_4_llpwnn.jpg',
  },
  {
    number: '5',
    title: 'You decide the next step',
    description: 'There is no obligation to start any treatment. The choice is always yours.',
    image: 'https://res.cloudinary.com/dqyizevct/image/upload/v1767810503/what_happens_image_5_cmqx30.jpg',
  },
];

export function WhatHappens() {
  return (
    <section className="bg-gradient-hero py-16 md:py-24">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-text mb-6">
              What Happens After You Book an Appointment
            </h2>
            <p className="text-lg md:text-xl text-neutral-text-secondary max-w-3xl mx-auto">
              From your first visit, everything is guided by doctors and designed around your body, not generic weight-loss rules.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {steps.map((step) => (
              <div key={step.number} className="text-center w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]">
                <div className="w-48 h-48 bg-primary-100 rounded-card mx-auto mb-6 overflow-hidden border-2 border-primary-200">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mb-4">
                  <span className="inline-flex items-center justify-center w-10 h-10 bg-primary-500 text-white rounded-full font-bold text-lg mb-3">
                    {step.number}
                  </span>
                  <h3 className="text-xl font-semibold text-neutral-text mb-2">
                    {step.title}
                  </h3>
                </div>
                <p className="text-neutral-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mb-12">
            <p className="text-lg text-neutral-text-secondary max-w-2xl mx-auto">
              There is no pressure to sign up or start treatment on the same day.
            </p>
          </div>

          <CTAForm sourceSection="what-happens" />
        </div>
      </div>
    </section>
  );
}
