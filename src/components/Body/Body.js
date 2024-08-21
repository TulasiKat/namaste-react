import { useState , useEffect , useContext} from 'react';
import RestaurantMenu from '../RestraurantMenu/RestaurantMenu.js';
import useOnlineStatus from '../../utils/useOnlineStatus.js';
import UserContext from '../../utils/UserContext.js';


import RestaurantCard from '../RestaurantCard/RestaurantCard.js';
import Shimmer from '../Shimmer/Shimmer.js';



const Body = () => {
  const [resList , setresList] = useState([]);
  const [searchvalue , setsearchvalue] = useState("");
  const [topRatedButtonStatus , settopRatedButtonStatus] = useState(false);


  useEffect(()=>{
    fetchdata();
  } , []);

  const fetchdata = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    setresList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }


  const topRatedRestFunc = () => {
    settopRatedButtonStatus(!topRatedButtonStatus);
  }


  const searchValueChanged = (event) => {
    setsearchvalue(event.target.value);
  }
  const {setUserName} = useContext(UserContext);

  const nameGiven = (event) => {
    setUserName(event.target.value)
      console.log("event fired");
  }

  const status = useOnlineStatus();
    if (status===false){
    return <h1>Looks like you are offline, please check your internet connection</h1>
  }

    return resList.length <=0 ? (   
    <div className="body">
    <div className='filter'>
       <button className='filter-btn' onClick={topRatedRestFunc}>Top rated restaurants</button>
       <input type="search" className="m-4 p-4 border border-solid border-black" onChange={searchValueChanged}/>
    </div>
    <Shimmer/>
   </div>
   ) : (

      <div className="body">
       <div className='flex justify-between px-4 pb-6 pt-7'>
          <button className='filter-btn bg-green-50 hover:bg-green-100 rounded-md m-4 p-4 border border-solid border-black' onClick={topRatedRestFunc}>{topRatedButtonStatus? "Show all restaurants" : "Show top rated restaurants"}</button>
          <label>Username: <input type="text" className="m-4 p-4 border border-solid border-black rounded-md" onChange={nameGiven} placeholder='Enter name here..'/> </label>
          <input type="search" className="m-4 p-4 border border-solid border-black rounded-md" onChange={searchValueChanged} placeholder='search here..'/>

       </div>
        <div className="flex flex-wrap"> 
        {topRatedButtonStatus ? resList.filter(each=>each.info.name.toLowerCase().includes(searchvalue.toLowerCase())).filter(each => each.info.avgRating >= 4.5).map(each=><RestaurantCard resData = {each.info} key={"resto-"+each.info.id}/>) :
        resList.filter(each=>each.info.name.toLowerCase().includes(searchvalue.toLowerCase())).map(each=><RestaurantCard resData = {each.info} key={"resto-"+each.info.id}/>)
        }
          
        </div>
      </div>
    )
  }


  export default Body;