import React from "react";
import Styles from "./index.module.scss";

interface Props {}

const UpArrow: React.FC<Props> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
    >
      <defs></defs>
      <g className={Styles.a} transform="translate(0 0)">
        <g transform="translate(0 0)">
          <path
            className={Styles.b}
            d="M10,20A10,10,0,1,1,20,10,10,10,0,0,1,10,20Zm4.512-8.776L10.777,7.487a.914.914,0,0,0-.125-.158.951.951,0,0,0-1.479.158L5.42,11.24a.933.933,0,1,0,1.32,1.32L9.975,9.326l3.217,3.218a.934.934,0,0,0,1.321-1.32Z"
            transform="translate(-0.001)"
          />
        </g>
      </g>
    </svg>
  );
};

export default UpArrow;
