import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Authorization/AuthContext'

const CountInCart = () => {
    let {user} = useContext(AuthContext)
    const [countInCart, setCountInCart] = useState(0)

    const getCountProductsInCart = async () => {
      const response = await axios.get(`http://localhost:8000/cart/products-count/${user.user_id}/`)
      setCountInCart(response.data.count)
      return response.data.count
    }
  
  
    useEffect(() => {
      getCountProductsInCart()
    }, [])

  return (
    <div className='bg-red-500 px-1 rounded-full'>
        <h1 className='text-white text-3xl'>{countInCart}</h1>
    </div>
  )
}

export default CountInCart
