import axios from "axios";
import { IJobs } from "../models/IJobs";
import { IJob } from "../models/IJob";

const BASE_URL = "https://jobsearch.api.jobtechdev.se/search";

export const get = async <T>(url: string) => {
  return await axios.get<T>(url);
};

//get all jobs
export const fetchAllJobs = async (
  offset: number = 0,
  limit: number = 25
): Promise<IJobs> => {
  try {
    const response = await axios.get<IJobs>(BASE_URL, {
      params: {
        offset,
        limit,
        q: "",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error while fetching from api: ", error);
    throw error;
  }
};

//get jobs from specific search term
export const fetchJobsBySearchTerm = async (
  searchTerm: string,
  offset: number = 0,
  limit: number = 25
): Promise<IJobs> => {
  try {
    const response = await axios.get<IJobs>(BASE_URL, {
      params: {
        offset,
        limit,
        q: searchTerm,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error while fetching from api: ", error);
    throw error;
  }
};

//get one specific job
export const getJob = async (id: number): Promise<{ data: IJob }> => {
  return await get(`/${id}`);
};

//format date
export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("sv-SE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const calculateDaysLeftToDeadline = (deadlineString: string) => {
  const deadline = new Date(deadlineString).getTime();
  const today = new Date().getTime();

  const differenceInTime = deadline - today;
  const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));

  return differenceInDays;
};
