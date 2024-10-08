import { ReactNode, useState } from "react";
import PaginationContext from "../contexts/PaginationContext";

interface PaginationProviderProps {
  children: ReactNode;
}

export const PaginationProvider = ({ children }: PaginationProviderProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  return (
    <PaginationContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </PaginationContext.Provider>
  );
};
