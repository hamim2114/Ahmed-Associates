import './PracticeAreas.scss'

const PracticeAreas = ({data, id}) => {
  return (
    <div className='practice-sec'>
      <h2>{id + 1}<hr /> </h2>
      <h1>{data.title}</h1>
      <p>{data.desc}</p>
    </div>
  )
}

export default PracticeAreas