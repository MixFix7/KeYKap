import React from 'react'
import Product from '../Home/NewProduct/Product'
import { useLoaderData } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'


const ProductPage = () => {
  const product = Object.values(useLoaderData());
  console.log(product)

  return (
    <div className=''>
      {product.map((prod) => (
        <Product
          key={prod.id}
          id={prod.id}
          name={prod.name}
          img={prod.specs.image}
        />
      ))}
    </div>
  );
};

export default ProductPage
