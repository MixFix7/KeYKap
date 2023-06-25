import React from 'react'
import Header from './Bars/Header';
import NavBar from './Bars/NavBar';
import MainBar from './Bars/MainBar';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
  const products = useLoaderData()

  return (
    <div className='flex flex-col min-h-screen'>
        <Header/>
        {products && <MainBar products={products}/>}
    </div>
  )
}

export default Home
