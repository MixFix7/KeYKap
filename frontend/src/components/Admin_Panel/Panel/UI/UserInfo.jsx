import React from 'react'
import { Link } from 'react-router-dom'
import { urls } from '../../../Routing/Routing';
import {VscCircleLargeFilled} from 'react-icons/vsc'

const UserInfo = ({user, logoutUser}) => {
  return (
    <>
    {user && (
        <div className="flex bg-cyan-500 p-4 items-center">
          
           <button className='flex items-center' onClick={logoutUser}>
              <img 
                src={`http://127.0.0.1:8000${user.avatar}`}
                className="rounded-full"
                style={{width: '75px', height: '75px'}}
                alt="" 
              />
           </button>
              <div>
                  <p className="ml-1 text-2xl text-white">{user.username}</p>
                  <span className='flex items-center text-lime-400 px-1'><VscCircleLargeFilled/>online</span>
              </div>
          </div>
        )}
    </>
  )
}

export default UserInfo
