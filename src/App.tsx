import { ButtonVariation } from '@digi/arbetsformedlingen';
import { DigiButton } from '@digi/arbetsformedlingen-react';


function App() {
	return (
		<>
			<DigiButton
				afVariation={ButtonVariation.PRIMARY}
				onAfOnClick={() => console.log('Hallå världen!')}
			>
				Skicka
			</DigiButton>
		</>
	);
}

export default App;
