"use client";

import {Fragment, FC, useContext} from "react"
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid"
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { TransactionContext } from "@/context/TransactionContext";
import TransactionRow from "./TransactionRow";


interface Props{}
const TransactionsList: FC<Props> = ({}) => {
  const {transactions} = useContext(TransactionContext);
  return (
    <div className="w-2/5 bg-white shadow-md rounded-xl">
      <h1 className="text-2xl text-black text-center">Transações</h1>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="font-extrabold text-lg">ID</TableCell>

              <TableCell className="font-extrabold text-lg" align="right">Type</TableCell>

              <TableCell className="font-extrabold text-lg" align="right">Amount (R$)</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {transactions.map((transaction, i) =>(<TransactionRow key={i} transaction={transaction}/>))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default TransactionsList