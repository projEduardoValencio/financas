import { TransactionContext } from "@/context/TransactionContext";
import { EnumTypeTransaction, ITransaction } from "@/interfaces/transactions";
import { Button, FormControl, InputAdornment, InputLabel, TextField } from "@mui/material";
import {Fragment, FC, useContext, useState} from "react"

interface Props{}
const TransactionForm: FC<Props> = ({}) => {
  const {typeTransaction, addTransaction, handleCloseTransactionModal} = useContext(TransactionContext);
  const [transaction, setTransaction] = useState<ITransaction>({type: typeTransaction, value: 0})

  const handleRegisterTransaction = () => {
    handleCloseTransactionModal()
    addTransaction(transaction)
  }

  return (
    <div className="flex flex-col items-stretch justify-between h-full">
      <div className="flex flex-col">
        <h1
          className={`
            font-extrabold text-xl
            ${typeTransaction === EnumTypeTransaction.revenue ? "text-agreen" : "text-ared"}
          `}
        >
          {typeTransaction === EnumTypeTransaction.revenue ? "Nova Receita" : "Nova Despesa"}
        </h1>

        <TextField label="Valor" variant="standard" prefix="R$ " type="number" 
          InputProps={{
            startAdornment:(<InputAdornment position="start">R$ </InputAdornment>),
          }}
          onChange={(e)=>{
            setTransaction({...transaction, value: Number.parseFloat(e.target.value)})
          }}
          inputProps={{ style:{ textAlign: 'right' } }}
          className="w-full"
        />
      </div>

      <Button 
        variant="contained"
        style={{background: typeTransaction === EnumTypeTransaction.revenue ? "green" : "red"}}
        onClick={handleRegisterTransaction}
      >
        Registrar
      </Button>
    </div>
  );
}

export default TransactionForm