import { useCallback, useMemo, useState } from 'react';
import { pricingConfig } from '../config/pricing.config.js';
import { getPlanPricing } from '../utils/pricing.utils.js';

export function usePricing() {
  const [currency, setCurrency] = useState('USD');
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = useMemo(
    () =>
      pricingConfig.plans.map((plan) => ({
        ...plan,
        pricing: getPlanPricing(plan, currency, billingCycle, pricingConfig),
      })),
    [currency, billingCycle],
  );

  const setBillingCycleSafe = useCallback((cycle) => {
    setBillingCycle(cycle);
  }, []);

  const setCurrencySafe = useCallback((next) => {
    setCurrency(next);
  }, []);

  return {
    currency,
    billingCycle,
    plans,
    yearlyDiscount: pricingConfig.yearlyDiscount,
    currencies: Object.keys(pricingConfig.currencies),
    setCurrency: setCurrencySafe,
    setBillingCycle: setBillingCycleSafe,
  };
}
