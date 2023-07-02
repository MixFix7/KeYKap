import React, { useState } from 'react'
import style from './../../../static/project.module.css'
import { Link, NavLink } from 'react-router-dom'


const Product = (props) => {
  const [isHovered, setIsHovered] = useState(false)
  const [photo, setPhoto] = useState(props.img1)

  const HoverImageEnter = () => {
    setPhoto(props.img2)
    setIsHovered(true)
  }

  const HoverImageLeave = () => {
    setPhoto(props.img1)
    setIsHovered(false)
  }


  return (
    <div className={`${style.product}`}>
        <Link to={`/product/${props.name}/`}>
          <div className='overflow-hidden' style={{height: '250px', width: '370px'}}>
            <img 
              className={`transition-transform duration-300 ${isHovered ? 'hover:scale-125 hover:translate-y-[-0%] hover:translate-x-[-0%]' : ''}`}
              style={{width: '100%', height: '100%'}}
              src={`http://127.0.0.1:8000/${photo}`}
              alt={props.id} 
              onMouseEnter={HoverImageEnter}
              onMouseLeave={HoverImageLeave}
            />
          </div>
        </Link>
      <h1 className='text-gray-400 font-mono text-xl'>
        {props.name}
      </h1>
      <h2 className='text-xl font-bold text-white'>
        ${props.price} 
      </h2>
    </div>
  )
}

export default Product
