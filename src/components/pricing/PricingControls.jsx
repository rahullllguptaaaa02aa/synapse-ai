import { memo } from 'react';

const cycles = [
  { id: 'monthly', label: 'Monthly' },
  { id: 'yearly', label: 'Yearly' },
];

function PricingControls({ billingCycle, currency, currencies, onBillingChange, onCurrencyChange }) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div
        role="group"
        aria-label="Billing cycle"
        className="inline-flex rounded-lg border border-mint bg-mint/50 p-1"
      >
        {cycles.map((cycle) => {
          const selected = billingCycle === cycle.id;
          return (
            <button
              key={cycle.id}
              type="button"
              aria-pressed={selected}
              onClick={() => onBillingChange(cycle.id)}
              className={`rounded-md px-4 py-2 font-mono text-sm transition-[opacity,transform,filter] duration-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nocturnal/40 motion-reduce:transition-none ${
                selected ? 'bg-nocturnal text-arctic' : 'text-nocturnal hover:opacity-80'
              }`}
            >
              {cycle.label}
            </button>
          );
        })}
      </div>

      <label className="flex items-center gap-2 text-fluid-sm text-nocturnal">
        <span className="font-mono text-xs uppercase tracking-widest">Currency</span>
        <select
          value={currency}
          onChange={(event) => onCurrencyChange(event.target.value)}
          aria-label="Select currency"
          className="rounded-lg border border-nocturnal/20 bg-arctic px-3 py-2 font-mono text-sm text-noir focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nocturnal/40"
        >
          {currencies.map((code) => (
            <option key={code} value={code}>
              {code}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default memo(PricingControls);
