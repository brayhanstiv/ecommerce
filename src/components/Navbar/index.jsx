//Packages
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Icons
import { FiShoppingCart } from "react-icons/fi";
import logo from '../../assets/images/logo.png';

//Styles
import './index.css';

const Navbar = () => {

  const {products, counter} = useSelector(state => state.shopping);
  let total = 0;
  products.forEach(item => total = total + item.price*item.quantity);

  return (
    <Fragment>
      <nav className='navbar'>
        <Link to='/'>
          <img src={logo} alt='Logo'/>
        </Link>
          <Link to='/shopping-cart'>
            <div className='price'>
              <div className='cart-quantity'>{counter}</div>
              <FiShoppingCart className='icon'/>
              <span>{total}</span>
            </div>
          </Link>
      </nav>
    </Fragment>
  )
}

export default Navbar