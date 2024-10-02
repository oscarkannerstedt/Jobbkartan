import { useCallback, useEffect, useRef, useState } from 'react';
import { AdvancedMarker, Pin, useMap } from '@vis.gl/react-google-maps';
import { JobInfoWindow as Job, JobInfoWindow } from '../models/JobInfoWindow';
import { MarkerClusterer } from '@googlemaps/markerclusterer';
import type { Marker } from '@googlemaps/markerclusterer';
import { JobInfoBubble } from './JobInfoBubble';

export const PoiMarkers = (props: { pois: JobInfoWindow[] }) => {
	const map = useMap();
	const [markers, setMarkers] = useState<{ [key: string]: Marker }>({});
	const [activeJob, setActiveJob] = useState<Job | null>(null);
	const clusterer = useRef<MarkerClusterer | null>(null);

	const handleClick = useCallback(
		(ev: google.maps.MapMouseEvent) => {
			if (!map) return;
			if (!ev.latLng) return;

			console.log('marker clicked: ', ev.latLng.toString());
			map.panTo(ev.latLng);
			map.setZoom(11);
		},
		[map]
	);

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

	const setMarkerRef = (marker: Marker | null, key: string) => {
		if (marker && markers[key]) return;
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
	};

	return (
		<>
			{props.pois.map((poi: JobInfoWindow) => (
				<AdvancedMarker
					key={poi.id}
					position={poi.coordinates}
					ref={(marker) => setMarkerRef(marker, poi.id)}
					clickable={true}
					onClick={handleClick}
				>
					<Pin
						background={'#a00eda'}
						glyphColor={'#000'}
						borderColor={'#000'}
					/>
				</AdvancedMarker>
			))}

			{activeJob && (
				<JobInfoBubble
					job={activeJob}
					onCloseClick={() => setActiveJob(null)}
				></JobInfoBubble>
			)}
		</>
	);
};
