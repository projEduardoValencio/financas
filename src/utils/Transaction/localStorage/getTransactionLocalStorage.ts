import { ITransaction } from "@/interfaces/transactions";
import localStorageKeys from "@/utils/localStorageKeys";

const getTransactionLocalStorage = () : ITransaction[] => {
  return JSON.parse(localStorage.getItem(localStorageKeys.transactions) ?? '[]');
}

export default getTransactionLocalStorage;