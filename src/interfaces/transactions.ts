export interface ITransaction{
  id: number,
  type: EnumTypeTransaction,
  value: number,
}

export enum EnumTypeTransaction {
  expense = 'EXPENSE',
  revenue = 'REVENUE'
}