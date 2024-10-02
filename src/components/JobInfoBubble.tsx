import { InfoWindow } from '@vis.gl/react-google-maps';
import { JobInfoWindow as Job } from '../models/JobInfoWindow';
import { LinkVariation } from '@digi/arbetsformedlingen';
import {
	DigiExpandableAccordion,
	DigiLink,
} from '@digi/arbetsformedlingen-react';

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
						src={job.logo}
						alt={`${job.employerName} logo`}
						style={{
							width: '180px',
							height: '100px',
							marginRight: '10px',
							objectFit: 'contain',
						}}
					/>
				</div>
				<DigiExpandableAccordion afHeading={job.headline}>
					<h2>{job.headline}</h2>
					<p>{job.employerName}</p>
					<p>{job.city}</p>
					<DigiLink afHref='/' afVariation={LinkVariation.SMALL}>
						Mer...
					</DigiLink>
				</DigiExpandableAccordion>
			</div>
		</InfoWindow>
	);
};
