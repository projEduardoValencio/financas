import { ISideBarItem } from "@/interfaces/SideBar";
import {FC, useContext, useEffect} from "react"
import { SideBarContext } from "./SideBarContext";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

interface Props{
    pos: number,
    text: string,
    active?: boolean,
    icon?: JSX.Element,
}
const SideBarItem: FC<Props> = ({pos, text, active, icon}) => {
  const {itemList, setItemList, expended} = useContext(SideBarContext);
  const router = useRouter();

  return (
    <li className="list-none w-full relative hover:bg-slate-200 py-3 h-14 flex flex-row justify-start" onClick={()=>clickToActive(pos, setItemList, itemList, router)}>
      {active ? 
        <div className="bg-apurple h-full absolute -mt-3" style={{width: '5px'}}/>
        : 
        null
      }

      <div className={`w-24 ${active ? '[&>.MuiSvgIcon-root]:text-apurple' : '[&>.MuiSvgIcon-root]:text-gray-700'}`} style={{maxWidth: '96px', minWidth: '96px'}}>
        {icon}
      </div>

      <span className={`
        text-lg text-left w-full 
        ${active ? 'text-apurple' : 'text-gray-700'}
        ${expended ? '' : 'hidden'}
      `}>
        {text}
      </span>
    </li>
  );
}

const clickToActive = (pos:number, setStateList: Function, prevList: ISideBarItem[], router: AppRouterInstance) => {
  const newList = prevList.map((v)=>({...v, active: false}));
  newList[pos] = {...newList[pos], active: true};
  setStateList(newList);
  router.push(newList[pos].route);
}

export default SideBarItem