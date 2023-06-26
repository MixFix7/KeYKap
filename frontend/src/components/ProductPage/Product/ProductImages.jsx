import React from 'react'
import style from './../../../static/ProductImage.module.css'

export const ProductImages = ({image}) => {
  return (
    <>
        <img className={style.image} src={`http://127.0.0.1:8000/${image}`} alt="Product_image" />   
    </>
  )
}
