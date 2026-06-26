export default function Logo({ className = '', variant = 'dark' }) {
  const stroke = variant === 'light' ? '#F1F6F4' : '#172B36';
  const accent = '#FFC801';

  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="48" height="48" rx="12" fill={variant === 'light' ? '#114C5A' : '#D9E8E2'} />
      <path
        d="M16 14c0-2.2 3.6-2.2 3.6 0v20c0 2.2-3.6 2.2-3.6 0V14zm12.4 0c0-2.2 3.6-2.2 3.6 0v20c0 2.2-3.6 2.2-3.6 0V14z"
        fill={stroke}
      />
      <path
        d="M14 24h20"
        stroke={accent}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
