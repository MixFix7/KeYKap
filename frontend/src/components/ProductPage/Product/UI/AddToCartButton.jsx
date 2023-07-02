import React, { useContext } from 'react'
import { AuthContext } from '../../../Authorization/AuthContext'

const AddToCartButton = ({data, count}) => {
  const {user} = useContext(AuthContext)

  const addProductToCart = async () => {
      const response = await fetch(`http://localhost:8000/api/cart/add/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            'product_name': data.name,
            'count': count,
            'user': user.username,
        }),  
      })
      if (response.status === 201) {
        alert('Success')
      }
  }


  return (
    <>
        <button 
            className='bg-blue-500 hover:bg-blue-700 text-white 
            font-bold py-3 px-4 rounded-lg'
            onClick={addProductToCart}
        >
            Add to cart
        </button>
    </>
  )
}

export default AddToCartButton
