import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './../../static/LogInPage.module.css'

const LoginPage = () => {
  return (
    
    <div className={`${style.container} flex items-center justify-center h-screen`}>
        <div className={style.card}>
            <h1 className={style.login}>Log in</h1>
            <div className={style.inputBox}>
                <input type="text" required="required"/>
                <span className={style.user}>Username</span>
            </div>

            <div className={style.inputBox}>
                <input type="password" required="required"/>
                <span>Password</span>
            </div>

            <button type='submit' className={style.enter}>Enter</button>

        </div>
    </div>

  )
}

export default LoginPage
