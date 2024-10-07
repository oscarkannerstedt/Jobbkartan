import {
	DigiNotificationErrorPage,
	DigiLinkInternal,
} from "@digi/arbetsformedlingen-react";
import { ErrorPageStatusCodes } from "@digi/arbetsformedlingen"; // Enums for status codes

const NotFound = () => {
	return (
		<DigiNotificationErrorPage
			afHttpStatusCode={ErrorPageStatusCodes.NOT_FOUND}
		>
			<ul slot="links">
				<li>
					<DigiLinkInternal afHref="/" afVariation="small">
						Gå tillbaka till föregående sida
					</DigiLinkInternal>
				</li>
				<li>
					<DigiLinkInternal afHref="/" afVariation="small">
						Till startsidan
					</DigiLinkInternal>
				</li>
			</ul>
		</DigiNotificationErrorPage>
	);
};

export default NotFound;
