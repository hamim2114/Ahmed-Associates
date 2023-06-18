import { Link } from 'react-router-dom';
import './Team.scss';
import { FaFacebook, FaLinkedin, FaPhone, FaTwitter } from 'react-icons/fa'

const Team = ({data}) => {
  return (
    <div className="team">
      <div className="up">
        <img src={data.img} alt="" />
      </div>
      <div className="down">
        <div className="name">{data.name}</div>
        <div className="title">Family Lawer</div>
        <div className="social">
          <Link to='https://www.fb.com' target='_blank' className='social-icon link'><FaFacebook/></Link>
          <Link className='social-icon link'><FaTwitter/></Link>
          <Link className='social-icon link'><FaLinkedin/></Link>
          <Link className='social-icon link'><FaPhone/></Link>
        </div>
      </div>
    </div>
  )
}

export default Team