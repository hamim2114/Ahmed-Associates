import './WelcomeSec.scss'
import { motion } from 'framer-motion'

const WelcomeSec = () => {
  return (
    <div className="welcome-sec">
      <div className="wrapper">
        <motion.h1
          transition={{ duration: 1 }}
          initial={{ scale: 1.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
        >Welcome to Ahmed and Ahmed Associates <br /> - Providing Legal Help</motion.h1>
        <span>(Barristers, Advocates, Tax & Company Law Consultants)</span>
        <hr />
        <motion.p
          transition={{ duration: 1 }}
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >We always pro-active, constructive and endeavours to provide best and quality legal services to its clients. Ahmed & Ahmed Associates is professional, dedicated, accommodative and work to achieve the best results and meet clients’ legal needs and thus ensures his relief and comfort from agonies and anxieties. </motion.p>
      </div>
    </div>
  )
}

export default WelcomeSec