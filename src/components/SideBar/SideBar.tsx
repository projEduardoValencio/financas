"use client";

import { FC, useContext } from "react";
import SideBarItem from "./SideBarItem";
import { ISideBarItem } from "@/interfaces/SideBar";
import { SideBarContext } from "./SideBarContext";
import NewTransactionMenu from "./NewTransactionMenu";

interface Props {}
const SideBar: FC<Props> = ({}) => {
  const {itemList} = useContext(SideBarContext);

  return (
    <aside className="h-screen bg-white">
        <nav className="h-full w-56 shadow-lg bg-white shadow-slate-400 rounded-br-2xl rounded-tr-2xl flex flex-col py-5 items-center">
          <div className="bg-red-100 h-16 rounded-xl text-black text-center flex items-center justify-center font-black text-4xl w-52">LOGO</div>

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
    return (<SideBarItem key={`${index}-sidebar-item`} text={value.text} active={value.active} pos={index}/>)
  })
}

export default SideBar;
