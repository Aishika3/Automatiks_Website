import React, { useRef} from 'react'
import Logo from "../../assets/logo_transparent.png"
import "./Navbar.css"
import { Button } from '../Button'
import { List,X } from '@phosphor-icons/react'

export const Navbar = () => {
  const menuRef=useRef(null);
  const openNavMenu=()=>{
    menuRef.current.style.transform=`translateX(0%)`
  }
  const closeNavMenu=()=>{
    menuRef.current.style.transform=`translateX(-100%)`
  }
  return (
    <>
      <nav className='hamburger'>
        <button  className='hamburger_icon' onClick={openNavMenu}>
          <List size={32}/>
        </button>
      </nav>
      <ul className='navbar_hamburger_list' ref={menuRef}>
      <X size={27} className='hamburger_menu_close_icon' onClick={closeNavMenu}/>
        <li className='navbar_hamburger_list_item'><a href='#header'>Home</a></li>
        <li className='navbar_hamburger_list_item'><a href='#projects'>Products</a></li>
        <li className='navbar_hamburger_list_item'><a href='#services'>Services</a></li>
      </ul>
      <header className='header' id='header'>
        <div className='header_logo'>
          <img src={Logo} alt="Automatiks" />
        </div>
        <nav className='navbar'>
            <ul className='navbar_list'>
              <li className='navbar_list_item'><a href='#header'>Home</a></li>
              <li className='navbar_list_item'><a href='#projects'>Products</a></li>
              <li className='navbar_list_item'><a href='#services'>Services</a></li>
            </ul>
        </nav>
          <a href="mailto:anishde85@gmail.com" className='header_button_link'>
            <Button>Contact</Button>
          </a>
      </header>
    </>
  )
}
