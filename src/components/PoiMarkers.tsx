import { useCallback, useEffect, useRef, useState } from 'react';
import { AdvancedMarker, Pin, useMap } from '@vis.gl/react-google-maps';
import { PointOfInterest } from '../models/PointOfInterest';
import { MarkerClusterer } from '@googlemaps/markerclusterer';
import type { Marker } from '@googlemaps/markerclusterer';

// To mark with pins of map
// adjust whenJobAds are implemented
export const PoiMarkers = (props: { pois: PointOfInterest[] }) => {
	const map = useMap();
	const [markers, setMarkers] = useState<{ [key: string]: Marker }>({});
	const clusterer = useRef<MarkerClusterer | null>(null);

	const handleClick = useCallback(
		(ev: google.maps.MapMouseEvent) => {
			if (!map) return;
			if (!ev.latLng) return;

			console.log('marker clicked: ', ev.latLng.toString());
			map.panTo(ev.latLng);
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
			{props.pois.map((poi: PointOfInterest) => (
				<AdvancedMarker
					key={poi.key}
					position={poi.location}
					ref={(marker) => setMarkerRef(marker, poi.key)}
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
		</>
	);
};
