import { CDN_URL } from "../../utils/constants.js";


const RestMenuCard = (props) => {
  const { resData } = props;
  const {
    name,
    category,
    ratings,
    costForTwo,
    imageId,
    description,
    offerTags,
    price,
  } = resData;
  return (
    <div className="m-4 p-4 sm:w-4/12 lg:w-2/12 border border-solid border-gray-200 bg-gray-50 rounded-lg h-[450px] hover:bg-gray-200">
      <img className=" rounded-lg" src={CDN_URL + imageId} alt="res-logo" />
      <div>
      <h3 className='font-bold py-2 text-xl text-ellipsis overflow-hidden truncate'>{name}</h3>
        <h5>category: {category} </h5>
        <h5>{costForTwo}</h5>
        <p>{ratings.aggregatedRating.rating} rating</p>
        <p className="text-ellipsis overflow-hidden truncate">{description}</p>
      </div>

       
      </div>

  );
};

export default RestMenuCard;
