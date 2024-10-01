export type JobInfoWindow = {
    id: string,
    headline: string;
    employerName: string;
    address: string;
    city: string;
    coordinates: {
        lat: number;
        lng: number;
    };
};