
import { useParams } from "react-router-dom";
import Shimmer from "../Shimmer/Shimmer";
import RestMenuCard from "../RestMenuCard/RestMenuCard";
import useFetchData from '../../utils/useFetchData'



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
      <div className="lg:w-6/12 sm:w-10/12 m-auto p-5 bg-gray-100 rounded-2xl shadow-xl">
        <div className="flex justify-between px-4">
              <h1 className="font-bold text-2xl">{name}</h1>
              <p>{avgRatingString} rating</p>
          </div>
          <span className="px-4">{cuisines.toString("")}</span>
          <div className="flex gap-2 px-4">
              <span>{slaString} | </span>
              <span>{costForTwoMessage} | </span>
              <span>{city}</span>
          </div>
      </div>
       


<h2 className="font-bold text-2xl px-4">Recommended</h2>
<ul className="flex flex-wrap">
  {recommendedMenuCards?.map(each=> <RestMenuCard resData = {each.card.info} key={each.card.info.id}/>)}
</ul>

<h2 className="font-bold text-2xl px-4">Rs 99 Deal Of The Day</h2>
<ul className="flex flex-wrap">
  {rs99deals?.map(each=> <RestMenuCard resData = {each.card.info} key={each.card.info.id}/>)}
</ul>

<h2 className="font-bold text-2xl px-4">Rs 139 Deal Of The Day</h2>
<ul className="flex flex-wrap">
  {rs139deals?.map(each=> <RestMenuCard resData = {each.card.info} key={each.card.info.id}/>)}
</ul>

<h2 className="font-bold text-2xl px-4">Meal Combos</h2>
<ul className="flex flex-wrap">
  {mealCombos?.map(each=> <RestMenuCard resData = {each.card.info} key={each.card.info.id}/>)}
</ul>
    </div>
    );
}


export default RestaurantMenu;