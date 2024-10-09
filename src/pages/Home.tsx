import {
	LayoutBlockContainer,
	LayoutBlockVariation,
	LayoutColumnsElement,
	LayoutColumnsVariation,
} from "@digi/arbetsformedlingen";
import {
	DigiLayoutBlock,
	DigiLayoutColumns,
	DigiLayoutContainer,
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
					</DigiLayoutContainer>
					<DigiLayoutContainer>
						<DigiMediaImage
							className="map-img-start "
							afUnlazy
							afFullwidth={true}
							afSrc="./src/assets/karta_startsidan.png"
							afAlt="Karta över lediga jobb i Sverige"
						></DigiMediaImage>
					</DigiLayoutContainer>
					<div className="home-lower-sub-container">
						<p className="home-body-text">
							Klicka på knappen nedan för att se alla jobbannonser.
						</p>
						<button onClick={handleNavigate}>Visa Jobbannonser</button>
					</div>
				</DigiLayoutColumns>
			</DigiLayoutBlock>
		</div>
	);
};

export default Home;
