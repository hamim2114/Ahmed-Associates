import './HomeSection.scss';

const HomeSection = () => {
  return (
    <div className="home-sec">
      <div className="left">
        <h1>We Fight For Your <br /> Justice</h1>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo</p>
        <button className='home-btn'>Get Started</button>
      </div>
      <div className="right">
        <img src="/law.png" alt="" />
      </div>
    </div>
  )
}

export default HomeSection