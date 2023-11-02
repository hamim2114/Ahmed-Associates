import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs'
import './News.scss';

const News = ({ news }) => {

  return (
    <Link to={`/news/${news._id}`} className="news">
      <div className="blog-img">
        {/* <img src={news.img || '/news.jpg'} alt="" /> */}
      </div>
      <div className="title">{news.title.substring(0, 35)} ...</div>
      <div className="date-btn">
        <div className="date">{new Date(news.createdAt).toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        })}</div>
        <button className="more-btn link">read more<BsArrowRight /> </button>
      </div>
    </Link>
  )
}

export default News