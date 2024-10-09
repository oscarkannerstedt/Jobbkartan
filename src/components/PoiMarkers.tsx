/* eslint-disable react-hooks/rules-of-hooks */
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import {
	AdvancedMarker,
	MapMouseEvent,
	Pin,
	useMap,
} from '@vis.gl/react-google-maps';
import { jobContext } from '../contexts/jobContext';
import { JobInfoWindow as Job, JobInfoWindow } from '../models/JobInfoWindow';
import { MarkerClusterer } from '@googlemaps/markerclusterer';
import type { Marker } from '@googlemaps/markerclusterer';
import { JobInfoBubble } from './JobInfoBubble';
import { Circle } from './Circle';

interface PoiMarkersProps {
	pois: JobInfoWindow[];
	detailView?: boolean;
	isCircleSearchActive?: boolean;
}

export const PoiMarkers = ({
	pois,
	detailView,
	isCircleSearchActive,
}: PoiMarkersProps) => {
	const map = useMap();
	const context = useContext(jobContext);
	const [markers, setMarkers] = useState<{ [key: string]: Marker }>({});
	const [activeJob, setActiveJob] = useState<Job | null>(null);
	const clusterer = useRef<MarkerClusterer | null>(null);
	const [circleCenter, setCircleCenter] = useState<google.maps.LatLng | null>(
		null
	);
	const [mousePosition, setMousePosition] =
		useState<google.maps.LatLng | null>(null);
	const radius = 30;

	if (!context) {
		console.error('Jobcontext is not available');
		return null;
	}

	const { fetchJobsByCircle } = context;

	const handleMouseMove = useCallback((ev: MapMouseEvent) => {
		const googleMapsEvent = ev as unknown as google.maps.MapMouseEvent;
		if (googleMapsEvent.latLng) {
			setMousePosition(googleMapsEvent.latLng);
		}
	}, []);

	const handleClick = useCallback(
		(ev: MapMouseEvent) => {
			const googleMapsEvent = ev as unknown as google.maps.MapMouseEvent;

			if (!map || !googleMapsEvent.latLng) return;

			if (isCircleSearchActive) {
				console.log(
					'Kartan klickades, position: ',
					googleMapsEvent.latLng
				);
				setCircleCenter(googleMapsEvent.latLng);
				setMousePosition(null);

				const position = `${googleMapsEvent.latLng.lat()},${googleMapsEvent.latLng.lng()}`;
				fetchJobsByCircle(position, radius);
			}
		},
		[map, isCircleSearchActive, fetchJobsByCircle]
	);

	const handleMarkerClick = (job: JobInfoWindow) => {
		if (!detailView && pois.length > 1) {
			setActiveJob(job);
		}
		map?.panTo(job.coordinates);
		map?.setZoom(9);
	};

	const handleCloseInfoWindow = () => {
		setActiveJob(null);
		map?.setZoom(6);
	};

	// eslint-disable-next-line react-hooks/rules-of-hooks
	useEffect(() => {
		if (!map || !clusterer.current) return;

		if (isCircleSearchActive) {
			clusterer.current.clearMarkers();
			setMarkers({});

			const moveListener = map.addListener('mousemove', handleMouseMove);
			const clickListener = map.addListener('click', (ev: MapMouseEvent) => {
				handleClick(ev);
				// Remove mousemove listener on click
				google.maps.event.removeListener(moveListener);
			});
			return () => {
				google.maps.event.removeListener(moveListener);
				google.maps.event.removeListener(clickListener);
			};
		} else {
			const markerArray = Object.values(markers);
			clusterer.current.addMarkers(markerArray);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isCircleSearchActive, map, handleMouseMove, handleClick]);

	useEffect(() => {
		if (!map) return;

		if (!clusterer.current) {
			clusterer.current = new MarkerClusterer({ map });
		}
	}, [map]);

	const setMarkerRef = useCallback(
		(marker: Marker | null, key: string) => {
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
		},
		[markers]
	);

	return (
		<>
			{isCircleSearchActive && mousePosition && (
				<Circle
					radius={30000}
					center={mousePosition}
					strokeColor={'#a00eda'}
					strokeOpacity={1}
					strokeWeight={3}
					fillColor={'#a00eda'}
					fillOpacity={0.3}
				/>
			)}

			{circleCenter && (
				<Circle
					radius={30000}
					center={circleCenter}
					strokeColor={'#a00eda'}
					strokeOpacity={1}
					strokeWeight={3}
					fillColor={'#a00eda'}
					fillOpacity={0.3}
				/>
			)}

			{!isCircleSearchActive &&
				pois.map((poi: JobInfoWindow) => (
					<AdvancedMarker
						key={poi.id}
						position={poi.coordinates}
						ref={(marker) => setMarkerRef(marker, poi.id)}
						clickable={true}
						onClick={() => {
							if (!isCircleSearchActive) {
								handleMarkerClick(poi);
							}
						}}
					>
						<Pin
							background={'#a00eda'}
							glyphColor={'#000'}
							borderColor={'#000'}
						/>
					</AdvancedMarker>
				))}

			{!detailView && activeJob && (
				<JobInfoBubble
					job={activeJob}
					onCloseClick={handleCloseInfoWindow}
				/>
			)}
		</>
	);
};
