import { useState } from "react";
import { CDN_URL } from "../../utils/constants.js";
import { useDispatch } from "react-redux";
import { addItem , removeItem} from "../../utils/cartSlice.js";


const RestMenuCard = (props) => {
  const [itemCount , setItemCount] = useState(0);
  const { resData } = props;
  const {
    name,
    ratings,
    costForTwo,
    imageId,
    description,
    offerTags,
    defaultPrice,
    price,
  } = resData;

  const dispatch = useDispatch();

  const increaseItemCount = (name) => {
    dispatch(addItem(resData));
    setItemCount(itemCount+1);
  }

  const decreaseItemCount = () => {
    dispatch(removeItem());
    setItemCount(Math.max(0 , itemCount-1));
  }

  return (
    <div className="m-0 p-4 w-[100%] border border-solid border-gray-200 bg-gray-50 flex justify-between" data-testid="foodCard">
     
      <div className="w-8/12">
          <h3 className='font-bold py-2 text-xl text-ellipsis overflow-hidden truncate'>{name}</h3>
          <h5>₹ {defaultPrice? defaultPrice/100 : price/100}</h5>
          <p className="text-xs font-bold text-green-700"><span className="font-bold text-2xl">⋆</span> {ratings.aggregatedRating.rating} rating</p>
          <h5>{costForTwo}</h5>
         
          <p className="text-ellipsis overflow-hidden text-sm">{description}</p>
      </div>
      <div className="flex flex-col h-[200px] w-3/12 relative">
        <img className="h-[150px]  rounded-lg " src={CDN_URL + imageId} alt="res-logo" />
        <button className="absolute bottom-[44px] bg-white rounded-lg self-center p-2 border border-solid border-gray-400 text-green-600 font-extrabold"><span data-testid="decrease" onClick={decreaseItemCount} className="w-[30px] h-[30px] inline-block">-</span>{itemCount===0 ? "ADD" : itemCount} <span data-testid="increase" onClick={()=>increaseItemCount(name)} className="w-[30px] h-[30px] inline-block">+</span></button>
      </div>
     
       
      </div>

  );
};

export default RestMenuCard;
