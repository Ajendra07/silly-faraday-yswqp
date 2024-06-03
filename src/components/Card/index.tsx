import React from "react";
import Styles from "./index.module.scss";
import Logo from "../../icons/Logo";
import VisaLogo from "../../icons/VisaLogo";
import OptionsTray from "./OptionsTray";
import Carousel from "../Carousel";
import { CardType } from "../../interfaces";

interface Props {
  cardIdx: number;
  setCardIdx: CallableFunction;
  cards: Array<CardType>;
  setCards: CallableFunction;
}

const Card: React.FC<Props> = ({ cardIdx, setCardIdx, cards, setCards }) => {
  const getHiddenCardNumber: CallableFunction = (cardNumber: string) => {
    let str: Array<string> = cardNumber.match(/.{1,4}/g) || [];
    return str;
  };

  return (
    <>
      <Carousel setActiveIdx={setCardIdx}>
        {cards.map((card: CardType) => {
          return (
            <div
              key={card.cardNumber}
              className={Styles.container}
              style={{ opacity: card.isFreezed ? "0.2" : "1" }}
            >
              <div className={Styles.container__logo}>
                <Logo width="84" height="24" />
              </div>
              <span className={Styles.container__name}>{card.name}</span>
              <div className={Styles.container__cardNumber}>
                {getHiddenCardNumber(card.cardNumber)?.map(
                  (item: string, idx: number) => {
                    return (
                      <span
                        className={
                          idx == getHiddenCardNumber(card.cardNumber).length - 1
                            ? Styles.container__cardNumber__visible
                            : Styles.container__cardNumber__hidden
                        }
                        key={idx}
                      >
                        {item}
                      </span>
                    );
                  },
                )}
              </div>
              <div className={Styles.container__expiryCvv}>
                <div>Thru: {card.expiry}</div>
                <div className={Styles.container__expiryCvv__cvv}>
                  CVV:{" "}
                  <span className={Styles.container__expiryCvv__cvv__value}>
                    ***
                  </span>
                </div>
              </div>
              <div className={Styles.container__visa}>
                <VisaLogo />
              </div>
            </div>
          );
        })}
      </Carousel>
      <OptionsTray setCards={setCards} cards={cards} cardIdx={cardIdx} />
    </>
  );
};

export default Card;
