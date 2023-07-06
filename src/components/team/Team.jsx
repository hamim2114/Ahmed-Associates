import { Link } from 'react-router-dom';
import './Team.scss';
import { FaFacebook, FaLinkedin, FaMailchimp, FaPhone, FaTwitter } from 'react-icons/fa'
import {IoIosArrowDown} from 'react-icons/io';
import {GrMail} from 'react-icons/gr';

const Team = ({data}) => {

  return (
    <div className="team">
      <div className="up">
        <img src={data.img || '/noavatar.png'} alt="team" />
      </div>
      <div className="down">
        <div className="name">{data.name}</div>
        <div className="title">{data.title}</div>
        <div className="arrow"><IoIosArrowDown/></div>
        <div className="social">
          <Link to={`mailto:${data.email}`} className='social-icon link'><GrMail size={21}/></Link>
          <a href={`http://${data.facebook}`} target='_blank' rel="noopener noreferrer" className='social-icon link'><FaFacebook/></a>
          <Link to={`tel:${data.phone}`} className='social-icon link'><FaPhone/></Link>
        </div>
      </div>
    </div>
  )
}

export default Team