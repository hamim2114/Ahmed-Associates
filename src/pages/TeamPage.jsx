import { useQuery } from '@tanstack/react-query';
import Team from '../components/team/Team';
import './TeamPage.scss';
import { axiosReq } from '../utils/axiosReq';
import { motion } from 'framer-motion'

const TeamPage = () => {
  const { isLoading, error, data: teamData } = useQuery({
    queryKey: ['team'],
    queryFn: () => axiosReq.get('/team').then(res => res.data)
  });

  return (
    <div
      className="team-page">
      <span>Qualified Attorneys</span>
      <h1>MEMBERS OF ASSOCIATES</h1>
      <div className="wrapper">
        {
          isLoading ? 'Loading..' : error ? 'Something went wrong!' :
            teamData.length === 0 ? <h2 style={{ padding: '5rem', color: 'gray' }}>Team Empty.</h2> :
              teamData.map((data, i) => (
                <div key={i}>
                  <Team data={data} key={i} />
                </div>
              ))
        }
      </div>
    </div>
  )
}

export default TeamPage