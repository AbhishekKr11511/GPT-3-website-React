import './brand.css'
import google from'../../assets/google.png'
import atlassian from'../../assets/atlassian.png'
import dropbox from '../../assets/dropbox.png'
import shopify from '../../assets/shopify.png'
import slack from '../../assets/slack.png'


const Brand = () => {
  return (
    <div className='gpt3__brand'>
      <div className='gpt3__brand-list'>
        <img src={google} alt="" />
        <img src={slack} alt="" />
        <img src={atlassian} alt="" />
        <img src={dropbox} alt="" />
        <img src={shopify} alt="" />
      </div>
    </div>
  )
}
export default Brand