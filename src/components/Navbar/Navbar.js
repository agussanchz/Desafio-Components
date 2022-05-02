import React from 'react'
import IconCart from '../CartIcon/IconCart'
import logo from '../Utils/Img/icono.jpg'

export default function Navbar({category1, category2, category3}) {
  return (
    <header className='header'>
        <div className='img-header'>
            <img src={logo} alt="Logo React"/>
        </div>
        <nav className='header-nav'>
            <ul className='nav-ul'>
                <li className='nav-li'> <a href="../../../public/index.html">{category1}</a> </li>
                <li className='nav-li'> <a href="../../../public/index.html">{category2}</a> </li>
                <li className='nav-li'> <a href="../../../public/index.html">{category3}</a> </li>
            </ul>
        </nav>
        <IconCart/>
       
    </header>
  )
}
