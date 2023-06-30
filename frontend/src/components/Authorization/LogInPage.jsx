import React from 'react'
import { Link } from 'react-router-dom'
import style from './../../static/AuthPage.module.css'
import InputAuth from './UI/InputAuth';
import { HaveAccount } from './UI/HaveAccount';

const LoginPage = () => {
  return (
    
    <div className={`${style.container} flex items-center justify-center h-screen`}>
        <div className={style.card}>
            <h1 className={style.login}>Log in</h1>

            <InputAuth type='email' name='Email'/>
            <InputAuth type='password' name='Passworm'/>

            <HaveAccount 
                className={style.enter}
                title="Don't have account?"
                titlePage='Sign Up' 
                link='/auth/sign-up'
            />

            <Link to='/' className={style.enter}>Enter</Link>

        </div>
    </div>

  )
}

export default LoginPage
