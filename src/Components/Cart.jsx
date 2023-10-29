import React from 'react'

const Cart = () => {
    const [cartItems, setCartItems]=usestate([]);
    const [totalQuantity,setTotalQuantity]=usestate(0)

    const addToCart =(item)=>{

        setCartItems([...cartItems, item]);
        setTotalQuantity(totalQuantity+1);
    }
  return (
    <>
      
    </>
  )
}

export default Cart
