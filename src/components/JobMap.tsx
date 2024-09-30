import { Map, MapCameraChangedEvent } from '@vis.gl/react-google-maps';

export const JobMap = () => {
	return (
		<>
			<Map
                style={{height: 500 }}
				defaultZoom={11}
				defaultCenter={{ lat: 57.7811, lng: 14.1586 }}
				onCameraChanged={(ev: MapCameraChangedEvent) =>
					console.log(
						'camera changed:',
						ev.detail.center,
						'zoom:',
						ev.detail.zoom
					)
				}
			></Map>
		</>
	);
};
