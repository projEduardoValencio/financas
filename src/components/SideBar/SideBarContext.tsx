/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { ISideBarItem } from "@/interfaces/SideBar";
import { sideBarItemList } from "@/utils/SideBar/itemList";
import { usePathname, useRouter } from "next/navigation";
import { Dispatch, SetStateAction, createContext, useCallback, useEffect, useState } from "react";

interface ObjectContext{
  itemList: ISideBarItem[],
  setItemList: Dispatch<SetStateAction<ISideBarItem[]>>,
  expended: boolean,
  toggleExpended: Function,
}
export const SideBarContext = createContext<ObjectContext>({
  itemList: sideBarItemList,
  setItemList: ()=>{},
  expended: false,
  toggleExpended: ()=>{}
});

interface ProviderProps{
    children: JSX.Element
}
export const SideBarProvider : React.FC<ProviderProps> = ({children}) =>{
    const [itemList, setItemList] = useState<ISideBarItem[]>(sideBarItemList);
    const [expended, setExpended] = useState<boolean>(false);
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

    const toggleExpended = useCallback(()=>{
      setExpended(prevExpended => !prevExpended);
    },[])

    return (
      <SideBarContext.Provider 
        value={{
          itemList, 
          setItemList,
          expended,
          toggleExpended,
        }}
      >
        {children}
      </SideBarContext.Provider>
    );
}

// const {i1, i2} = useContext(context)
// <Provider>MAIN<Provider/>