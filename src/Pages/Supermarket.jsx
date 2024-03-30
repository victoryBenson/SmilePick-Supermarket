import React, { useContext } from 'react'
import { ItemContext } from '../contexts/ItemContext'
import { CartContext } from '../contexts/CartContext'
import { Link } from 'react-router-dom'
import {BsSuitHeart, BsFillSuitHeartFill} from 'react-icons/bs';
import { RiArrowUpDownFill} from "react-icons/ri";
import { MdOutlineAddShoppingCart } from "react-icons/md";

export const Supermarket = () => {
  const {items} = useContext(ItemContext)
  const {addToCart, likebtn, setLikebtn} = useContext(CartContext)

  
    const scrollToTop = () => {
      window.scrollTo(0,0)
    }

  return (
    <div className='w-full transition-all'>
      <div className='flex items-center justify-between text-green-focus border-b border-color p-5 text-xl sticky top-20 bg-white z-10'>
        <h3>Super Market</h3>
        <p className='flex items-center cursor-pointer'>
          <RiArrowUpDownFill/>
          Sort by
        </p>
      </div>
      <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-4 mx-10 sm:mx-3 mt-2'>
        {
          items.filter((item) => item.category == 'groceries').map((item) => {
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
                        <p className='text-green font-bold text-lg p-1 rounded'>${item.price.toLocaleString()}</p>
                        <p className='flex transition-all text-sm'>
                        <a className='bg-green/20 rounded p-1' data-tooltip-content={`percentage off`} data-tooltip-id='my-tooltip' >-{item.discountPercentage}%</a>  
                        </p>
                    </p>
                </div>
                <div className='h-1/2 flex justify-center items-center transition-all'>
                    <div 
                        onClick={()=> addToCart(item, item.id)} 
                        className='cursor-pointer w-full flex items-center justify-between h-10 my-3 shadow rounded hover:text-white hover:bg-green text-green-focus transition-all '>
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
            items.filter((item) => item.category == 'skincare').map((item) => {
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
                            <p className='text-green font-bold text-lg p-1 rounded'>${item.price.toLocaleString()}</p>
                            <p className='flex transition-all bg-green/20 p-1 rounded'>
                              <a data-tooltip-content={`percentage off`} data-tooltip-id='my-tooltip' >-{item.discountPercentage}%</a>
                            </p>
                        </p>
                    </div>
                    <div className='h-1/2 flex justify-center items-center transition-all'>
                        <div 
                            onClick={()=> addToCart(item, item.id)} 
                            className='cursor-pointer w-full flex items-center justify-between h-10 my-3 p-1 shadow rounded hover:text-white hover:bg-green text-green-focus transition-all '>
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
