import { Link, useParams } from 'react-router-dom';
import './SingleBlogPage.scss';
import { BsArrowLeft } from 'react-icons/bs';
import { MdOutlineAccessTimeFilled } from 'react-icons/md';
import parser from 'html-react-parser';
import { FaUser, FaTag } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';
import { axiosReq } from '../utils/axiosReq';

const SingleBlogPage = () => {
  const { id } = useParams();
  const { isLoading, error, data: blog } = useQuery({
    queryKey: ['single blog'],
    queryFn: () => axiosReq.get(`/blog/${id}`).then(res => res.data)
  });

  return (
    <>
      {
        isLoading ? 'Loading..' : error ? 'Something went wrong!' :
          !blog ? <h2 style={{ padding: '5rem', color: 'gray' }}>Blog Not Found!</h2> :
            <>
              <div className="blog-bg-img">
                <img src={blog.img || '/blogBg.jpg'} alt="" />
              </div>
              <div className="blog-single">
                <div className="wrapper">
                  <h1>{blog.title} <hr /></h1>
                  <div className='info'>
                    <div className="time"><MdOutlineAccessTimeFilled /> {new Date(blog.createdAt).toLocaleDateString()}</div>
                  </div>
                  <div className="text">
                    {parser(blog.body)}
                  </div>
                  <Link to='/blog' className='back-arrow'><BsArrowLeft />Back to blog</Link>
                </div>
              </div>
            </>
      }
    </>

  )
}

export default SingleBlogPage