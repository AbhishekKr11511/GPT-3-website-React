import { useState, useEffect } from "react"
import Ai1 from '../../assets/Ai_1.jpeg'
import Ai2 from '../../assets/Ai_2.jpeg'
import Ai3 from '../../assets/Ai_3.jpeg'
import './slider.css'

// const imageArray = [Ai1, Ai2, Ai3]

const Slider = ({images}) => {
  return (
    <div className="slider-container">
        <ul>
            <li className="slide"><img src={Ai1} alt="image1" /></li>
            <li className="slide"><img src={Ai2} alt="image2" /></li>
            <li className="slide"><img src={Ai3} alt="image3" /></li>
        </ul>
    </div>
  )
}
export default Slider