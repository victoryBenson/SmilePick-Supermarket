import React, {useContext} from 'react'
import { FaShopify } from 'react-icons/fa'
import {Link} from 'react-router-dom'
import { CartContext } from '../contexts/CartContext'
import { CartItem } from '../Components/CartItem'
import { BsSuitHeart} from 'react-icons/bs'
import { MdOutlineRemoveShoppingCart, MdReviews, MdAddShoppingCart} from 'react-icons/md'


export const AllCartItems = () => {
    const {cart,itemAmount} = useContext(CartContext)

    const scrollToTop = () => {
        window.scrollTo(0,0)
    }

  return (
    <div className='w-full transition-all'>
        <div className='bg-white relative shadow-lg w-full rounded '>
            <div className='p-5 mx-2 flex items-center justify-between border-b border-color sticky top-20 bg-white'>
                <p className='flex items-center text-lg font-bold uppercase text-green-focus '>
                    <p>{itemAmount > 1 ? itemAmount + ' items' : itemAmount + ' item'}</p>
                    <MdAddShoppingCart size={30} className='mr-1 text-green'/>
                </p>
            </div>
             {/* cart items  */}
            <div className='h-[60vh] p-3 overflow-auto no-scrollbar my-10'>
                { itemAmount? (
                    cart.map((item) => {
                        return(
                        <CartItem item={item} key={item.id}/>
                        )
                    })
                )
                :
                (
                    <div className='flex flex-col justify-center items-center h-full '>
                    <MdOutlineRemoveShoppingCart size={60} className='text-green'/>
                    <p className='p-2 font-bold text-green-focus'>Your cart is empty</p>
                    <p className='font-light'>You have not added any item to your cart.</p>
                    </div>
                )
                }
            </div>
        </div>
        {/* saved items */}
        <div className='bg-white rounded shadow mt-5 '>
            <h1 className='border-b p-5 text-lg text-green-focus font-bold sticky top-20 bg-white flex items-center'>
                Saved Items
                <BsSuitHeart className='text-green mx-1'/>
            </h1>
            <div className='flex flex-col justify-center items-center h-full py-5'>
                < BsSuitHeart size={60} className='text-green'/>
                <p className='p-2 font-bold text-green-focus text-lg'>You haven’t saved an item yet!</p>
                <p className='font-light text-stone-700 px-4'>
                <span className='text-green-focus font-bold px-1'>Found something you like?</span> 
                Tap on the heart shaped icon next to the item to add it to your wishlist!.All your saved items will appear here...
                </p>
                <Link to={`/`} onClick={scrollToTop}>
                    <button className='m-5 bg-green-focus p-3 rounded text-white capitalize hover:opacity-80 transition-all'>continue shopping</button>
                </Link>
            </div>
        </div>
        {/* recently viewed */}
        <div className='bg-white rounded shadow mt-5 sticky top-20 '>
            <h1 className='border-b p-5 text-lg text-green-focus flex items-center'>
                Recently Viewed
                <MdReviews />
            </h1>
            <p className='p-5 text-center text-green'>Recently viewd items will apppear </p>
        </div>
    </div>
  )
}
