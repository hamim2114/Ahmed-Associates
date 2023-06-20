import { Link } from 'react-router-dom';
import './Jobs.scss';

const Jobs = ({job}) => {
  return (
    <Link to='/jobs/legal-assistant' className="jobs">
      <h2>{job.title} <hr /></h2>
      <p>{job.desc}</p>
    </Link>
  )
}

export default Jobs;