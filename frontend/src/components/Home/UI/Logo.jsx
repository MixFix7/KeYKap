import React from 'react'
import { Link } from 'react-router-dom'
import { urls } from '../../Routing/Routing'

const Logo = ({className}) => {
  return (
    <div className={`flex ${className}`}>
      <Link className='flex' to={urls.Home}>
        <img className='ml-3 w-20 object-contain h-20 mr-2' src={`http://127.0.0.1:8000/media/website_images/icon_Keycap.png`} alt="logo" />
        <h1 className='text-3xl text-white flex items-center'>KeYKaP</h1>
      </Link>
    </div>
  )
}

export default Logo
