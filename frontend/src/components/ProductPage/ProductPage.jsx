import React from 'react'
import Product from '../Home/NewProduct/Product'
import { useLoaderData } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { ProductImages } from './Product/ProductImages'


const ProductPage = () => {
  const product = Object.values(useLoaderData());
  console.log(product)

  return (
    <div className=''>
      {product.map((prod) => (
        <ProductImages key={prod.id} images={prod.specs.image}/>
      ))}
    </div>
  );
};

export default ProductPage
