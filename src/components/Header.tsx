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

const Header = () => {
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
							<DigiHeaderNavigationItem afCurrentPage={true}>
								<a href="/">Start</a>
							</DigiHeaderNavigationItem>
							<DigiHeaderNavigationItem>
								<a href="/#/fel-url-lol">Mina sidor</a>
							</DigiHeaderNavigationItem>
							<DigiHeaderNavigationItem>
								<a href="/#/annonser">Sök jobb via Jobbkartan</a>
							</DigiHeaderNavigationItem>
							<DigiHeaderNavigationItem>
								<a href="/#/fel-url-lol">Other languages</a>
							</DigiHeaderNavigationItem>
						</DigiHeaderNavigation>
					</div>
				</DigiHeader>
			</DigiLayoutBlock>
		</>
	);
};

export default Header;
