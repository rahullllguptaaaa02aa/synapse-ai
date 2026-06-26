import { memo } from 'react';
import { featuresConfig } from '../../config/features.config.js';
import { useFeatureSelection } from '../../hooks/useFeatureSelection.jsx';

function FeatureAccordion() {
  const { activeIndex, selectFeature } = useFeatureSelection();

  return (
    <div className="space-y-3 md:hidden">
      {featuresConfig.map((feature, index) => {
        const isOpen = activeIndex === index;

        return (
          <article key={feature.id} className="overflow-hidden rounded-xl border border-mint bg-mint/40">
            <h3>
              <button
                type="button"
                id={`accordion-trigger-${feature.id}`}
                aria-expanded={isOpen}
                aria-controls={`accordion-panel-${feature.id}`}
                onClick={() => selectFeature(index)}
                className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left transition-opacity duration-hover hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-nocturnal/40"
              >
                <span className="font-mono text-fluid-base font-semibold text-noir">{feature.title}</span>
                <span
                  aria-hidden="true"
                  className={`font-mono text-forsythia transition-transform duration-layout motion-reduce:transition-none ${isOpen ? 'rotate-45' : 'rotate-0'}`}
                >
                  +
                </span>
              </button>
            </h3>
            {!isOpen ? null : (
              <div
                id={`accordion-panel-${feature.id}`}
                role="region"
                aria-labelledby={`accordion-trigger-${feature.id}`}
                className="origin-top overflow-hidden transition-[transform,opacity,filter] duration-layout motion-reduce:transition-none opacity-100 translate-y-0"
              >
                <div className="space-y-2 px-4 pb-4 text-fluid-sm text-nocturnal/85">
                  <p className="font-mono text-xs text-saffron">{feature.metric}</p>
                  <p>{feature.summary}</p>
                  <p>{feature.description}</p>
                </div>
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
}

export default memo(FeatureAccordion);
