/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { ISideBarItem } from "@/interfaces/SideBar";
import { sideBarItemList } from "@/utils/SideBar/itemList";
import { usePathname, useRouter } from "next/navigation";
import { Dispatch, SetStateAction, createContext, useEffect, useState } from "react";

interface ObjectContext{
  itemList: ISideBarItem[],
  setItemList: Dispatch<SetStateAction<ISideBarItem[]>>,
}
export const SideBarContext = createContext<ObjectContext>({
  itemList: sideBarItemList,
  setItemList: ()=>{},
});

interface ProviderProps{
    children: JSX.Element
}
export const SideBarProvider : React.FC<ProviderProps> = ({children}) =>{
    const [itemList, setItemList] = useState<ISideBarItem[]>(sideBarItemList);
    const pathname = usePathname();

    useEffect(()=>{
      const newList = itemList.map((value)=>{
        if(value.route === pathname){
          return {...value, active: true};
        }else{
          return {...value, active: false};
        }
      })
      setItemList(newList);
    }, [])

    return <SideBarContext.Provider value={{itemList, setItemList}}>
        {children}
        </SideBarContext.Provider>;
}

// const {i1, i2} = useContext(context)
// <Provider>MAIN<Provider/>