import { Link } from 'react-router-dom';
import './Jobs.scss';

const Jobs = ({job}) => {
  return (
    <Link to={`/jobs/${job._id}`} className="jobs">
      <h2>{job.title}</h2>
      <span><b>posted:</b>{new Date(job.createdAt).toLocaleDateString()}</span>
    </Link>
  )
}

export default Jobs;