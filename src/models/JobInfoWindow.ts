export type JobInfoWindow = {
	id: string;
	logo: string;
	headline: string;
	employerName: string;
	occupation: string;
	address: string;
	city: string;
	municipality: string;
	coordinates: {
		lat: number;
		lng: number;
	};
};
