import React, {useContext, useEffect, useState} from 'react'
import { LuHome, LuLock, LuShoppingBag, LuHeart,} from 'react-icons/lu'
import {HiMiniBars3BottomLeft} from 'react-icons/hi2'
import { Link} from 'react-router-dom'
import { SidebarContext } from '../contexts/SidebarContext'
import AOS from 'aos'
import "aos/dist/aos.css"
import {IoArrowUndoOutline} from 'react-icons/io5'
import { UserAuth } from '../contexts/AuthContext'
import {PiUserLight,PiUser, PiSignOut } from 'react-icons/pi'
import { GiFlowerPot } from "react-icons/gi";


export const BottomMenu = () => {
  const {mobile, clickMobile} = useContext(SidebarContext)
  const {user, logOut} = UserAuth()
  const [menu, setMenu] = useState(false)

  
  useEffect(() => {
    AOS.init({
      duration: 500
    })    
  },[])

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  const handleLogOut = async () => {
        try {
            await logOut();
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }
  


  return (
    <div>
        <div className='h-16 z-[99] bg-white md:-bottom-28 bottom-0 fixed w-full transition-all duration-500 flex items-center justify-around'>
            {/* mobile */}
            <div className='flex flex-cols md:hidden px-3'>
                <HiMiniBars3BottomLeft size={20} onClick={clickMobile} className='cursor-pointer text-green-focus'/>
                {
                    mobile && (
                        <div>
                            <div onClick={clickMobile} className='bg-black/70 backdrop-blur fixed top-0 left-0 right-0 h-full w-full transition-all z-10'></div>
                            <div data-aos="fade-right" className='sm:w-2/4 w-full  fixed z-10 shadow-lg left-0 md:-left-0 top-0 h-full duration-500 transition-all'>  
                                <div className='relative bg-white h-full'>
                                    <div className='h-20 mx-2 flex items-center justify-between border-b relative'>
                                        <p className='p-2 flex items-center text-green-focus'>
                                            <span className='font-bold text-3xl text-center'>FloxyEmpire</span>
                                            <GiFlowerPot size={40} className='ml-2'/>
                                        </p>
                                        <p onClick={clickMobile} className=' flex items-end justify-end p-2 '><IoArrowUndoOutline size={30} /></p>
                                    </div>
                                    <div className='p-5 sm:px-10  px-5 flex flex-col'>
                                        <Link to = '/' className= "text-green-focus py-2 text-lg hover:underline decoration-green decoration-2 underline-offset-4" >
                                            Shops
                                        </Link>
                                        <Link to = '/' className= "text-green-focus py-2 text-lg hover:underline decoration-green decoration-2 underline-offset-4" >
                                            Offers                                 
                                        </Link>
                                        <Link to = '/' className= "text-green-focus py-2 text-lg hover:underline decoration-green decoration-2 underline-offset-4" >
                                            FAQ
                                        </Link>
                                        <Link to = '/' className= "text-green-focus py-2 text-lg hover:underline decoration-green decoration-2 underline-offset-4" >
                                            Contact
                                        </Link>
                                        <Link to = '/signup' className= " py-2 text-lg font-bold" >
                                            <span className='bg-green-focus text-white p-2 rounded hover:opacity-80 transition-all'>Become a Seller</span>
                                        </Link>
                                        <Link to = '/signin' className= " py-2 text-lg font-bold my-1" >
                                        <span className='bg-green-focus text-white p-2 rounded hover:opacity-80 transition-all'>Join</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <Link to='/' onClick={scrollToTop} className='flex items-center flex-col font-bold text-green-focus cursor-pointer'>
                <LuHome size={20}/>
                HOME
            </Link>
            <div>
                {
                    user? (
                        <div className='transition-all '>
                            <p 
                                onClick={()=> setMenu(!menu)} 
                                onMouseOver={()=> setMenu(!menu)} 
                                className='flex items-center flex-col font-bold cursor-pointer text-green-focus'>
                                <PiUserLight />
                                ACCOUNT
                            </p>
                            {
                                menu && (
                                    <div data-aos="fade-left"  onMouseLeave={()=> setMenu(!menu)}  className='absolute bg-white drop-shadow flex md:hidden -top-[19rem] z-[99] right-3 w-48 rounded p-2'>
                                        <div className='flex flex-col p-3 w-full transition-all '>
                                            <p onClick={()=> setMenu(!menu)}>
                                                <Link 
                                                    to={`account/acct_info`}
                                                    onClick={scrollToTop}
                                                    className='flex items-center p-2 w-full hover:underline decoration-green decoration-2 underline-offset-4'
                                                    >
                                                    <PiUser className='m-2'/>
                                                    Account Info
                                                </Link>
                                            </p>
                                            <p onClick={()=> setMenu(!menu)}>
                                                <Link 
                                                    to={`account/order`}
                                                    onClick={scrollToTop} 
                                                    className='flex items-center p-2 w-full hover:underline decoration-green decoration-2 underline-offset-4'>
                                                    <LuShoppingBag className='m-2'/>
                                                    Orders
                                                </Link>
                                            </p>
                                            <p onClick={()=> setMenu(!menu)}>
                                                <Link 
                                                    to={`account/saved_items`}
                                                    onClick={scrollToTop}
                                                    className='flex items-center p-2 w-full hover:underline decoration-green decoration-2 underline-offset-4'>
                                                    <LuHeart className="m-2"/>
                                                    Saved Items
                                                </Link>
                                            </p>
                                            <p 
                                                onClick={handleLogOut}
                                                className='flex items-center p-2 mt-5 w-full bg-green-focus rounded hover:opacity-80 transition-all text-white'
                                                >
                                                <PiSignOut className="m-2"/>
                                                Logout
                                            </p>
                                            <p>
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
                    )
                    :
                    (
                        <div>
                            <Link to={`/signin`} className='flex items-center flex-col font-bold cursor-pointer text-green-focus'>
                                <LuLock />
                                SIGNIN
                            </Link>
                        </div>
                    )
                }
            </div>
       </div>
    </div>
  )
}
