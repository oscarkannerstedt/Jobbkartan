import axios from "axios";

//Hämtar jobb annonser efter vad man sökt på.
export const fetchJobsBySearchTerm = async (searchTerm: string) => {
  try {
    const response = await axios.get(
      "https://jobsearch.api.jobtechdev.se/search",
      {
        params: {
          offset: 0,
          q: searchTerm,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error while fetching from api: ", error);
    throw error;
  }
};
