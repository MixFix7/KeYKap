import React, { useContext } from 'react'
import { AuthContext } from '../../Authorization/AuthContext'
import { Link } from 'react-router-dom';
import { urls } from '../../Routing/Routing';
import {VscCircleLargeFilled} from 'react-icons/vsc'
import UserInfo from './../UI/UserInfo';

const NavAdmin = () => {
    const {user, logoutUser} = useContext(AuthContext) 

  return (
    
    <nav className='flex-shrink-0 h-screen text-white flex flex-col items-center w-full'>
        <UserInfo logoutUser={logoutUser} user={user}/>
    </nav>
  )
}

export default NavAdmin
