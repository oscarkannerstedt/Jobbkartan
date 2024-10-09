import { InfoWindow } from '@vis.gl/react-google-maps';
import { JobInfoWindow as Job } from '../models/JobInfoWindow';
import { LinkVariation } from '@digi/arbetsformedlingen';
import {
	DigiExpandableAccordion,
	DigiLink,
} from '@digi/arbetsformedlingen-react';
import defaultLogo from "../assets/jobbkartan_logo_1.png";

interface JobInfoBubbleProps {
	job: Job;
	onCloseClick: () => void;
}

export const JobInfoBubble = ({ job, onCloseClick }: JobInfoBubbleProps) => {

	return (
		<InfoWindow position={job.coordinates} onCloseClick={onCloseClick}>
			<div
				style={{
					padding: '10px',
					maxWidth: '300px',
					overflow: 'hidden',
				}}
			>
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<img
						src={job.logo || defaultLogo}
						alt={`${job.employerName} logo`}
						style={{
							width: '150px',
							height: '80px',
							marginRight: '10px',
							objectFit: 'contain',
						}}
					/>
				</div>
				<DigiExpandableAccordion afHeading={job.headline}>
					<h3>{job.employerName}</h3>
					<p>{job.occupation}</p>
					<p>{job.city || job.municipality}</p>
					<DigiLink afHref={`/#/annonser/${job.id}`} afVariation={LinkVariation.SMALL}>
						Mer...
					</DigiLink>
				</DigiExpandableAccordion>
			</div>
		</InfoWindow>
	);
};
