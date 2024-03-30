import React from 'react'
import { CategoryMenu } from '../Components/CategoryMenu'
import { Outlet } from 'react-router-dom'
import { Collections } from '../Components/Collections'

export const AllCategories = () => {
  return (
    <div className='sm:flex mt-1'>
        {/* <div className='mt-5 sticky top-20 z-20'> */}
          <CategoryMenu/>
        {/* </div> */}
        <Outlet/>
    </div>
  )
}
