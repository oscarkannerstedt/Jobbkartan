import { useState, useEffect, ReactNode } from "react";
import ScreenSizeContext from "../contexts/ScreenSizeContext";

interface IContextType {
  children: ReactNode;
}

export const ScreenSizeProvider = ({ children }: IContextType) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const resizeWindow = () => {
      const screenSize = window.innerWidth;
      setIsMobile(screenSize < 575);
      setIsTablet(screenSize >= 576 && screenSize < 1024);
      setIsDesktop(screenSize >= 1200);
    };

    window.addEventListener("resize", resizeWindow);
    resizeWindow();

    return () => {
      window.removeEventListener("resize", resizeWindow);
    };
  }, []);

  return (
    <ScreenSizeContext.Provider value={{ isMobile, isTablet, isDesktop }}>
      {children}
    </ScreenSizeContext.Provider>
  );
};

export default ScreenSizeProvider;
