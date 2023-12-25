export interface ITransaction{
  id: Number,
  type: EnumTypeTransaction,
  value: number,
}

export enum EnumTypeTransaction {
  expense = 'EXPENSE',
  revenue = 'REVENUE'
}