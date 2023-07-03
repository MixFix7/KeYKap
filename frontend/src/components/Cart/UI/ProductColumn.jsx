import React from 'react'
import { NavLink } from 'react-router-dom';
import DeleteProductFromCartButton from './DeleteProductFromCartButton';

const ProductColumn = ({id, name, img, price, onClick}) => {
  return (
      <div className='flex items-center justify-between mb-9 border-solid border-4 py-4 px-4 
      border-white rounded-xl bg-cyan-700'>
        <NavLink to={`/product/${name}/`} >
            <img 
              src={`http://127.0.0.1:8000/${img}`} 
              alt={name}
              className='rounded-xl'
              style={{width: '250px'}}
            />
        </NavLink>

        <h1 className='text-white font-extralight text-6xl'>{name}</h1>

        <div className='flex'>
            <h1 className='text-white font-extralight text-4xl'>${price}</h1>

            <DeleteProductFromCartButton onClick={onClick} idProduct={id}/> 
        </div>
    </div>
  )
}

export default ProductColumn
