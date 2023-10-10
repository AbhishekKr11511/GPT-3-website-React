import './possibilty.css'
import possible from '../../assets/possibility.png'

const possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility__container'>
        <div className='gpt3__possibility__container-image'>
          <img src={possible} alt="" />
        </div>

        <div className='gpt3__possibility__container-content'>

          <h2 className='gradient__text'> The Possibilities are beyond your imagination</h2>

          <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>

          <h4 className='shake-horizontal'>Request Early Access to Get Started</h4>
        </div>

      </div>
    </div>
  )
}
export default possibility