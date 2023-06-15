import './About.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About = () => {
  var settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <div className="about-main">
      <div className="about">
        <div className="slider-main">
          <Slider className='slider' {...settings}>
            <div className='slider-img'><img src="/img1.jpg" alt="" /></div>
            <div className='slider-img'><img src="/img2.jpg" alt="" /></div>
            <div className='slider-img'><img src="/img3.jpg" alt="" /></div>
          </Slider>
        </div>
        <div className="about-txt">
          <h1>About Us</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio numquam alias modi ipsam reiciendis beatae. Temporibus maiores laboriosam culpa facilis dolores voluptate labore, quidem fugit architecto corrupti, aliquid dolore nesciunt.Odio numquam alias modi ipsam reiciendis beatae. Temporibus maiores laboriosam culpa facilis dolores voluptate labore.Odio numquam alias modi ipsam reiciendis beatae. Temporibus maiores laboriosam culpa facilis dolores voluptate labore, quidem fugit architecto corrupti, aliquid dolore nesciunt.</p>
          <button className='about-btn'>More About Us</button>
        </div>
      </div>
    </div>
  )
}

export default About