import React from 'react'
import { NavLink } from 'react-router-dom';
import DeleteProductFromCartButton from './DeleteProductFromCartButton';

const ProductColumn = ({id, name, img, price, onClick, color}) => {
  return (
      <div className={`flex items-center justify-between mb-9 border-solid border-4 py-4 px-4 
      border-white rounded-xl`}
        style={{backgroundColor: color.toLowerCase()}}
      >
        
        <NavLink to={`/product/${name}/`} >
            <img 
              src={`http://127.0.0.1:8000/${img}`} 
              alt={name}
              className='rounded-xl'
              style={{width: '250px'}}
            />
        </NavLink>
        <div className='' style={{maxWidth: '500px', fontSize: '100%'}}>
          <h1 className='text-white font-extralight' style={{fontSize: '3em'}}>{name}</h1>
        </div>

        <div className='flex'>
            <h1 className='text-white font-extralight text-4xl'>${price}</h1>

            <DeleteProductFromCartButton onClick={onClick} idProduct={id}/> 
        </div>
    </div>
  )
}

export default ProductColumn
