import React, { useEffect, useState } from "react";
import { IJob } from "../models/IJob";
import { fetchAllJobs } from "./baseService";
import { jobContext } from "./jobContext";

export const JobProvider = ({ children }: { children: React.ReactNode }) => {
	const [jobs, setJobs] = useState<IJob[]>([]);
	const [loading, setLoading] = useState<boolean>(false); // Ny loading-state

	const fetchJobs = async () => {
		setLoading(true); // Startar loadern
		try {
			const fetchedJobs = await fetchAllJobs();
			setJobs(fetchedJobs.hits);

			localStorage.setItem("jobs", JSON.stringify(fetchedJobs.hits));

			console.log("fetched jobs from JobProvider", fetchedJobs.hits);
		} catch (error) {
			console.error("Error fetching jobs: ", error);
		} finally {
			setLoading(false); // Stänger av loadern när datan har laddats
		}
	};

	useEffect(() => {
		fetchJobs();
	}, []);

	return (
		<jobContext.Provider value={{ jobs, fetchJobs, loading }}>
			{children}
		</jobContext.Provider>
	);
};
