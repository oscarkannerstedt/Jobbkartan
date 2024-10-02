import { getJob } from "../services/baseService";
import { getJobsFromLocalStorage } from "../utils/localstorageUtils";
import { Params } from "react-router-dom";

interface IJobLoader {
  params: Params<string>;
}

export const jobLoader = async ({ params }: IJobLoader) => {
  const id = params.id;
  if (id) {
    const savedJobs = getJobsFromLocalStorage();
    const jobFromStorage = savedJobs.find((job) => job.id === id);
    if (jobFromStorage) {
      return jobFromStorage;
    }

    const job = await getJob(parseInt(id));
    return job.data;
  }
  return null;
};
