import React from 'react'
import { BsSuitHeart } from "react-icons/bs";
import { Link } from 'react-router-dom';

export const SavedItems = () => {
  return (
    <div className='bg-white rounded border-color shadow h-screen'>
      <h1 className='border-b border-color p-5 text-xl font-bold bg-white sticky top-32 md:top-20 transition-all text-green-focus'>Saved Items</h1>
      <div className='flex flex-col justify-center items-center h-full '>
        < BsSuitHeart size={60} className='text-green'/>
        <p className='p-2 font-bold text-green-focus text-lg'>You haven’t saved an item yet!</p>
        <p className='font-light text-green-focus px-4'>
          <span className='text-green-focus font-bold px-1'>Found something you like?</span> 
          Tap on the heart shaped icon next to the item to add it to your wishlist!.All your saved items will appear here...
        </p>
        <Link to={`/`}>
          <button className='m-5 bg-green-focus p-3 rounded text-white capitalize hover:opacity-80 transition-all'>continue shopping</button>
        </Link>
      </div>
    </div>
  )
}
