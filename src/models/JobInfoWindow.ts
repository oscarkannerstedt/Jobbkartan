export type JobInfoWindow = {
	id: string;
	logo: string;
	headline: string;
	employerName: string;
	address: string;
	city: string;
	coordinates: {
		lat: number;
		lng: number;
	};
};
