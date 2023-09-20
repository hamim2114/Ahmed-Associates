import { Link } from 'react-router-dom';
import './Team.scss';
import { FaFacebook, FaLinkedin, FaMailchimp, FaPhone, FaTwitter } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io';
import { BsArrowRightShort } from 'react-icons/bs';

const Team = ({ data }) => {

  return (
    <div className="team">
      <Link className='link' to={`/team/${data._id}`}>
        <div className="up">
          <img src={data.img || '/noavatar.png'} alt="team" />
        </div>
        <div className="down">
          <div className="name">{data.name}</div>
          <div className="title">{data.title}</div>
          <button className='details-btn'>Details <BsArrowRightShort size={25}/></button>
        </div>
      </Link>
    </div>
  )
}

export default Team