import React, { useState } from 'react'
import style from './../../../static/ProductImage.module.css'
import ContainerImageButtons from './ContainerImageButtons';
import { ImageButton } from './ImageButton';

export const ProductImages = ({image_buttons, image}) => {
    const [mainImg, setMainTmg] = useState(image)

    const changeImgButton = (img) => {
        console.log(img)
        setMainTmg(img)
    }

  return (
        <div className='w-full md:w-1/2'>
            <div className='flex flex-col h-full'>
                <div className='mb-4'>
                    <img className="w-full" src={`http://127.0.0.1:8000/${mainImg}`} alt="Product_image" />   
                </div>
                <ContainerImageButtons>
                    {image_buttons.map((photos) =>
                        photos.photos.map((photo, index) => (
                            <ImageButton 
                                img={photo.photo} 
                                key={index} 
                                index={index}
                                onClick={changeImgButton}
                             />
                        ))
                    )}
                </ContainerImageButtons>
            </div>
        </div>
  )
}
