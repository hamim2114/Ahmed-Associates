import './JobPage.scss';
import Jobs from '../components/jobs/Jobs';
import { useQuery } from '@tanstack/react-query';
import { axiosReq } from '../utils/axiosReq';

const JobPage = () => {
  const { isLoading, error, data: jobData } = useQuery({
    queryKey: ['jobs'],
    queryFn: () => axiosReq.get('/job').then(res => res.data)
  });

  return (
    <div className='job-page'>
      <div className="top">
        <div className="jobbg">
          <img src="/assistant.jpg" alt="" />
        </div>
        <div className="intro">
          <h1>JOB OPENINGS </h1>
          <p>Explore our job openings and employment opportunities, and come work with us. Advance your career, grow, and learn from our experienced team of attorneys and legal staff.</p>
        </div>
      </div>
      <div className="bottom">
        <h1>AVAILABLE JOBS <hr /></h1>
        <div className="wrapper">
            {
              isLoading ? 'Loading..' : error ? 'Something went wrong!' :
              jobData.length === 0 ? <h2 style={{ padding: '5rem', color: 'gray' }}>No Job Available.</h2> :
              jobData.map((data, i) => (
                <Jobs job={data} key={i} />
              ))
            }
        </div>
      </div>
    </div>
  )
}

export default JobPage