import React, { useContext } from 'react'
import {BsPlusLg, BsDashLg, BsTrash3} from 'react-icons/bs'
import { CartContext } from '../contexts/CartContext'


export const CartItem = ({item}) => {
    console.log(item)
    const {id, title, images, price, amount} = item
    const {removeCart, increaseAmount,decreaseAmount} = useContext(CartContext)
   

  return ( 
    <div className='flex group'>
        <div className='w-full min-h-28 flex items-center my-2 md:mx-10 sm:mx-5 p-2 rounded-lg shadow border border-color'>
            <div className='p-2'>
                <img src={images[0]} alt={item.title} className='max-w-[80px] hover:scale-110 transition-all rounded duration-500 cursor-zoom-in' />
            </div>
            <div className=' p-2 w-full m- flex flex-col justify-between'>
                <h1 className='text-green-focus font-bold'>{title}</h1>
                <p className='flex justify-between items-center py-2 w-full'>
                    <span className=' text-green group-hover:cursor-pointer'>{`$${parseFloat(price * amount).toLocaleString()}`}</span>
                    <span onClick={()=> removeCart(id)} className='text-green-focus hover:opacity-70 cursor-pointer sm:border border-green flex items-center p-1 rounded'>
                        <BsTrash3/> 
                        <span className='sm:flex hidden'>REMOVE</span>
                    </span>
                </p>
                <p className='px-3 py-1 rounded-lg flex items-center justify-between text-sm m-2 sm:w-32 w-28 '>
                    <BsDashLg onClick={()=> decreaseAmount(id)} size={20} className='cursor-pointer border rounded-full hover:bg-green-focus hover:text-white transition-all'/>
                    <span className='px-5 font-bold'>{amount}</span>
                    <BsPlusLg onClick={()=> increaseAmount(id)} size={20}  className='cursor-pointer border rounded-full hover:bg-green-focus hover:text-white transition-all'/>
                </p>
            </div>
        </div>
    </div>
  )
}
