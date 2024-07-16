import { useState , useEffect} from 'react';


import RestaurantCard from '../RestaurantCard/RestaurantCard.js';
import Shimmer from '../Shimmer/Shimmer.js';
import './Body.css';


const Body = () => {
  const [resList , setresList] = useState([]);
  const [searchvalue , setsearchvalue] = useState("");


  useEffect(()=>{
    fetchdata();
  } , []);

  const fetchdata = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    // setresList(json.data);

    setresList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }


  const topRatedRestFunc = () => {
    setresList(resList.filter(each => each.info.avgRating > 4.5));
  }


  const searchValueChanged = (event) => {
    setsearchvalue(event.target.value);
  }

    return resList.length <=0 ? (   
    <div className="body">
    <div className='filter'>
       <button className='filter-btn' onClick={topRatedRestFunc}>Top rated restaurants</button>
       <input type="search" className="searchInputBox" onChange={searchValueChanged}/>
    </div>
    <Shimmer/>
   </div>
   ) : (

      <div className="body">
       <div className='filter'>
          <button className='filter-btn' onClick={topRatedRestFunc}>Top rated restaurants</button>
          <input type="search" className="searchInputBox" onChange={searchValueChanged}/>
       </div>
        <div className="res-container"> 
            {resList.filter(each=>each.info.name.toLowerCase().includes(searchvalue.toLowerCase())).map(each=><RestaurantCard resData = {each.info} key={"resto-"+each.info.id}/>)}
        </div>
      </div>
    )
  }


  export default Body;