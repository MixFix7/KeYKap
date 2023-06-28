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

  return (
    <>
      <Header/> 
      <div className='container mx-auto p-4'> 
        <div className='flex flex-wrap'>    
          <ProductImages image_buttons={product} image={product[0].photos[0].photo} />
          <ContainerDescription data={product[0]}/>
        </div>
      </div>
    </>
  );
};

export default ProductPage
