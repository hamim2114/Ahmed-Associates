import './Blog.scss';

const Blog = ({ blog }) => {
  return (
    <div className="blog">
      <div className="blog-img">
        <img src={blog.img} alt="" />
      </div>
      <div className="title">{blog.title}</div>
      <div className="user">
        <img src="/avatar.jpg" alt="" />
        <div className="name"><b>Barristar</b></div>
        <div className="date">Nov 11 2019</div>
      </div>
    </div>
  )
}

export default Blog