import React,{createContext, useState, useEffect} from 'react'
import { toast } from 'react-toastify'
export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [itemAmount, setItemAmount] = useState(0)
    const [isActive, setIsActive] = useState(false)
    const [total, setTotal] = useState(0)
    const [leftOut, setLeftOut] = useState(0)
    const [likebtn, setLikebtn] = useState(false)
    
    // add to cart  
    const addToCart = (product,id) => {
      const newItem = {...product, amount: 1}
      
      const cartItem = cart.find((item) => {
        return item.id === id;
       });
       
      if (cartItem) {
        const newCart = [...cart].map((item) => {
          if (item.id === id ){
            return {...item, amount: cartItem.amount + 1}
          } else{
            return item
          }
        });
        setCart(newCart)

       } else {
         setCart([...cart, newItem])
         toast.success('Product has been added to Cart', {position: 'bottom-center'})
       }
    };
    

    // remove Item from Cart
    const removeCart = (id) => {
      const newCart = cart.filter((item)=> {
        return item.id !== id
      });
      setCart(newCart)
    }

    // clear Cart
    const clearCart = () => {
      setCart([])
    }

    // increase Amount 
    const increaseAmount = (id) => {
      const cartItem = cart.find((item) => item.id === id);
      addToCart(cartItem, id)
    }


    //decreaseAmount
    const decreaseAmount = (id) => {
      const cartItem = cart.find((item) => item.id === id);
      if(cartItem){
        const newCart = cart.map((item)=> {
          if (item.id === id){
            return {...item, amount: cartItem.amount - 1}
          }else {
            return item
          }
        });
        setCart(newCart)
      }
        if (cartItem.amount < 2) {
          removeCart(id)
        }
    }

    // update item
    useEffect(() => {
      if(cart){
        const amount = cart.reduce((accumulator,currentItem) => {
          return accumulator + currentItem.amount
        }, 0)
        setItemAmount(amount)
      }
    }, [cart])
    
    //calculate total
    useEffect(() => {
      const total = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.price * currentItem.amount
      }, 0);
      setTotal(total);
    });

    // useEffect(()=> {
    //   const prodLeft = cart.reduce((accumulator, currentItem) => {
    //     return accumulator + currentItem.stock - currentItem.amount
    //   }, 0)
    //   setLeftOut(prodLeft)
    // });

    useEffect( () => {
      window.addEventListener('scroll', () => {
          window.scrollY > 70 ? setIsActive(true) : setIsActive(false)
      });
  })


    
  return (
    <CartContext.Provider value={{likebtn, setLikebtn, addToCart, cart, removeCart, clearCart, increaseAmount, decreaseAmount, itemAmount, isActive, setIsActive, total, leftOut}}>
        {children}
    </CartContext.Provider>
  )
}
