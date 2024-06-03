import React, { useState } from "react";
import Styles from "./index.module.scss";
import Modal from "../Modal";
import { CardType } from "../../interfaces";
import { generateRandomNumberString } from "../../utils/randomNumber";
import { generateRandomDate } from "../../utils/date";
import { setLocalStorage } from "../../utils/localStorage";

interface Props {
  isAddCardModalOpen: boolean;
  setIsAddCardModalOpen: CallableFunction;
  cards: Array<CardType> | null | undefined;
  setCards: CallableFunction;
}

const AddCardModal: React.FC<Props> = ({
  isAddCardModalOpen,
  setIsAddCardModalOpen,
  cards,
  setCards,
}) => {
  const [name, setName] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    if (error) setError("");
  };

  const addCard = () => {
    if (!name) {
      setError("Name cannot be empty");
    } else {
      if (cards) {
        setCards([
          ...cards,
          {
            name,
            cvv: generateRandomNumberString(3),
            cardNumber: generateRandomNumberString(16),
            expiry: generateRandomDate(),
            isFreezed: false,
          },
        ]);
        setLocalStorage(
          "debitCards",
          JSON.stringify([
            ...cards,
            {
              name,
              cvv: generateRandomNumberString(3),
              cardNumber: generateRandomNumberString(16),
              expiry: generateRandomDate(),
              isFreezed: false,
            },
          ]),
        );
      } else {
        setCards([
          {
            name,
            cvv: generateRandomNumberString(3),
            cardNumber: generateRandomNumberString(16),
            expiry: generateRandomDate(),
            isFreezed: false,
          },
        ]);
        setLocalStorage(
          "debitCards",
          JSON.stringify([
            {
              name,
              cvv: generateRandomNumberString(3),
              cardNumber: generateRandomNumberString(16),
              expiry: generateRandomDate(),
              isFreezed: false,
            },
          ]),
        );
      }

      setIsAddCardModalOpen(false);
    }
  };

  return (
    <Modal
      isOpen={isAddCardModalOpen}
      onClose={() => setIsAddCardModalOpen(false)}
    >
      <div className={Styles.container}>
        <div className={Styles.title}>Input your name to add a new card</div>
        <div className={Styles.inputField}>
          <input
            type="text"
            id="name"
            className={Styles.inputField__input}
            value={name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>
      </div>
      <button onClick={addCard} className={Styles.cta}>
        Add Card
      </button>
      {error && <div className={Styles.error}>{error}</div>}
    </Modal>
  );
};

export default AddCardModal;
