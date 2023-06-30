import React from 'react'
import style from './../../../static/AuthPage.module.css'

const InputAuth = ({name, nameInput, type}) => {
  return (
    <div>
      <div className={style.inputBox}>
        <input type={type} name={nameInput} required="required"/>
        <span>{name}</span>
      </div>
    </div>
  )
}

export default InputAuth
