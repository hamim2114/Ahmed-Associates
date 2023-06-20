import './Achieve.scss';
import { GiScales, GiFlatHammer } from 'react-icons/gi';
import { HiBuildingLibrary } from 'react-icons/hi2';
import { GoGlobe } from 'react-icons/go';


const Achieve = () => {
  return (
    <div className="achieve">
      <div className="top">
        <h1>We’re not just lawyers,<br /> we’re advocates for justice.</h1>
      </div>
      <div className="bottom">
        <div className="bottom-sec">
          <div className="icon"><GiScales /></div>
          <div className="desc">
            <h2>Committed to excellence</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          </div>
        </div>
        <div className="bottom-sec">
          <div className="icon"><GiFlatHammer /></div>
          <div className="desc">
            <h2>Dedicated to the pursuit of justice</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          </div>
        </div>
        <div className="bottom-sec">
          <div className="icon"> <HiBuildingLibrary /></div>
          <div className="desc">
            <h2>Attorney for the people</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          </div>
        </div>
        <div className="bottom-sec">
          <div className="icon"><GoGlobe /></div>
          <div className="desc">
            <h2>We have years of experience</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Achieve;