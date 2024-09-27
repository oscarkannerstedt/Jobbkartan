const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

export const generateMapUrl = (lat: number, lng: number): string => {
	return `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${lat},${lng}`;
};
// export const generateMapUrl = () => {
//     return 'https://www.google.com/maps/embed/v1/place?key=AIzaSyAf8aR3sEp5wBFYnffTwMo8RaOvDZq80HA&q=59.3293,18.0686';
// }