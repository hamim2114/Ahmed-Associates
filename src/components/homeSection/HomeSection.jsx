import { Link } from 'react-router-dom';
import './HomeSection.scss';

const HomeSection = () => {
  return (
    <div className="home-sec">
      <div className="left">
        <h1>Always Uphold The Truth and Justice Of The Law.</h1>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo</p>
        <Link to='/contact' className='home-btn'>Get Started</Link>
      </div>
      <div className="right">
        <img src="/law.png" alt="" />
      </div>
    </div>
  )
}

export default HomeSection