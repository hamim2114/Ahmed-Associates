import './Achieve.scss';
import { GiScales, GiFlatHammer } from 'react-icons/gi';
import { HiBuildingLibrary } from 'react-icons/hi2';
import { GoGlobe } from 'react-icons/go';
import { motion } from 'framer-motion';


const Achieve = () => {
  return (
    <div className="achieve">
      <div className="top">
        <motion.h1
          transition={{ duration: 1 }}
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          
        >We’re not just lawyers,<br /> we’re advocates for justice.</motion.h1>
      </div>
      <div className="bottom">
        <motion.div
          transition={{ duration: 1 }}
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          
          className="bottom-sec">
          <div className="icon"><GiScales /></div>
          <div className="desc">
            <h2>Committed to excellence</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          </div>
        </motion.div>
        <motion.div
          transition={{ duration: 1 }}
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          
          className="bottom-sec">
          <div className="icon"><GiFlatHammer /></div>
          <div className="desc">
            <h2>Dedicated to the pursuit of justice</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          </div>
        </motion.div>
        <motion.div
          transition={{ duration: 1 }}
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          
          className="bottom-sec">
          <div className="icon"> <HiBuildingLibrary /></div>
          <div className="desc">
            <h2>Attorney for the people</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          </div>
        </motion.div>
        <motion.div
          transition={{ duration: 1 }}
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          
          className="bottom-sec">
          <div className="icon"><GoGlobe /></div>
          <div className="desc">
            <h2>We have years of experience</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Achieve;