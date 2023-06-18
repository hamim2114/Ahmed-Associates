import Team from '../components/team/Team';
import { teamData } from '../data/teamData';
import './TeamPage.scss';

const TeamPage = () => {
  return (
    <div className="team-page">
      <span>Qualified Attorneys</span>
      <h1>Our Expert Lowyers</h1>
      <div className="wrapper">
        {
          teamData.map((data, i) => (
            <Team data={data} key={i}/>
          ))
        }
      </div>
    </div>
  )
}

export default TeamPage