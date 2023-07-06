import './About.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { axiosReq } from '../../utils/axiosReq';

const About = () => {
  const { isLoading, error, data: gallery } = useQuery({
    queryKey: ['gallery'],
    queryFn: () => axiosReq.get('/gallery').then(res => res.data)
  });
 
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="about-main">
      <div className="about">
        <div className="slider-main">
          <Slider className='slider' {...settings}>
            {
              isLoading ? <div>Loading..</div> : error ? <div>Something went wrong!</div> :
                gallery.map((data, i) => (
                  <div className='slider-img' key={i}><img src={data.image} alt="" /></div>
                ))
            }
          </Slider>
        </div>
        <div className="about-txt">
          <h1>About Us</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio numquam alias modi ipsam reiciendis beatae. Temporibus maiores laboriosam culpa facilis dolores voluptate labore, quidem fugit architecto corrupti, aliquid dolore nesciunt.Odio numquam alias modi ipsam reiciendis beatae. Temporibus maiores laboriosam culpa facilis dolores voluptate labore.Odio numquam alias modi ipsam reiciendis beatae. Temporibus maiores laboriosam culpa facilis dolores voluptate labore, quidem fugit architecto corrupti, aliquid dolore nesciunt.</p>
          <Link to='/contact' className='about-btn'>More About Us</Link>
        </div>
      </div>
    </div>
  )
}

export default About