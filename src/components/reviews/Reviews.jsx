import './Reviews.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import SliderContent from './SliderContent';
import { motion } from 'framer-motion'

const reviewData = [
  {
    img: '/reviewp1.jpg',
    review: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour variations of passages',
    name: 'Eliza Gordon',
    position: 'Business Manager'
  },
  {
    img: '/reviewp2.jpg',
    review: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour variations of passages',
    name: 'Frankie Rehardson',
    position: 'Business Manager'
  },
  {
    img: '/reviewp3.jpg',
    review: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour variations of passages',
    name: 'Zachary Hervey',
    position: 'Business Manager'
  },
]

const Reviews = () => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false
  };
  return (
    <div className="review-main">
      <div
        className="review">
        <h1>Client Testimonials</h1>
        <Slider {...settings} className="slider">
          {reviewData.map((review, i) => (
            <SliderContent review={review} key={i} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Reviews