import React from 'react'
import Product from '../Home/NewProduct/Product'
import { useLoaderData } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { ProductImages } from './Product/ProductImages'
import Header from './../Home/Bars/Header';


const ProductPage = () => {
  const product = Object.values(useLoaderData());
  const data = product["0"]

  return (
    <>
      <Header/> 
    <div className='container mx-auto p-4'>
      <div className='Images flex flex-wrap'>
        <div className='w-full md:w-1/2'>
          <div className='flex flex-col h-full'>
            {product.map((image, index) => 
              <ProductImages key={index} image={image.specs.image}/>      
            )}
            <div className='flex justify-center space-x-2'>
              <button className='border border-gray-300 w-1/4 py-2 rounded'>
                <img src="http://127.0.0.1:8000//media/image_products/maxresdefault.jpg" alt="image_1" />
              </button>
              <button className='border border-gray-300 w-1/4 py-2 rounded'>
                <img src="http://127.0.0.1:8000//media/image_products/maxresdefault.jpg" alt="image_1" />
              </button>
              <button className='border border-gray-300 w-1/4 py-2 rounded'>
                <img src="http://127.0.0.1:8000//media/image_products/maxresdefault.jpg" alt="image_1" />
              </button>
              <button className='border border-gray-300 w-1/4 py-2 rounded'>
                <img src="http://127.0.0.1:8000//media/image_products/maxresdefault.jpg" alt="image_1" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full md:w-1/2'>
        <div className='flex flex-col h-full justify-center'>
          <h1 className='text-white text-2xl font-bold mb-2'>{data.name}</h1>
          <p className='text-gray-200 font-bold mb-2'>{data.specs.description}</p>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
              Add to cart
          </button>
        </div>   
      </div>
    </div>
    
    </>
  );
};

export default ProductPage
