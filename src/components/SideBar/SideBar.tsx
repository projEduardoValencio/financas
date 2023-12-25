"use client";

import { FC, useContext } from "react";
import SideBarItem from "./SideBarItem";
import { ISideBarItem } from "@/interfaces/SideBar";
import { SideBarContext } from "./SideBarContext";
import NewTransactionMenu from "./NewTransactionMenu";

interface Props {}
const SideBar: FC<Props> = ({}) => {
  const {itemList, expended, toggleExpended} = useContext(SideBarContext);

  return (
    <aside className="h-screen bg-white transition-all">
        <nav 
          className={`
            h-full shadow-lg bg-white shadow-slate-400 rounded-br-2xl rounded-tr-2xl flex flex-col py-5 items-center transition-all
            ${expended ? 'w-56' : 'w-24'}
          `}
        >
          <div 
            className={`
              bg-purple-200 h-16 rounded-xl text-black text-center flex items-center justify-center font-black text-4xl cursor-pointer
              ${expended ? 'w-52' : 'w-20'}
            `}
            onClick={()=>toggleExpended()}
          >
            {expended ? 'LOGO' : 'L'}
          </div>

          <NewTransactionMenu/>

          <div className="flex flex-col mt-5 items-center w-full">
            {itemFactory(itemList)}
          </div>
        </nav>
    </aside>
  );
};

const itemFactory = (list : ISideBarItem[]) =>{
  return list.map((value, index)=>{
    return (<SideBarItem key={`${index}-sidebar-item`} text={value.text} active={value.active} pos={index} icon={value.icon}/>)
  })
}

export default SideBar;
