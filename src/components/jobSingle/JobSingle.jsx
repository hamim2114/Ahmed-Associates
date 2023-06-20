import './JobSingle.scss'

const JobSingle = () => {
  return (
    <>
      <div className="bg-img">
        <img src="/assistant.jpg" alt="" />
      </div>
      <div className="job-single">
        <div className="wrapper">
          <h1>Sales Account Manager <hr /></h1>
          <h2>applications for the post of Accountant/ Tax Consultant</h2>
          <div className="text">
            <p class="job-responsibility">
              Job Responsibility:
              Experienced in Tax, VAT & corporate work will get priority but having experience is not mandatory.
            </p>
            <p class="requirements">
              Requirements:
            </p>
            <ul class="job-responsibility">
              <li>1. Accounting (Hons)/CA/ACCA</li>
              <li>2. Serious career goal</li>
              <li>3. Good research and drafting skill</li>
              <li>4. Dedication for long hours responsibility</li>
              <li>5. Good communication skill</li>
              <li>6. Technologically sound</li>
              <li>7. Can work with minimum supervision</li>
            </ul>
            <p class="note">
              N.B.
              - Good leadership skills and proven track record of leadership/extracurricular activities/awards may be a persuasive factor in the selection process.
              -  Honorium shall be decided on the basis of the expertise.
              Interested candidates are requested to send their CVs to - aaassociates13@yahoo.com
              Only short listed candidates will be called for interview.
            </p>
          </div>
          <button>Apply For This Job</button>
        </div>
        <div className="job-contact-main">
          <div className="wrapper">
            <div className="left">
              <h3>Have Any Question?</h3>
              <h1>GET IN TOUCH WITH US</h1>
              <p>Would you like to discuss job opportunities and be part of our incredible team? Contact us today and let's start a conversation. We would love to hear from you!</p>
            </div>
            <div className="right">
              <form action="">
                <input type="text" className="name" placeholder='Your Name' required />
                <input type="text" className="phone" placeholder='Your Phone' required />
                <input type="text" className="email" placeholder='Your Email' required />
                <textarea name="" id="" cols="30" rows="5" required placeholder='Message'></textarea>
                <button type="submit">CONTACT US</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default JobSingle