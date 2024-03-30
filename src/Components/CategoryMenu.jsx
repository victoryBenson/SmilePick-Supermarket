import React, { useContext, useState } from 'react'
import { ItemContext } from '../contexts/ItemContext'
import { Link, NavLink } from 'react-router-dom'
import { RiArrowUpDownFill} from "react-icons/ri";
import { MdManageSearch } from "react-icons/md";
import { FaArrowLeftLong } from "react-icons/fa6";
import { CartContext } from '../contexts/CartContext';

export const CategoryMenu = () => {
    const {items} = useContext(ItemContext)
    // const [searchCat, setSearchCat] = useState([])
    // const [searchParam] = useState(['title']);
    const {isActive} = useContext(CartContext)

    const scrollToTop = () => {
        window.scrollTo(0,0)
    }

    // const resultSearch = (e, items)=> {
    //     setSearchCat((e)=> e.target.id)
    //     return (
    //         items.filter((item) => {
    //             if(item.category === searchCat){
    //                 return searchParam.some((newItem) => {
    //                     return (
    //                         item[newItem].toString().toLowerCase().indexOf()
    //                     )
    //                 })
    //             }
    //         })
    //     )
    // }


 return (
    <div className='sm:w-80 bg-white shadow transition-all'>
        <div className='hidden sm:block'>
            <div className='relative'>
                <h1 className='flex items-center text-green-focus border-b border-color font-bold p-5 bg-white z-10 sticky top-20'>
                    <MdManageSearch />
                    Browse Categories
                </h1>
                <div className='flex flex-col p-3 transition-all' onClick={scrollToTop}>
                    <NavLink 
                        id='smartphones'
                        style={
                            ({isActive}) => {
                            return {color: isActive && '#22c55e'}
                        }}
                        // onClick={scrollToTop} 
                        to={`/categories/smart_phone`}   
                        className='p-2  hover:underline decoration-green decoration-2 underline-offset-4'>
                            Smart Phones
                    </NavLink>
                    <NavLink 
                        to={`/categories/laptops`}
                        style={
                            ({isActive}) => {
                            return {color: isActive && '#22c55e'}
                        }} 
                        onClick={scrollToTop} 
                        className='p-2  hover:underline decoration-green decoration-2 underline-offset-4'>
                            Laptops
                    </NavLink>
                    <NavLink 
                        to={`/categories/skincare`} 
                        onClick={scrollToTop}
                        style={
                            ({isActive}) => {
                            return {color: isActive && '#22c55e'}
                        }}  
                        className='p-2  hover:underline decoration-green decoration-2 underline-offset-4'>
                            SkinCare
                    </NavLink>
                    <NavLink 
                        to={`/categories/fragrance`} 
                        onClick={scrollToTop}
                        style={
                            ({isActive}) => {
                            return {color: isActive && '#22c55e'}
                        }} 
                        className='p-2  hover:underline decoration-green decoration-2 underline-offset-4'>
                            Fragrance
                    </NavLink>
                    <NavLink 
                        to={`/categories/home_deco`} 
                        onClick={scrollToTop}
                        style={
                            ({isActive}) => {
                            return {color: isActive && '#22c55e'}
                        }} 
                        className='p-2  hover:underline decoration-green decoration-2 underline-offset-4'>
                            Home Decoration
                    </NavLink>
                    <NavLink 
                        to={`/categories/super_market`} 
                        onClick={scrollToTop}
                        style={
                            ({isActive}) => {
                            return {color: isActive && '#22c55e'}
                        }} 
                        className='p-2  hover:underline decoration-green decoration-2 underline-offset-4'>
                            Goceries
                    </NavLink>
                </div>
                <div>
                    {}
                </div>
            </div>
            <div>
                <h1 className='text-green-focus border-b font-bold border-color p-5 bg-white z-10 sticky top-20 flex items-center'>
                    <RiArrowUpDownFill/>
                    Sort Items
                </h1>
                <div className='flex flex-col p-3'>
                    <span className='p-2 cursor-pointer'>
                        <input type="radio" name="" id="" className='mx-1' />
                        Alphabetically
                    </span>
                    <span className='p-2 cursor-pointer'>
                        <input type="radio" name="" id="" className='mx-1' />
                        Price - high to low
                    </span>
                    <span className='p-2 cursor-pointer'>
                        <input type="radio" name="" id="" className='mx-1' />
                        Price - low to high
                    </span>
                </div>
            </div>
        </div>
        <div className='p-2 fle items-center hidden sticky top-24'>
            <FaArrowLeftLong />
            <span className='underline'>go back</span>
        </div>
    </div>
  )
}
