import React, {useContext, useEffect} from 'react'
import { FaShopify } from 'react-icons/fa'
import {Link} from 'react-router-dom'
import { CartContext } from '../contexts/CartContext'
import AOS from 'aos'
import "aos/dist/aos.css"

export const SidepriceTag = () => {
  const {itemAmount, total} = useContext(CartContext)
  

  useEffect(() => {
    AOS.init({
      duration: 500
    })    
  },[])

  
    const scrollToTop = () => {
      window.scrollTo(0, 0)
  }

  return (
    <Link to={`/mycart/cartpage`} onClick={scrollToTop} className='fixed top-1/2 z-[999] md:right-0 -right-40 transition-all bg-green-focus h-20 w-auto text-white font-bold px-1 flex flex-col justify-around items-center shadow-lg rounded-l-lg'>
      <p className='flex items-center text-sm w-full'>
          {itemAmount > 1 ? itemAmount + ' items' : itemAmount + ' item'}
          <FaShopify className='mr-1'/>
      </p>
        <p className='bg-white flex items-center text-green-focus justify-center w-full rounded'>${total.toLocaleString()}</p>
    </Link>
  )
}
