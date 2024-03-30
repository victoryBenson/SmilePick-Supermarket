import React from 'react'
import { Outlet} from 'react-router-dom'
import { CartSummary } from './CartSummary'


export const MyCart = () => {
    
  return (
    <div className='md:flex transition-all  mx-5 gap-4 mt-5'>
       <Outlet/>
       <CartSummary/>
    </div>
  )
}
