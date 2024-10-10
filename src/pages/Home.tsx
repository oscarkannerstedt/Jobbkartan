import {
  LayoutBlockContainer,
  LayoutBlockVariation,
  LayoutColumnsElement,
  LayoutColumnsVariation,
  LinkButtonSize,
  LinkButtonVariation,
} from "@digi/arbetsformedlingen";
import {
  DigiLayoutBlock,
  DigiLayoutColumns,
  DigiLayoutContainer,
  DigiLinkButton,
  DigiMediaImage,
} from "@digi/arbetsformedlingen-react";
import { useNavigate } from "react-router-dom";
import { useNavigation } from "../hooks/useNavigation";

import "../styles/home.css";

const Home = () => {
  const navigate = useNavigate();
  const { setCurrentPage } = useNavigation();

  const handleNavigate = () => {
    navigate("/annonser");
    setCurrentPage("annonser");
  };


	return (
		<>
			<DigiLayoutBlock
				afVariation={LayoutBlockVariation.TRANSPARENT}
				afContainer={LayoutBlockContainer.STATIC}
				className="home-container"
			>
				<DigiLayoutColumns
					afElement={LayoutColumnsElement.DIV}
					afVariation={LayoutColumnsVariation.TWO}
				>
					<DigiLayoutContainer>
						<h1 className="welcome-text">Välkommen till Jobbkartan!</h1>
						<div className="home-lower-sub-container">
							<p className="home-body-text">
								Klicka på knappen nedan för att använda kartan och för att
								söka/se jobbannonser.
							</p>
							<DigiLinkButton
								afHref="./#/annonser"
								afSize={LinkButtonSize.MEDIUMLARGE}
								afVariation={LinkButtonVariation.PRIMARY}
								onAfOnClick={handleNavigate}
							>
								Visa jobbannonser
							</DigiLinkButton>
						</div>
					</DigiLayoutContainer>
					<DigiLayoutContainer>
						<DigiMediaImage
							className="map-img-start"
							afUnlazy
							afFullwidth={true}
							afSrc="./src/assets/karta_startsidan.png"
							afAlt="Karta över lediga jobb i Sverige"
						></DigiMediaImage>
					</DigiLayoutContainer>
				</DigiLayoutColumns>
			</DigiLayoutBlock>

			<DigiLayoutBlock
				afVariation={LayoutBlockVariation.TRANSPARENT}
				afContainer={LayoutBlockContainer.STATIC}
				className="background-container"
			>
				<DigiLayoutColumns
					afElement={LayoutColumnsElement.DIV}
					afVariation={LayoutColumnsVariation.TWO}
				>
					<DigiLayoutContainer
						af-Variation="LayoutContainerVariation.STATIC"
						afVerticalPadding={true}
					>
						<p className="home-main-body-text-1">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
							doloremque recusandae corporis pariatur consectetur earum illum
							cupiditate obcaecati totam quidem nobis, quo optio vitae molestias
							laudantium ex, iure quae reiciendis. Veniam labore quaerat
							perferendis deserunt architecto explicabo voluptatibus eos
							pariatur in libero distinctio, sequi quo accusamus saepe similique
							quam quis alias repellat itaque sunt doloribus numquam debitis?
							At, exercitationem sint laboriosam explicabo ab recusandae nihil
							non aliquam vero quos optio saepe deleniti! Tempora minus quia
							voluptates voluptatibus in nobis quos facere eos doloremque, ad
							culpa ipsum rem veritatis dolore eius. Quasi iure fugit
							distinctio! Quisquam amet quos distinctio iure labore quaerat
							perferendis, iure quae reiciendis.
						</p>
					</DigiLayoutContainer>
					<DigiLayoutContainer
						af-Variation="LayoutContainerVariation.STATIC"
						afVerticalPadding={true}
					>
						<p className="home- main-body-text-2">
							Accusantium sunt quam eaque enim ad, veniam possimus? Voluptates
							delectus eveniet sed ullam ipsum. Eius assumenda enim atque
							quisquam deserunt omnis non ad, debitis dolores esse officiis iste
							eaque quo reprehenderit voluptates sed corporis corrupti porro
							laborum rem voluptatum! Dolor, eligendi libero. Eligendi
							voluptatem nobis doloribus ipsum expedita a neque, fugiat est!
							Quisquam amet quos distinctio praesentium provident voluptatem
							iusto ex ducimus hic quia commodi quasi, nostrum reiciendis ullam
							officiis debitis voluptatum! Voluptatum vitae qui, reiciendis illo
							ex debitis culpa possimus maiores iure ratione corrupti aspernatur
							saepe accusamus excepturi magnam ad inventore praesentium hic
							asperiores eos soluta ipsam sit animi. Tenetur dolores consectetur
							vel atque sit?
						</p>
					</DigiLayoutContainer>
				</DigiLayoutColumns>
			</DigiLayoutBlock>
		</>
	);
};

export default Home;
