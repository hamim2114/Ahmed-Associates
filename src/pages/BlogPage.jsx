import './BlogPage.scss';
import Blog from '../components/Blog/Blog'
// import { blogData } from '../data/blogData'
import { useQuery } from '@tanstack/react-query';
import { axiosReq } from '../utils/axiosReq';

const BlogPage = () => {
  const { isLoading, error, data: blogData } = useQuery({
    queryKey: ['blogs'],
    queryFn: () => axiosReq.get('/blog').then(res => res.data)
  });

  return (
    <div className='blog-page'>
      <div className="intro">
        <div className="blogBg">
          <img src="/blogBg.jpg" alt="" />
        </div>
        <h1>Our Blog <hr /></h1>
      </div>
      <div className="container">
        {
          isLoading ? 'Loading..' : error ? 'Something went wrong!' :
            blogData.length === 0 ? <h2 style={{ padding: '5rem', color: 'gray' }}>Blog Empty.</h2> :
              blogData.map((blog, index) => (
                <Blog blog={blog} key={index} />
              ))
        }
      </div>
    </div>
  )
}

export default BlogPage