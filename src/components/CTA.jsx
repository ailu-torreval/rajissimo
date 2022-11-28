import React from "react";

function CTA() {
  return (
    <button>
      <svg viewBox="0 0 100 100" width="100" height="100">
        <defs>
          <style>
            fill: #104057; 
            height: auto; 
            max-width: 66vmin;
            transform-origin: center; 
            width: 66%;
          </style>
          <path
            id="circle"
            d="
          M 50, 50
          m -37, 0
          a 37,37 0 1,1 74,0
          a 37,37 0 1,1 -74,0"
          />
        </defs>
        <text fontSize="11" color="#104057">
          <textPath xlinkHref="#circle">
             Order Online - Order Online - Order Online -
          </textPath>
        </text>
      </svg>
    </button>
  );
}

export default CTA;
