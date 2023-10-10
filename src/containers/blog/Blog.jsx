import './blog.css'
import blog01 from '../../assets/blog01.png'
import blog02 from '../../assets/blog02.png'
import blog03 from '../../assets/blog03.png'
import blog04 from '../../assets/blog04.png'
import blog05 from '../../assets/blog05.png'

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>

      <div className='gpt3__blog-heading'>
        <p className='gradient__text'>A lot is happening,</p>
        <p className='gradient__text'>We are Blogging about it. ⬇⬇⬇</p>
      </div>

      <div className='gpt3__blog-thumbnails'>

        <div className='gpt3__blog-thumbnails-group1'>
        <div className='gpt3__blog-thumbnails-box'>
          <img src={blog01} alt="" />
          <div className='gpt3__blog-thumbnail-box-text'>
            <h5>Date August 2023</h5>
            <h2>
              GPT-3 and Open  AI is the future. Let us exlore how it is?
            </h2>
            <a href="#article" className='hover-over-me'>Read Full Article</a>
          </div>
          </div>
        </div>



        <div className='gpt3__blog-thumbnails-group2'>
        {/* Box 1 */}
          <div className='gpt3__blog-thumbnails-box'>
            <img src={blog02} alt="" />

            <div className='gpt3__blog-thumbnail-box-text'>
              <h5>Date August 2023</h5>
              <h3>
                GPT-3 and Open  AI is the future. Let us exlore how it is? 
              </h3>
              <a href="#article"  className='hover-over-me'>Read Full Article</a>
            </div>
          </div>

        {/* Box 2 */}
          <div className='gpt3__blog-thumbnails-box'>
            <img src={blog03} alt="" />
            <div className='gpt3__blog-thumbnail-box-text'>
              <h5>Date August 2023</h5>
              <h3>
                GPT-3 and Open  AI is the future. Let us exlore how it is? 
              </h3>
              <a href="#article" className='hover-over-me'>Read Full Article</a>
            </div>
          </div>

        {/* Box 3 */}
          <div className='gpt3__blog-thumbnails-box'>
            <img src={blog04} alt="" />
            <div className='gpt3__blog-thumbnail-box-text'>
              <h5>Date August 2023</h5>
              <h3>
                GPT-3 and Open  AI is the future. Let us exlore how it is? 
              </h3>
              <a href="#article" className='hover-over-me'>Read Full Article</a>
            </div>
          </div>

        {/* Box 4 */}
          <div className='gpt3__blog-thumbnails-box'>
            <img src={blog05} alt="" />
            <div className='gpt3__blog-thumbnail-box-text'>
              <h5>Date August 2023</h5>
              <h3>
                GPT-3 and Open  AI is the future. Let us exlore how it is? 
              </h3>
              <a href="#article" className='hover-over-me'>Read Full Article</a>
            </div>
          </div>

        </div>


      </div>
    </div> 
  )
}
export default Blog