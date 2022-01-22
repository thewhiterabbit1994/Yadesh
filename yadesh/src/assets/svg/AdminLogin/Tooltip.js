export default ({ text, x }) => (
  <svg
    width="106"
    height="40"
    viewBox="0 0 106 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4 0C1.79086 0 0 1.79086 0 4V36C0 38.2091 1.79086 40 4 40H96C98.2091 40 100 38.2091 100 36V23.5415L105.5 20.366C106.167 19.9811 106.167 19.0189 105.5 18.634L100 15.4585V4C100 1.79086 98.2091 0 96 0H4Z"
      fill="#33505C"
      fill-opacity="0.9"
    />
    <text x={x} y="23" fill="white" className="text-[13px]">
      {text}
    </text>
  </svg>
);
