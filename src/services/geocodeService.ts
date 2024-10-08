export const geocodeAddress = (address: string): Promise<google.maps.LatLng | null> => {
    const geocoder = new google.maps.Geocoder();
  
    return new Promise((resolve, reject) => {
      geocoder.geocode({ address }, (results, status) => {
        if (status === 'OK' && results && results[0].geometry && results[0].geometry.location) {
          if (results[0].partial_match) {
            console.warn(`Partial match found for address: ${address}`);
          }
          resolve(results[0].geometry.location);
        } else {
          const errorMessage = `Geocode failed for address: ${address} with status: ${status}`;  
          console.error(errorMessage);
          reject(new Error(errorMessage));
        }
      });
    });
  };