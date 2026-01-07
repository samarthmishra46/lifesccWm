import { CTAForm } from './CTAForm';

export function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            A weight management program that burns fat and rebuilds muscle — at the same time.
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-12 leading-relaxed max-w-4xl mx-auto">
            Most weight-loss methods make you smaller, not stronger.
            Lifescc is a doctor-guided weight management system that targets stubborn fat, restores metabolic balance, and builds lean muscle together — without surgery or extreme workouts.
          </p>

          <div className="mb-6">
            <CTAForm sourceSection="hero" buttonText="Book a Free Body Assessment" />
          </div>

          <p className="text-sm text-gray-600">
            Free consultation · No pressure · Visit your nearest Lifescc clinic
          </p>
        </div>
      </div>
    </section>
  );
}
