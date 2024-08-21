import { useParams } from "react-router-dom";
import Shimmer from "../Shimmer/Shimmer";
import RestMenuCard from "../RestMenuCard/RestMenuCard";
import useFetchData from "../../utils/useFetchData";
import ItemCategory from '../ItemCategory';
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const details = useFetchData(resId);
  const [expandIndex , setExpandIndex] = useState(0);

  if (details == null)
    return (
      <div className="rest-menu">
        <Shimmer />
      </div>
    );

    const accordionChangedParent = (index) => {
      if (index == expandIndex){
        setExpandIndex(-1);
      }else{
        setExpandIndex(index)
      }
    
    }


  const { name, city, cuisines, costForTwoMessage, sla, avgRatingString } =
    details?.data?.cards[2]?.card?.card?.info;
  const { slaString } = sla;

      const itemCategories =
      details?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (each) => each.card.card["@type"].includes("ItemCategory")
      );

       
  return (
    <div className="rest-menu">
      <div className="lg:w-6/12 sm:w-10/12 m-auto p-10 mb-2 bg-gray-100 rounded-2xl shadow-xl">
        <div className="flex justify-between px-4">
          <h1 className="font-bold text-2xl">{name}</h1>
          <p className="text-xs font-bold text-green-700"><span className="font-bold text-2xl">⋆</span> {avgRatingString} rating</p>
        </div>
        <span className="px-4 text-xs">{cuisines.toString("")}</span>
        <div className="flex gap-2 px-4">
          <span className="text-xs mt-2">{slaString} | </span>
          <span className="text-xs mt-2">{costForTwoMessage} | </span>
          <span className="text-xs mt-2">{city}</span>
        </div>
      </div>

      <ul className="p-4">
        {itemCategories.map((each , index)=>{
            return <ItemCategory categoryDetails={each} index={index} key={"category-"+ each.card.card.title} showStatus={expandIndex==index ? true : false} accordionChangedParent = {accordionChangedParent}/>;
        })}
      </ul>


    </div>
  );
};

export default RestaurantMenu;
