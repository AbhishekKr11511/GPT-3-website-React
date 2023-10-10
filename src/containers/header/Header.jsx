import './header.css'
import Ai2 from '../../assets/Ai_2.png'
import people from '../../assets/people.png'

const Header = () => {
  return (
    <div className='gpt3__header' id='home' style={{position: 'relative'}}>

      <div className='gpt3__header-content' style={{zIndex: 10}}>
          <div className='gpt3__header-content-title'>
            <h1 className='gradient__text'>
              let's build something amazing with GPT-3 openAi
            </h1>
          </div>
          <div className='gpt3__header-content-para'>
            I am ChatGPT, an advanced language model powered by OpenAI. Trained on vast amounts of data, I possess a wide range of knowledge in various fields. As an AI language model, I excel in generating human-like text, answering questions, providing explanations, and assisting users with a myriad of tasks.
          </div>

          <div className="gpt3__header-content-input">
            <form action="submit" className='input-box'>
              <input type="email" placeholder='Your Email Address'/>
              <button type='submit'>Get Started</button>
            </form>
          </div>

          <div className='gpt3__header-content-people'>
            <img src={people} alt="" />
            <div className='gpt3__header-content-people-text'>1,600 people requested access a visit in last 24 hours</div>
          </div>

      </div>

      <div className="gpt3__header-illustration" style={{zIndex: 10}}>
        <img src={Ai2} alt="Artificial intelligence" />
      </div>

    </div>
  )
}
export default Header