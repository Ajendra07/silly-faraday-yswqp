import React, { useEffect, useState } from "react";
import Styles from "./index.module.scss";
import EyeIcon from "../../../../icons/EyeIcon";
import Card from "../../../../components/Card";
import Accordian from "../../../../components/Accordian";
import Transaction from "../../../../icons/Transaction";
import Transactions from "../../../../components/Transactions";
import { getDebitCards } from "../../../../services/Cards";
import { CardType } from "../../../../interfaces";
import { getLocalStorage } from "../../../../utils/localStorage";

interface Props {
  cards: Array<CardType> | null | undefined;
  setCards: CallableFunction;
}

const DebitCard: React.FC<Props> = ({ cards, setCards }) => {
  const [isOpenTransaction, setIsOpenTransaction] = useState(false);
  const [hasViewMoreTransaction, setHasViewMoreTransaction] = useState(false);
  const [isOpenCardDetails, setIsOpenCardDetails] = useState(false);

  const [cardIdx, setCardIdx] = useState<number>(0);

  useEffect(() => {
    const debitCardsLocalStorage = getLocalStorage("debitCards");
    if (debitCardsLocalStorage != null) {
      setCards(JSON.parse(debitCardsLocalStorage));
    } else {
      getDebitCards()
        .then((res: Array<CardType>) => {
          setCards(res);
        })
        .catch((err) => console.log("Error fetching Debit cards"));
    }
  }, []);

  return (
    <>
      {cards && cards.length > 0 && (
        <div className={Styles.container}>
          <div className={Styles.container__showCard}>
            <EyeIcon />
            <span>Show card number</span>
          </div>
          <div className={Styles.container__details}>
            <div className={Styles.container__details__cardContainer}>
              <Card
                setCards={setCards}
                cards={cards}
                cardIdx={cardIdx}
                setCardIdx={setCardIdx}
              />
            </div>
            <div className={Styles.container__details__accordians}>
              <Accordian
                isOpen={isOpenCardDetails}
                handleToggle={() => setIsOpenCardDetails(!isOpenCardDetails)}
                icon={<Transaction />}
                title="Card details"
              >
                <span>Card details will be displayed here</span>
              </Accordian>
              <Accordian
                hasViewMore={hasViewMoreTransaction}
                viewMoreText="View all card transactions"
                isOpen={isOpenTransaction}
                handleToggle={() => {
                  setIsOpenTransaction(!isOpenTransaction);
                  setHasViewMoreTransaction(false);
                }}
                icon={<Transaction />}
                title="Recent transactions"
              >
                <Transactions
                  card={cards[cardIdx]}
                  setHasViewMore={setHasViewMoreTransaction}
                />
              </Accordian>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DebitCard;
