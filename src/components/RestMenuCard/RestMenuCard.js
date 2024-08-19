import { CDN_URL } from "../../utils/constants.js";
import "./RestMenuCard.css";

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
    <div className="res-card ind-res-card">
      <img className="res-logo" src={CDN_URL + imageId} alt="res-logo" />
      <div className="res-card-content">
      <h3>{name}</h3>

<h5>category: {category} </h5>
<h5>{costForTwo}</h5>
<p>{ratings.aggregatedRating.rating} rating</p>
{/* <p>
  {offerTags[0].title} | Rs.{price / 10}{" "}
</p> */}
<p className="description">{description}</p>
      </div>
     
    </div>
  );
};

export default RestMenuCard;
