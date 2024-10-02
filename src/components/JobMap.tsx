import { useJobs } from '../hooks/useJobs';
import { Map, MapCameraChangedEvent } from '@vis.gl/react-google-maps';
import { PoiMarkers } from './PoiMarkers';
import { JobInfoWindow } from '../models/JobInfoWindow';
import { calculateCenter } from '../utils/calculateCenter';
import { useEffect, useState } from 'react';
import { geocodeAddress } from '../services/geocodeService';
import { IJob } from '../models/IJob';

export const JobMap = () => {
	const { jobs } = useJobs();
	const [jobLocations, setJobLocations] = useState<JobInfoWindow[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchJobLocations = async () => {
			setLoading(true);
			setError(null);
			const locations = await Promise.all(
				jobs.map(async (job) => await getJobLocation(job))
			);

			const validLocations = locations.filter(
				(location): location is JobInfoWindow =>
					location !== null &&
					location.coordinates.lat !== 0 &&
					location.coordinates.lng !== 0
			);

			console.log('Valid Locations:', validLocations);

			setJobLocations(validLocations);
			setLoading(false);
		};

		fetchJobLocations();
	}, [jobs]);

	const getJobLocation = async (job: IJob): Promise<JobInfoWindow | null> => {
		const {
			street_address: streetAddress,
			city,
			coordinates,
		} = job.workplace_address;

		const logoUrl = job.logo_url;

		if (coordinates && coordinates.length === 2) {
			const lat = Number(coordinates[1]);
			const lng = Number(coordinates[0]);
			if (lat !== 0 && lng !== 0) {
				console.log(
					`Using existing coordinates for job ID ${job.id}:`,
					coordinates
				);

				return {
					id: job.id,
					logo: logoUrl || '', // add fallback?
					headline: job.headline,
					employerName: job.employer.name,
					address: streetAddress,
					city: city,
					coordinates: {
						lat: lat,
						lng: lng,
					},
				};
			} else {
				console.warn(
					`Invalid coordinates for job ID ${job.id}: lat=${lat}, lng=${lng}`
				);
				return null;
			}
		}

		if (!streetAddress || !city) {
			console.warn(
				`Invalid address for job ID ${job.id}: streetAddress or city is missing.`
			);
			return null;
		}

		// Geocoding
		try {
			const location = await geocodeAddress(`${streetAddress}, ${city}`);

			if (!location) {
				console.warn(
					`No valid address found for ${streetAddress}, ${city}`
				);
				return null;
			}

			const lat = location.lat();
			const lng = location.lng();
			console.log(
				`Geocoded ${streetAddress}, ${city} to coordinates: lat=${lat}, lng=${lng}`
			);

			if (lat !== 0 && lng !== 0) {
				return {
					id: job.id,
					logo: logoUrl || '', // add fallback?
					headline: job.headline,
					employerName: job.employer.name,
					address: streetAddress,
					city: city,
					coordinates: {
						lat: lat, // location.lat(),
						lng: lng, // location.lng(),
					},
				};
			} else {
				console.warn(
					`Geocoding returned invalid coordinates for ${streetAddress}, ${city}: lat=${lat}, lng=${lng}`
				);
				return null;
			}
		} catch (error) {
			console.error('Geocode failed for address:', streetAddress, error);
			setError(`Geocode failed for address: ${streetAddress}`);
			return null;
		}
	};

	const center = calculateCenter(jobLocations);

	return (
		<>
			{loading && <div>Loading...</div>}
			{error && <div>Error: {error}</div>}
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
