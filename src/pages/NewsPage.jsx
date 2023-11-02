import './NewsPage.scss';
import Blog from '../components/Blog/Blog'
import { useQuery } from '@tanstack/react-query';
import { axiosReq } from '../utils/axiosReq';
import {motion} from 'framer-motion';
import News from '../components/news/News';

const NewsPage = () => {
  const { isLoading, error, data: blogData } = useQuery({
    queryKey: ['news'],
    queryFn: () => axiosReq.get('/news').then(res => res.data)
  });

  return (
    <div className='news-page'>
      <div className="intro">
        <div className="blogBg">
          {/* <img src="/blogBg.jpg" alt="" /> */}
        </div>
        <h1>News <hr /></h1>
      </div>
      <div className="container">
        {
          isLoading ? 'Loading..' : error ? 'Something went wrong!' :
            blogData.length === 0 ? <h2 style={{ padding: '5rem', color: 'gray' }}>News Empty.</h2> :
              blogData.map((news, index) => (
                <motion.div
                  key={index}
                  transition={{ duration: 1, delay: index * .4 }}
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <News news={news} />
                </motion.div>
              ))
        }
      </div>
    </div>
  )
}

export default NewsPage