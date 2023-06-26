import React from 'react'

export const ProductImages = ({images}) => {
    console.log(images)
  return (
    <div className=''>
        <img src={`http://127.0.0.1:8000/${images}`} alt="Product_Image" />
    </div>
  )
}
