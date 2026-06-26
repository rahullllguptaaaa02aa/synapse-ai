import Container from '../components/layout/Container.jsx';
import FeatureBentoGrid from '../components/features/FeatureBentoGrid.jsx';
import FeatureAccordion from '../components/features/FeatureAccordion.jsx';
import { FeatureSelectionProvider } from '../hooks/useFeatureSelection.jsx';

export default function FeaturesSection() {
  return (
    <FeatureSelectionProvider>
      <section id="features" aria-labelledby="features-heading" className="bg-arctic py-fluid-xl">
        <Container>
          <header className="mb-fluid-lg max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-nocturnal">Features</p>
            <h2 id="features-heading" className="mt-2 font-mono text-fluid-2xl font-bold text-noir">
              A bento of automation primitives
            </h2>
            <p className="mt-3 text-fluid-base text-nocturnal/80">
              Explore the building blocks that keep ingestion, transformation, and delivery in sync.
            </p>
          </header>

          <FeatureBentoGrid />
          <FeatureAccordion />
        </Container>
      </section>
    </FeatureSelectionProvider>
  );
}
