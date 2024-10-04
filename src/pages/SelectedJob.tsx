import ShowJob from '../components/ShowJob';
//import { useLoaderData } from 'react-router-dom';
import { IJob } from '../models/IJob';
import { DigiLayoutBlock } from '@digi/arbetsformedlingen-react';
import BackButton from '../components/BackButton';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useJobs } from '../hooks/useJobs';
import { getJob } from '../services/baseService';

const SelectedJob = () => {
  const { id } = useParams<{ id: string }>();
	const { jobs } = useJobs();
  const [job, setJob] = useState<IJob | null>(null); // if api-get
	const [loading, setLoading] = useState(true);
	//const currentJob = useLoaderData() as IJob | null;

	useEffect(() => {
		const fetchJob = async () => {
			console.log('JobId från params', id);

			if (!id) {
				setLoading(false);
				return;
			}

			const foundJob = jobs.find((job) => job.id === id);
			console.log('found job from context', foundJob);

			if (foundJob) {
				setJob(foundJob);
				setLoading(false);
			} else {
				try {
					const jobData = await getJob(parseInt(id));
					console.log('APIjob, job.data', jobData);
					setJob(jobData.data);
				} catch (error) {
					console.error('Error fetching job:', error);
				} finally {
					setLoading(false);
				}
			}
		};

		fetchJob();
	}, [id, jobs]);

  
	useEffect(() => {
    if (job) {
      document.title = `${job.headline}`;
		} else {
      document.title = 'Kunde inte hitta annonsen';
		}
		return () => {
      document.title = 'Jobbkartan';
		};
	}, [job]);
  
  if (loading) {
    return <div>Laddar...</div>;
  }

	return (
		<>
			<DigiLayoutBlock afVerticalPadding={true}>
				<BackButton />
				{job ? (
					<ShowJob job={job} />
				) : (
					<p>Kunde inte hitta annonsen</p>
				)}
			</DigiLayoutBlock>
		</>
	);
};

export default SelectedJob;
