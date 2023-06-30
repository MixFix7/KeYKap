import React from 'react'
import style from './../../static/AuthPage.module.css'
import { Link } from 'react-router-dom'

const SignUpPage = () => {
  return (
    <div className={`${style.container} flex items-center justify-center h-screen`}>
        <div className={style.card}>
            <h1 className={style.login}>Sign Up</h1>
            <div className={style.inputBox}>
                <input type="text" required="required"/>
                <span className=''>Email</span>
            </div>

            <div className={style.inputBox}>
                <input type="text" required="required"/>
                <span>Username</span>
            </div>
            <div className={style.inputBox}>
                <input type="password" required="required"/>
                <span>Password</span>
            </div>
            <div className={style.inputBox}>
                <input type="password" required="required"/>
                <span>Password</span>
            </div>
             

            <Link to='auth/sign-up/select-avatar' className={style.enter}>Enter</Link>

        </div>
    </div>
  )
}

export default SignUpPage
