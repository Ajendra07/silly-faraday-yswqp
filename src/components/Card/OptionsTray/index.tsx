import React from "react";
import Freeze from "../../../icons/Freeze";
import Gpay from "../../../icons/Gpay";
import Spend from "../../../icons/Spend";
import Replace from "../../../icons/Replace";
import Styles from "./index.module.scss";
import Delete from "../../../icons/Delete";
import { CardType, OptionsType } from "../../../interfaces";
import { setLocalStorage } from "../../../utils/localStorage";

interface Props {
  cards: Array<CardType>;
  setCards: CallableFunction;
  cardIdx: number;
}

const OPTIONS: Array<OptionsType> = [
  {
    type: "freeze_card",
    text: "Freeze card",
  },
  {
    type: "spend_limit",
    text: "Set spend limit",
  },
  {
    type: "add_gpay",
    text: "Add to GPay",
  },
  {
    type: "replace_card",
    text: "Replace card",
  },
  {
    type: "cancel_card",
    text: "Cancel card",
  },
];

const OptionsTray: React.FC<Props> = ({ cards, setCards, cardIdx }) => {
  const getOptionIcon: CallableFunction = (option: OptionsType) => {
    switch (option.type) {
      case "freeze_card":
        return <Freeze />;
      case "spend_limit":
        return <Spend />;
      case "add_gpay":
        return <Gpay />;
      case "replace_card":
        return <Replace />;
      case "cancel_card":
        return <Delete />;
    }
  };

  const handleOptionClick = (option: OptionsType) => {
    if (option.type === "freeze_card") {
      let arr = cards;
      if (cards[cardIdx].isFreezed) {
        arr[cardIdx].isFreezed = false;
      } else {
        arr[cardIdx].isFreezed = true;
      }
      setCards([...arr]);
      setLocalStorage("debitCards", JSON.stringify(arr));
    }
  };

  const getOptionText: CallableFunction = (option: OptionsType) => {
    if (option.type === "freeze_card") {
      if (cards[cardIdx].isFreezed) {
        return "Unfreeze card";
      } else {
        return "Freeze card";
      }
    } else {
      return option.text;
    }
  };

  return (
    <div className={Styles.container}>
      {OPTIONS.map((option: OptionsType) => {
        return (
          <div
            onClick={() => handleOptionClick(option)}
            className={Styles.container__option}
            key={option.type}
          >
            {getOptionIcon(option)}
            <span>{getOptionText(option)}</span>
          </div>
        );
      })}
    </div>
  );
};

export default OptionsTray;
