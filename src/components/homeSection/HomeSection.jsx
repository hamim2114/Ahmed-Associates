import { Link } from 'react-router-dom';
import './HomeSection.scss';
import { motion } from 'framer-motion';

const HomeSection = () => {
  return (
    <div className="home-sec">
      <div className="left">
        <motion.h1
          transition={{ duration: 1 }}
          initial={{ scale: 1.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
        >Always Uphold The Truth and Justice Of The Law.</motion.h1>
        <motion.p
          transition={{ duration: 1 }}
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo</motion.p>
        <motion.div
          transition={{ duration: 1 }}
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link to='/contact' className='home-btn'>Get Started</Link>
        </motion.div>
      </div>
      <motion.div
        transition={{ duration: 1 }}
        initial={{ scale: 1.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        className="right">
        <img src="/law.png" alt="" />
      </motion.div>
    </div>
  )
}

export default HomeSection