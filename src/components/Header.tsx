//import { useState } from "react";
import {
  LayoutBlockContainer,
  LayoutBlockVariation,
} from "@digi/arbetsformedlingen";
import {
  DigiHeader,
  DigiHeaderNavigation,
  DigiHeaderNavigationItem,
  DigiLayoutBlock,
  DigiUtilBreakpointObserver,
} from "@digi/arbetsformedlingen-react";

const Header = () => {
  // const [isLarge, setIsLarge] = useState(true);

  // const handleLargeBreakpoint = () => {
  //   setIsLarge(true);
  // };

  // const handleSmallBreakpoint = () => {
  //   setIsLarge(false);
  // };

  return (
    <>
      <DigiUtilBreakpointObserver
      // onAfOnLarge={handleLargeBreakpoint}
      // onAfOnSmall={handleSmallBreakpoint}
      >
        <DigiLayoutBlock
          afVariation={LayoutBlockVariation.PRIMARY}
          afContainer={LayoutBlockContainer.NONE}
        >
          <DigiHeader
            afSystemName="Jobbkartan"
            afHideSystemName={false}
            afMenuButtonText="Meny"
          >
            <a
              slot="header-logo"
              aria-label="Jobbkartans startsida"
              href="/"
            ></a>
            <div slot="header-content"></div>
            <div slot="header-navigation">
              <DigiHeaderNavigation
                afCloseButtonText="Stäng"
                afCloseButtonAriaLabel="Stäng meny"
                afNavAriaLabel="Huvudmeny"
              >
                <DigiHeaderNavigationItem afCurrentPage={true}>
                  <a href="/">Start</a>
                </DigiHeaderNavigationItem>
                <DigiHeaderNavigationItem>
                  <a href="/">Mina sidor</a>
                </DigiHeaderNavigationItem>
                <DigiHeaderNavigationItem>
                  <a href="/">Sök jobb i Jobbkartan</a>
                </DigiHeaderNavigationItem>
                <DigiHeaderNavigationItem>
                  <a href="/">Other languages</a>
                </DigiHeaderNavigationItem>
              </DigiHeaderNavigation>
            </div>
          </DigiHeader>
        </DigiLayoutBlock>
      </DigiUtilBreakpointObserver>
    </>
  );
};

export default Header;
