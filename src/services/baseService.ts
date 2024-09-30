import axios from "axios";
import { IJobs } from "../models/IJobs";

const BASE_URL = "https://jobsearch.api.jobtechdev.se/search";

export const get = async <T>(url: string) => {
  return await axios.get<T>(url);
};

//Hämtar alla annonser.
export const fetchAllJobs = async (): Promise<IJobs> => {
  try {
    const response = await axios.get<IJobs>(BASE_URL, {
      params: {
        offset: 0,
        limit: 25,
        q: "",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error while fetching from api: ", error);
    throw error;
  }
};

//Hämtar jobb annonser efter vad man sökt på.
export const fetchJobsBySearchTerm = async (
  searchTerm: string
): Promise<IJobs> => {
  try {
    const response = await axios.get<IJobs>(BASE_URL, {
      params: {
        offset: 0,
        limit: 25,
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
export const getJob = async (id: number) => {
  return await get(`${BASE_URL}/${id}`);
};
