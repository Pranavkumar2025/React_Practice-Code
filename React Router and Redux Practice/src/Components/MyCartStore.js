
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cart from './Cart';
import { EmptyBin, removeItems } from '../Redux/cartSlice';

const MyCartStore = () => {

    const cartData = useSelector((store)=>store.cart.items);

    const dispatch = useDispatch();

    const EmptyCart = ()=>{
      dispatch(EmptyBin());
    }
    const RemoveOneItems = ()=>{
      dispatch(removeItems());
    }

    // console.log(cartData);
  return (
    <div className='flex bg-blue-500 flex-wrap'>
      <div>
        <button className='bg-gray-200 p-3 rounded-lg m-4' onClick={EmptyCart}>Empty Cart</button>
        <button className='border rounded-lg bg-blue-500 m-1 p-1 border-black text-white' onClick={RemoveOneItems}>Remove Items</button>
      </div>
      {cartData.map((val)=>(
        <Cart key={val.id} img={val.image} name = {val.productName} price = {val.price}  />
      ))}
    </div>
  )
}

export default MyCartStore
