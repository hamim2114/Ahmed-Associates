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
            <p><b>Court Chamber:</b>  Room No. 409 (3rd Floor), Annex Extension Building, Supreme Court Bar Association Building, Dhaka-1000</p>
            <p><b>Corporate Chamber:</b>  RSuite No. 16, Level-7 Kabbakos Super Market, Plot No. 3/D, Kawran Bazar, Tejgaon, Dhaka-1215.</p>
            <b>PHONE:</b>
            <span> +880255014178</span>
            <span>  +8801794876432</span>
            <span>  +8801732965736</span>
            <b>EMAIL:</b>
            <span>  aaassociates49@gmail.com</span>
            <span>  aaassociates13@yahoo.com</span>
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