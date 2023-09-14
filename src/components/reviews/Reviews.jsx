import './Reviews.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import SliderContent from './SliderContent';
import { motion } from 'framer-motion'

const reviewData = [
  {
    img: '/reviewp1.jpg',
    review: "I had a fantastic experience with this law firm. They provided exceptional legal advice and representation. The team's dedication to my case was outstanding, and I couldn\'t have asked for better support. They truly care about their clients.",
    name: 'Alice Johnson',
    position: 'Corporate Executive'
  },
  {
    img: '/reviewp2.jpg',
    review: 'Working with this law firm was a game-changer for me. Their expertise and attention to detail were impressive. They went above and beyond to achieve a favorable outcome for my legal matter. I highly recommend their services.',
    name: 'John Smith',
    position: 'Small Business Owner'
  },
  {
    img: '/reviewp3.jpg',
    review: "I can\'t thank this law firm enough for their legal assistance. Their team's knowledge and professionalism are unmatched. They provided clear guidance throughout the legal process and helped me navigate a complex situation successfully.",
    name: 'Emily Davis',
    position: 'Individual Client'
  },
];


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