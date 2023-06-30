import React from 'react'
import style from './../../static/AuthPage.module.css'
import SelectAvatar from './UI/SelectAvatarjsx'

const AvatarSelectPage = () => {
  return (
    <div className={`${style.container} flex items-center justify-center h-screen`}>
        <div className={style.card}>
            <h1 className={style.login}>Select Avatar</h1>
            
            <SelectAvatar/>

            <button type='submit' className={style.enter}>Confirm</button>

        </div>
    </div>
  )
}

export default AvatarSelectPage
