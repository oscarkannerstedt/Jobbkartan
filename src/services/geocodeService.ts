export const geocodeAddress = (address: string): Promise<google.maps.LatLng | null> => {
    const geocoder = new google.maps.Geocoder();
  
    return new Promise((resolve, reject) => {
      geocoder.geocode({ address }, (results, status) => {
        if (status === 'OK' && results && results[0].geometry.location) {
          resolve(results[0].geometry.location);
        } else {
          console.error(`Geocode was not successful for the following reason: ${status}`);
          reject(null);
        }
      });
    });
  };