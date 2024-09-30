import { Map, MapCameraChangedEvent } from '@vis.gl/react-google-maps';
import { PoiMarkers } from './PoiMarkers';
import { PointOfInterest } from '../models/PointOfInterest';


const locations: PointOfInterest[] = [
	{key: 'Tändsticksmuseet', location: {lat: 57.78512, lng: 14.15968}},
	{key: 'Nyholmska hemmet', location: {lat: 57.79463, lng: 14.11966}},
	{key: 'Asecs köpcenter', location: {lat: 57.77353, lng: 14.20454}},
	{key: 'ICA Maxi', location: {lat: 57.77244, lng: 14.17647}},
	{key: 'Bryggan Café och Bistro', location: {lat: 57.78139, lng: 14.17068}}
]

export const JobMap = () => {
	return (
		<>
			<Map
                style={{height: 500 }}
				defaultZoom={11}
				defaultCenter={{ lat: 57.7811, lng: 14.1586 }}
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
				<PoiMarkers pois={locations}></PoiMarkers>
			</Map>
		</>
	);
};
