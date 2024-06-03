import React, { useEffect, useState } from "react";
import Styles from "./index.module.scss";
import Wallet from "../../icons/Wallet";
import { numberWithCommas } from "../../utils/formatting";
import RightArrow from "../../icons/RightArrow";
import { CardType, TransactionType } from "../../interfaces";
import { getTransactionsByCard } from "../../services/Cards";
import Shop from "../../icons/Shop";

interface Props {
  setHasViewMore: CallableFunction;
  card: CardType;
}

const Transactions: React.FC<Props> = ({ setHasViewMore, card }) => {
  const [recentTransactions, setRecentTransactions] =
    useState<Array<TransactionType> | null>();

  useEffect(() => {
    getTransactionsByCard()
      .then((res: Array<TransactionType>) => {
        setRecentTransactions(res);
      })
      .catch((err) => console.log("Error fetching transactions"));
  }, []);

  const renderAmount: CallableFunction = (type: string, amount: number) => {
    let res = "";
    if (type === "DEBIT") {
      res = "- S$";
    } else {
      res = "+ S$";
    }
    res = res + " " + numberWithCommas(amount);
    return res;
  };

  useEffect(() => {
    if (recentTransactions && recentTransactions.length > 4) {
      setHasViewMore(true);
    }
  }, [recentTransactions]);

  return (
    <>
      {recentTransactions &&
        recentTransactions.length > 0 &&
        recentTransactions
          .slice(0, 4)
          .map((transaction: TransactionType, idx: number) => {
            return (
              <div key={transaction.id}>
                <div className={Styles.transaction}>
                  <div className={Styles.transaction__left}>
                    <div className={Styles.transaction__left__icon}>
                      <Shop />
                    </div>
                    <div className={Styles.transaction__left__details}>
                      <span className={Styles.transaction__left__details__name}>
                        {transaction.accountName}
                      </span>
                      <span className={Styles.transaction__left__details__date}>
                        {transaction.date}
                      </span>
                      <div className={Styles.transaction__left__details__type}>
                        <div
                          className={
                            Styles.transaction__left__details__type__icon
                          }
                        >
                          <Wallet />
                        </div>
                        <span
                          className={
                            Styles.transaction__left__details__type__text
                          }
                        >
                          {transaction.type === "DEBIT"
                            ? "Charged to debit card"
                            : "Refund to debit card"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={Styles.transaction__right}>
                    <span
                      className={
                        transaction.type === "CREDIT"
                          ? Styles.transaction__right__credit
                          : ""
                      }
                    >
                      {renderAmount(transaction.type, transaction.amount)}
                    </span>
                    <RightArrow />
                  </div>
                </div>
                {(recentTransactions.length <= 4
                  ? idx != recentTransactions.length - 1
                  : idx != 3) && <div className={Styles.separator}></div>}
              </div>
            );
          })}
    </>
  );
};

export default Transactions;
