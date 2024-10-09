import {
	LayoutBlockContainer,
	LayoutBlockVariation,
} from "@digi/arbetsformedlingen";
import {
	DigiLayoutBlock,
	DigiLayoutContainer,
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
			<DigiLayoutBlock
				afVariation={LayoutBlockVariation.TRANSPARENT}
				afContainer={LayoutBlockContainer.STATIC}
			>
				<DigiTypography>
					<div className="home-container">
						<h1>Välkommen till Jobbkartan!</h1>
						<p>Klicka på knappen nedan för att se alla jobbannonser.</p>
						<button onClick={handleNavigate}>Visa Jobbannonser</button>
					</div>
				</DigiTypography>
			</DigiLayoutBlock>
		</div>
	);
};

export default Home;
