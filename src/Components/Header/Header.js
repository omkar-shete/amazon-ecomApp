import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { UseStateValue } from '../../Context/StateProvider';


export default function Header() {

  //accessing the data store vars....looks like useState
  //gives me [state, dispatch]..destructured to {cart}
  const[{cart}, dispatch] = UseStateValue();

  console.log("cart>>",cart);



  //-----------------RET---------------------
  return (
    <div className='header'>

      {/* LOGO------------------------- */}
      <Link to="/">
        <img
          className='header__logo' 
          src="https://upload.wikimedia.org/wikipedia/donate/f/fd/Amazon-logo-white.svg" //wh 
          // src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" //bl
          alt="logo" />
      </Link>



      {/*SEARCHBOX------------------------- */}
      <div className="header__searchbox">
        <input type="text" className="header__searchInput" />
        <SearchIcon className='header__searchIcon' />
      </div>



      {/* 3 NAVLINKS ---------------------------*/}
      <div className="header__navLinks">

        <Link to="/login" className="header__navLink" >
          <div className="header__navLinkText">
            <span className='header__navLinkText01'>Hello</span>
            <span className='header__navLinkText02'>SignIn</span>

          </div>
        </Link>

        <Link to="/" className="header__navLink" >
          <div className="header__navLinkText">
            <span className='header__navLinkText01'>Returns &</span>
            <span className='header__navLinkText02'>Orders</span>
          </div>
        </Link>
        {/* <Link to="/" className="header__navLink" >
          <div className="header__navLinkText">
            <span className='header__navLinkText01'>Your</span>
            <span className='header__navLinkText02'>Prime</span>
          </div>
        </Link> */}
      </div>



      {/* CART -------icon&no------------------------ */}
      <div className="header__cart">
        <Link className='header__cartLink' to="/checkout">
          <span>{cart?.length}</span>        
          <ShoppingCartOutlinedIcon />        
        </Link>
      </div>

    </div>
  )
}
