import { useCallback, useEffect, useRef, useState } from 'react'; //useCallback,
import { AdvancedMarker, Pin, useMap } from '@vis.gl/react-google-maps';
import { JobInfoWindow as Job, JobInfoWindow } from '../models/JobInfoWindow';
import { MarkerClusterer } from '@googlemaps/markerclusterer';
import type { Marker } from '@googlemaps/markerclusterer';
import { JobInfoBubble } from './JobInfoBubble';

interface PoiMarkersProps {
	pois: JobInfoWindow[];
	detailView?: boolean;
}

export const PoiMarkers = ({ pois, detailView }: PoiMarkersProps) => {
	const map = useMap();
	const [markers, setMarkers] = useState<{ [key: string]: Marker }>({});
	const [activeJob, setActiveJob] = useState<Job | null>(null);
	const clusterer = useRef<MarkerClusterer | null>(null);

	const handleMarkerClick = (job: JobInfoWindow) => {
		if (!detailView && pois.length > 1) {
			setActiveJob(job);
		}
		map?.panTo(job.coordinates);
		map?.setZoom(9);
	};

	const handleCloseInfoWindow = () => {
		setActiveJob(null);
		map?.setZoom(4.5);
	}

	useEffect(() => {
		if (!map) return;

		if (!clusterer.current) {
			clusterer.current = new MarkerClusterer({ map });
		}
	}, [map]);

	useEffect(() => {
		if (clusterer.current) {
			const markerArray = Object.values(markers);
			clusterer.current.clearMarkers();
			clusterer.current.addMarkers(markerArray);
		}
	}, [markers]);

	const setMarkerRef = useCallback((marker: Marker | null, key: string) => {
		
		if (marker && markers[key] === marker) return; 
		if (!marker && !markers[key]) return;

		setMarkers((prev) => {
			if (marker) {
				return { ...prev, [key]: marker };
			} else {
				const newMarkers = { ...prev };
				delete newMarkers[key];
				return newMarkers;
			}
		});
	}, [markers]); 

	return (
		<>
			{pois.map((poi: JobInfoWindow) => (
				<AdvancedMarker
					key={poi.id}
					position={poi.coordinates}
					ref={(marker) => setMarkerRef(marker, poi.id)}
					clickable={true}
					onClick={() => handleMarkerClick(poi)} // Set active job on click
				>
					<Pin
						background={'#a00eda'}
						glyphColor={'#000'}
						borderColor={'#000'}
					/>
				</AdvancedMarker>
			))}

			{/* Render the InfoWindow when an active job is selected */}
			{!detailView && activeJob && (
				<JobInfoBubble
					job={activeJob}
					onCloseClick={handleCloseInfoWindow}
				/>
			)}
		</>
	);
};
