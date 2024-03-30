import React, {createContext, useState, useEffect} from 'react'

export const ItemContext = createContext()

export const ItemProvider = ({children}) => {
  const [items, setItems] = useState([])
  const [toggle, setToggle] = useState(false)
  const [popUP, setPopUp] = useState([])
  const [searchItem, setSearchItem] = useState('')
  


  useEffect(()=>{
    const body = document.querySelector('body');
    body.style.overflow = toggle? 'hidden' : 'auto';
  }, [toggle])

    const handleClick = () => {
      setToggle(!toggle)
      setPopUp([product])
    }

    useEffect(() => {
      const getProducts = async () => {
        const response = await fetch('https://dummyjson.com/products') 
        const data = await response.json() 
        setItems(data.products) 
      }
      getProducts()
    }, [])


           
  return (
    <ItemContext.Provider value={{items, toggle, popUP, handleClick, searchItem, setSearchItem}}>   
        {children}  
    </ItemContext.Provider>
  )
}
