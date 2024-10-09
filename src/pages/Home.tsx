import {
	LayoutBlockContainer,
	LayoutBlockVariation,
	LayoutColumnsElement,
	LayoutColumnsVariation,
} from "@digi/arbetsformedlingen";
import {
	DigiLayoutBlock,
	DigiLayoutColumns,
	DigiMediaImage,
	DigiTypography,
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
			<DigiLayoutColumns
				afElement={LayoutColumnsElement.DIV}
				afVariation={LayoutColumnsVariation.TWO}
			>
				<DigiLayoutBlock
					afVariation={LayoutBlockVariation.TRANSPARENT}
					afContainer={LayoutBlockContainer.STATIC}
				>
					<DigiTypography>
						<div className="home-container">
							<DigiMediaImage
								afUnlazy
								afHeight="750"
								afWidth="750"
								afSrc="./src/assets/karta_startsidan.png"
								afAlt="Karta över lediga jobb i Sverige"
							></DigiMediaImage>
							...
							<h1>Välkommen till Jobbkartan!</h1>
						</div>
						<div className="home-lower-sub-container">
							<p>Klicka på knappen nedan för att se alla jobbannonser.</p>
							<button onClick={handleNavigate}>Visa Jobbannonser</button>
						</div>
					</DigiTypography>
				</DigiLayoutBlock>
			</DigiLayoutColumns>
		</div>
	);
};

export default Home;
