import { Link } from 'react-router-dom'
import './Footer.scss'
import { LuArrowUpRight } from 'react-icons/lu'

const Footer = () => {
  return (
    <div className="footer-main">
      <div className="footer">
        <div className="footer-top">
          <div className="footer-info">
            <img src="/ahmedwhite.png" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores iure possimus ab voluptates, inventore earum.</p>
          </div>
          <div className="footer-links">
            <h1>Quick Links</h1>
            <Link to='/' className="footer-link">Home <LuArrowUpRight /></Link>
            <Link to='/about' className="footer-link">About Us <LuArrowUpRight /></Link>
            <Link to='/practice-areas' className="footer-link">Practice Areas <LuArrowUpRight /></Link>
            <Link to='/team' className="footer-link">Our Team <LuArrowUpRight /></Link>
            <Link to='/blog' className="footer-link">Blog <LuArrowUpRight /></Link>
            <Link to='/career' className="footer-link">Career <LuArrowUpRight /></Link>
            <Link to='/contact' className="footer-link">Contact <LuArrowUpRight /></Link>
          </div>
          <div className="footer-contact">
            <h1>Contact Us</h1>
            <p><b>LOCATION:</b>  Office: Suit # 16, (6th Floor), level 7,Kabbokas Super Market, Plot # 3/D, Kawran Bazar, Dhaka-1205 1215 Dhaka, Dhaka Division, Bangladesh</p>
            <span><b>PHONE:</b>  02-55014178</span>
            <span><b>EMAIL:</b>  aaassociates49@gmail.com</span>
          </div>
        </div>
        <hr />
        <div className="footer-bottom">
          <span>© Copyright 2023 | Ahmed & Ahmed Associates | All right reserved.</span>
        </div>
      </div>
    </div>
  )
}

export default Footer