import { useEffect, useState } from "react";


 function useFetchData (resId) { 
   const fetchUrl = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.37240&lng=78.43780&restaurantId=" + resId + "&catalog_qa=undefined&submitAction=ENTER";

    const [data, setData] = useState(null);

     useEffect(()=>{fetchMenu(fetchUrl)},[]);

     const fetchMenu = async (fetchUrl) => {
        const menuData = await fetch(fetchUrl);
        const json = await menuData.json();
        console.log(json.data);
        console.log(fetchUrl);
        setData(json);
    }

     return data;
}

export default useFetchData;