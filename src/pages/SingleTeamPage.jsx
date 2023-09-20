import { Link, useParams } from 'react-router-dom';
import './SingleTeamPage.scss';
import { BsArrowLeft } from 'react-icons/bs';
import { MdOutlineAccessTimeFilled } from 'react-icons/md';
import parser from 'html-react-parser';
import { FaUser, FaTag } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';
import { axiosReq } from '../utils/axiosReq';

const SingleTeamPage = () => {
  const { id } = useParams();
  const { isLoading, error, data: team } = useQuery({
    queryKey: ['single team'],
    queryFn: () => axiosReq.get(`/team/${id}`).then(res => res.data)
  });

  return (
    <>
      {
        isLoading ? 'Loading..' : error ? 'Something went wrong!' :
          !team ? <h2 style={{ padding: '5rem', color: 'gray' }}>Not Found!</h2> :
            <>
              <div className="blog-single">
                <div className="wrapper">
                  <h1>{team.name} <hr /></h1>
                  <p style={{marginBottom: '20px'}}>{team.title}</p>
                  <img style={{width: '150px'}} src="/avatar.jpg" alt="" />
                  <div className='info'>
                  </div>
                  <div className="text">
                    {parser(team.desc)}
                  </div>
                  <Link to='/team' className='back-arrow'><BsArrowLeft />Back to team</Link>
                </div>
              </div>
            </>
      }
    </>

  )
}

export default SingleTeamPage