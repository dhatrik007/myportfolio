import React from "react";
import { getDefaultLayout } from "../Utils";
import type {Layout} from "../Utils";

/**
 * Here LayoutContext is used to handle state management for Layout array which is main 
 * data to render layout area
 */
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

/**
 * LayoutListStorageContext is used to handle state management for template List item data
 * which is used for data to load in dropdown in action area
 */
type ListData = {
    listItems: string | null,
    setListData: React.Dispatch<React.SetStateAction<string | null>>;
}
export const LayoutListStorageContext = React.createContext<ListData>({listItems: null, setListData: () => {} });

export const LayoutListStorageContextProvider: React.FC<MyContextProviderProps> = ({ children }) => {
    const listData = localStorage.getItem("listItemData");
    const [listItems, setListData] = React.useState<string | null>(listData);

    return (
      <LayoutListStorageContext.Provider value={{ listItems, setListData }}>
        {children}
      </LayoutListStorageContext.Provider>
    );
  };