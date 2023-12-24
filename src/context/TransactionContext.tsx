"use client";

import { ITransaction } from "@/interfaces/transactions";
import { createContext, useCallback, useState } from "react";

interface ObjectContext{
  transactions: ITransaction[],
  addTransaction: Function,
}
export const TransactionContext = createContext<ObjectContext>({
  transactions: [],
  addTransaction: ()=>{},
});

interface ProviderProps{
  children: JSX.Element
}
export const TransactionProvider : React.FC<ProviderProps> = ({children}) =>{
  const [transactions, setTransactions] = useState<ITransaction[]>([])
  
  const addTransaction = useCallback((transaction: ITransaction)=>{
    setTransactions([...transactions, transaction]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <TransactionContext.Provider value={{transactions, addTransaction}}>
      {children}
    </TransactionContext.Provider>
  );
}