export interface CardType {
  name: string;
  cvv: string;
  cardNumber: string;
  expiry: string;
  isFreezed: boolean;
}

export interface OptionsType {
  type: string;
  text: string;
}

export interface TransactionType {
  type: string;
  date: string;
  accountName: string;
  amount: number;
  id: string;
}

export interface CardPageDataType {
  currency: string;
  amount: number;
}
