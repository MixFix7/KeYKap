import React, { useEffect, useState } from 'react'
import './../../../static/bars.css'
import Product from '../NewProduct/Product';
import ProductContainer from '../NewProduct/ProductContainer';
import axios from 'axios';
import { useLoaderData } from 'react-router-dom';


const MainBar = ({products}) => {
    

  return (
    <main className='float-right flex-1 p-4'>
      <div>
         <ProductContainer json={products}/>
      </div>
    </main>
  )
}

export default MainBar
