import React, {useContext} from 'react'
import './../../../static/bars.css'
import Logo from './../UI/Logo';
import NavHeader from './NavHeader';
import {AuthContext} from '../../Authorization/AuthContext';

const Header = () => {
  let {user} = useContext(AuthContext)
  return (
    <header className='w-screen py-5'> 
        <div className='flex items-center justify-between text-white'>
            <Logo/>
            <NavHeader/>

            {user && <p>{user.username}</p>}
        </div>
    </header>
  )
}

export default Header
