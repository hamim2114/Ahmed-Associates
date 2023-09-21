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
    <motion.div
      transition={{ duration: 1 }}
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      className="team-page">
      <span>Qualified Attorneys</span>
      <h1>MEMBERS OF ASSOCIATES</h1>
      <div className="wrapper">
        {
          isLoading ? 'Loading..' : error ? 'Something went wrong!' :
            teamData.length === 0 ? <h2 style={{ padding: '5rem', color: 'gray' }}>Team Empty.</h2> :
              teamData.map((data, i) => (
                <motion.div
                  key={i}
                  transition={{ duration: 1, delay: i * .4 }}
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <Team data={data} key={i} />
                </motion.div>
              ))
        }
      </div>
    </motion.div>
  )
}

export default TeamPage