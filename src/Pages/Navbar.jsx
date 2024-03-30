import React, { useState, useEffect, useContext} from 'react'
import { Link} from 'react-router-dom'
import { CartContext } from '../contexts/CartContext'
import {FiUser} from 'react-icons/fi'
import {TfiHelpAlt} from 'react-icons/tfi'
import { SidebarContext } from '../contexts/SidebarContext'
import { BsCart4 } from 'react-icons/bs'
import { LuSearch, LuLock, LuShoppingBag, LuHeart, LuHome} from 'react-icons/lu'
import { useNavigate } from "react-router-dom";
import { ItemContext } from '../contexts/ItemContext'
import {FcShop} from 'react-icons/fc'
import { UserAuth } from '../contexts/AuthContext'
import {PiSignOut, PiUserLight, PiUser} from 'react-icons/pi'
import AOS from 'aos'
import "aos/dist/aos.css"
import { toast } from 'react-toastify'
import { GiFlowerPot } from "react-icons/gi";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

export const Navbar = () => {
    const {isActive, setIsActive } = useContext(CartContext)
    const [dropDown, setDropDown] = useState(false)
    const {itemAmount} = useContext(CartContext)
    const {searchItem, setSearchItem} = useContext(ItemContext)
    const {user, logOut} = UserAuth()
    const navigate = useNavigate()
    const [menu, setMenu] = useState('')

   const handleDrop = () => {
        setDropDown(!dropDown)
    }

    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    useEffect(() => {
        AOS.init({
          duration: 500
        })    
    },[])

    const handleLogOut = async () => {
        try {
            await logOut();
            toast.success('you have logged out!')
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

   return (
    <div className={`${isActive ? 'fixed w-full top-0 bg-green-focus z-[99] ' : 'bg-white'} transition-all flex justify-between items-center h-20 md:px-5 px-2  shadow text-green-focus `}>
        {/* leftSide */}   
        <div className='mx-2 relative hidden sm:flex'>
            <Link onClick={scrollToTop} to={`/`} className={`${isActive? 'text-green ' : 'text-green-focus'} font-bold lg:text-3xl md:text-xl text-center flex items-center`}>
                FloxyEmpire
                <GiFlowerPot/>
            </Link>
        </div>
        <div className={`h-1/2 w-96  top-0 rounded bg-white flex items-center relative border border-color border-gray`}>
            <LuSearch className='bg-stone-white mx-1'/>
            <input 
                type="search" 
                name="search"
                value={searchItem}
                onChange={(e)=> setSearchItem(e.target.value)}
                placeholder='search on FloxyEmpire...' 
                className='text-stone-500  w-full h-full rounded outline-none transition-all duration-1000'
            />
        </div>
        {/* right-Side */}
        <div className={`${isActive? 'text-green' : 'text-green-focus'} md:flex items-center sm:px-5 px- `} >
            <div className='relative'>
                <Link to={`/mycart/cartpage`} onClick={scrollToTop} className= {` ${ isActive && 'hover:underline decoration-gray-light decoration-2 underline-offset-4'} cursor-pointer hover:underline decoration-green-focus decoration-2 underline-offset-4`} >
                    <span className={`${isActive ? 'bg-green' : 'bg-green-focus'} text-white  absolute top- 3 md: -top-1 shadow-lg text-sm p-2 left-7  rounded-full w-5 h-5 flex items-center justify-center`}>{itemAmount}</span>
                    <p className={ `flex items-center px-3 py-2 rounded-lg`}>
                        <BsCart4  size={20} className={`mr-2 ${isActive? 'text-white' : 'text-green-focus'}`}/>
                        <span >CART</span>
                    </p>
                </Link>
            </div>
            <Link onClick={scrollToTop} to = '/signin' className= {` ${ isActive && 'hover:underline decoration-gray-light decoration-2 underline-offset-4'} hidden md:flex cursor-pointer hover:underline decoration-green-focus decoration-2 underline-offset-4`} >
                <span className='flex items-center px-3 py-2 rounded-lg '> <TfiHelpAlt className={`mr-2 ${isActive? 'text-white' : 'text-green-focus'}`}/> HELP</span>
            </Link>
            {
                user?.email? (
                    <div className='flex items-center'>
                        <div className='transition-all '>
                            <p onClick={()=> setMenu(!menu)} onMouseOver={()=> setMenu(!menu)} className={`${ isActive && 'decoration-gray-light'} hidden md:flex  cursor-pointer hover:underline decoration-green-focus decoration-2 underline-offset-4 items-center px-3 py-2 rounded-lg relative transition-all duration-500`}>
                                <PiUserLight className={`mr-2 ${isActive? 'text-white' : 'text-green-focus'}`}/>
                                ACCOUNT
                            </p>
                            {
                                menu && (
                                    <div data-aos="zoom-in" onMouseLeave={()=> setMenu(!menu)} className='absolute bg-white shadow flex z-[99] right-40 w-48 rounded p-2'>
                                        <div className='flex flex-col p-3 w-full transition-all text-stone-700'>
                                            <p onClick={()=> setMenu(!menu)}>
                                                <Link 
                                                    to={`account/acct_info`}
                                                    onClick={scrollToTop}
                                                    className='flex items-center p-2 w-full hover:underline decoration-green-focus text-green-focus decoration-2 underline-offset-4'
                                                    >
                                                    <PiUser className='m-2'/>
                                                    Account Info
                                                </Link>
                                            </p>
                                            <p onClick={()=> setMenu(!menu)}>
                                                <Link 
                                                    to={`account/order`}
                                                    onClick={scrollToTop} 
                                                    className='flex items-center p-2 w-full hover:underline decoration-green-focus text-green-focus decoration-2 underline-offset-4'>
                                                    <LuShoppingBag className='m-2'/>
                                                    Orders
                                                </Link>
                                            </p>
                                            <p onClick={()=> setMenu(!menu)}>
                                                <Link 
                                                    to={`account/saved_items`}
                                                    onClick={scrollToTop}
                                                    className='flex items-center p-2 w-full hover:underline decoration-green-focus text-green-focus decoration-2 underline-offset-4'>
                                                    <LuHeart className="m-2"/>
                                                    Saved Items
                                                </Link>
                                            </p>
                                            <p className='border-t ' onClick={()=> setMenu(!menu)}>
                                                <Link 
                                                    onClick={scrollToTop} 
                                                    to={`/`} 
                                                    className="text-green flex items-center p-2 hover:underline decoration-green-focus decoration-2 underline-offset-4">
                                                    <LuHome className='m-2'/>return home
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                        <div onClick={handleLogOut}  className={`${ isActive ? 'bg-green ' : ' bg-green-focus'} hover:opacity-80 text-white rounded text-stone-100 shadow-drop shadow-green hidden md:flex cursor-pointer items-center px-3 py-2 transition-all`}>
                            <PiSignOut className={` ${isActive && 'text-white'} mr-1 text-green`}/> 
                            LOGOUT
                        </div>
                    </div>
                ) 
                :
                (
                    <div className='flex items-center'>
                        <Link onClick={scrollToTop} to ='/signin' className={` ${ isActive && 'decoration-gray-light'} hidden md:flex cursor-pointer hover:underline decoration-2 underline-offset-4 items-center px-3 py-2 transition-all`}>
                            <FiUser className={`mr-2 ${isActive? 'text-white' : 'text-green-focus'}`}/> 
                            LOGIN
                        </Link>
                        <Link onClick={scrollToTop} to ='/sigup'  className={` ${ isActive ? 'bg-green ' : ' bg-green-focus'} hover:opacity-80 text-white rounded text-stone-100 shadow-drop shadow-green hidden md:flex cursor-pointer items-center px-3 py-2 transition-all`}>
                            <LuLock className={` ${isActive && 'text-white'} mr-1 text-green`}/> 
                            SIGNUP
                        </Link>
                    </div>
                )
            }
        </div>
        {/* floating */}
        <div onClick={scrollToTop} className='transition-all fixed right-4 md:bottom-4 bottom-20 z-[999] cursor-pointer text-green'>
            <BsFillArrowUpCircleFill size={40} className='bg-white rounded-full'/>
        </div>
    </div>
  )
}
