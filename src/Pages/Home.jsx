import React, { useContext, useState, useEffect} from 'react'
import { ItemContext } from '../contexts/ItemContext'
import Shopping from '../assets/images/Shopping.png'
import { Product } from '../Components/Product'
import {BsEmojiSunglasses} from 'react-icons/bs'
import { SidepriceTag } from '../Components/SidepriceTag'
import { FaShopify } from 'react-icons/fa'
import { CategoryMenu } from '../Components/CategoryMenu'
import { MdSearchOff, MdOutlineAddShoppingCart } from "react-icons/md";
import { Collections } from '../Components/Collections'
import { GiFlowerPot } from "react-icons/gi";


 export const Home = () => {
    const {items, searchItem} = useContext(ItemContext)
    const [isActive, setIsActive] = useState(false)

    useEffect( () => {
        window.addEventListener('scroll', () => {
            window.scrollY > 70 ? setIsActive(true) : setIsActive(false)
        });
    })

    const SearchResult = items.filter((product) => {
        if(searchItem == "" || product.title.toLowerCase().includes(searchItem.toLowerCase())){
            return product
        }
    })


  return (
    <div className='min-h-screen'>
        <div id='hero' className='group relative bg-green/10  max-h-80 flex items-center justify-center translation '>
            <p className='hover:bg-green/30 absolute top-0 w-full h-full right-0 left-0 -z-10'></p>
            <div className=' h-[20rem] flex md:justify-start justify-end items-center relative z-10'>
                <span className='bg-green/20 right-0 left-0 w-full h-full top-0 absolute rounded-br-full rounded-tl-full'></span>
                <img src={Shopping} alt="" className=' object-contain object-center lg:rounded-full h-full w-full border-green lg:scale-x-100 -scale-x-100 '/>
            </div>
            <div className="items-center justify-center h-80 lg:relative absolute z-20 left-0 right-0 sm:mx-5 mx-1  duration-500 transition-all">
                <div className='rounded flex flex-col justify-center p-2 relative sm:bg-black/0 h-full '>
                    <p className=' flex flex-wrap items-center text-2xl '>
                        <span id='welcome' className='font-bold text-green-focus flex items-center drop-shadow text-sm sm:text-normal'>Hello <span className='text-green pl-2'>there!</span></span> 
                        <BsEmojiSunglasses className='text-green-focus ml-1'/>
                    </p>
                    <h1 className='font-bold text-green-focus py-3 md:text-4xl text-2xl flex items-center'>
                        <span className='mr-1 text-green drop-shadow bg-white/80 p-1'>Welcome </span> 
                        to FloxyEmpire 
                        <GiFlowerPot />
                    </h1>
                    <h2 className='sm:py-5 p-1 text-xl md:font-light text-green-focus'>Get your order delivered at your doorsteps all day everyday</h2>
                    <button className='py-4 font-bold text-stone-100 text-xl flex '>
                        <a href='#products' className='border-green-focus shadow hover:opacity-80 text-white bg-green-focus rounded p-2 cursor-pointer transition-all flex items-center'>
                            Shop now
                            <FaShopify className='mx-1' size={30}/>
                        </a>
                    </button>
                </div>
            </div>
        </div>
        <div>
            <h1 className='text-center sm:text-3xl text-xl p-1 font-bold text-green-focus bg-green/30 flex items-center justify-center '>
                Shop From Our Collections 
                <MdOutlineAddShoppingCart/>
            </h1>
            <div className='text-center'>
                <Collections/>
            </div>
        </div>
        {
            (SearchResult.length) ?
                <div className='relative'>
                    <div className='mx-10 mt-2'>
                        <div id='products' className=' grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 h-full'>
                        {
                            SearchResult.map((product) => {
                                return (
                                    <Product key={product.id} product={product}/>
                                )
                            })
                        }
                        </div>
                        <SidepriceTag/>
                    </div>
                </div>
                :
                <div className='text-center py-10  text-stone-600 font-bold text-2xl  flex justify-center items-center '>
                    <span className='flex items-center'>
                        <MdSearchOff size={40} className='mx-1 text-[#781d75] '/>
                        No match Found!
                    </span>
                </div>
        }
    </div>
  )
}

 