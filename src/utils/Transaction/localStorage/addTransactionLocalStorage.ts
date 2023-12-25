import { ITransaction } from "@/interfaces/transactions";
import localStorageKeys from "@/utils/localStorageKeys";

const addTransactionLocalStorage = (transaction : ITransaction) : ITransaction[] => {
  const localTransaction : ITransaction[] = JSON.parse(localStorage.getItem(localStorageKeys.transactions) ?? '[]');
  localTransaction.push(transaction);
  localStorage.setItem(localStorageKeys.transactions, JSON.stringify(localTransaction));
  return localTransaction;
}

export default addTransactionLocalStorage;