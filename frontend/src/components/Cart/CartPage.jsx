import React, { useContext } from 'react'
import Header from './../Home/Bars/Header';
import { AuthContext } from '../Authorization/AuthContext';

const CartPage = () => {
    const {user} = useContext(AuthContext)

  return (
    <>
        <Header/>
        <div>
            
        </div>
    </>
  )
}

export default CartPage
