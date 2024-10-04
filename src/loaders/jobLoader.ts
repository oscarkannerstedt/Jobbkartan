// import { getJob } from '../services/baseService';

// // interface IJobLoader {
// // 	params: Params<string>;
// // 	jobs: IJob[];
// // }

// export const jobLoader = async () => {
// 	const id = params.id;

// 	if (!id) {
// 		return null;
// 	}

// 	const numericId = parseInt(id);
// 	if (isNaN(numericId)) {
// 		return null;
// 	}

// 	try {
// 		const job = await getJob(numericId);
// 		return job.data;
// 	} catch (error) {
// 		console.error('Error fetching job:', error);
// 		return null;
// 	}
// };
