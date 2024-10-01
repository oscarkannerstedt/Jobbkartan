import { useJobs } from '../hooks/useJobs';
import { Map, MapCameraChangedEvent } from '@vis.gl/react-google-maps';
import { PoiMarkers } from './PoiMarkers';
import { JobInfoWindow } from '../models/JobInfoWindow';
import { calculateCenter } from '../utils/calculateCenter';
//import { PointOfInterest } from '../models/PointOfInterest';

// until function for platsbankens api
// const locations: PointOfInterest[] = [
// 	{key: 'Tändsticksmuseet', location: {lat: 57.78512, lng: 14.15968}},
// 	{key: 'Nyholmska hemmet', location: {lat: 57.79463, lng: 14.11966}},
// 	{key: 'Asecs köpcenter', location: {lat: 57.77353, lng: 14.20454}},
// 	{key: 'ICA Maxi', location: {lat: 57.77244, lng: 14.17647}},
// 	{key: 'Bryggan Café och Bistro', location: {lat: 57.78139, lng: 14.17068}}
// ]

export const JobMap = () => {
	const { jobs } = useJobs();

	console.log('hämtade jobs', jobs);

	const jobLocations: JobInfoWindow[] = jobs
		.filter((job) => {
			const coords = job.workplace_address.coordinates;
			return (
				coords &&
				coords.length === 2 &&
				!isNaN(coords[0]) &&
				!isNaN(coords[1])
			);
		})
		.map((job) => ({
			id: job.id,
			headline: job.headline,
			employerName: job.employer.name,
			address: job.workplace_address.street_address,
			city: job.workplace_address.city,
			coordinates: {
				lat: Number(job.workplace_address.coordinates[1]),
				lng: Number(job.workplace_address.coordinates[0]),
			},
		}));
	console.log('Job locations', jobLocations);

	const center = calculateCenter(jobLocations);

	return (
		<>
			<Map
				style={{ height: 800 }}
				defaultZoom={5}
				defaultCenter={center}
				mapId='b541ec0a861d850'
				onCameraChanged={(ev: MapCameraChangedEvent) =>
					console.log(
						'camera changed:',
						ev.detail.center,
						'zoom:',
						ev.detail.zoom
					)
				}
			>
				<PoiMarkers pois={jobLocations}></PoiMarkers>
			</Map>
		</>
	);
};
