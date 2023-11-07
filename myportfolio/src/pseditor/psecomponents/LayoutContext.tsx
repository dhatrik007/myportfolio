import React from "react";
import { getDefaultLayout } from "../Utils";
import type {Layout} from "../Utils";


type ContextData = {
  layoutData: Layout[];
  setLayoutData: React.Dispatch<React.SetStateAction<Layout[]>>;
};
export const LayoutContext = React.createContext<ContextData>({layoutData:getDefaultLayout(), setLayoutData:()=>{}})


type MyContextProviderProps = {
  children: React.ReactNode;
};

export const LayoutContextProvider: React.FC<MyContextProviderProps> = ({ children }) => {
  const [layoutData, setLayoutData] = React.useState<Layout[]>(getDefaultLayout());

  return (
    <LayoutContext.Provider value={{ layoutData, setLayoutData }}>
      {children}
    </LayoutContext.Provider>
  );
};

type ListData = {
    listItems: string | null,
    setListData: React.Dispatch<React.SetStateAction<string | null>>;
}
export const LayoutListStorageContext = React.createContext<ListData>({listItems: null, setListData: () => {} })

export const LayoutListStorageContextProvider: React.FC<MyContextProviderProps> = ({ children }) => {
    const listData = localStorage.getItem("listItemData")
    const [listItems, setListData] = React.useState<string | null>(listData);

    return (
      <LayoutListStorageContext.Provider value={{ listItems, setListData }}>
        {children}
      </LayoutListStorageContext.Provider>
    );
  };