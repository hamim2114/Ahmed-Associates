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
        >We are a law firm established in 2013, with a view to providing legal support to its valued clients in legal matters. The law firm has been formed with highly educated and brilliant professionals. They represent highest standards of expertise of different backgrounds. Their only aim is to offer unrivalled depth of legal resources across Bangladesh.</motion.p>
        <motion.div
          transition={{ duration: 1 }}
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link to='/about' className='home-btn'>Learn More</Link>
        </motion.div>
      </div>
      <motion.div
        transition={{ duration: 1 }}
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        className="right">
        <img src="/law.png" alt="" />
      </motion.div>
    </div>
  )
}

export default HomeSection