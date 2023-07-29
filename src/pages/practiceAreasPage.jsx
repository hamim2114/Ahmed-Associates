import React from 'react'
import PracticeAreas from '../components/practiceAreas/PracticeAreas';
import { motion } from 'framer-motion';

const practiceData = [
  {
    title: 'Family Law',
    desc: 'I must explain to you how all this mistaken idea of denouncing pleasure and praising pain'
  },
  {
    title: 'Personal Injury',
    desc: 'I must explain to you how all this mistaken idea of denouncing pleasure and praising pain'
  },
  {
    title: 'Criminal Law',
    desc: 'I must explain to you how all this mistaken idea of denouncing pleasure and praising pain'
  },
  {
    title: 'Education Law',
    desc: 'I must explain to you how all this mistaken idea of denouncing pleasure and praising pain'
  },
  {
    title: 'Real Estate Law',
    desc: 'I must explain to you how all this mistaken idea of denouncing pleasure and praising pain'
  },
  {
    title: 'Business Law',
    desc: 'I must explain to you how all this mistaken idea of denouncing pleasure and praising pain'
  },
]

const practiceAreasPage = () => {
  return (
    <div className="practice">
      <div className="wrapper">
        <div className="top">
          <motion.span
            transition={{ duration: 4 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >How Can We Help You</motion.span>
          <motion.h1
            transition={{ duration: 1 }}
            initial={{ scale: 1.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
          >Our Legal Practice Area</motion.h1>
          <motion.p
            transition={{ duration: 1 }}
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</motion.p>
        </div>
        <div className="bottom">
          {
            practiceData.map((d, i) => (
              <motion.div
                key={i}
                transition={{ duration: 1, delay: i * .4 }}
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
              >
                <PracticeAreas data={d} id={i} />
              </motion.div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default practiceAreasPage