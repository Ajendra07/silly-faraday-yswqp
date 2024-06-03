import React from "react";
import Styles from "./index.module.scss";

interface Props {}

const Shop: React.FC<Props> = ({}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="15.205"
      viewBox="0 0 16 15.205"
    >
      <defs></defs>
      <g transform="translate(0 -11.008)">
        <g transform="translate(0.798 15.853)">
          <g transform="translate(0 0)">
            <path
              className={Styles.a}
              d="M22.016,146.176v9.766a.6.6,0,0,0,.592.594h13.2a.6.6,0,0,0,.592-.594v-9.766Zm10.188,3.75a.6.6,0,0,1-.592.594H26.8a.6.6,0,0,1-.592-.594V148.72a.6.6,0,0,1,.592-.594h4.807a.6.6,0,0,1,.592.594Z"
              transform="translate(-22.016 -146.176)"
            />
          </g>
        </g>
        <g transform="translate(0 11.008)">
          <g transform="translate(0 0)">
            <path
              className={Styles.a}
              d="M15.39,11.008H.592A.6.6,0,0,0,0,11.6v3.509H16v-3.49A.617.617,0,0,0,15.39,11.008Z"
              transform="translate(0 -11.008)"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Shop;
