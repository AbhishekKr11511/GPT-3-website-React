import './feature.css'


const Feature = ({title, text}) => {
  return (
    <>
      <div className='gpt3__feature__container-title'>
        <h2>{title}</h2>
      </div>
      <div className='gpt3__feature-container-text'>
        <p>{text}</p>
      </div>
    </>
  )
}
export default Feature