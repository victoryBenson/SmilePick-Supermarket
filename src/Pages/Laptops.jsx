import React, { useContext } from 'react'
import { ItemContext } from '../contexts/ItemContext'
import { CartContext } from '../contexts/CartContext'
import {LiaPlusSolid} from 'react-icons/lia'
import { Link } from 'react-router-dom'
import {BsSuitHeart, BsFillSuitHeartFill} from 'react-icons/bs'
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { RiArrowUpDownFill} from "react-icons/ri";

export const Laptops = () => {
  const {items} = useContext(ItemContext)
  const {addToCart, likebtn, setLikebtn} = useContext(CartContext)

    const scrollToTop = () => {
      window.scrollTo(0,0)
    }

  return (
    <div className='w-full transition-all'>
      <div className='flex items-center justify-between text-green-focus border-b font-bold border-color p-5 sticky top-20 bg-white z-10'>
        <h3>-Laptops</h3>
        <p className='flex items-center cursor-pointer'>
          <RiArrowUpDownFill/>
          Sort by
        </p>
      </div>
      <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-4 mx-10 sm:mx-3 mt-2'>
        {
          items.filter((item) => item.category == 'laptops').map((item) => {
            return (
              <div  className='rounded h-96 flex flex-col justify-between sm:p-2 p-1 bg-white shadow'>
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
                        <img src={item.thumbnail} alt="" className='h-full object-top hover:scale-110 transition-all rounded duration-500 cursor-zoom-in'/>
                    </Link>
                    <p className='flex flex-wrap items-center justify-between text-green-focus p-1'>
                        <span className='font-bold '>{item.title}</span>
                    </p>
                    <p className='flex flex-wrap justify-between items-center p-2'>
                        <p className='text-green rounded'>${item.price.toLocaleString()}</p>
                        <p className='flex transition-all text-sm'>
                          <a data-tooltip-content={`percentage off`} data-tooltip-id='my-tooltip' >-{item.discountPercentage}%</a>
                        </p>
                    </p>
                </div>
                <div className=' flex justify-center items-center'>
                    <div 
                        onClick={()=> addToCart(item, item.id)} 
                        className='cursor-pointer w-full flex items-center justify-between shadow rounded hover:text-white hover:bg-green text-green-focus transition-all '>
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
        <h1 className='text-green-focus border-b text-xl p-5 sticky top-20 bg-white mx-2 z-10'>You may also like</h1>
        <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-4 mx-10 sm:mx-3 mt-2'>
          {
            items.filter((item) => item.category == 'smartphones').map((item) => {
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
                          <img src={item.thumbnail} alt="" className='h-full object-top hover:scale-110 transition-all rounded duration-500 cursor-zoom-in'/>
                      </Link>
                      <p className='flex flex-wrap items-center justify-between text-green-focus p-1'>
                          <span className='font-bold '>{item.title}</span>
                      </p>
                      <p className='flex flex-wrap justify-between items-center'>
                          <p className='text-green p-1 rounded'>${item.price.toLocaleString()}</p>
                          <p className='flex transition-all text-sm'>
                            <a data-tooltip-content={`percentage off`} data-tooltip-id='my-tooltip' >-{item.discountPercentage}%</a>
                          </p>
                      </p>
                  </div>
                  <div className=' flex justify-center items-center'>
                      <div 
                          onClick={()=> addToCart(item, item.id)} 
                          className='cursor-pointer w-full flex items-center justify-between shadow rounded hover:text-white hover:bg-green text-green-focus transition-all '>
                          <input type="button" value="Add To Cart" className=' w-full h-full font-bold' />
                          <label htmlFor="" className='bg-stone-200 p-2 rounded m-1'><LiaPlusSolid/></label>
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
