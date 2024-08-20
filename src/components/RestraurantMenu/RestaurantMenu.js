
import { useParams } from "react-router-dom";
import Shimmer from "../Shimmer/Shimmer";
import RestMenuCard from "../RestMenuCard/RestMenuCard";
import useFetchData from '../../utils/useFetchData'
import './RestaurantMenu.css';


const RestaurantMenu = () => {
    const {resId} = useParams();
    const details =  useFetchData(resId);


if (details ==  null) return (<div className="rest-menu"><Shimmer/> </div>);


const {name , city, cuisines, costForTwoMessage, sla , avgRatingString} = details?.data?.cards[2]?.card?.card?.info;
const {slaString} = sla;

const recommendedMenuCards = details?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
const rs99deals = details?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards;
const rs139deals = details?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.itemCards;
const mealCombos = details?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[14]?.card?.card?.itemCards;

    return (
    <div className="rest-menu">
        <div className="name-and-rating">
            <h1>{name}</h1>
            <p>{avgRatingString} rating</p>
        </div>
        <span>{cuisines.toString("")}</span>
        <div className="time-and-cost">
            <span>{slaString} | </span>
            <span>{costForTwoMessage} | </span>
            <span>{city}</span>
        </div>


<h2>Recommended</h2>
<ul className="res-container res-menu-container">
  {recommendedMenuCards?.map(each=> <RestMenuCard resData = {each.card.info} key={each.card.info.id}/>)}
</ul>

<h2>Rs 99 Deal Of The Day</h2>
<ul className="res-container res-menu-container">
  {rs99deals?.map(each=> <RestMenuCard resData = {each.card.info} key={each.card.info.id}/>)}
</ul>

<h2>Rs 139 Deal Of The Day</h2>
<ul className="res-container res-menu-container">
  {rs139deals?.map(each=> <RestMenuCard resData = {each.card.info} key={each.card.info.id}/>)}
</ul>

<h2>Meal Combos</h2>
<ul className="res-container res-menu-container">
  {mealCombos?.map(each=> <RestMenuCard resData = {each.card.info} key={each.card.info.id}/>)}
</ul>
    </div>
    );
}


export default RestaurantMenu;