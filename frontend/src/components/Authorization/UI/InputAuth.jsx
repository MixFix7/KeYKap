import React from 'react'
import style from './../../../static/AuthPage.module.css'

const InputAuth = ({name, type}) => {
  return (
    <div>
      <div className={style.inputBox}>
        <input type={type} required="required"/>
        <span>{name}</span>
      </div>
    </div>
  )
}

export default InputAuth
