import { useContext } from "react";
import NavigationContext, {
  INavigationContextType,
} from "../contexts/NavigationContext";

export const useNavigation = (): INavigationContextType => {
  const context = useContext(NavigationContext);

  if (!context) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }

  return context;
};
