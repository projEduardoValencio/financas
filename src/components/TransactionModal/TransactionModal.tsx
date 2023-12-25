import { TransactionContext } from "@/context/TransactionContext";
import { Modal, ModalRoot } from "@mui/material";
import {Fragment, FC, useState, useContext} from "react"
import TransactionForm from "./TransactionForm";

interface Props{}
const TransactionModal: FC<Props> = ({}) => {
  const {openTransactionModal, handleCloseTransactionModal} = useContext(TransactionContext)

  return (
    <Modal
      open={openTransactionModal as boolean}
      onClose={handleCloseTransactionModal as ((event: {}, reason: "backdropClick" | "escapeKeyDown") => void) | undefined}
      className="flex items-center justify-center"
    >
      <div className="h-2/5 w-2/6 bg-slate-200 rounded-xl p-5">
        <TransactionForm/>
      </div>
    </Modal>
  );
}

export default TransactionModal