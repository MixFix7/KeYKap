import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import style from './../../static/AuthPage.module.css'
import InputAuth from './UI/InputAuth';
import { HaveAccount } from './UI/HaveAccount';
import { AuthContext } from './AuthContext';

const LoginPage = () => {
  let {loginUser, user} = useContext(AuthContext)

  const navigate = useNavigate()

  const handleFormSubmit = (event) => {
    event.preventDefault();
    loginUser(event)
    navigate('/')
  }

  return (
    
    <div className={`${style.container} flex items-center justify-center h-screen`}>
      <form className={style.card} onSubmit={handleFormSubmit}>
            <h1 className={style.login}>Log in </h1>

              <InputAuth type='text' nameInput='username' name='username'/>
              <InputAuth type='password' nameInput='password' name='Password'/>

              <HaveAccount 
                  className={style.enter}
                  title="Don't have account?"
                  titlePage='Sign Up' 
                  link='/auth/sign-up'
              />

              {/* <Link to='/' className={style.enter}>Enter</Link> */}
              <button type='submit' className={style.enter}>Enter</button>
          </form>
    </div>

  )
}

export default LoginPage
