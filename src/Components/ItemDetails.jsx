// import React, { useContext } from 'react'
// import { useParams } from 'react-router-dom'
// ~
// import { ItemContext } from '../contexts/ItemContext'
// import {LiaPlusSolid} from 'react-icons/lia'

// export const ItemDetails = ({}) => {
    // const {id} = useParams()
    // const {items, handleClick, showDetails}  = useContext(ItemContext)
    

    //get the single product based on id
    // const product = items.find((prod) => {
    //     return prod.id === parseInt(id)
    // })
    // console.log(product)
   
    //if page not found
//     if (!product){
//         return (
//             <section className= 'h-screen w-full flex justify-center items-center font-bold text-xl bg-gradient-to-r bg-clip-text text-transparent from-[#781d75] to-[#EC094D] '>Please wait...</section>
//         )
//     };
    
//     const {image, price, category, title, description } = product

//   return (
//     <div className={`right-0 top-0  bg-black/70 z-[999] fixed flex items-center justify-center h-screen w-full `}>
//         <div className='bg-white md:w-2/3 w-4/5 md:h-2/3 relative shadow-lg  rounded'>
//             <button  onClick={handleClick} className='absolute right-4 top-4 text-xl font-bold '><FaTimes/></button>
//             <div className='p-2 md:p-5 h-full flex md:flex-row flex-col justify-center items-center' >
//                 <div className='justify-center bg-white w-1/2 md:h-2/3 flex items-center'>
//                     <img src={image} alt="" className=' object-center object-contain h-full w-full p-3' />
//                 </div>
//                 <div className='md:w-2/3 md:flex  items-center p-2'>
//                     <div>
//                         <p className='md:text-2xl text-xl font-bold p-3 bg-gradient-to-r bg-clip-text text-transparent from-[#781d75] to-[#EC094D]'>{title}</p>
//                         <p className='line-clamp-3 md:line-clamp-none '><span className='font-bold text-lg  '>Details: </span>{description}</p>
//                         <p className='flex justify-between p-2'>
//                             <p className='text-stone-100 font-bold bg-[#781d75] p-1 rounded'>${price}</p>
//                             <p className='capitalize text-stone-500 font-semibold'>{category}</p>
//                         </p>
//                         <p className='w-full flex items-center justify-between h-10 my-3 bg-stone-200/40 rounded hover:bg-[#781d75] transition-all duration-500'>
//                             <input type="button" value="Add to Shopping Cart" className=' w-full h-full font-bold hover:text-stone-100 bg-gradient-to-r bg-clip-text text-transparent from-[#781d75] to-[#EC094D]'/>
//                             <label htmlFor="" className='bg-stone-200 p-2 rounded m-1'><LiaPlusSolid/></label>
//                         </p>   
//                     </div>                                        
//                 </div>
//             </div>
//         </div>
//     </div>       
//   )
// }
