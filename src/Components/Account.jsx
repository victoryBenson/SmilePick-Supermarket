import React from 'react'
import { Sidebar } from './Sidebar'
import { Outlet } from 'react-router-dom'

export const Account = () => {
  return (
    <div className='relative md:flex h-full md:flex-row justify-between lg:mx-10 md:p-5 md:gap-8'>
      <Sidebar/>
       <Outlet/>
    </div>
  )
}
