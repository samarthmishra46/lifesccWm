import { HeroSection } from './components/HeroSection';
import { SocialProof } from './components/SocialProof';
import { WhatHappens } from './components/WhatHappens';
import { PainPoints, LetterSection, AuthorityClose } from './components/PainPoints';
import { FounderSection, HowLifesccHelps } from './components/FounderSection';
import { SubPrograms } from './components/SubPrograms';
import { ClinicsSection } from './components/ClinicsSection';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen font-sans  bg-white">
      <HeroSection />
      <SocialProof />
      <WhatHappens />
      <PainPoints />
      <LetterSection />
      <AuthorityClose />
      <FounderSection />
      <HowLifesccHelps />
      <SubPrograms />
      <ClinicsSection />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
