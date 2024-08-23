import { useSelector } from "react-redux";
import RestMenuCard from "./RestMenuCard/RestMenuCard";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";


const Cart = () => {
    const cartItems = useSelector((store)=>store.cart.items);
    console.log(cartItems, " from cart page");

    const dispatch = useDispatch();

    const clearCartClicked = () => {
        dispatch(clearCart());
    }

  return cartItems.length>0 ? (
   <ul className="m-auto w-6/12 bg-gray-200 p-4">
    <div className="flex justify-between items-center mb-3 py-3">
    <h1 className="font-bold text-2xl w-fit">Cart Items</h1>
    <button className='filter-btn bg-green-50 hover:bg-green-100 rounded-md  p-2 border border-solid border-black' onClick={clearCartClicked}>Clear cart</button>
    </div>
       
      
       <ul>
        {cartItems.map((each, index)=> <RestMenuCard resData={each} key={"cart-item"+ index + each.name}/>)}
       </ul>
      
   </ul>
  ) : (
    <ul className="m-auto w-6/12 bg-gray-200 p-4">
    <h1 className="m-auto font-bold text-lg w-fit">Cart Items</h1>
   <h5 className="m-auto font-bold text-lg w-fit mt-2">No Cart Items, Add some</h5>
</ul>
  )
}

export default Cart