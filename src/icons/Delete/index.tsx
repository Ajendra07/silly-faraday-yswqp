import React from "react";
import Styles from "./index.module.scss";

interface Props {}

const Delete: React.FC<Props> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
    >
      <defs></defs>
      <g transform="translate(213 -305)">
        <circle
          className={Styles.a}
          cx="16"
          cy="16"
          r="16"
          transform="translate(-213 305)"
        />
        <g transform="translate(-236.222 315)">
          <path
            className={Styles.b}
            d="M64.444,138.522a1.925,1.925,0,0,0,1.919,1.927h7.675a1.925,1.925,0,0,0,1.919-1.927v-9.633H64.444Z"
            transform="translate(-31.259 -126.449)"
          />
          <path
            className={Styles.c}
            d="M40.861-.037V-1h-3.84v.963h-4.8V2.212H45.661V-.037Z"
            transform="translate(0 -1)"
          />
        </g>
      </g>
    </svg>
  );
};

export default Delete;
