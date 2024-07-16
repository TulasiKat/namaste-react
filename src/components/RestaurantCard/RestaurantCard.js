import {CDN_URL} from '../../utils/constants.js';

const RestaurantCard = (props) => {
    const {resData} = props;
    const {name , cuisines , avgRating , sla, costForTwo, cloudinaryImageId} = resData;
  return (
    <div className="res-card"> 
      <img className="res-logo" src={CDN_URL+cloudinaryImageId} alt="res-logo"/>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h5>{avgRating} stars</h5>
      <h5>{costForTwo}</h5>
      <h5>{sla.deliveryTime} mins</h5>
  
    </div>
  )
  }

  export default RestaurantCard;