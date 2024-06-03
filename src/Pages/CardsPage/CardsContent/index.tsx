import React, { useState } from "react";
import Styles from "./index.module.scss";
import Tabs from "../../../components/Tabs";
import DebitCard from "./DebitCard";
import { CardType } from "../../../interfaces";

interface Props {
  cards: Array<CardType> | null | undefined;
  setCards: CallableFunction;
}

const tabOptions = ["My debit cards", "All company cards"];

const CardsContent: React.FC<Props> = ({ cards, setCards }) => {
  const [activeTabIdx, setActiveTabIdx] = useState(0);

  const handleTabChange = (idx: number) => {
    setActiveTabIdx(idx);
  };

  const getComponentAccordingToTab = () => {
    switch (tabOptions[activeTabIdx]) {
      case tabOptions[0]:
        return <DebitCard cards={cards} setCards={setCards} />;
      case tabOptions[1]:
        return <div>company cards comp</div>;
      default:
        return <></>;
    }
  };

  return (
    <div className={Styles.container}>
      <Tabs
        tabOptions={tabOptions}
        activeIdx={activeTabIdx}
        handleTabChange={handleTabChange}
      />
      <div className={Styles.container__component}>
        {getComponentAccordingToTab()}
      </div>
    </div>
  );
};

export default CardsContent;
