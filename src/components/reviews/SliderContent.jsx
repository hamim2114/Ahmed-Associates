import './SliderContent.scss';

const SliderContent = ({review}) => {
  return (
    <div className='slider-content'>
          <div className="img">
            <img src={review.img} alt="" />
          </div>
          <p><i>`` {review.review} ``</i></p>
          <h4>{review.name}</h4>
          <span>{review.position}</span>
        </div>
  )
}

export default SliderContent