import { forwardRef } from 'react';

const Container = forwardRef(function Container(
  { as: Tag = 'div', className = '', children, ...props },
  ref,
) {
  return (
    <Tag
      ref={ref}
      className={`mx-auto w-full max-w-content px-fluid-sm sm:px-fluid-md ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
});

export default Container;
