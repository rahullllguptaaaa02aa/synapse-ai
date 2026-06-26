import { memo } from 'react';
import { featuresConfig } from '../../config/features.config.js';
import { useFeatureSelection } from '../../hooks/useFeatureSelection.jsx';

function FeatureBentoGrid() {
  const { activeIndex, selectFeature } = useFeatureSelection();

  return (
    <div className="hidden gap-4 md:grid md:grid-cols-6 md:grid-rows-3 md:auto-rows-[minmax(140px,auto)]">
      {featuresConfig.map((feature, index) => {
        const isActive = activeIndex === index;
        const span =
          index === 0
            ? 'md:col-span-3 md:row-span-2'
            : index === 1
              ? 'md:col-span-3 md:row-span-1'
              : index === 2
                ? 'md:col-span-2 md:row-span-1'
                : index === 3
                  ? 'md:col-span-2 md:row-span-1'
                  : index === 4
                    ? 'md:col-span-2 md:row-span-1'
                    : 'md:col-span-2 md:row-span-1';

        return (
          <button
            key={feature.id}
            type="button"
            aria-expanded={isActive}
            aria-controls={`feature-panel-${feature.id}`}
            onClick={() => selectFeature(index)}
            className={`group relative overflow-hidden rounded-2xl border p-fluid-md text-left transition-[transform,opacity,filter] duration-layout focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nocturnal/40 motion-reduce:transition-none ${span} ${
              isActive
                ? 'border-nocturnal bg-nocturnal text-arctic scale-[1.01]'
                : 'border-mint bg-mint/50 text-noir hover:opacity-95'
            }`}
          >
            <span className="font-mono text-xs uppercase tracking-widest text-saffron">
              {feature.metric}
            </span>
            <h3 className="mt-3 font-mono text-fluid-lg font-semibold">{feature.title}</h3>
            <p className={`mt-2 text-fluid-sm ${isActive ? 'text-mint/90' : 'text-nocturnal/80'}`}>
              {feature.summary}
            </p>
            <div
              id={`feature-panel-${feature.id}`}
              className={`mt-4 overflow-hidden transition-[opacity,transform,filter] duration-layout motion-reduce:transition-none ${
                isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none absolute'
              }`}
            >
              <p className="text-fluid-sm text-mint/90">{feature.description}</p>
            </div>
          </button>
        );
      })}
    </div>
  );
}

export default memo(FeatureBentoGrid);
