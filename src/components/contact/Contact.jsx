import './Contact.scss';
import { IoLocationSharp } from 'react-icons/io5';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

const Contact = () => {
  return (
    <div className="contact-main">
      <div className="left">
        <h1>Do You Need An Advice From Professional Lawyer?</h1>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
        <div className="contact">
          <div className="contact-sec">
            <div className="icon"><IoLocationSharp /></div>
            <div className="address">
              <h3>Address</h3>
              <p>Office: Suit # 16, (6th Floor), level 7,Kabbokas Super Market, Plot # 3/D, Kawran Bazar, Dhaka-1205 1215 Dhaka, Dhaka Division, Bangladesh</p>
            </div>
          </div>
          <div className="contact-sec">
            <div className="icon"><BsFillTelephoneFill size={24} /></div>
            <div className="address">
              <h3>Phone</h3>
              <p>02-55014178</p>
              <p>02-55014178</p>
            </div>
          </div>
          <div className="contact-sec">
            <div className="icon"><MdEmail size={29} /></div>
            <div className="address">
              <h3>Email</h3>
              <p>aaassociates49@gmail.com</p>
              <p>aaassociates49@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <form action="">
          <input type="text" className="name" placeholder='Name' required />
          <div className="phn-email">
            <input type="text" className="phone" placeholder='Phone' required />
            <input type="text" className="email" placeholder='Email' required />
          </div>
          <select name="" required>
            <option value="" disabled selected>Select Case</option>
            <option value="">Criminal Law</option>
            <option value="">Business Law</option>
            <option value="">Family Law</option>
            <option value="">Real State Law</option>
          </select>
          <textarea name="" id="" cols="30" rows="10" required placeholder='Case Description'></textarea>
          <button type="submit">Make Appointment</button>
        </form>
      </div>
    </div>
  )
}

export default Contact