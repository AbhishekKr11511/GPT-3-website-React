import './footer.css'
import gpt3 from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>

      <div className='gpt3__footer-heading'>
        <p className='gradient__text bold-text'>Do you Want to step into the future before others?</p>
        <button type='button'>Request Early Access</button>
      </div>

      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links-logo'>
          <img src={gpt3} alt="" />
          <p>Cretchterword K12 182 DK Alknihjcb,</p>
          <p> All rights Reserved</p>
        </div>

        <div className='gpt3__footer-links-text'>

          <ul className='gpt3__footer-links-list'>
            <li className='bold-text'>Links</li>
            <li>Overons</li>
            <li>Social Media</li>
            <li>Counters</li>
            <li>Contact</li>
          </ul>


          <ul className='gpt3__footer-links-list'>
            <li className='bold-text'>Company</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>

          <ul className='gpt3__footer-links-list'>
            <li className='bold-text'>Get in Touch</li>
            <li>085-123456</li>
            <li>info@payme.net</li>
          </ul>

        </div>

      </div>

    </div>
  )
}
export default Footer