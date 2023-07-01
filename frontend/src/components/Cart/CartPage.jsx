import React, { useContext } from 'react'
import Header from './../Home/Bars/Header';
import { AuthContext } from '../Authorization/AuthContext';
import { useLoaderData } from 'react-router-dom';

const CartPage = () => {
    const {user} = useContext(AuthContext)
    const {cart} = useLoaderData()

  return (
    <>
        <Header/>
        <div>

        </div>
    </>
  )
}

export default CartPage
