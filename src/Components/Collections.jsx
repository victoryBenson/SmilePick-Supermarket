import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";

const delay = 5000;
export const Collections = () => {
    const [index,setIndex] = useState(0)

    const timeoutRef = useRef(null);
  
    const resetTimeout = ()=> {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }
  
    useEffect(() => {
        const slider = document.getElementById('slider')
      resetTimeout();
      timeoutRef.current = setTimeout(() =>
          setIndex((prevIndex) =>
            prevIndex === slider.length - 1 ? 0 : prevIndex + 1
          ),
        delay
      );
  
      return () => {
        resetTimeout();
      };
    }, [index]);

    const scrollToTop = () => {
        window.scrollTo(0,0)
    }

    const slideLeft = () =>{
        let slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500
    }

    // set sliderRight
    const slideRight = () =>{
        let slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500
    }

    
   
  return (
    <div className='relative transition-all h-full'>
         <MdOutlineArrowBackIosNew onClick={slideLeft} size={30} className='absolute top-1/2 z-20 text-white rounded-full left-0 cursor-pointer' />
        <div id='slider'  className='m-auto overflow-x-scroll whitespace-nowrap w-full h-full flex relative no-scrollbar'>
            <div className='h-full group slideshowSlider'>
                <Link to={`/categories/smart_phone`} onClick={scrollToTop} className='relative sm:w-[28rem] w-52 h-44 inline-block slide shadow group transition-all duration-200'>
                    <span className='group-hover:flex hidden bg-black/30 absolute z-10 top-0 right-0 left-0 w-full h-full'></span>
                    <img 
                        className='h-full w-full object-cover'  
                        alt="smart phone"
                        src={`https://m-cdn.phonearena.com/images/article/141270-wide-two_1200/Not-just-the-Pros-Apple-could-crank-up-iPhone-14-prices-significantly.jpg`}
                        />
                    <span className='absolute z-10 top-1/2 right-0 left-0 text-2xl text-white font-bold'>Smart Phones</span>
                </Link>
            </div>
            <div className='relative group slideshowSlider'>
                <Link to={`/categories/laptops`} onClick={scrollToTop} className='relative sm:w-[28rem] w-52 h-44 inline-block slide shadow transition-all duration-200'>
                    <span className='group-hover:flex hidden bg-black/30 absolute z-10 top-0 right-0 left-0 w-full h-full'></span>
                    <img 
                        className='h-full w-full object-cover'  
                        alt="smart phone"
                        src={`https://s.yimg.com/ny/api/res/1.2/tlECwXStRCcpgJLQ9hq0ZA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03MjA-/https://s.yimg.com/os/creatr-uploaded-images/2023-06/542c5620-1748-11ee-bade-78ffb1a5bc61`}
                        />
                    <span className='absolute z-10 top-1/2 right-0 left-0 text-2xl text-white font-bold'>Laptops</span>
                </Link>
            </div>
            <div className='relative group slideshowSlider'>
                <Link to={`/categories/skincare`} onClick={scrollToTop} className='relative sm:w-[28rem] w-52 h-44 inline-block slide shadow transition-all duration-200'>
                    <span className='group-hover:flex hidden bg-black/30 absolute z-10 top-0 right-0 left-0 w-full h-full'></span>
                    <img 
                        className='h-full w-full object-cover'  
                        alt="smart phone"
                        src={`https://www.byrdie.com/thmb/GIaZYKpryPvADGK9CzudNIqxEac=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Stocksy_txp1e306b0bcN0300_Medium_2363781-crop-3f6195da0e07421dadac5d259bf8153c.jpg`}
                        />
                    <span className='absolute z-10 top-1/2 right-0 left-0 text-2xl text-white font-bold'>Skincare</span>
                </Link>
            </div>
            <div className='relative group slideshowSlider'>
                <Link to={`/categories/fragrance`} onClick={scrollToTop} className='relative sm:w-[28rem] w-52 h-44 inline-block slide shadow transition-all duration-200'>
                    <span className='group-hover:flex hidden bg-black/30 absolute z-10 top-0 right-0 left-0 w-full h-full'></span>
                    <img 
                        className='h-full w-full object-cover'  
                        alt="smart phone"
                        src={`https://hips.hearstapps.com/amv-prod-gp.s3.amazonaws.com/gearpatrol/wp-content/uploads/2019/12/How-to-Apply-Fragrance-the-Right-Way-Gear-Patrol-lead-full.jpg`}
                        />
                    <span className='absolute z-10 top-1/2 right-0 left-0 text-2xl text-white font-bold'>Fragrances</span>
                </Link>
            </div>
            <div className='relative group slideshowSlider'>
                <Link to={`/categories/super_market`} onClick={scrollToTop} className='relative sm:w-[28rem] w-52 h-44 inline-block slide shadow transition-all duration-200'>
                    <span className='group-hover:flex hidden bg-black/30 absolute z-10 top-0 right-0 left-0 w-full h-full'></span>
                    <img 
                        className='h-full w-full object-cover'  
                        alt="smart phone"
                        src={`https://images.ctfassets.net/qr8kennq1pom/4HobsFfwuFnNfhL5G4TZil/bfb2aa5065e4a967e3cd1499f2c255bc/nrd-D6Tu_L3chLE-unsplash.jpg?fm=jpg&fl=progressive&q=70`}
                        />
                    <span className='absolute z-10 top-1/2 right-0 left-0 text-2xl text-white font-bold'>Super Market</span>
                </Link>
            </div>
            <div className='relative group slideshowSlider'>
                <Link to={`/categories/home_deco`} onClick={scrollToTop} className='relative sm:w-[28rem] w-52 h-44 inline-block slide shadow transition-all duration-200'>
                    <span className='group-hover:flex hidden bg-black/30 absolute z-10 top-0 right-0 left-0 w-full h-full'></span>
                    <img 
                        className='h-full w-full object-cover'  
                        alt="smart phone"
                        src={`https://hips.hearstapps.com/hmg-prod/images/harder-jett-008-1643379018.jpg?crop=1xw:1xh;center,top&resize=980:*`}
                        />
                    <span className='absolute z-10 top-1/2 right-0 left-0 text-2xl text-white font-bold'>Home-Decoration</span>
                </Link>
            </div>
        </div>
        <MdOutlineArrowForwardIos onClick={slideRight} size={30} className='absolute top-1/2 z-10 text-white rounded-full right-0 cursor-pointer'/>
    </div>
  )
}
