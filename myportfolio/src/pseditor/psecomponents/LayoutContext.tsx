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


