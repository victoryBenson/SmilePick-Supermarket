import React, { useContext, useState } from 'react'
import { ItemContext } from '../contexts/ItemContext'
import { CartContext } from '../contexts/CartContext'
import { RiArrowUpDownFill} from "react-icons/ri";
import { Link } from 'react-router-dom'
import {BsSuitHeart, BsFillSuitHeartFill} from 'react-icons/bs'
import { MdOutlineAddShoppingCart } from "react-icons/md";

export const SmartPhones = () => {
  const {items} = useContext(ItemContext)
  const {addToCart, likebtn, setLikebtn} = useContext(CartContext)
  const [toggle, setToggle] = useState(false)

    
    const scrollToTop = () => {
      window.scrollTo(0,0)
    }

    //filter items
    const result = items.filter((item) => item.category == 'smartphones')
    // console.log(result)
   
    const handleSort = () => {
      setToggle(!toggle)
      // toggle?  result.reverse() : result.sort((a,b) => a.title.localeCompare(b.title))
      // console.log(result)
      if (toggle) {
        result.reverse()
        console.log(result)
      } else{
        result.sort((a,b) => a.title.localeCompare(b.title))
      }
    }

  return (
    <div className='w-full transition-all'>
      <div className='flex items-center justify-between text-green-focus border-b font-bold border-color p-5 sticky top-20 bg-white z-10'>
        <h3>Smart Phones</h3>
        <p onClick={handleSort} className='flex items-center cursor-pointer'>
          <RiArrowUpDownFill/>
          Sort by
        </p>
      </div>
      <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-4 mx-10 sm:mx-3 mt-2'>
        {
          result.map((item, id) => {
            return (
              <div key={id} className='rounded h-96 flex flex-col justify-between sm:p-2 p-1 bg-white shadow'>
                <div className='h-4/5 flex group flex-col justify-center'>
                    <span onClick={()=> setLikebtn(!likebtn)} className='flex text-sm justify-end font-bold text-[#fb923c] m-5 transition-all'>
                        {
                            likebtn?
                            <a data-tooltip-id='my-tooltip' data-tooltip-content='added to saved items'>
                                <BsFillSuitHeartFill size={20} />
                            </a>
                            :
                            <a data-tooltip-id='my-tooltip' data-tooltip-content='click to save item'>
                                <BsSuitHeart size={20}/>
                            </a>
                        }
                    </span>
                    <Link onClick={scrollToTop} to={`/productdetail/${item,item.id}`} className='h-1/2 flex justify-center items-center overflow-hidden'>
                        <img src={item.thumbnail} alt="" className='h-full object-top object-cover hover:scale-110 transition-all rounded duration-500 cursor-zoom-in'/>
                    </Link>
                    <p className='flex flex-wrap items-center justify-between text-green-focus line-clamp-3 p-1'>
                        <span className='font-bold '>{item.title}</span>
                    </p>
                    <p className='flex flex-wrap justify-between items-center'>
                        <p className='text-green p-1 rounded'>${item.price.toLocaleString()}</p>
                        <p className='flex transition-all'>
                          <a className='text-sm' data-tooltip-content={`percentage off`} data-tooltip-id='my-tooltip' >-{item.discountPercentage}%</a>
                        </p>
                    </p>
                </div>
                <div className='flex justify-center items-center'>
                    <div 
                        onClick={()=> addToCart(item, item.id)} 
                        className='cursor-pointer w-full flex items-center justify-between shadow rounded hover:bg-green hover:text-white text-green-focus transition-all '>
                        <input type="button" value="Add To Cart" className=' w-full h-full font-bold' />
                        <label htmlFor="" className='bg-stone-200 p-2 rounded m-1'><MdOutlineAddShoppingCart /></label>
                    </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className='mt-10'>
        <h1 className='text-green-focus border-b border-color font-bold p-5 z-10 sticky top-20 bg-white mx-2'>You may also like</h1>
        <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-4 mx-10 sm:mx-3 mt-2'>
          {
            items.filter((item) => item.category == 'laptops').map((item) => {
              return (
                <div  className='rounded h-96 flex flex-col justify-between sm:p-4 p-1 bg-white shadow'>
                  <div className='h-4/5 flex group flex-col justify-center'>
                      <span onClick={()=> setLikebtn(!likebtn)} className='flex text-sm justify-end font-bold text-[#fb923c] m-5 transition-all'>
                          {
                              likebtn?
                              <a data-tooltip-id='my-tooltip' data-tooltip-content='added to saved items'>
                                  <BsFillSuitHeartFill size={20} />
                              </a>
                              :
                              <a data-tooltip-id='my-tooltip' data-tooltip-content='click to save item'>
                                  <BsSuitHeart size={20}/>
                              </a>
                          }
                      </span>
                      <Link onClick={scrollToTop} to={`/productdetail/${item,item.id}`} className='h-1/2 flex justify-center items-center overflow-hidden'>
                          <img src={item.thumbnail} alt="" className='h-full object-center hover:scale-110 transition-all rounded duration-500 cursor-zoom-in'/>
                      </Link>
                      <p className='flex flex-wrap items-center justify-between text-green-focus p-1'>
                          <span className='font-bold'>{item.title}</span>
                      </p>
                      <p className='flex flex-wrap justify-between items-center'>
                          <p className='text-green rounded'>${item.price.toLocaleString()}</p>
                          <p className='flex transition-all'>
                            <a className='text-sm' data-tooltip-content={`percentage`} data-tooltip-id='my-tooltip' >-{item.discountPercentage}%</a>
                          </p>
                      </p>
                  </div>
                  <div className=' flex justify-center items-center'>
                      <div 
                          onClick={()=> addToCart(item, item.id)} 
                          className='cursor-pointer w-full flex items-center justify-between shadow rounded hover:bg-green hover:text-white text-green-focus transition-all '>
                          <input type="button" value="Add To Cart" className=' w-full h-full font-bold' />
                          <label htmlFor="" className='bg-stone-200 p-2 rounded m-1'><MdOutlineAddShoppingCart /></label>
                      </div>
                  </div>
              </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
