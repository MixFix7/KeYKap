import React, { useContext, useEffect, useState } from 'react'
import Header from './../Home/Bars/Header';
import { AuthContext } from '../Authorization/AuthContext';
import { useLoaderData } from 'react-router-dom';
import Product from './../Home/NewProduct/Product';
import DeleteProductFromCartButton from './UI/DeleteProductFromCartButton';
import axios from 'axios';
import ListOfProducts from './ListOfProducts';
import ProductColumn from './UI/ProductColumn';
import BottomPartList from './BottomPartList';


const CartPage = () => {
  const { user } = useContext(AuthContext);
  const [cart, setCart] = useState([]);

  console.log(cart)

  const fetchCartData = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/cart/allCart/`, {
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
      console.error(error);
    }
  };

  const deleteProductFromCart = async (idProduct) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/cart/remove/${idProduct}/`);
      fetchCartData();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCartData();
  }, []);

  const BuyProducts = async () => {
    const formData = new FormData()
    formData.append('count', cart.length)
    formData.append('user', user.username)
    for(let i = 0; i < cart.length; i++) {
        formData.append(`product_${i}`, cart[i].id)
    }
    
    const response = await fetch('http://localhost:8000/cart/buy/', {
      method: 'POST',
      body: formData
    })

    fetchCartData()
  }

  return (
    <>
      <Header />
        <ListOfProducts >
          {cart.map((product) => (        
          <ProductColumn
              key={product.id}
              id={product.id}
              name={product.productsInfo.name}
              price={product.productsInfo.price}
              img={product.productsInfo.photos[0].photo}
              onClick={deleteProductFromCart}
              color={product.productsInfo.specs.color}
            />
          ))}
        </ListOfProducts>  

        <BottomPartList BuyProductsOnClick={BuyProducts} total_price={cart[0]?.total_price}/>         
    </>
  );
};

export default CartPage;

 