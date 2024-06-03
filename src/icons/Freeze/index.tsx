import React from "react";
import Styles from "./index.module.scss";

interface Props {}

//.a{fill:#fff;}.b{fill:#325baf;}.c{fill:#9ac0fa;}.d{clip-path:url(#a);}.e{fill:#f1f3f4;}

const Freeze: React.FC<Props> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="32"
      height="32"
      viewBox="0 0 32 32"
    >
      <defs>
        <clipPath id="a">
          <rect
            className={Styles.a}
            width="25"
            height="8"
            transform="translate(-209 321)"
          />
        </clipPath>
      </defs>
      <g transform="translate(213 -305)">
        <circle
          className={Styles.b}
          cx="16"
          cy="16"
          r="16"
          transform="translate(-213 305)"
        />
        <path
          className={Styles.c}
          d="M17,7.437H14.736L15.759,5.9,13.991,4.725,12.182,7.437H9.562V4.376l2.6-1.3-.949-1.9L9.562,2V0H7.437V2l-1.65-.824-.949,1.9,2.6,1.3V7.437H4.818L3.009,4.725,1.241,5.9,2.264,7.437H0V9.562H2.265L1.241,11.1l1.768,1.179,1.81-2.716H7.438v2.619L4.723,13.993,5.9,15.761l1.535-1.024V17H9.562V14.736L11.1,15.761l1.18-1.768L9.562,12.181V9.563h2.619l1.81,2.716L15.759,11.1,14.735,9.562H17Z"
          transform="translate(-197.23 308.916) rotate(45)"
        />
        <g className={Styles.d}>
          <path
            className={Styles.e}
            d="M17,7.437H14.736L15.759,5.9,13.991,4.725,12.182,7.437H9.562V4.376l2.6-1.3-.949-1.9L9.562,2V0H7.437V2l-1.65-.824-.949,1.9,2.6,1.3V7.437H4.818L3.009,4.725,1.241,5.9,2.264,7.437H0V9.562H2.265L1.241,11.1l1.768,1.179,1.81-2.716H7.438v2.619L4.723,13.993,5.9,15.761l1.535-1.024V17H9.562V14.736L11.1,15.761l1.18-1.768L9.562,12.181V9.563h2.619l1.81,2.716L15.759,11.1,14.735,9.562H17Z"
            transform="translate(-197.23 308.916) rotate(45)"
          />
        </g>
      </g>
    </svg>
  );
};

export default Freeze;
