import { SVGProps } from 'react';

export default function CloudFormationIcon({
  width = 48,
  height = 48,
  className,
  style,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 256 312"
      width={width}
      height={height}
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <path
        d="M16.491 215.53l2.176 2.47 109.915 31.157.498-19.313-76.98-19.318-3.767-1.359-31.842 6.363"
        fill="#B7CA9D"
      />
      <path
        d="M239.505 215.53L127.25 253l-.334-23.156 76.979-19.318 3.355-3.776 32.255 8.78"
        fill="#B7CA9D"
      />
      <path
        d="M126.916 83.165l76.979 17.941L237.75 99.5l1.755-3.393L132.25 57.5l-5.334 25.665"
        fill="#3C4929"
      />
      <path
        d="M52.1 210.526l-35.609 5.004-.991-3.697V100l.991-3.893L48.667 98.5l3.433 2.61v109.416"
        fill="#759C3E"
      />
      <path
        d="M129.08 83.165L52.1 101.106l-35.609-4.999L17.833 94l110.749-31.52.498 20.685"
        fill="#3C4929"
      />
      <path
        d="M127.846 0L0 64.531l.061 182.613 127.785 64.497 1.904-2.891v-305L127.846 0zM90.462 237.73l-73.971-22.2V96.107l73.971-22.192V237.73zM203.895 210.526l35.61 5.004L241.5 212V99.5l-1.995-3.393-35.61 5.003v109.416"
        fill="#4B612C"
      />
      <path
        d="M127.846 311.641l128.093-64.493L256 64.536 127.846 0v311.641zm37.687-237.726l73.972 22.192V215.53l-73.972 22.2V73.915z"
        fill="#759C3E"
      />
    </svg>
  );
}
