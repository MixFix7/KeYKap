import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { urls } from '../../Routing/Routing'
import { AuthContext } from '../../Authorization/AuthContext'
import axios from 'axios'
import CountInCart from './../UI/CountInCart';

const NavHeader = () => {
  let {user, logoutUser} = useContext(AuthContext)


  return (
    <nav>
      <div className='flex items-center text-white mr-5'>
        {user && (
          <>
            <Link className='mr-6 text-2xl' to={`/cart`}>
              <div className='flex items-center'>
                <img 
                  className='mr-2' 
                  style={{width: '45px', height: '45px', filter: 'invert(100%)'}}
                  src="http://127.0.0.1:8000/media/website_images/cart.png"
                  alt="cart"
                />
                <CountInCart/>        
              </div>
            </Link> 
          </>
        )}
            <Link className='mr-6 text-2xl' to={urls.AboutUs}>About us</Link>
            <Link className='mr-6 text-2xl' to={urls.Contacts}>Contacts</Link>

            {user.isAdmin  && (
              <Link className='mr-6 text-2xl' to={urls.AddNewProducts} />
            )}

            {user ? (
              <button onClick={logoutUser} className='mr-6 text-2xl'>Log out</button>
            ): (
              <Link className='mr-6 text-2xl' to={urls.SignUp}>Sign up</Link>
            ) }

             {user && (
              <>
                <p className='mr-6 text-2xl'>{user.username}</p>
                <img 
                  src={`http://127.0.0.1:8000${user.avatar}`}
                  className='rounded-full'
                  style={{width: '75px', height: '75px'}}
                  alt='' 
                />
              </>
             )
            }

             
        </div>
    </nav>
  )
}

export default NavHeader
