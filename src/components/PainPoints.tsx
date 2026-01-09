const painPoints = [
  "You eat less than before, but your weight doesn't move",
  "Fat stays in the same areas no matter what you try",
  "Gym helps initially, then everything stops",
  "You feel bloated, heavy, or low on energy most days",
  "You've lost weight before — but your body never looked or felt better",
  "You're tired of starting over again",
];

export function PainPoints() {
  return (
    <section className="bg-neutral-light py-16 md:py-24">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <p className="text-xl md:text-2xl text-neutral-text mb-6 leading-relaxed">
              Hi, I&apos;m [Name], founder of Lifescc.
            </p>
            <p className="text-xl md:text-2xl text-neutral-text mb-8 leading-relaxed">
              And I&apos;d like to know...
            </p>
          </div>

          <div className="space-y-6 mb-10">
            {painPoints.map((point, index) => (
              <div
                key={index}
                className="card flex items-start gap-4"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-green mt-1"></div>
                <p className="text-lg md:text-xl text-neutral-text-secondary leading-relaxed">
                  {point}
                </p>
              </div>
            ))}
          </div>

          <p className="text-xl md:text-2xl text-neutral-text text-center font-semibold mb-8">
            If that sounds familiar, you&apos;re not alone.
          </p>

          <div className="text-center space-y-4 text-lg text-neutral-text-secondary">
            <p>
              Most people who come to Lifescc have already tried everything they
              were told to do.{" "}
            </p>
            <div className="text-center space-y-3">
              <p>They&apos;ve controlled their diet.</p>
              <p>They&apos;ve shown discipline.</p>
              <p>They&apos;ve put in effort.</p>

              <p>
                And yet, their body either resists change or falls back after
                some time.
              </p>
              <p>This doesn&apos;t mean you lack willpower.</p>
              <p>
                It means your body has adapted in a way where fat, muscle, and
                metabolism are no longer working together.
              </p>
              <p>
                That&apos;s why simply eating less or exercising more stops
                working after a point.
              </p>
            </div>
            <p className="font-medium text-neutral-text text-xl md:text-2xl pt-4">
              You deserve a solution that understands your body not one that
              asks you to punish it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function LetterSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6 text-lg md:text-xl text-neutral-text-secondary leading-relaxed">
            <p></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AuthorityClose() {
  return (
    <section className="bg-gradient-to-br from-[#fff293] via-transparent to-[#fff7b9] text-white py-16 md:py-20">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            That&apos;s why we designed the Lifescc Weight Management System.
          </h2>
          <p className="text-xl md:text-2xl leading-relaxed">
            A medically guided approach that works on fat reduction and muscle
            rebuilding together, so results are not just visible — but
            sustainable.
          </p>
        </div>
      </div>
    </section>
  );
}
