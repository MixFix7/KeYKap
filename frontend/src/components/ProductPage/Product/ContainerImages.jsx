import React from 'react'

export const ContainerImages = ({mainImg}) => {
  return (
    <div
        className='mb-4 flex items-center justify-center rounded-lg bg-gray-900'
        style={{height: '600px'}}
    >
        <img 
            className="rounded-lg" 
            src={`http://127.0.0.1:8000/${mainImg}`} 
            alt="Product_image"
        />   
    </div>
  )
}
