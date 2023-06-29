import React, { useState } from 'react'
import ContainerImageButtons from './ContainerImageButtons';
import { ImageButton } from './ImageButton';
import { ContainerImages } from './ContainerImages';

export const ProductImages = ({image_buttons, image}) => {
    const [mainImg, setMainTmg] = useState(image)

    const changeImgButton = (img) => {
        if (img !== mainImg) {
            console.log(img)
            setMainTmg(img)
        }
    }

  return (
        <div className='w-full md:w-1/2'>
            <div className='flex flex-col h-full'>
                <ContainerImages mainImg={mainImg}/>

                <ContainerImageButtons>
                    {image_buttons.map((photos) =>
                        photos.photos.map((photo, index) => (
                            <ImageButton 
                                img={photo.photo} 
                                key={index} 
                                index={index}
                                onMouseEnter={changeImgButton}
                             />
                        ))
                    )}
                </ContainerImageButtons>
            </div>
        </div>
  )
}
