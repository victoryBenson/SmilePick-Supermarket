import React from 'react'
import { TypeAnimation } from 'react-type-animation'

export const PromoDisplay = () => {
  return (
    <div className='flex justify-center items-center h-10 bg-green text-white'>
        <div className='flex text-xl'>
            <TypeAnimation 
                sequence={[
                    'Welcome to FloxyEmpire',
                    2000,
                    'We sell Quality Laptops',
                    2000,
                    'We sell Smart Phones',
                    2000,
                    'We sell Electronics',
                    2000,
                    'We sell Skincare',
                    2000,
                    'We sell fragrance',
                    2000,
                    'We sell Groceries',
                    2000,
                    'Call to Order: 08136878980',
                    3000,
                ]}
                wrapper="div"
                speed={30}
                repeat={Infinity}
            />
        </div>
        {/* <div></div> */}
    </div>
  )
}
