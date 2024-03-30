import React, {useContext, useState} from 'react'
import { SidebarContext } from '../contexts/SidebarContext'
import {Link} from 'react-router-dom'
import { CartContext } from '../contexts/CartContext'
import { BsArrowRight} from 'react-icons/bs'
import { MdPayment} from 'react-icons/md'

export const CartSummary = () => {
    const {handleCart} = useContext(SidebarContext)
    const {total} = useContext(CartContext)

    const scrollToTop = () => {
        window.scrollTo(0,0)
    }

  return (
    <div className=' md:w-[26rem] bg-white rounded '>
        <div className=' uppercase h-60 md:mx-0  bg-white sticky top-20 border border-color'>
            <p className='border-b border-color p-2 py-5 font-bold text-green-focus'>Cart Summary</p>
            <div className='flex flex-wrap items-center cursor-pointer justify-between mx-2 bg-white py-5 my-1'>
                <span className='flex items-center'>item total </span>
                <span  className=' text-green text-2xl px-2'>
                ${total.toLocaleString()}
                </span>
            </div>
            <Link to={`/payment`} onClick={scrollToTop} className=' p-4 justify-center bg-green-focus text-white font-bold shadow hover:opacity-80 transition-all mx-2 flex items-center rounded'>
                check out
                <MdPayment className='ml-1'/>
                (${total.toLocaleString()})
            </Link>
        </div>
    </div>
  )
}
