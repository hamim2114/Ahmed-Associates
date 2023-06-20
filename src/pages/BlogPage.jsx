import './BlogPage.scss';
import Blog from '../components/Blog/Blog'
import { blogData } from '../data/blogData'

const BlogPage = () => {
  return (
    <div className='blog-page'>
      <div className="intro">
        <div className="blogBg">
          <img src="/blogBg.jpg" alt="" />
        </div>
        <h1>Our Blog <hr /></h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti maxime fugit non voluptates officia eveniet magnam quia obcaecati doloremque vero.</p>
      </div>
      <div className="container">
        {blogData.map((blog, index) => (
          <Blog blog={blog} key={index} />
        ))}
      </div>
    </div>
  )
}

export default BlogPage