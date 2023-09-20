import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs'
import './Blog.scss';

const Blog = ({ blog }) => {

  return (
    <Link to={`/blog/${blog._id}`} className="blog">
      <div className="blog-img">
        <img src={blog.img || '/defaultBlog.jpg'} alt="" />
      </div>
      <div className="title">{blog.title.substring(0, 35)} ...</div>
      <div className="date-btn">
        <div className="date">{new Date(blog.createdAt).toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        })}</div>
        <button className="more-btn link">read more<BsArrowRight /> </button>
      </div>
    </Link>
  )
}

export default Blog