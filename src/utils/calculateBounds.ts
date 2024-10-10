export const calculateBounds = (
    center: google.maps.LatLng,
    radius: number
): google.maps.LatLngBounds => {
    const lat = center.lat();
    const lng = center.lng();

    const northEast = new google.maps.LatLng(
        lat + (radius / 111320), 
        lng + (radius / (111320 * Math.cos((lat * Math.PI) / 180)))
    );

    const southWest = new google.maps.LatLng(
        lat - (radius / 111320), 
        lng - (radius / (111320 * Math.cos((lat * Math.PI) / 180))) 
    );

    return new google.maps.LatLngBounds(southWest, northEast);
};