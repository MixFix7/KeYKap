import React from 'react'
import AdminHeader from './Bars/AdminHeader';
import ButonAdminPanel from './UI/ButonAdminPanel';
import { urls } from '../../Routing/Routing';


const AdminPage = () => {
  return (
    <div className='flex'>
        <AdminHeader/>
        <div>
            <ButonAdminPanel name="Add new product" link={urls.AddProduct}/>
        </div>  
    </div>
  )
}

export default AdminPage
