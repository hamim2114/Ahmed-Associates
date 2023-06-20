import { Link } from 'react-router-dom';
import './Career.scss';

const Career = () => {
  return (
    <div className="career">
      <div className="wrapper">
        <div className="intro">
          <div className="wrapper">
            <h1>COME WORK FOR ONE OF MAINE'S LEADING LEGAL FIRMS <hr /> </h1>
            <p>Explore our job openings and employment opportunities, and come work with us. Advance your career, grow, and learn from our experienced team of attorneys and legal staff.</p>
            <Link to='/jobs' className='apply-btn'>SEE AVAILABLE JOBS</Link>
          </div>
        </div>
        <div className="info">
          <h1>UNDERSTAND OUR CULTURE</h1>
          <p>This is a fun place to work. While we work hard, we have a great time doing it. It’s why we’re so very selective in who we bring in to become a member of our team. We’re interested in people looking for a long-term fit, not a short-term gig.
            We love getting together regularly as a team outside of the office for fun. We usually do a few office BBQs at Bill Bly’s house, which includes food, drinks and corn hole games for everyone. We spend a lot of time sitting around the fire pit, sipping on drinks and munching food, while we catch up on life. We usually do 3 BBQ events a year.
            We also do a Christmas party every year someplace fun. It’s different every year. Christmas 2021 was spent at Bandaloop, while in other years we’ve gone into the Old Port to celebrate. Some years we have staff bring a +1, while other years it’s just for staff.</p>
        </div>
        <div className="info">
          <h1>ARE YOU A GOOD FIT FOR US?</h1>
          <p>Our culture is really important to us. We’re a client focused, boutique law firm that provides a high level of client service and experience. And as focused as we are on our clients, we’re equally if not more focused on our staff. We pay a highly competitive wage, we provide a suite of full benefits for our employees, which includes paid time off (vacation, sick time, etc.), paid bereavement time, maternal and paternal paid time off, automatic 401k contributions for the employee and the option for the employee to contribute to their own retirement through our 401k program, 100% employee health insurance and vision care paid for by the Firm, we offer 50% payment for dental coverage, long-term and short-term disability, and life insurance coverage. We’re confident in saying that we offer the best pay scale and benefits package out of any small law firm in southern Maine.
          
            We put our money where our mouth is and we choose to invest in our employees' futures so that we can all grow and succeed together.
            We believe it’s really important that the environment you work in is an environment that you’re proud of and a place that makes you feel really good inside. So, to give our employees that experience, we ensure that the environment is not only functional, but beautiful as well. We have a seating area for our admin team to get together and meet for “morning campfires”, which is where Laura (our Chief of Staff) meets with the team to go over the coming day’s agenda, as well to relax and connect with each other. We decorate the exterior of the building for Christmas and Chanukah in order for everyone to feel the spirit of the holidays.
          </p>
        </div>
        <div className="info">
          <h1>ABOUT OUR FIRM</h1>
          <p>What distinguishes our firm from the numerous law firms throughout the state is that we genuinely care about the well-being of our clients. The staff and attorneys of The Maine Legal Group ensure that every client receives hands-on and personalized attention throughout the life of their case.
            We are knowledgeable and compassionate and will work to help our clients get results. Our Criminal Defense Group handles all areas of criminal defense practice, including legal representation for state and federal charges. The Divorce Group handles family law and divorce.</p>
        </div>
        <div className="career-contact-main">
          <div className="wrapper">
            <div className="left">
              <h1>GET IN TOUCH WITH US</h1>
              <p>Would you like to discuss job opportunities and be part of our incredible team? Contact us today and let's start a conversation. We would love to hear from you!</p>
            </div>
            <div className="right">
              <form action="">
                <input type="text" className="name" placeholder='Your Name' required />
                <input type="text" className="phone" placeholder='Your Phone' required />
                <input type="text" className="email" placeholder='Your Email' required />
                <textarea name="" id="" cols="30" rows="10" required placeholder='Message'></textarea>
                <button type="submit">CONTACT US</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Career;