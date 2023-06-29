import React, { useEffect, useRef, useState } from 'react'
import ReactImageMagnify from 'react-image-magnify';



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
        <ReactImageMagnify
            {...{
                smallImage: {
                    alt: 'Product_Photo',
                    isFluidWidth: true,
                    src: `http://127.0.0.1:8000/${mainImg}`,
                },
                largeImage: {
                    src: `http://127.0.0.1:8000/${mainImg}`,
                    width: 1600,
                    height: 1600,
                },
                enlargedImageContainerDimensions: {
                    width: '170%',
                    height: '170%',
                },
            }}
        />

        {/* <img 
            className={`rounded-lg `}
            src={`http://127.0.0.1:8000/${mainImg}`} 
            alt="Product_image"
        />    */}
    </div>
  )
}
