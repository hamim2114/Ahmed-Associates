import { useState } from 'react'
import './Navbar.scss'
import { BiPhone } from 'react-icons/bi'
import { GrMail } from 'react-icons/gr'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { pathname } = useLocation();
  return (
    <div className='nav'>
      <div className="nav-up">
        <div className="nav-call">
          <BiPhone />
          <span>02-55014178</span>
        </div>
        <div className="nav-mail">
          <GrMail />
          <span>aaassociates49@gmail.com</span>
        </div>
      </div>
      <div className="nav-down">
        <div className="nav-logo">
          <img src="/ahmed.png" alt="" />
        </div>
        <ul style={{transform: `${nav ? 'translateX(0)' : ''}`}} onClick={() => setNav(p=> !p)}>
          <Link to='/' className={`link ${pathname === '/' ? 'active' : ''}`}>Home</Link>
          <Link to='/about' className={`link ${pathname === '/about' ? 'active' : ''}`}>About Us</Link>
          <Link to='/practice-areas' className={`link ${pathname === '/practice-areas' ? 'active' : ''}`}>Practice Areas</Link>
          <Link to='/team' className={`link ${pathname === '/team' ? 'active' : ''}`}>Our Team</Link>
          <Link to='/blog' className={`link ${pathname === '/blog' ? 'active' : ''}`}>Blog</Link>
          <Link to='' className='link '>Career</Link>
          <Link to='' className='link '>Contact</Link>
        </ul>
        <div className="nav-btn">
          <div className={`nav-btn-line ${nav ? 'active' : ''}`} onClick={() => setNav(p=> !p)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar