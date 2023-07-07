import React, { useContext } from 'react'
import { AuthContext } from '../../../Authorization/AuthContext'
import NavAdmin from './NavAdmin';
import Logo from '../../../Home/UI/Logo';

const AdminHeader = () => {
    const {user} = useContext(AuthContext)

  return (
    <header 
        className='bg-cyan-600'
        style={{maxWidth: '250px'}}
    >
        <Logo className='py-5'/>
        <NavAdmin/>
    </header>
  )
}

export default AdminHeader
