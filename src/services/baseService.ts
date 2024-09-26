import axios from "axios";

const BASE_URL = "https://jobsearch.api.jobtechdev.se/search";

//Hämtar alla annonser.
export const fetchAllJobs = async () => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        offset: 0,
        limit: 100,
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
export const fetchJobsBySearchTerm = async (searchTerm: string) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        offset: 0,
        limit: 100,
        q: searchTerm,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error while fetching from api: ", error);
    throw error;
  }
};
