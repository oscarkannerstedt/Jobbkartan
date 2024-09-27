import axios from "axios";
import { IJobs } from "../models/IJobs";

const BASE_URL = "https://jobsearch.api.jobtechdev.se/search";

//Hämtar alla annonser.
export const fetchAllJobs = async (): Promise<IJobs> => {
  try {
    const response = await axios.get<IJobs>(BASE_URL, {
      params: {
        offset: 0,
        limit: 10,
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
        limit: 10,
        q: searchTerm,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error while fetching from api: ", error);
    throw error;
  }
};
