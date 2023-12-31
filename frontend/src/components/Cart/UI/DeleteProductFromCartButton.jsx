import axios from 'axios'
import React from 'react'
import {FaTrashAlt} from 'react-icons/fa'

const DeleteProductFromCartButton = ({idProduct, username, onClick}) => {
  
  return (
    <div>
      <button
        className='mr-1 ml-2'
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
