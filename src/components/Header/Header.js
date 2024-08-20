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
      <div className="flex justify-between items-center bg-green-50 shadow-lg my-5">
        <div className="logo-container">
          <img className="w-40 h-32" src={LOGO_URL}/>
        </div>
        <div className="w-200">
          <ul className='flex justify-betweens'>
            <li className="pr-4">Online Status: {onlineStatus? "✅" : "❌"}</li>
            <li className="pr-4"><Link to="/">Home</Link></li>
            <li className="pr-4"><Link to="/grocery">Grocery</Link></li>
            <li className="pr-4"><Link to="/about">About Us</Link></li>
            <li className="pr-4"><Link to="/contact">Contact Us</Link></li>
            <li className="pr-4"><Link to="/cart">Cart</Link></li>
            
            <li><button onClick={loginStatusChange}>{loginStatus ? "Logout" : "Login"}</button></li>
          </ul>
        </div>
      </div>
    )
  }

  export default Header;