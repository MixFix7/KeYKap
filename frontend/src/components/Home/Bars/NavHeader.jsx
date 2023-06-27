import React from 'react'
import { Link } from 'react-router-dom'

const NavHeader = () => {
  return (
    <nav>
      <div className='flex text-white mr-5'>
            <Link className='mr-6 text-2xl' to="/">Main</Link>
            <Link className='mr-6 text-2xl' to="/products">Products</Link>
            <Link className='mr-6 text-2xl' to="/about-us">About us</Link>
            <Link className='mr-6 text-2xl' to="/contacts">Contacts</Link>
            <Link className='mr-6 text-2xl' to="/auth/reg">Sign up</Link>

        </div>
    </nav>
  )
}

export default NavHeader
