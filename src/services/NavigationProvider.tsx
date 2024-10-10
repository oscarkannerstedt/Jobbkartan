import { useState, ReactNode } from "react";
import NavigationContext from "../contexts/NavigationContext";

interface INavigationProviderProps {
  children: ReactNode;
}

export const NavigationProvider = ({ children }: INavigationProviderProps) => {
  const [currentPage, setCurrentPage] = useState("start");

  return (
    <NavigationContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </NavigationContext.Provider>
  );
};
