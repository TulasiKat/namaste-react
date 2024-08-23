import { useState , useContext } from 'react';
import {Link} from 'react-router-dom';
import {LOGO_URL} from '../../utils/constants.js';
import useOnlineStatus from '../../utils/useOnlineStatus.js';
import UserContext from '../../utils/UserContext.js';
import { useSelector } from 'react-redux';


const Header = () => {
  const [loginStatus , setloginStatus] =  useState(false);

const loginStatusChange = () => {
  setloginStatus(! loginStatus);
}

const onlineStatus = useOnlineStatus();

const contextData = useContext(UserContext);



const cartData = useSelector((store) => store.cart.items);


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
            <li className="pr-4 font-extrabold text-lg"><Link to="/cart">🛒 ({cartData.length} items)</Link></li>
            
            <li className="pr-4"><button onClick={loginStatusChange}>{loginStatus ? "Logout" : "Login"}</button></li>
            <li className='font-extrabold pr-4'>{contextData.loggedinUser}</li>
          </ul>
        </div>
      </div>
    )
  }

  export default Header;