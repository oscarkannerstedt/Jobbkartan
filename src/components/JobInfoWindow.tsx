import { InfoWindow } from '@vis.gl/react-google-maps';
import { JobInfoWindow as Job } from '../models/JobInfoWindow';
import { LinkVariation } from '@digi/arbetsformedlingen';
import { DigiExpandableAccordion, DigiLink } from '@digi/arbetsformedlingen-react';

interface JobInfoWindowProps {
	job: Job;
	onCloseClick: () => void;
}

export const MapInfoBubble = ({ job, onCloseClick }: JobInfoWindowProps) => {
	return (
		<InfoWindow position={job.coordinates} onCloseClick={onCloseClick}>
			<DigiExpandableAccordion afHeading={job.headline}>
				<h2>{job.headline}</h2>
				<p>{job.employerName}</p>
				<p>{job.city}</p>
				<DigiLink afHref='/' afVariation={LinkVariation.SMALL}>
					Mer...
				</DigiLink>
			</DigiExpandableAccordion>
		</InfoWindow>
	);
};
