import React from 'react'

export const AccountInfo = () => {
  return (
    <div className='relative w-full'>
        <div className=' rounded shadow border border-color sm:mx-5 mx-2'>
            <h1 className='border-b border-color p-5 sticky top-32 md:top-20 bg-white text-green-focus font-bold text-xl '>Account Overview</h1>
            <form className='p-4 lg:m-10'>
                <div className='md:flex justify-around my- gap-4 text-green-focus'>
                    <div className='border border-color md:w-full my-5 rounded'>
                        <input 
                            type="text" 
                            name="" 
                            id="" 
                            placeholder='Firstname'
                            className='p-2 w-full outline-none'
                        />
                    </div>
                    <div className='md:w-full border border-color my-5 rounded'>
                        <input 
                            type="text" 
                            name="" 
                            id="" 
                            placeholder='Lastname'
                            className='p-2 w-full outline-none'
                        />
                    </div>
                </div>
                <div className='md:flex justify-around my- gap-4'>
                    <div className='md:w-full border border-color my-5 rounded'>
                        <input 
                            type="email" 
                            name="" 
                            id="" 
                            placeholder='expmple@gmail.com'
                            className='p-2 w-full outline-none'
                        />
                    </div>
                    <div className='md:w-full border border-color my-5 rounded'>
                        <input 
                            type="password" 
                            name="" 
                            id="" 
                            placeholder='Current password'
                            className='p-2 w-full outline-none'
                        />
                    </div>
                </div>
                <div className='md:flex justify-around gap-4'>
                    <div className='border border-color md:w-full my-5 rounded'>
                        <input 
                            type="password" 
                            name="" 
                            id="" 
                            placeholder='New Password'
                            className='p-2 w-full outline-none'
                        />
                    </div>
                    <div className='md:w-full border border-color my-5 rounded'>
                        <input 
                            type="password" 
                            name="" 
                            id="" 
                            placeholder='Confirm Password'
                            className='p-2 w-full outline-none'
                        />
                    </div>
                </div>
                <div className='m-5 flex justify-center'>
                    <button className='bg-green-focus text-white w-full p-3 rounded-lg transition-all hover:opacity-80'>
                        SAVE CHANGES
                    </button> 
                </div>
            </form>
        </div>
    </div>
  )
}
