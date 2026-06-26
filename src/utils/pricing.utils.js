const CURRENCY_CODES = { USD: 'USD', EUR: 'EUR', INR: 'INR' };

export function getPlanPricing(plan, currency, billingCycle, config) {
  const currencyMeta = config.currencies[currency];
  const monthlyUSD = plan.basePriceUSD * currencyMeta.rate;
  const isYearly = billingCycle === 'yearly';
  const multiplier = isYearly ? 1 - config.yearlyDiscount : 1;
  const amount = monthlyUSD * multiplier;
  const code = CURRENCY_CODES[currency] ?? 'USD';

  return {
    amount,
    formatted: new Intl.NumberFormat(currencyMeta.locale, {
      style: 'currency',
      currency: code,
      maximumFractionDigits: 0,
    }).format(Math.round(amount)),
    periodLabel: isYearly ? '/mo, billed yearly' : '/mo',
    savingsLabel: isYearly ? `Save ${Math.round(config.yearlyDiscount * 100)}%` : null,
  };
}
