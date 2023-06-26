import React from 'react'
import Product from '../Home/NewProduct/Product'
import { useLoaderData } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { ProductImages } from './Product/ProductImages'


const ProductPage = () => {
  const product = Object.values(useLoaderData());

  return (
    <div className=''>
      <div className='Images'>
        {product.map((image, index) => 
          <ProductImages key={index} image={image.specs.image}/>      
        )}
      </div>
    </div>
  );
};

export default ProductPage
