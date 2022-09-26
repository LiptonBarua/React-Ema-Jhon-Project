import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    
    const{name,seller,price,img,ratings}=props.product1;
    console.log(props);
    return (
        <div className='product'>
           <img src={img} alt="" />
           <div className="product-info">
           <h3>{name}</h3>
           <p>Price:$ {price}</p>
           <p><small>Seller: {seller}</small></p>
           <p><small>Ratings: {ratings}</small></p>
           </div>
           <button onClick={()=>props.handleAddToCart(props.product1)} className='btn-cart' >
            Add to Card
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
           </button>
        </div>
    );
};

export default Product;