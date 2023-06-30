import React from 'react'
import style from './../../static/AuthPage.module.css'
import { Link } from 'react-router-dom'
import { urls } from '../Routing/Routing'
import { HaveAccount } from './UI/HaveAccount';
import InputAuth from './UI/InputAuth';

const SignUpPage = () => {
  return (
    <div className={`${style.container} flex items-center justify-center h-screen`}>
        <div className={style.card}>
            <h1 className={style.login}>Sign Up</h1>

            <InputAuth type='text' name='Username'/>
            <InputAuth type='email' name='Email'/>
            <InputAuth type='password' name='Password'/>
            <InputAuth type='password' name='Confirm password'/>
             
            
            <HaveAccount 
                className={style.enter}
                title='Do you already have an account?' 
                titlePage='Log In' 
                link='/auth/log-in'
            />
      

            <Link to='select-avatar' className={style.enter}>Enter</Link>

        </div>
    </div>
  )
}

export default SignUpPage
