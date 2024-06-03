import React from "react";
import Styles from "./index.module.scss";

interface Props {
  tabOptions: Array<string>;
  activeIdx: number;
  handleTabChange: CallableFunction;
}

const Tabs: React.FC<Props> = ({
  tabOptions = [],
  activeIdx = 0,
  handleTabChange,
}) => {
  return (
    <div className={Styles.container}>
      {tabOptions.map((tab: string, idx: number) => {
        return (
          <div
            onClick={() => handleTabChange(idx)}
            className={
              activeIdx === idx
                ? Styles.container__active
                : Styles.container__tab
            }
            key={idx}
          >
            {tab}
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;
