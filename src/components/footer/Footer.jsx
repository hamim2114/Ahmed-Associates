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
            <p>We always pro-active, constructive and endeavours to provide best and quality legal services to its clients. Ahmed & Ahmed Associates is professional, dedicated, accommodative and work to achieve the best results and meet clients’ legal needs and thus ensures his relief and comfort from agonies and anxieties.</p>
          </div>
          <div className="footer-links">
            <h1 className='h1'>Quick Links</h1>
            <Link to='/' className="footer-link">Home <LuArrowUpRight /></Link>
            <Link to='/about' className="footer-link">About Us <LuArrowUpRight /></Link>
            <Link to='/practice-areas' className="footer-link">Practice Areas <LuArrowUpRight /></Link>
            <Link to='/team' className="footer-link">Our Team <LuArrowUpRight /></Link>
            <Link to='/blog' className="footer-link">Blog <LuArrowUpRight /></Link>
            <Link to='/career' className="footer-link">Career <LuArrowUpRight /></Link>
            <Link to='/contact' className="footer-link">Contact <LuArrowUpRight /></Link>
          </div>
          <div className="footer-contact">
            <h1 className='contact-h1'>Contact Us</h1>
            <p><b>Court Chamber:</b>Room # 409 (3rd Floor),
                  Annex Extension Building,
                  Supreme Court Bar Association,
                  Dhaka-1000
            </p>
            <p><b>Evening Chamber:</b>Suit # 16, Level-07,
              Kabbokash Super Market,
              Plot # 3-D, Kawran Bazar,Dhaka - 1215.
            </p>
            <b>PHONE:</b>
            <span> +880255014178</span>
            <span>  +8801794876432</span>
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