import { CTAForm } from './CTAForm';

export function HeroSection() {
  return (
    <section className="bg-gradient-hero pt-20 md:pt-32 pb-16 md:pb-24 lg:pb-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#fff18a] via-transparent to-[#fff18a] opacity-40" />
      
      <div className="section-container relative">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-text mb-6 leading-tight">
            A weight management program that burns fat and rebuilds muscle — at the same time.
          </h1>
          <p className="text-lg md:text-xl text-neutral-text-secondary mb-12 leading-relaxed max-w-4xl mx-auto">
            Most weight-loss methods make you smaller, not stronger.
            Lifescc is a doctor-guided weight management system that targets stubborn fat, restores metabolic balance, and builds lean muscle together — without surgery or extreme workouts.
          </p>

          <div className="mb-6 max-w-md mx-auto">
            <CTAForm sourceSection="hero" buttonText="Book a Free Body Assessment" />
          </div>

          <p className="text-sm text-neutral-text-secondary">
            Free consultation · No pressure · Visit your nearest Lifescc clinic
          </p>
        </div>
      </div>
    </section>
  );
}
