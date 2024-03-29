import React from 'react';
import image from '../../assets/image.jpg';
import CartButton from './CartButton'
import './Header.css'


function Header(props) {
  return (
    <>
        <div className='header'>
            <h1>FoooodClub</h1>
            <CartButton onClick={props.onOpenCart}/>
        </div>
        <div className='image'>
            <img src={image} alt='food'/>
        </div>
    </>
  )
}

export default Header