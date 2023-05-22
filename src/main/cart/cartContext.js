import { createContext, useState } from "react";


const cartItems = [
  {
    id: '1',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 100,
    quantity: 2,
  },
  {
    id: '2',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 1,
  },
]

const cartContext = createContext(null) //作為外層的提供者

const CartContextProvider = ({children})=>{
  const [cart , setCart] = useState(cartItems);

  function handleProduct(id,value){
    const setQuantity = cart.map((c)=>{
      if(c.id === id ){
        return {
          ...c,
          quantity: (c.quantity + value !== 0)? c.quantity + value : 1 
        }
      }else{
        return c
      }
    })
    
   setCart(setQuantity)
  }

  function TotalAmount (){
    let total = 0
    cart.forEach((c)=>{
      total += c.price * c.quantity
    })
    return total
  }

  const value = {
      cart,
      handleProduct,
      TotalAmount
  }

  return(
    <cartContext.Provider value={value}>
      {children}
    </cartContext.Provider>

  )

}

export {cartContext, CartContextProvider};