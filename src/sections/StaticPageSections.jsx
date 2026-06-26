import { memo } from 'react';
import Hero from './Hero.jsx';
import FeaturesSection from './FeaturesSection.jsx';
import Testimonials from './Testimonials.jsx';

/** Memoized sections that must not rerender when pricing state changes. */
function StaticPageSections() {
  return (
    <>
      <Hero />
      <FeaturesSection />
      <Testimonials />
    </>
  );
}

export default memo(StaticPageSections);
