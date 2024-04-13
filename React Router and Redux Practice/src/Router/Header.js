import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Header = () => {

    const storeItems = useSelector((store)=>store.cart.items);
  return (
    <div className='flex justify-between bg-blue-400 rounded-lg '>
      <div className='flex'>
        <img className='w-[100px] h-[100px] rounded-lg' src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/shopping-cart-logo-design-template-0bd5ecad376e9cf5ab1e70fb3c8df3c4_screen.jpg?ts=1584204397" alt="" />
        <ul className='flex p-2 justify-center'>
            <Link to={'/'}><li className='p-4'>Home</li></Link>
            <Link to={'about'}><li className='p-4'>About</li></Link>
            <Link to={'service'}><li className='p-4'>Service</li></Link>
        </ul>
      </div>
      <div>
        <Link to={'cart'}><img className='w-[70px] h-[70px] rounded-3xl' src="https://t3.ftcdn.net/jpg/03/14/85/06/360_F_314850659_2aQLerz30kWj78tqpaGSbzYD6sAUmuDf.jpg" alt="" /></Link><span>({storeItems.length})</span>
      </div>
    </div>
  )
}

export default Header
