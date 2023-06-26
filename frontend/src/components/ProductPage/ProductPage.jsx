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
        <div className='flex flex-wrap'>    
        <ProductImages image_buttons={product} image={data.specs.image} />
      
          <div className='w-full md:w-1/2'>
            <div className='flex flex-col h-full justify-start ml-4'>
              <h1 className='text-white text-2xl font-bold mb-2'>{data.name}</h1>
              <pre className='text-gray-200 font-bold mb-2' style={{ maxWidth: '700px', whiteSpace: 'pre-wrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{data.specs.description}</pre>
              <h1 className='text-white text-6xl mb-3'>${data.price}</h1>
              <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage
