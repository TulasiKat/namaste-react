import { Link } from 'react-router-dom';
import {CDN_URL} from '../../utils/constants.js';

const RestaurantCard = (props) => {
    const {resData} = props;

    const {name , cuisines , avgRating , sla, costForTwo, cloudinaryImageId} = resData;
    const linkTo = "/restaurant/" + resData.id;
  return (
<Link to={linkTo}> <div className="m-4 p-4  w-[250px]  border border-solid border-gray-200 bg-gray-50 rounded-lg h-[400px] hover:bg-gray-200"> 
      <img className="h-[200px]  w-[250px] rounded-lg" src={CDN_URL+cloudinaryImageId} alt="res-logo"/>

      <h3 data-testid="restaurant-name" className='font-bold py-2 text-xl text-ellipsis overflow-hidden truncate'>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h5>{avgRating} stars</h5>
      <h5>{costForTwo}</h5>
      <h5 className='font-light text-sm'>{sla.deliveryTime} mins</h5>
    </div>
</Link>
   
  )
  }

  export default RestaurantCard;