import getTransactionLocalStorage from "./getTransactionLocalStorage"

const nextTransactionId = () : number => {
  const localTransaction = getTransactionLocalStorage();
  let max = Math.max(...localTransaction.map(transaction => transaction.id ?? 0));
  return (Number.isNaN(max) ? 0 : max) + 1;
}

export default nextTransactionId;