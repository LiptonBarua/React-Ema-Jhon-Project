import React, { useEffect, useState } from 'react';
import Product from '../product/Product';
import './Shop.css'
const Shop = () => {
    const[products, setProduct]=useState([])
    const[cart, setCart]=useState([])
    useEffect(()=>{
        fetch('products.json')
      .then(res=>res.json())
      .then(data=>setProduct(data))
    },[])

  const handleAddToCart=(product1)=>{
     const newCart =[...cart, product1]
     setCart(newCart)
  }
    return (
        <div className='Shop-container'>
         <div className="product-container">
          {
            products.map(product=><Product 
              key={product.id}
              product1={product}
              handleAddToCart={handleAddToCart}
              ></Product>)
          }
         </div>
         <div className="cart-container">
          <h3>Order Summary</h3>
          <h3>Selected Items: {cart.length}</h3>
         </div>
        </div>
    );
};

export default Shop;