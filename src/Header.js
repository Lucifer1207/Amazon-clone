import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartTwoToneIcon from '@material-ui/icons/ShoppingCartTwoTone';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {

  const [{basket ,user}, dispatch]=useStateValue();
  const handleAuthentication=()=>{
    if(user){
      auth.signOut();
    }
  }


  return (
    <div className="header">
      <Link to="/Amazon-clone">
       <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" />
       </Link>
       <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon"/>
        {/* Logo */}
       </div>

       <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionlineOne">Hello , {user?.email}</span>
            <span className="header__optionlineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>
          <div className="header__option">
            <span className="header__optionlineOne">Returns</span>
            <span className="header__optionlineTwo">& Orders</span>
          </div>
          <div className="header__option">
            <span className="header__optionlineOne">Your</span>
            <span className="header__optionlineTwo">Prime</span>
          </div>
          <Link to="/Checkout">
          <div className="header__optionBasket">
          <ShoppingCartTwoToneIcon/>
          <span className="header__optionlineTwo header__basketCount">{basket?.length}</span>
          </div>
          </Link>
       </div>
    </div>
  )
}

export default Header
