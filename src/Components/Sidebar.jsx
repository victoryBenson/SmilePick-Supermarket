import React, {useEffect, useContext}from 'react'
import {PiUser, PiSignOut} from 'react-icons/pi'
import { NavLink} from 'react-router-dom'
import {LuShoppingBag, LuHeart, LuHome} from 'react-icons/lu'
import AOS from 'aos'
import "aos/dist/aos.css"
import { CartContext } from '../contexts/CartContext'

export const Sidebar = () => {
    const {isActive} = useContext(CartContext)

    useEffect(() => {
        AOS.init({
          duration: 1000
        })    
      },[])
    
      const scrollToTop = () => {
        window.scrollTo(0, 0)
      }

  return (
    <div className=''>
        <div className='hidden md:flex flex-col sticky top-24 p-3 transition-all md:w-80 bg-white text-green-focus border border-color h-80 items-center rounded shadow'>
            <NavLink 
                to={`acct_info`}
                style={
                    ({isActive}) => {
                    return {color: isActive && '#22c55e'}
                }}
                className='flex items-center p-2 w-full hover:underline decoration-green decoration-2 underline-offset-4'
                >
                <PiUser className='m-2'/>
                Account Information
            </NavLink>
            <NavLink 
                to={`order`}
                style={
                    ({isActive}) => {
                    return {color: isActive && '#22c55e'}
                }} 
                className='flex items-center p-2 w-full hover:underline decoration-green decoration-2 underline-offset-4'>
                <LuShoppingBag className='m-2'/>
                Orders
            </NavLink>
            <NavLink 
                to={`saved_items`}
                style={
                    ({isActive}) => {
                    return {color: isActive && '#22c55e'}
                }}
                className='flex items-center p-2 w-full hover:underline decoration-green decoration-2 underline-offset-4'>
                <LuHeart className="m-2"/>
                Saved Items
            </NavLink>
            <NavLink 
                to={`/signin`}
                className='flex items-center p-2 mt-5 w-full bg-green-focus rounded hover:opacity-75 transition-all text-white'
                >
                <PiSignOut className="m-2"/>
                Logout
            </NavLink>
            <NavLink onClick={scrollToTop} to={`/`} className="text-green border-b border-green-focus flex items-center p-2 hover:underline decoration-gr decoration-2 underline-offset-4">
                <LuHome className='m-2'/>return home
            </NavLink>
        </div>
        <div className={` ${isActive && 'fixed w-full top-20 z-[999] right-0 left-0'} md:hidden `}>
            <div className='flex w-full bg-green-focus text-white h-14'>
                <NavLink 
                    to={`acct_info`}
                    style={
                        ({isActive}) => {
                        return {color: isActive && '#22c55e'}
                    }}
                    className='text-sm border-r flex flex-wrap items-center justify-center p-2 w-full hover:underline decoration-green decoration-2 underline-offset-4'
                    >
                    <PiUser className='m-2'/>
                    Account Info
                </NavLink>
                <NavLink 
                    to={`order`}
                    style={
                        ({isActive}) => {
                        return {color: isActive && '#22c55e'}
                    }} 
                    className='text-sm border-r flex flex-wrap items-center justify-center p-2 w-full hover:underline decoration-green decoration-2 underline-offset-4'>
                    <LuShoppingBag className='m-2'/>
                    Orders
                </NavLink>
                <NavLink 
                    to={`saved_items`}
                    style={
                        ({isActive}) => {
                        return {color: isActive && '#22c55e'}
                    }}
                    className='text-sm border-r flex flex-wrap items-center justify-center p-2 w-full hover:underline decoration-green decoration-2 underline-offset-4'>
                    <LuHeart className="m-2"/>
                    Saved Items
                </NavLink>
            </div>
        </div>
    </div>
  )
}
