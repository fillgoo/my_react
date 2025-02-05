import React, { useState } from 'react'
import {headerNav} from "../contants/index"


const Header = () => {
    const [show,setShow]=useState(false);
    const toggleMenu =() => {
        setShow((prevShow)=>!prevShow)
    }

  return (
    <header id='header' role='banner'>
        <div className="header_inner">
            <div className="header_logo">
                <a href="/">portfolio <em>react</em></a>
            </div>
            <nav className={`header_nav ${show ? "show":""}`} role='navigation' aria-label='메인메뉴'>
                <ul>
                    {
                        headerNav.map((nav,key)=>(
                            <li key={key}>
                                <a href={nav.url}>{nav.title}</a>
                            </li>
                        ))
                    }
                </ul>
            </nav>
            <div 
            className="header_nav_mobile" 
            id='headerToggle'
            aria-controls='primary-menu'
            aria-expanded={show ? "true":"false"}
            // aria-controls='primary-menu'+ aria-expanded='false' : 두개를 세트로 사용하며 primary-menu-> 중요한 버튼이라고 표시
            role='button'
            tabIndex='0'
            onClick={toggleMenu}
            >
            <span></span>
            </div>
        </div>
    </header>
  )
}

export default Header