import './HomePage.scss';
import {BsArrowRight} from 'react-icons/bs'
import HomeSection from '../components/homeSection/HomeSection'
import WelcomeSec from '../components/welcomeSec/WelcomeSec'
import Reviews from '../components/reviews/Reviews'
import { blogData } from '../data/blogData'
import Blog from '../components/Blog/Blog'
import { Link } from 'react-router-dom';
import Achieve from '../components/achieve/Achieve';

const HomePage = () => {
  return (
    <div>
      <HomeSection />
      <WelcomeSec />
      <Achieve/>
      <Reviews />
      <div className="blog-sec">
        <h1>Some From Our Blog</h1>
        <div className="blog-data">
          {blogData.slice(0, 3).map((blog, index) => (
            <Blog blog={blog} key={index} />
          ))}
        </div>
        <Link to='/blog' className="more-blog-btn link">Our Blog<BsArrowRight/> </Link>
      </div>
    </div>
  )
}

export default HomePage