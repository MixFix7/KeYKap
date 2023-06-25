import React, { useState } from 'react'
import style from './../../../static/project.module.css'
import { Link, NavLink } from 'react-router-dom'


const Product = (props) => {


  return (
    <div className={style.product}>
        <Link to={`/product/${props.name}/`}>
            <img 
              className={style.image}
              src={`http://127.0.0.1:8000/${props.img}`}
              alt={props.name} 
            />
        </Link>
      <h1 className='text-white text-xl'>
        {props.name}
      </h1>
    </div>
  )
}

export default Product
