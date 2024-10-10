import {
  LayoutBlockContainer,
  LayoutBlockVariation,
} from "@digi/arbetsformedlingen";
import {
  DigiHeader,
  DigiHeaderNavigation,
  DigiHeaderNavigationItem,
  DigiLayoutBlock,
} from "@digi/arbetsformedlingen-react";
import { useState } from "react";

const Header = () => {
  const [currentPage, setCurrentPage] = useState("start");
  const handleNavigationClick = (page: string) => {
    setCurrentPage(page);
  };
  return (
    <>
      <DigiLayoutBlock
        afVariation={LayoutBlockVariation.PRIMARY}
        afContainer={LayoutBlockContainer.STATIC}
        afVerticalPadding={true}
      >
        <DigiHeader
          afSystemName="Jobbkartan"
          afHideSystemName={false}
          afMenuButtonText="Meny"
        >
          <a slot="header-logo" aria-label="Jobbkartans startsida" href="/"></a>

          <div slot="header-content"></div>
          <div slot="header-navigation">
            <DigiHeaderNavigation
              afCloseButtonText="Stäng"
              afCloseButtonAriaLabel="Stäng meny"
              afNavAriaLabel="Huvudmeny"
            >
              <DigiHeaderNavigationItem afCurrentPage={currentPage === "start"}>
                <a href="/" onClick={() => handleNavigationClick("start")}>
                  Start
                </a>
              </DigiHeaderNavigationItem>
              <DigiHeaderNavigationItem
                afCurrentPage={currentPage === "mina-sidor"}
              >
                <a
                  href="/#/mina-sidor"
                  onClick={() => handleNavigationClick("mina-sidor")}
                >
                  Mina sidor
                </a>
              </DigiHeaderNavigationItem>
              <DigiHeaderNavigationItem
                afCurrentPage={currentPage === "annonser"}
              >
                <a
                  href="/#/annonser"
                  onClick={() => handleNavigationClick("annonser")}
                >
                  Sök jobb via Jobbkartan
                </a>
              </DigiHeaderNavigationItem>
              <DigiHeaderNavigationItem afCurrentPage={currentPage === "sprak"}>
                <a
                  href="/#/sprak"
                  onClick={() => handleNavigationClick("sprak")}
                >
                  Other languages
                </a>
              </DigiHeaderNavigationItem>
            </DigiHeaderNavigation>
          </div>
        </DigiHeader>
      </DigiLayoutBlock>
    </>
  );
};

export default Header;
