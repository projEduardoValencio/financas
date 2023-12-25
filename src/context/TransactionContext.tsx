"use client";

import TransactionModal from "@/components/TransactionModal/TransactionModal";
import { EnumTypeTransaction, ITransaction } from "@/interfaces/transactions";
import addTransactionLocalStorage from "@/utils/Transaction/localStorage/addTransactionLocalStorage";
import getTransactionLocalStorage from "@/utils/Transaction/localStorage/getTransactionLocalStorage";
import removeTransactionLocalStorage from "@/utils/Transaction/localStorage/removeTransactionLocalStorage ";
import { createContext, useCallback, useState } from "react";

interface ObjectContext{
  transactions: ITransaction[],
  addTransaction: Function,
  removeTransaction: Function,
  openTransactionModal: Boolean,
  handleOpenRevenueTransactionModal: Function,
  handleOpenExpenseTransactionModal: Function,
  handleCloseTransactionModal: Function,
  handleToggleTransactionModal: Function,
  typeTransaction: EnumTypeTransaction,
}
export const TransactionContext = createContext<ObjectContext>({
  transactions: [],
  addTransaction: ()=>{},
  removeTransaction: ()=>{},
  openTransactionModal: false,
  handleOpenRevenueTransactionModal: ()=>{},
  handleOpenExpenseTransactionModal: ()=>{},
  handleCloseTransactionModal: ()=>{},
  handleToggleTransactionModal: ()=>{},
  typeTransaction: EnumTypeTransaction.revenue,
});

interface ProviderProps{
  children: JSX.Element
}
export const TransactionProvider : React.FC<ProviderProps> = ({children}) =>{
  const [transactions, setTransactions] = useState<ITransaction[]>(getTransactionLocalStorage())

  const [openTransactionModal, setOpenTransactionModal] = useState<Boolean>(false);
  const [typeTransaction, setTypeTransaction] = useState<EnumTypeTransaction>(EnumTypeTransaction.revenue);

  const handleOpenRevenueTransactionModal = () => {
    setTypeTransaction(EnumTypeTransaction.revenue)
    setOpenTransactionModal(true)
  }
  const handleOpenExpenseTransactionModal = () => {
    setTypeTransaction(EnumTypeTransaction.expense)
    setOpenTransactionModal(true)
  }
  const handleCloseTransactionModal = () => {
    setOpenTransactionModal(false)
  }
  const handleToggleTransactionModal = () => { 
    setOpenTransactionModal(!openTransactionModal)
  }
  
  const addTransaction = useCallback((transaction: ITransaction)=>{
    setTransactions(addTransactionLocalStorage(transaction));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const removeTransaction = useCallback((transaction: ITransaction)=>{
    setTransactions(removeTransactionLocalStorage(transaction));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <TransactionContext.Provider 
      value={{
        transactions, 
        addTransaction, 
        removeTransaction, 
        openTransactionModal, 
        handleCloseTransactionModal,
        handleOpenExpenseTransactionModal,
        handleOpenRevenueTransactionModal,
        handleToggleTransactionModal,
        typeTransaction,
      }}
    >
      {children}
      <TransactionModal/>
    </TransactionContext.Provider>
  );
}