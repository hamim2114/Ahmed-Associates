import './HomePage.scss';
import { BsArrowRight } from 'react-icons/bs'
import HomeSection from '../components/homeSection/HomeSection'
import WelcomeSec from '../components/welcomeSec/WelcomeSec'
import Reviews from '../components/reviews/Reviews'
import Blog from '../components/Blog/Blog'
import { Link } from 'react-router-dom';
import Achieve from '../components/achieve/Achieve';
import { useQuery } from '@tanstack/react-query';
import { axiosReq } from '../utils/axiosReq';

const HomePage = () => {
  const { isLoading, error, data: blogData } = useQuery({
    queryKey: ['blogs-home'],
    queryFn: () => axiosReq.get('/blog').then(res => res.data)
  });
  
  return (
    <div>
      <HomeSection />
      <WelcomeSec />
      <Achieve />
      <Reviews />
      {
        blogData?.length > 0 && <div className="blog-sec">
          <h1>Some From Our Blog</h1>
          <div className="blog-data">
            {blogData?.slice(0, 3).map((blog, index) => (
              <Blog blog={blog} key={index} />
            ))}
          </div>
          <Link to='/blog' className="more-blog-btn link">Our Blog<BsArrowRight /> </Link>
        </div>
      }
    </div>
  )
}

export default HomePage