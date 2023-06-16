import './BlogPage.scss';
import Blog from '../components/Blog/Blog'
import { blogData } from '../data/blogData'

const BlogPage = () => {
  return (
    <div className='blog-page'>
      <h1>From Our Blog <hr /></h1>
      <div className="container">
        {blogData.map((blog, index) => (
          <Blog blog={blog} key={index}/>
        ))}
      </div>
    </div>
  )
}

export default BlogPage