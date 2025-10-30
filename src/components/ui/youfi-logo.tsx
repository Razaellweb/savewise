export default function YouFiLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 140 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Y shape with teal gradient */}
      <path
        d="M8 4L14 16L20 4"
        stroke="#0F766E"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 16V28"
        stroke="#0F766E"
        strokeWidth="3"
        strokeLinecap="round"
      />
      
      {/* Coin/Circle element */}
      <circle cx="14" cy="16" r="2" fill="#14B8A6" />
      
      {/* YouFi Text */}
      <text
        x="32"
        y="24"
        fontFamily="Inter, sans-serif"
        fontSize="20"
        fontWeight="600"
        fill="#134E4A"
      >
        YouFi
      </text>
      
      {/* Accent dot */}
      <circle cx="82" cy="22" r="2.5" fill="#14B8A6" />
    </svg>
  );
}
