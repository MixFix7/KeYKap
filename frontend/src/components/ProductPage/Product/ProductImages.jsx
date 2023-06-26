import React from 'react'
import style from './../../../static/ProductImage.module.css'
import ContainerImageButtons from './ContainerImageButtons';
import { ImageButton } from './ImageButton';

export const ProductImages = ({image_buttons, image}) => {

  return (
        <div className='w-full md:w-1/2'>
            <div className='flex flex-col h-full'>
                <div className='mb-4'>
                    <img className="w-full" src={`http://127.0.0.1:8000/${image}`} alt="Product_image" />   
                </div>
                <ContainerImageButtons>
                    {image_buttons.map((btn, index) => {
                        return <ImageButton image={btn.specs.image} key={index} index={index}/>
                    })}
                </ContainerImageButtons>
            </div>
        </div>
  )
}
