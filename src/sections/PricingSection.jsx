import Container from '../components/layout/Container.jsx';
import PricingCard from '../components/pricing/PricingCard.jsx';
import PricingControls from '../components/pricing/PricingControls.jsx';
import { usePricing } from '../hooks/usePricing.js';

export default function PricingSection() {
  const {
    currency,
    billingCycle,
    plans,
    currencies,
    setCurrency,
    setBillingCycle,
  } = usePricing();

  return (
    <section id="pricing" aria-labelledby="pricing-heading" className="bg-mint/30 py-fluid-xl">
      <Container>
        <header className="mb-fluid-md max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-nocturnal">Pricing</p>
          <h2 id="pricing-heading" className="mt-2 font-mono text-fluid-2xl font-bold text-noir">
            Regional pricing, transparent by design
          </h2>
          <p className="mt-3 text-fluid-base text-nocturnal/80">
            Toggle billing cycle and currency — only this section updates.
          </p>
        </header>

        <PricingControls
          billingCycle={billingCycle}
          currency={currency}
          currencies={currencies}
          onBillingChange={setBillingCycle}
          onCurrencyChange={setCurrency}
        />

        <div className="mt-fluid-md grid gap-fluid-md md:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </Container>
    </section>
  );
}
