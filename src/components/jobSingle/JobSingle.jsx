import { Link, useParams } from 'react-router-dom';
import parser from 'html-react-parser';
import './JobSingle.scss'
import { useQuery } from '@tanstack/react-query';
import { axiosReq } from '../../utils/axiosReq';

const JobSingle = () => {
  const { id } = useParams();
  const { isLoading, error, data: job } = useQuery({
    queryKey: ['single job'],
    queryFn: () => axiosReq.get(`/job/${id}`).then(res => res.data)
  });

  return (
    <>
      <div className="bg-img">
        <img src="/assistant.jpg" alt="" />
      </div>
      <div className="job-single">
        <div className="wrapper">
          {
            isLoading ? 'Loading..' : error ? 'Something went wrong!' :
              !job ? <h2 style={{ padding: '5rem', color: 'gray' }}>Job Not Found!</h2> :
                <>
                  <h1>{job.title}</h1>
                  <span>{new Date(job.createdAt).toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}</span>
                  <div className="text">
                    {parser(job.body)}
                  </div>
                  <Link to='mailto: aaassociates49@gmail.com' className='apply-btn'>Apply For This Job</Link>
                </>
          }
        </div>
      </div>
    </>
  )
}

export default JobSingle