import React, {createContext, useState, useEffect} from 'react'

export const SidebarContext = createContext()

export const SidebarProvider = ({children}) => {
    const [mobile, setMobile] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    const clickMobile = () =>{
        setMobile(!mobile)
    }

    const handleCart = () =>{
        setIsOpen(!isOpen)
    }

    useEffect(()=>{
      const BODY = document.querySelector('body');
      BODY.style.overflow = isOpen? 'hidden' : 'auto';
    }, [isOpen])

    useEffect(()=>{
      const BODY = document.querySelector('body');
      BODY.style.overflow = mobile? 'hidden' : 'auto';
  }, [mobile])

  return (
    <SidebarContext.Provider value={{mobile, clickMobile, handleCart, isOpen}}>
        {children}
    </SidebarContext.Provider>
  )
}
