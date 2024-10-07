import { IJob } from '../models/IJob';
import { JobInfoWindow } from '../models/JobInfoWindow';
import { geocodeAddress } from '../services/geocodeService';

export const getJobLocation = async (
	job: IJob
): Promise<JobInfoWindow | null> => {
	const {
		street_address: streetAddress,
		city,
		coordinates,
	} = job.workplace_address;

	const logoUrl = job.logo_url;

	if (coordinates && coordinates.length === 2) {
		const lat = Number(coordinates[1]);
		const lng = Number(coordinates[0]);
		if (lat !== 0 && lng !== 0) {
			console.log(
				`Using existing coordinates for job ID ${job.id}:`,
				coordinates
			);

			return createJobLocation(job, lat, lng, logoUrl);
		} else {
			console.warn(
				`Invalid coordinates for job ID ${job.id}: lat=${lat}, lng=${lng}`
			);
			return null;
		}
	}

	if (!streetAddress || !city) {
		console.warn(
			`Invalid address for job ID ${job.id}: streetAddress or city is missing.`
		);
		return null;
	}

	// NECCESSARY?
	// Geocoding fallback if no coords, but street and city
	try {
		const location = await geocodeAddress(`${streetAddress}, ${city}`);

		if (!location) {
			console.warn(
				`No valid address found for ${streetAddress}, ${city}`
			);
			return null;
		}

		const lat = location.lat();
		const lng = location.lng();
		console.log(
			`Geocoded ${streetAddress}, ${city} to coordinates: lat=${lat}, lng=${lng}`
		);

		return lat !== 0 && lng !== 0
			? createJobLocation(job, lat, lng, logoUrl)
			: null;
	} catch (error) {
		console.error('Geocode failed for address:', streetAddress, error);
		return null;
	}
};

const createJobLocation = (
	job: IJob,
	lat: number,
	lng: number,
	logoUrl: string | undefined | null
): JobInfoWindow => ({
	id: job.id,
	logo: logoUrl || '',
	headline: job.headline,
	employerName: job.employer.name,
	address: job.workplace_address.street_address,
	city: job.workplace_address.city,
	coordinates: { lat, lng },
});
