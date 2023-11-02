import { Link, useParams } from 'react-router-dom';
import './SingleNewsPage.scss';
import { BsArrowLeft } from 'react-icons/bs';
import { MdOutlineAccessTimeFilled } from 'react-icons/md';
import parser from 'html-react-parser';
import { FaUser, FaTag } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';
import { axiosReq } from '../utils/axiosReq';

const SingleNewsPage = () => {
  const { id } = useParams();
  const { isLoading, error, data: news } = useQuery({
    queryKey: ['single news'],
    queryFn: () => axiosReq.get(`/news/${id}`).then(res => res.data)
  });

  return (
    <>
      {
        isLoading ? 'Loading..' : error ? 'Something went wrong!' :
          !news ? <h2 style={{ padding: '5rem', color: 'gray' }}>News Not Found!</h2> :
            <>
              <div className="blog-bg-img">
                {/* <img src={news.img || '/news.jpg'} alt="" /> */}
              </div>
              <div className="news-single">
                <div className="wrapper">
                  <h1 className='news-title'>{news.title} <hr /></h1>
                  <div className='info'>
                    <div className="time"><MdOutlineAccessTimeFilled /> {new Date(news.createdAt).toLocaleDateString('en-GB', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}</div>
                  </div>
                  <div className="text">
                    {parser(news.body)}
                  </div>
                  <Link to='/news' className='back-arrow'><BsArrowLeft />Back to News</Link>
                </div>
              </div>
            </>
      }
    </>

  )
}

export default SingleNewsPage