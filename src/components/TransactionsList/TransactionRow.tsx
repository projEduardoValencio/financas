import { ITransaction } from "@/interfaces/transactions";
import moneyFormat from "@/utils/moneyFormat";
import { TableCell, TableRow } from "@mui/material";
import {Fragment, FC} from "react"
import TagTransactionType from "./TagTransactionType";

interface Props{
  transaction: ITransaction
}
const TransactionRow: FC<Props> = ({transaction}) => {
  return (
    <Fragment>
      <TableRow>
        <TableCell> {transaction.id} </TableCell>

        <TableCell className="flex items-end" align="right"><TagTransactionType type={transaction.type}/></TableCell>

        <TableCell align="right">{moneyFormat(transaction.value)}</TableCell>
      </TableRow>
    </Fragment>
  );
}

export default TransactionRow