import './navbar.css'
import React, { useState } from 'react'
import { RiMenu2Fill, RiCloseLine} from 'react-icons/ri'
import logo from'../../assets/logo.svg'

// BEM -> Block Element Modifier

const Menu = () =>{
  return <>
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">What is GPT?</a></p>
          <p><a href="#possibility">Open AI</a></p>
          <p><a href="#features">Case Study</a></p>
          <p><a href="#blog">Library</a></p>
        </>
}


const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">

      <div className='gpt3__navbar-menu'>
            {toggleMenu? <RiCloseLine color='#fff' size={25} onClick={()=>setToggleMenu(false)}/> : <RiMenu2Fill color='#fff' size={25} onClick={()=>setToggleMenu(true)} />}

            {toggleMenu && (<div className='gpt3__navbar-menu_container scale-up-ver-top'>
              <div className="gpt3__navbar-menu_container-links">
                <Menu/>
                <div className='gpt3__navbar-menu_container-links-right'>
                  <p><a href="#sign-in" >Sign in</a></p>
                  <button type='button'>Sign Up</button>
                </div>
              </div>
            </div>)
            }
          </div>

        <div className="gpt3__navbar-links_logo">
          <img src={ logo } alt="logo" />
        </div>


        <div className='gpt3__navbar-links_container'>
          <Menu/>
        </div>

        <div className='gpt3__navbar-right'>
            <p><a href="#sign-in" >Sign in</a></p>
            <button type='button'>Sign Up</button>
        </div>
      </div>
    </div>
  )
}


export default Navbar