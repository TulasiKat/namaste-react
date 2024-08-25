import React, { useState } from 'react';
import RestMenuCard from './RestMenuCard/RestMenuCard.js';
import CategoryItemCards from './CategoryItemCards.js';


const ItemCategory = (props) => {
    const {categoryDetails , showStatus , accordionChangedParent , index } = props;
    let {title , itemCards} = categoryDetails.card.card;
    if (!itemCards){
      itemCards = categoryDetails.card.card.categories[0].itemCards;
    }

    const accordionChangedChild = ()=> {
      accordionChangedParent(index);
    }

    const testId = "accordion-" + index;


  return (
    <>
    <div className='mb-5' data-testid="specificRestcard">
        <div  data-testid={testId} className='flex justify-between  w-6/12 m-auto bg-gray-100 p-5 rounded-lg shadow-md cursor-pointer' onClick={accordionChangedChild}>
            <span><h2 className="font-semibold text-xl px-4">{title} ({itemCards.length})</h2></span>
            <span>▼</span>
        </div>  
        {showStatus && <CategoryItemCards itemCards= {itemCards}/> }
       
       
    </div>
    </>
  )
}

export default ItemCategory;