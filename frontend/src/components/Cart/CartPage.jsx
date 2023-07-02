import React, { useContext } from 'react'
import Header from './../Home/Bars/Header';
import { AuthContext } from '../Authorization/AuthContext';
import { useLoaderData } from 'react-router-dom';
import Product from './../Home/NewProduct/Product';

const CartPage = () => {
    const {user} = useContext(AuthContext)
    const cart = useLoaderData()

  return (
    <>
        <Header/>
        <div>
        {cart.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              name={product.productsInfo.name}
              price={product.productsInfo.price}
              img1={product.productsInfo.photos[0].photo}
              img2={product.productsInfo.photos[1].photo}
            />
        ))}
      </div>
    </>
  )
}

export default CartPage
 