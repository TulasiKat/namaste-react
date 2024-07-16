import { useState } from 'react';


import RestaurantCard from '../RestaurantCard/RestaurantCard.js';
import restaurantList from '../../utils/mockData.js';
import './Body.css';


const Body = () => {
  const [resList , setresList] = useState(restaurantList);

  const topRatedRestFunc = () => {
    setresList(restaurantList.filter(each => each.info.avgRating > 4.5));
  }
    return (
      <div className="body">
       <div className='filter'>
          <button className='filter-btn' onClick={topRatedRestFunc}>Top rated restaurants</button>
       </div>
        <div className="res-container">
  
        {resList.map(each=><RestaurantCard resData = {each.info} key={"resto-"+each.info.id}/>)}
        </div>
      </div>
    )
  }


  export default Body;