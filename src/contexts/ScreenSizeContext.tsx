import { createContext } from "react";

export interface IProviderTypes {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

const ScreenSizeContext = createContext<IProviderTypes | undefined>(undefined);

export default ScreenSizeContext;
