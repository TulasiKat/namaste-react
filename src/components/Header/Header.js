import { useState } from 'react';

import {LOGO_URL} from '../../utils/constants.js';

const Header = () => {
  const [loginStatus , setloginStatus] =  useState(false);

const loginStatusChange = () => {
  setloginStatus(! loginStatus);
}

    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL}/>
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <li><button onClick={loginStatusChange}>{loginStatus ? "Logout" : "Login"}</button></li>
          </ul>
        </div>
      </div>
    )
  }

  export default Header;