export const pricingConfig = {
  yearlyDiscount: 0.2,
  currencies: {
    USD: { symbol: '$', locale: 'en-US', rate: 1 },
    EUR: { symbol: '€', locale: 'de-DE', rate: 0.92 },
    INR: { symbol: '₹', locale: 'en-IN', rate: 83.5 },
  },
  plans: [
    {
      id: 'starter',
      name: 'Starter',
      description: 'For teams validating automated data workflows.',
      basePriceUSD: 29,
      features: [
        '5 active pipelines',
        '10K records / month',
        'Email support',
        'Basic observability',
      ],
      highlighted: false,
    },
    {
      id: 'growth',
      name: 'Growth',
      description: 'Scale enrichment and orchestration across teams.',
      basePriceUSD: 79,
      features: [
        '25 active pipelines',
        '250K records / month',
        'Priority support',
        'Advanced routing rules',
        'Team workspaces',
      ],
      highlighted: true,
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Governance, SLAs, and dedicated infrastructure.',
      basePriceUSD: 199,
      features: [
        'Unlimited pipelines',
        'Custom volume',
        'Dedicated success engineer',
        'SSO & audit logs',
        'Private deployment options',
      ],
      highlighted: false,
    },
  ],
};
