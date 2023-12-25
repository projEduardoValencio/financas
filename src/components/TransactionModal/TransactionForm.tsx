import { TransactionContext } from "@/context/TransactionContext";
import { EnumTypeTransaction, ITransaction } from "@/interfaces/transactions";
import { Button, FormControl, InputAdornment, InputLabel, TextField } from "@mui/material";
import {Fragment, FC, useContext, useState, useRef, useEffect} from "react"

interface Props{}
const TransactionForm: FC<Props> = ({}) => {
  const {typeTransaction, addTransaction, handleCloseTransactionModal} = useContext(TransactionContext);
  const [transaction, setTransaction] = useState<ITransaction>({type: typeTransaction, value: 0, id: 0})

  const amountInputRef = useRef<HTMLInputElement|null>(null);

  const handleRegisterTransaction = () => {
    handleCloseTransactionModal()
    addTransaction(transaction)
  }

  useEffect(()=>{
    amountInputRef.current?.focus();
  },[])

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

        <TextField inputRef={amountInputRef} label="Valor" variant="standard" prefix="R$ " type="number" 
          InputProps={{
            startAdornment:(<InputAdornment position="start">R$ </InputAdornment>),
            autoFocus: true,
          }}
          onChange={(e)=>{
            setTransaction({...transaction, value: Number.parseFloat(e.target.value)})
          }}
          inputProps={{ style:{ textAlign: 'right' }, autoFocus: true }}
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