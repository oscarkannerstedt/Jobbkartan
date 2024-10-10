import { createContext } from "react";

export interface INavigationContextType {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const NavigationContext = createContext<INavigationContextType | undefined>(
  undefined
);

export default NavigationContext;
