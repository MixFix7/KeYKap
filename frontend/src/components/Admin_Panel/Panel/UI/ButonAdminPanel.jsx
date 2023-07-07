import React from 'react'
import { Link } from 'react-router-dom'

const ButonAdminPanel = ({name, func, link}) => {
  return (
    <div className='flex items-center justify-center'>
        <Link 
            className='text-white bg-zinc-800 p-5 py-10'
            to={link}
        >
            {name}
        </Link>
    </div>
  )
}

export default ButonAdminPanel
