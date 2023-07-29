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
        <span>Experience . Reliability . Ethics</span>
        <hr />
        <motion.p
          transition={{ duration: 1 }}
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</motion.p>
      </div>
    </div>
  )
}

export default WelcomeSec