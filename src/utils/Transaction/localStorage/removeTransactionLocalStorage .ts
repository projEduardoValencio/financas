import { ITransaction } from "@/interfaces/transactions";
import localStorageKeys from "@/utils/localStorageKeys";

const removeTransactionLocalStorage = (transaction : ITransaction) : ITransaction[] => {
  const localTransaction : ITransaction[] = JSON.parse(localStorage.getItem(localStorageKeys.transactions) ?? '[]');
  const transactionIndex = localTransaction.indexOf(transaction, 0);
  localTransaction.splice(transactionIndex, 1);
  localStorage.setItem(localStorageKeys.transactions, JSON.stringify(localTransaction));
  return localTransaction;
}

export default removeTransactionLocalStorage;