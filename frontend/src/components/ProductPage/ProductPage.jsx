import React from 'react'
import Product from '../Home/NewProduct/Product'
import { useLoaderData } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { ProductImages } from './Product/ProductImages'


const ProductPage = () => {
  const product = Object.values(useLoaderData());
  const data = product["0"]

  return (
    <div className='container mx-auto p-4'>
      <div className='Images flex flex-wrap'>
        <div className='w-full md:w-1/2'>
            {product.map((image, index) => 
              <ProductImages key={index} image={image.specs.image}/>      
            )}
        </div>
        <div className='flex justify-center space-x-2'>
              <button className='border border-gray-300 px-1 py-1 rounded'>
                <img src="http://127.0.0.1:8000//media/image_products/maxresdefault.jpg" alt="image_1" />
              </button>
              <button className='border border-gray-300 px-1 py-1 rounded'>
                <img src="http://127.0.0.1:8000//media/image_products/maxresdefault.jpg" alt="image_1" />
              </button>
              <button className='border border-gray-300 px-1 py-1 rounded'>
                <img src="http://127.0.0.1:8000//media/image_products/maxresdefault.jpg" alt="image_1" />
              </button>
              <button className='border border-gray-300 px-1 py-1 rounded'>
                <img src="http://127.0.0.1:8000//media/image_products/maxresdefault.jpg" alt="image_1" />
              </button>
        </div>
      </div>
      <div className='Label flex justify-start'>
          <h1 className='text-white text-left'>{data.name}</h1>
      </div>
    </div>
  );
};

export default ProductPage
