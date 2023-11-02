import './Contact.scss';
import { useForm } from '@formspree/react';
import { IoLocationSharp } from 'react-icons/io5';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { BsFillBuildingFill } from 'react-icons/bs';

const Contact = () => {
  const [state, handleSubmit] = useForm("xqkvzoqq");
  if (state.succeeded) {
    return <h2 style={{ color: 'green', padding: '5rem' }}>Thanks for make Appointment! We will contact you soon.</h2>;
  }
  return (
    <div className="contact-main">
      <div className="wrapper">
        <div className="left">
          <h1>Do You Need An Advice From Professional Lawyer?</h1>
          <p>Our dedicated legal team is here to provide you with expert legal advice and support.</p>
          <div className="contact">
            <div className="contact-sec">
              <div className="icon"><IoLocationSharp /></div>
              <div className="address">
                <h3>Court Chamber:</h3>
                <p>Room # 409 (3rd Floor),
                  Annex Extension Building,
                  Supreme Court Bar Association,
                  Dhaka-1000
                </p>
              </div>
            </div>
            <div className="contact-sec">
              <div className="icon"><BsFillBuildingFill /></div>
              <div className="address">
                <h3>Evening Chamber: </h3>
                <p>Suit # 16, Level-07,
                  Kabbokash Super Market,
                  Plot # 3-D, Kawran Bazar,Dhaka - 1215.
                </p>
              </div>
            </div>
            <div className="contact-sec">
              <div className="icon"><BsFillTelephoneFill size={24} /></div>
              <div className="address">
                <h3>Phone</h3>
                <p>+880255014178</p>
                <p>+8801794876432</p>
              </div>
            </div>
            <div className="contact-sec">
              <div className="icon"><MdEmail size={29} /></div>
              <div className="address">
                <h3>Email</h3>
                <p>aaassociates13@yahoo.com</p>
                <p>aaassociates49@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <form onSubmit={handleSubmit}>
            <input name='name' type="text" className="name" placeholder='Name' required />
            <div className="phn-email">
              <input name='phone' type="text" className="phone" placeholder='Phone' required />
              <input name='email' type="text" className="email" placeholder='Email' required />
            </div>
            <select name="case" required>
              <option value="" disabled selected>Select Case</option>
              <option value="criminal-law">Criminal Law</option>
              <option value="business-law">Business Law</option>
              <option value="family-law">Family Law</option>
              <option value="real-estate-law">Real Estate Law</option>
            </select>
            <textarea name="message" cols="30" rows="10" required placeholder='Case Description'></textarea>
            <button type="submit">Make Appointment</button>
          </form>
        </div>
      </div>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8792786908216!2d90.39186301074342!3d23.751683978580505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8981ad5a153%3A0x80e209745fc90229!2sKabbokash%20Super%20Market!5e0!3m2!1sen!2sbd!4v1695144137178!5m2!1sen!2sbd" width="100%" height="450" style={{border:0, marginBottom: '5rem'}} referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>

  )
}

export default Contact