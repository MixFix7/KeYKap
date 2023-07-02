import axios from 'axios'
import React from 'react'
import {FaTrashAlt} from 'react-icons/fa'
import { loaderCart } from '../../Routing/Loaders/CartPageLoader'

const DeleteProductFromCartButton = ({idProduct, username, onClick}) => {
  
  return (
    <div>
      <button
        onClick={()=> onClick(idProduct)}
      >
        <FaTrashAlt 
          className='text-5xl'
          color='white'
        />
      </button>
    </div>
  )
}

export default DeleteProductFromCartButton
