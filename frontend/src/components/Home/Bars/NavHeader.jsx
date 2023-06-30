import React from 'react'
import { Link } from 'react-router-dom'
import { urls } from '../../Routing/Routing'

const NavHeader = () => {
  return (
    <nav>
      <div className='flex text-white mr-5'>
            <Link className='mr-6 text-2xl' to={urls.Home}>Main</Link>
            <Link className='mr-6 text-2xl' to={urls.Products}>Products</Link>
            <Link className='mr-6 text-2xl' to={urls.AboutUs}>About us</Link>
            <Link className='mr-6 text-2xl' to={urls.Contacts}>Contacts</Link>
            <Link className='mr-6 text-2xl' to={urls.SignUp}>Sign up</Link>

        </div>
    </nav>
  )
}

export default NavHeader
