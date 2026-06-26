import { memo } from 'react';
import Button from '../ui/Button.jsx';

function PricingCard({ plan }) {
  const { pricing } = plan;

  return (
    <article
      className={`flex h-full flex-col rounded-2xl border p-fluid-md transition-[transform,opacity] duration-hover motion-reduce:transition-none ${
        plan.highlighted
          ? 'border-nocturnal bg-nocturnal text-arctic shadow-[0_20px_60px_-24px_#114C5A80]'
          : 'border-mint bg-mint/40 text-noir'
      }`}
    >
      <header>
        <h3 className="font-mono text-fluid-lg font-semibold">{plan.name}</h3>
        <p className={`mt-2 text-fluid-sm ${plan.highlighted ? 'text-mint/85' : 'text-nocturnal/75'}`}>
          {plan.description}
        </p>
      </header>

      <div className="my-6">
        <p className="flex items-end gap-1">
          <span className="font-mono text-fluid-2xl font-bold">{pricing.formatted}</span>
          <span className={`pb-1 text-fluid-sm ${plan.highlighted ? 'text-mint/70' : 'text-nocturnal/60'}`}>
            {pricing.periodLabel}
          </span>
        </p>
        {pricing.savingsLabel && (
          <p className="mt-1 font-mono text-xs text-saffron">{pricing.savingsLabel}</p>
        )}
      </div>

      <ul className={`mb-6 flex-1 space-y-2 text-fluid-sm ${plan.highlighted ? 'text-mint/90' : 'text-nocturnal/80'}`}>
        {plan.features.map((feature) => (
          <li key={feature} className="flex gap-2">
            <span aria-hidden="true" className="text-forsythia">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        variant={plan.highlighted ? 'primary' : 'secondary'}
        className="w-full"
        aria-label={`Choose ${plan.name} plan at ${pricing.formatted} ${pricing.periodLabel}`}
      >
        Get started
      </Button>
    </article>
  );
}

export default memo(PricingCard);
