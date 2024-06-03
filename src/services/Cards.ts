import { CardPageDataType, CardType, TransactionType } from "../interfaces";

export const getCardsPageData = () => {
  const p: Promise<CardPageDataType> = new Promise((resolve, reject) =>
    resolve({
      currency: "S$",
      amount: 3000,
    }),
  );
  return p;
};

export const getDebitCards = () => {
  const p: Promise<Array<CardType>> = new Promise((resolve, reject) =>
    resolve([
      {
        name: "Mark Henry",
        cvv: "123",
        cardNumber: "1234123412342020",
        expiry: "12/27",
        isFreezed: false,
      },
      {
        name: "Mark Henry",
        cvv: "456",
        cardNumber: "1234123412342021",
        expiry: "12/29",
        isFreezed: false,
      },
      {
        name: "Mark Henry",
        cvv: "789",
        cardNumber: "1234123412342022",
        expiry: "12/31",
        isFreezed: true,
      },
    ]),
  );
  return p;
};

export const getTransactionsByCard = () => {
  const p: Promise<Array<TransactionType>> = new Promise((resolve, reject) =>
    resolve([
      {
        type: "CREDIT",
        date: "20 May 2024",
        accountName: "Hamleys",
        amount: 75,
        id: "1",
      },
      {
        type: "DEBIT",
        date: "20 May 2024",
        accountName: "Hamleys",
        amount: 150,
        id: "2",
      },
      {
        type: "DEBIT",
        date: "20 May 2024",
        accountName: "Hamleys",
        amount: 1500,
        id: "3",
      },
      {
        type: "DEBIT",
        date: "20 May 2024",
        accountName: "Hamleys",
        amount: 200,
        id: "4",
      },
      {
        type: "DEBIT",
        date: "20 May 2024",
        accountName: "Hamleys",
        amount: 200,
        id: "5",
      },
    ]),
  );
  return p;
};
