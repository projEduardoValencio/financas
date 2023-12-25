import { EnumTypeTransaction } from "@/interfaces/transactions";
import {Fragment, FC} from "react"

const isRevenue = (type: EnumTypeTransaction) : boolean => (type === EnumTypeTransaction.revenue);

interface Props{
  type: EnumTypeTransaction
}
const TagTransactionType: FC<Props> = ({type}) => {
  return (
    <div className={`rounded-full
        ${isRevenue(type) ? 'bg-agreen' : 'bg-ared'}
        text-white font-bold px-2 w-fit`}
    >
      {isRevenue(type) ? 'Received' : 'Payout'}
    </div>
  );
}

export default TagTransactionType