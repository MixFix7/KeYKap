import React, {useContext, useEffect, useState} from 'react'
import './../../../static/bars.css'
import Logo from './../UI/Logo';
import NavHeader from './NavHeader';
import {AuthContext} from '../../Authorization/AuthContext';
import axios from 'axios';

const Header = () => {
  let {user} = useContext(AuthContext)

  return (
    <header className='py-5 bg-cyan-600'> 
        <div className='flex items-center justify-between text-white'>
            <Logo/>
            <NavHeader/>
        </div>
    </header>
  )
}

export default Header
