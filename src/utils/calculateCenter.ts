import { JobInfoWindow } from "../models/JobInfoWindow";

export const calculateCenter = (locations: JobInfoWindow[]) => {
    if (locations.length === 0) return { lat: 62.23150, lng: 16.19320};
    
    if (locations.length === 1) return { lat: locations[0].coordinates.lat, lng: locations[0].coordinates.lng};
    
    const latSum = locations.reduce((sum, poi) => sum + poi.coordinates.lat, 0);
    const lngSum = locations.reduce((sum, poi) => sum + poi.coordinates.lng, 0);
    const total = locations.length;

    return {
        lat: latSum / total,
        lng: lngSum / total,
    };
};