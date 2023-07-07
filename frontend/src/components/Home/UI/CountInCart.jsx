import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Authorization/AuthContext'



const CountInCart = () => {
    let {user} = useContext(AuthContext)
    const [countInCart, setCountInCart] = useState(0)

    const getCountInCart = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/cart/products-count/${user.user_id}`)
        setCountInCart(response.data.count)
      } catch (error) {
        console.error(error)
      }
    }
    

    useEffect(() => {
      getCountInCart()
      let interval = setInterval(()=>{
        getCountInCart()
      }, 3000)
    return ()=> clearInterval(interval)
      
    }, [])


    
  return (
    <div className='bg-red-500 px-1 rounded-full'>
        <h1 className='text-white text-3xl'>{countInCart}</h1>
    </div>
  )
}

export default CountInCart
