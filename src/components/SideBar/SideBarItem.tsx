import { ISideBarItem } from "@/interfaces/SideBar";
import {FC, useContext, useEffect} from "react"
import { SideBarContext } from "./SideBarContext";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

interface Props{
    pos: number,
    text: string,
    active?: boolean,
}
const SideBarItem: FC<Props> = ({pos, text, active}) => {
  const {itemList, setItemList} = useContext(SideBarContext);
  const router = useRouter();

  return (
    <li className="list-none w-full relative text-center hover:bg-slate-200 py-3" onClick={()=>clickToActive(pos, setItemList, itemList, router)}>
      {active ? 
        <div className="bg-apurple h-full absolute -mt-3" style={{width: '5px'}}/>
        : 
        null
      }

      <span className={`
        text-2xl text-center
        ${active ? 'text-apurple' : 'text-gray-700'}
      `}>
        {text}</span>
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