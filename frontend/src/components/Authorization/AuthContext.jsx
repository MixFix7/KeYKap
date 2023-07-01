import axios from "axios";
import { createContext, useState, useEffect } from "react";
import {decodeToken} from 'react-jwt'
import { redirect, useNavigate } from "react-router-dom";
import { useJwt } from "react-jwt";


export const AuthContext = createContext()


export const AuthProvider = ({ children }) => {
    let [authTokens, setAuthTokens] = useState(()=>localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    let [user, setUser] = useState(()=>localStorage.getItem('authTokens') ? decodeToken(JSON.parse(localStorage.getItem('authTokens')).access) : null)
    let [loading, setLoading] = useState(true)


    const loginUser = async (event) => {
      event.preventDefault();
      const response = await fetch('http://127.0.0.1:8000/auth/token/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'username': event.target.username.value,
          'password': event.target.password.value,
        }),
      });
      const data = await response.json();
      if (response.status === 200) {
        setAuthTokens(data);
        setUser(decodeToken(data.access))
        localStorage.setItem('authTokens', JSON.stringify(data))
        window.location.href = '/'
      } else {
        alert('Something went wrong!');
      }
    };

    const singupUser = async(event) => {
      event.preventDefault()
      const formData = new FormData()
      formData.append('avatar', event.target.avatar.value)
      const response = await fetch('http://127.0.0.1:8000/auth/token/singup/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          body: JSON.stringify({
            'username': event.target.username.value,
            'email': event.target.email.value,
            'password': event.target.password.value,
            formData,
          })}
      })
      const data = await response.json()
      if (response.status === 200) {
        setAuthTokens(data)
        setUser(decodeToken(data.access))
        localStorage.setItem('authTokens', JSON.stringify(data))
        window.location.href = '/'
      } else {
        alert('Something went wrong')
      }
    }

    const logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
    }

    const updateToken = async() => {
        const response = await fetch('http://127.0.0.1:8000/auth/token/refresh/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({'refresh': authTokens.refresh}),
          });
          const data = await response.json();

          if (response.status === 200) {
            setAuthTokens(data)
            setUser(decodeToken(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
          } else {
            logoutUser()
          }
    }
  
    const contextData = {
      user: user,
      loginUser: loginUser,
      logoutUser: logoutUser,
      singupUser: singupUser
    };

    useEffect(() => {

        let interval = setInterval(()=> {
            if (authTokens) {
                updateToken()
            }
                
        }, 40000)
        return ()=> clearInterval(interval)

    }, [authTokens, loading])
  
    return (
      <AuthContext.Provider value={contextData}>
        {children}
      </AuthContext.Provider>
    );
  };
  