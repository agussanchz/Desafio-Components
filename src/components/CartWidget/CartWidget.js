import React from 'react'
import cart from '../Utils/Img/CartImg.png'

export default function CartWidget() {
  return (
    <div className='cart-header'>
        <img src={cart} alt="cart img" />
    </div>
  )
}
