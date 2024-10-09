import { useJobs } from '../hooks/useJobs';
import { Map, MapCameraChangedEvent } from '@vis.gl/react-google-maps';
import { PoiMarkers } from './PoiMarkers';
import { JobInfoWindow } from '../models/JobInfoWindow';
import { calculateCenter } from '../utils/calculateCenter';
import { useEffect, useState } from 'react';
import { getJobLocation } from '../utils/jobUtils';

interface IJobMapProps {
	jobId?: string;
	zoomLevel?: number;
	detailView?: boolean;
}

export const JobMap = ({ jobId, zoomLevel, detailView }: IJobMapProps) => {
	const { jobs } = useJobs();
	const [jobLocations, setJobLocations] = useState<JobInfoWindow[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);
	const [mapCenter, setMapCenter] = useState<{ lat: number; lng: number }>({
		lat: 62.2315,
		lng: 16.1932,
	});
	const [isCircleSearchActive, setIsCircleSearchActive] = useState(false);
	
	useEffect(() => {
		const fetchJobLocations = async () => {
			setLoading(true);
			setError(null);

			let selectedJobs = jobs;

			if (jobId) {
				const job = jobs.find((j) => j.id === jobId);
				if (job) {
					selectedJobs = [job];
				} else {
					setError(`Job with ID ${jobId} not found.`);
					setLoading(false);
					return;
				}
			}
			try {
				const locations = await Promise.all(
					selectedJobs.map(async (job) => await getJobLocation(job))
				);

				const validLocations = locations.filter(
					(location): location is JobInfoWindow =>
						location !== null &&
						location.coordinates.lat !== 0 &&
						location.coordinates.lng !== 0
				);

				console.log('Valid Locations:', validLocations);

				setJobLocations(validLocations);
			} catch (err) {
				console.error('Error fetching job locations:', err);
				setError('Failed to fetch job locations.');
			} finally {
				setLoading(false);
			}
		};

		fetchJobLocations();
	}, [jobs, jobId]);

	useEffect(() => {
		if (jobLocations.length > 0) {
			if (jobLocations.length === 1) {
				const singleLocation = jobLocations[0].coordinates;
				setMapCenter({
					lat: singleLocation.lat,
					lng: singleLocation.lng,
				});
			} else {
				const center = calculateCenter(jobLocations);
				setMapCenter(center);
			}
		} else {
			setMapCenter({ lat: 62.2315, lng: 16.1932 });
		}
	}, [jobLocations]);

	return (
		<>
			{loading && <div>Loading...</div>}
			{error && <div>Error: {error}</div>}
			{!detailView && (
			<button onClick={() => setIsCircleSearchActive(prev => !prev)}>
  				{isCircleSearchActive ? 'Avsluta cirkelsök' : 'Aktivera cirkelsök'}
			</button>
			)}
			
			<Map
				style={{ width: '100%', height: '100%' }}
				defaultZoom={zoomLevel}
				defaultCenter={mapCenter}
				mapId='b541ec0a861d850'
				onCameraChanged={(ev: MapCameraChangedEvent) => {
					console.log(
						'camera changed:',
						ev.detail.center,
						'zoom:',
						ev.detail.zoom
					);
					console.log(
						'center shitta',
						mapCenter.lat + ':' + mapCenter.lng
					);
				}}
				center={detailView === true ? mapCenter : null}
			>

				<PoiMarkers isCircleSearchActive={isCircleSearchActive} pois={jobLocations}></PoiMarkers>
			</Map>
			<p className='map-warning'>
				Observera att alla sökresultat inte kan visas på kartan eftersom
				vissa annonser saknar adress eller koordinater.
			</p>
		</>
	);
};
