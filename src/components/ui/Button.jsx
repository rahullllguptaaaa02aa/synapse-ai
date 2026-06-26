const variants = {
  primary:
    'bg-forsythia text-noir hover:brightness-105 focus-visible:ring-forsythia/60',
  secondary:
    'border border-nocturnal/20 bg-arctic text-nocturnal hover:bg-mint focus-visible:ring-nocturnal/30',
  ghost:
    'text-nocturnal hover:bg-mint/60 focus-visible:ring-nocturnal/30',
};

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-fluid-sm',
  lg: 'px-5 py-2.5 text-fluid-base',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) {
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center rounded-lg font-medium transition-[transform,opacity,filter] duration-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-arctic active:scale-[0.98] motion-reduce:transition-none motion-reduce:active:transform-none ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
