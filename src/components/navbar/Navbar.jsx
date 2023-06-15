import './Navbar.scss'
import {BiPhone} from 'react-icons/bi'
import {GrMail} from 'react-icons/gr'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const {pathname} = useLocation();
  return (
    <div className='nav'>
      <div className="nav-up">
        <div className="nav-call">
          <BiPhone/>
          <span>02-55014178</span>
        </div>
        <div className="nav-mail">
          <GrMail/>
          <span>aaassociates49@gmail.com</span>
        </div>
      </div>
      <div className="nav-down">
        <div className="nav-logo">
          <img src="/ahmed.png" alt="" />
        </div>
        <ul>
          <Link to='/' className={`link ${pathname === '/' ? 'active' : ''}`}>Home</Link>
          <Link to='/about' className={`link ${pathname === '/about' ? 'active' : ''}`}>About-Us</Link>
          <Link to='' className='link '>Practice-Areas</Link>
          <Link to='' className='link '>Our-Team</Link>
          <Link to='' className='link '>Career</Link>
          <Link to='' className='link '>Contact</Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar