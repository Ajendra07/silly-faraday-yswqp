import React, { useEffect, useState } from "react";
import Styles from "./index.module.scss";
import { numberWithCommas } from "../../utils/formatting";
import CardsContent from "./CardsContent";
import { getCardsPageData } from "../../services/Cards";
import { CardPageDataType, CardType } from "../../interfaces";
import Add from "../../icons/Add";
import Modal from "../../components/Modal";
import AddCardModal from "../../components/AddCardModal";

interface Props {
  name: string;
}

const CardsPage: React.FC<Props> = () => {
  const [data, setData] = useState<CardPageDataType | null | undefined>();
  const [isAddCardModalOpen, setIsAddCardModalOpen] = useState<boolean>(false);

  const [cards, setCards] = useState<Array<CardType> | null>();

  useEffect(() => {
    getCardsPageData()
      .then((res: CardPageDataType) => {
        setData(res);
      })
      .catch((err) => console.log("Error fetching Cards Page Data"));
  }, []);

  return (
    <>
      {isAddCardModalOpen && (
        <AddCardModal
          cards={cards}
          setCards={setCards}
          isAddCardModalOpen={isAddCardModalOpen}
          setIsAddCardModalOpen={setIsAddCardModalOpen}
        />
      )}
      {data && (
        <div className={Styles.wrapper}>
          <span>Avaialable Balance</span>
          <div className={Styles.wrapper__header}>
            <div className={Styles.wrapper__header__amount}>
              <span className={Styles.wrapper__header__amount__currency}>
                {data.currency}
              </span>
              <span className={Styles.wrapper__header__amount__number}>
                {numberWithCommas(data.amount)}
              </span>
            </div>
            <div
              onClick={() => setIsAddCardModalOpen(true)}
              className={Styles.wrapper__header__cta}
            >
              <Add />
              <span className={Styles.wrapper__header__cta__text}>
                New card
              </span>
            </div>
          </div>
          <CardsContent cards={cards} setCards={setCards} />
        </div>
      )}
    </>
  );
};

export default CardsPage;
