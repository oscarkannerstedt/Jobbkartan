import { createContext, Dispatch, SetStateAction } from "react";

interface IPaginationContextType {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const PaginationContext = createContext<IPaginationContextType | undefined>(
  undefined
);

export default PaginationContext;
