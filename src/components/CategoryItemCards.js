import React from 'react';
import RestMenuCard from './RestMenuCard/RestMenuCard';

const CategoryItemCards = (props) => {
    const {itemCards} = props;
  return (
    <ul className="flex flex-wrap w-6/12 m-auto">
    {itemCards?.map((each) => (
      <RestMenuCard resData={each.card.info} key={each.card.info.id} />
    ))}
  </ul>
  )
}

export default CategoryItemCards