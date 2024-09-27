const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

export const generateMapUrl = (lat: number, lng: number): string => {
	return `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${lat},${lng}`;
};
