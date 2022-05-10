import React from 'react'
import cart from '../Utils/Img/CartImg.png'

export default function CartIcon() {
  return (
    <div className='cart-header'>
        <img src={cart} alt="cart img" />
    </div>
  )
}
