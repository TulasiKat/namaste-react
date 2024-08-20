import { useState } from 'react';
import {Link} from 'react-router-dom';
import {LOGO_URL} from '../../utils/constants.js';
import useOnlineStatus from '../../utils/useOnlineStatus.js'

const Header = () => {
  const [loginStatus , setloginStatus] =  useState(false);

const loginStatusChange = () => {
  setloginStatus(! loginStatus);
}

const onlineStatus = useOnlineStatus();

    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL}/>
        </div>
        <div className="nav-items">
          <ul>
            <li>Online Status: {onlineStatus? "✅" : "❌"}</li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/grocery">Grocery</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            
            <li><button onClick={loginStatusChange}>{loginStatus ? "Logout" : "Login"}</button></li>
          </ul>
        </div>
      </div>
    )
  }

  export default Header;