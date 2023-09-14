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
          initial={{ scale: 1.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
        >
          We’re not just lawyers, <br /> we’re advocates for justice.
        </motion.h1>
      </div>
      <div className="bottom">
        <motion.div
          transition={{ duration: 1 }}
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="bottom-sec"
        >
          <div className="icon">
            <GiScales />
          </div>
          <div className="desc">
            <h2>Committed to Legal Excellence</h2>
            <p>
              Our commitment to legal excellence is unwavering. We provide
              top-notch legal representation to our clients, ensuring their
              rights and interests are protected.
            </p>
          </div>
        </motion.div>
        <motion.div
          transition={{ duration: 1 }}
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="bottom-sec"
        >
          <div className="icon">
            <GiFlatHammer />
          </div>
          <div className="desc">
            <h2>Dedicated to the Pursuit of Justice</h2>
            <p>
              We are dedicated to the pursuit of justice for our clients. Our
              legal team works tirelessly to ensure that justice is served in
              every case we handle.
            </p>
          </div>
        </motion.div>
        <motion.div
          transition={{ duration: 1 }}
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="bottom-sec"
        >
          <div className="icon">
            <HiBuildingLibrary />
          </div>
          <div className="desc">
            <h2>Attorneys for the People</h2>
            <p>
              As attorneys for the people, we are committed to serving the
              community. We provide legal guidance and support to individuals
              and businesses alike.
            </p>
          </div>
        </motion.div>
        <motion.div
          transition={{ duration: 1 }}
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="bottom-sec"
        >
          <div className="icon">
            <GoGlobe />
          </div>
          <div className="desc">
            <h2>Years of Legal Experience</h2>
            <p>
              With years of experience in the legal field, we have the
              knowledge and expertise needed to navigate complex legal issues
              successfully.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Achieve;
