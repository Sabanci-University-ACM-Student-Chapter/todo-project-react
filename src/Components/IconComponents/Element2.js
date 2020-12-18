import * as React from "react";

function SvgElement2(props) {
  return (
    <svg
      height="1em"
      viewBox="0 0 24 24"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M22.25 0H1.75C.785 0 0 .785 0 1.75v2.5C0 5.215.785 6 1.75 6h20.5C23.215 6 24 5.215 24 4.25v-2.5C24 .785 23.215 0 22.25 0zM23.25 10H8.75a.75.75 0 000 1.5h14.5a.75.75 0 000-1.5zM23.25 13H8.75a.75.75 0 000 1.5h14.5a.75.75 0 000-1.5zM23.25 19H8.75a.75.75 0 000 1.5h14.5a.75.75 0 000-1.5zM23.25 22H8.75a.75.75 0 000 1.5h14.5a.75.75 0 000-1.5z" />
      <circle cx={3} cy={12} r={3} />
      <circle cx={3} cy={21} r={3} />
    </svg>
  );
}

export default SvgElement2;
