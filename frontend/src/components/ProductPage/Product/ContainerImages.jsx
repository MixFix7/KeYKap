import React, { useEffect, useRef, useState } from 'react'



export const ContainerImages = ({mainImg}) => {
    const imageRef = useRef(null)

    useEffect(() => {
        if (imageRef.current) {
        const {natutalWidth, natutalHeight} = imageRef.current
        return [natutalHeight, natutalWidth]
        }
    })
    

  return (
    <div
        className='mb-4 flex items-center justify-center rounded-lg bg-gray-900'
        style={{height: '600px'}}
    >

        <img 
            className={`rounded-lg `}
            src={`http://127.0.0.1:8000/${mainImg}`} 
            alt="Product_image"
        />   
    </div>
  )
}
