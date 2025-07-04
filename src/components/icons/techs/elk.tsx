import { SVGProps } from 'react';

export default function ElkIcon({
  width = 48,
  height = 48,
  className,
  style,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 225.6 27.84"
      width={width}
      height={height}
      className={className}
      style={{ color: 'white', ...style }}
      {...props}
    >
      <path
        fill="currentColor"
        d="M0 27.84h39.36l.96-4.32H9.36l1.68-7.2h25.68l.96-5.04H12l1.44-6.96h28.8L43.2 0H6zM59.76 0h-7.68l-6.24 27.84h35.28l.96-4.32h-27.6zM123.6 0L95.28 15.36 98.64 0h-7.68l-6 27.84h7.68l1.44-6.96 11.28-6 15.12 12.96h10.08l-18-16.8L132.96 0zM158.4 0l-24.24 27.84h6.72l5.52-5.76h26.774l3.226 5.76h8.88L169.68 0H158.4zm-7.92 17.52l12.48-13.68 7.661 13.68H150.48zM218.64 0l-17.76 13.92L188.4 0h-10.08l16.32 18.24-2.16 9.6h7.92l1.92-9.36L225.6 0z"
      />
    </svg>
  );
}
