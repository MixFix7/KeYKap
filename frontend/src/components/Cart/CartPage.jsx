import React, { useContext, useEffect, useState } from 'react'
import Header from './../Home/Bars/Header';
import { AuthContext } from '../Authorization/AuthContext';
import { useLoaderData } from 'react-router-dom';
import Product from './../Home/NewProduct/Product';
import DeleteProductFromCartButton from './UI/DeleteProductFromCartButton';
import axios from 'axios';


const CartPage = () => {
  const { user } = useContext(AuthContext);
  const [cart, setCart] = useState([]);

  const fetchCartData = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/cart/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'user': user.username
        })
      });
      const data = await response.json()
      setCart(data)
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProductFromCart = async (idProduct) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/cart/remove/${idProduct}/`);
      fetchCartData();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCartData();
  }, []);

  return (
    <>
      <Header />
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
              idProduct={product.id}
              username={user.username}
              onClick={() => deleteProductFromCart(product.id)}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default CartPage;

 