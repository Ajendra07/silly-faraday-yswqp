import React from "react";
import Styles from "./index.module.scss";

interface Props {}

const RightArrow: React.FC<Props> = ({}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="6.5"
      height="12"
      viewBox="0 0 6.5 12"
    >
      <defs></defs>
      <g transform="translate(-117.33 0)">
        <g transform="translate(117.33 0)">
          <path
            className={Styles.a}
            d="M123.684,5.647l-5.5-5.5a.5.5,0,1,0-.707.707L122.623,6l-5.146,5.146a.5.5,0,1,0,.707.707l5.5-5.5A.5.5,0,0,0,123.684,5.647Z"
            transform="translate(-117.33 0)"
          />
        </g>
      </g>
    </svg>
  );
};

export default RightArrow;
