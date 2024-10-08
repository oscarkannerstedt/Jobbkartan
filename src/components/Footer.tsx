import {
  LayoutBlockContainer,
  LayoutBlockVariation,
  FooterVariation,
  FooterCardVariation,
  LogoVariation,
  LogoColor,
} from "@digi/arbetsformedlingen";

import {
  DigiFooter,
  DigiFooterCard,
  DigiLayoutBlock,
  DigiIconAccessibilityUniversal,
  DigiIconSign,
  DigiIconGlobe,
  DigiIconEnvelope,
  DigiIconExternalLinkAlt,
  DigiLogo,
  DigiLink,
} from "@digi/arbetsformedlingen-react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <>
      <div id="footer-container">
        <DigiLayoutBlock
          afVariation={LayoutBlockVariation.TRANSPARENT}
          afContainer={LayoutBlockContainer.STATIC}
        >
          <DigiFooter afVariation={FooterVariation.LARGE}>
            <div slot="content-top">
              <div>
                <DigiFooterCard afType={FooterCardVariation.ICON}>
                  <ul>
                    <li>
                      <a href="#">
                        <DigiIconAccessibilityUniversal></DigiIconAccessibilityUniversal>
                        Tillgänglighetsredogörelse
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <DigiIconSign></DigiIconSign>
                        Teckenspråk
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <DigiIconGlobe></DigiIconGlobe>
                        Other languages
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <DigiIconEnvelope></DigiIconEnvelope>
                        Mejla vår funktionbrevlåda
                      </a>
                    </li>
                  </ul>
                </DigiFooterCard>
              </div>
              <div>
                <DigiFooterCard>
                  <ul>
                    <li>
                      <a href="#">Tillgänglighetsredogörelse</a>
                    </li>
                    <li>
                      <a href="#">Teckenspråk</a>
                    </li>
                    <li>
                      <a href="#">Other languages</a>
                      <br />
                    </li>
                  </ul>
                </DigiFooterCard>
              </div>
              <div>
                <DigiFooterCard afType={FooterCardVariation.ICON}>
                  <h2>Senaste nytt i kartvärlden</h2>
                  <p>
                    Efter en lång process har vi äntligen kunnat utröna vad
                    kartor är gjorda av samt deras ursprung. Klicka på nedan
                    länk för att mejla in dina gissningar.
                  </p>
                  <a href="#">
                    <DigiIconExternalLinkAlt></DigiIconExternalLinkAlt>
                    Mejla vår funktionbrevlåda
                  </a>
                </DigiFooterCard>
              </div>
              <div>
                <DigiFooterCard afType={FooterCardVariation.BORDER}>
                  <a href="#">För arbetsgivare</a>
                  <p>
                    När du behöver rekrytera hjälper vi dig att hitta värdefull
                    kompetens.
                  </p>
                </DigiFooterCard>
                <DigiFooterCard afType={FooterCardVariation.BORDER}>
                  <a href="#">För leverantörer</a>
                  <p>När du är leverantör av våra tjänster.</p>
                </DigiFooterCard>
                <DigiFooterCard afType={FooterCardVariation.BORDER}>
                  <a href="#">Om oss</a>
                  <p>När du vill veta mer om vår myndighet och våra uppdrag.</p>
                </DigiFooterCard>
              </div>
            </div>
            <div slot="content-bottom-left">
              <DigiLink afHref={"/"}>
                <DigiLogo
                  afVariation={LogoVariation.LARGE}
                  afColor={LogoColor.SECONDARY}
                ></DigiLogo>
              </DigiLink>
            </div>
            <div slot="content-bottom-right">
              <p>Följ oss på</p>
              <a href="#">Facebook</a>
              <a href="#">Youtube</a>
              <a href="#">Linkedin</a>
              <a href="#">Instagram</a>
            </div>
          </DigiFooter>
        </DigiLayoutBlock>
      </div>
    </>
  );
};

export default Footer;
