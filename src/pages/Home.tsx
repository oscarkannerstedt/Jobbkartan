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

import "../styles/home.css";

const Home = () => {
	const navigate = useNavigate();

	const handleNavigate = () => {
		navigate("/annonser"); // Ersätt "/annonser" med den faktiska vägen till PrintAllJobs om den är annan
	};

	return (
		<div id="home-container">
			<DigiLayoutBlock
				afVariation={LayoutBlockVariation.TRANSPARENT}
				afContainer={LayoutBlockContainer.STATIC}
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
		</div>
	);
};

export default Home;
