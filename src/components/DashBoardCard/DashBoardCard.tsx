import { bgColor } from "@/interfaces/colors";
import moneyFormat from "@/utils/moneyFormat";
import {Fragment, FC} from "react"

interface Props{
  label: string,
  value: number,
  color: bgColor,
  icon: JSX.Element,
}
const DashBoardCard: FC<Props> = ({label, value, color, icon}) => {
  return (
    <div className="h-16 w-60 bg-slate-200 flex flex-row rounded-xl shadow-md text-black p-2 justify-between items-center">
      <div className="flex flex-col">
        <span className="text-xs">{label}</span>
        <span className="text-xl font-bold">R$ {moneyFormat(value)}</span>
      </div>

      <div className={`size-10 bg-${color} rounded-full items-center justify-center p-2`}>
        {icon}
      </div>
    </div>
  );
}

export default DashBoardCard;