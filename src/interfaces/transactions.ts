export interface ITransaction{
  type: EnumTypeTransaction
  value: number
}

export enum EnumTypeTransaction {
  expense = 'EXPENSE',
  revenue = 'REVENUE'
}