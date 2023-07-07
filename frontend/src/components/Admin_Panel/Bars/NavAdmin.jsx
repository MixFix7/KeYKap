import React, { useContext } from 'react'
import { AuthContext } from '../../Authorization/AuthContext'
import { Link } from 'react-router-dom';
import { urls } from '../../Routing/Routing';
import {VscCircleLargeFilled} from 'react-icons/vsc'

const NavAdmin = () => {
    const {user, logoutUser} = useContext(AuthContext) 

  return (
    
    <nav className='flex-shrink-0 h-screen text-white flex flex-col items-center w-full'>
        {user && (
              <div className="flex bg-cyan-500 p-4 items-center">
                
                 <Link className='flex items-center' to={urls.SignUp}>
                    <img 
                      src={`http://127.0.0.1:8000${user.avatar}`}
                      className="rounded-full"
                      style={{width: '75px', height: '75px'}}
                      alt="" 
                    />
                 </Link>

                    <div>
                        <p className="ml-1 text-2xl text-white">{user.username}</p>
                        <span className='flex items-center text-lime-400 px-1'><VscCircleLargeFilled/>online</span>
                    </div>

                </div>
        )}
        
    </nav>
  )
}

export default NavAdmin
