import { ReactNode, useState } from "react";
import PaginationContext from "../contexts/PaginationContext";

interface IPaginationProviderProps {
  children: ReactNode;
}

export const PaginationProvider = ({ children }: IPaginationProviderProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  return (
    <PaginationContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </PaginationContext.Provider>
  );
};
