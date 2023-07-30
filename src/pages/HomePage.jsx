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
import { motion } from 'framer-motion';

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

        <div className="blog-sec">
          <motion.h1
            transition={{ duration: 1 }}
            initial={{ scale: 1.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
          >Some From Our Blog</motion.h1>
          <div className="blog-data">
            {isLoading ? 'Loading..' : blogData?.slice(0, 3).map((blog, index) => (
              <motion.div
                key={index}
                transition={{ duration: 1, delay: index * .4 }}
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
              >
                <Blog blog={blog} />
              </motion.div>
            ))}
          </div>
          <Link to='/blog' className="more-blog-btn link">Our Blog<BsArrowRight /> </Link>
        </div>
      
    </div>
  )
}

export default HomePage