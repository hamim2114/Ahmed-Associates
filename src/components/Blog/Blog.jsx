import { Link } from 'react-router-dom';
import {BsArrowRight} from 'react-icons/bs'
import './Blog.scss';

const Blog = ({ blog }) => {
  return (
    <Link to='/blog/462471924t672810' className="blog">
      <div className="blog-img">
        <img src={blog.img} alt="" />
      </div>
      <div className="title">{blog.title.substring(0,45)} ...</div>
      <div className="user">
        <img src="/avatar.jpg" alt="" />
        <div className="name"><b>Barristar</b></div>
        <div className="date">Nov 11 2019</div>
      </div>
      <button className="more-btn link">read more<BsArrowRight/> </button>
    </Link>
  )
}

export default Blog