import React from 'react'
import { BsCart3 } from "react-icons/bs";
import { Link } from 'react-router-dom';

export const Orders = () => {
  return (
    <div className='bg-white rounded shadow h-screen w-full border border-color'>
      <h1 className='border-b border-color p-5 text-xl top-32 md:top-20 sticky text-green-focus bg-white font-bold'>Orders</h1>
      <div className='flex flex-col justify-center items-center h-full '>
        < BsCart3 size={60} className='text-green'/>
        <p className='p-2 font-bold text-green-focus text-lg'>You have placed no orders yet!</p>
        <p className='font-light text-green-focus'>All your orders will be saved here for you to access their state anytime.</p>
        <Link to={`/`}>
          <button className='m-5 bg-green-focus text-white p-3 rounded text-stone-100 capitalize hover:opacity-80 transition-all'>continue shopping</button>
        </Link>
      </div>
    </div>
  )
}
