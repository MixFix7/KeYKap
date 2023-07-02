import React, { useContext, useEffect, useState } from 'react'
import Header from './../Home/Bars/Header';
import { AuthContext } from '../Authorization/AuthContext';
import { useLoaderData } from 'react-router-dom';
import Product from './../Home/NewProduct/Product';
import DeleteProductFromCartButton from './UI/DeleteProductFromCartButton';
import axios from 'axios';


const CartPage = () => {
    const {user} = useContext(AuthContext)
    const [cart, setCart] = useState(useLoaderData())

    const deleteProductFromCart = async (id) => {
      const response = await axios.delete(`http://127.0.0.1:8000/api/cart/remove/${id}`)
      setCart(prevCart => prevCart.filter(product => product.id !== id));
    }

  return (
    <>
        <Header/>
        <div>
        {cart.map((product) => (
          <div 
            key={product.id}
            className='flex items-center'
          >
            <Product
              id={product.id}
              name={product.productsInfo.name}
              price={product.productsInfo.price}
              img1={product.productsInfo.photos[0].photo}
              img2={product.productsInfo.photos[1].photo}
            />
            <DeleteProductFromCartButton 
              username={user.username} 
              idProduct={product.id}
              onClick={deleteProductFromCart}
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default CartPage
 