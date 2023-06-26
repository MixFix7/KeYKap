import React from 'react'
import Product from '../Home/NewProduct/Product'
import { useLoaderData } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { ProductImages } from './Product/ProductImages'
import Header from './../Home/Bars/Header';
import ContainerDescription from './Product/ContainerDescription';


const ProductPage = () => {
  const product = Object.values(useLoaderData());
  const data = product["0"]

  return (
    <>
      <Header/> 
      <div className='container mx-auto p-4'> 
        <div className='flex flex-wrap'>    
          <ProductImages image_buttons={product} image={data.specs.image} />
          <ContainerDescription data={data}/>
        </div>
      </div>
    </>
  );
};

export default ProductPage
