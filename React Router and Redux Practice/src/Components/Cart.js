import React from 'react'

import { useDispatch } from 'react-redux'
import { addItems } from '../Redux/cartSlice';


const Cart = ({img,name,price}) => {

  const dispatch = useDispatch();

  const addEventItems = ()=>{
    dispatch(addItems({img,name,price}))
  }

  return (
    <div className='border border-black w-[300px] h-[300px] m-3 p-3 text-center bg-green-200 rounded-md'>
      <img className='w-[300px] h-[150px]' src={img} alt="" />
      <h1 className='font-bold'>{name}</h1>
      <h1 className='text-red-500 font-bold'>Rs. {price}</h1>
      <button className='border rounded-lg bg-blue-500 m-1 p-1 border-black text-white' onClick={addEventItems}>Add Items</button>
      
    </div>
  )
}

export default Cart





