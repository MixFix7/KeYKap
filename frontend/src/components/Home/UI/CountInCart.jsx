import axios from 'axios'
import React, { useContext, useEffect, useState, useRef } from 'react'
import { AuthContext } from '../../Authorization/AuthContext'
import { io } from 'socket.io-client'
import { client, w3cwebsocket } from 'websocket'



const CountInCart = () => {
    let {user} = useContext(AuthContext)
    const [countInCart, setCountInCart] = useState(0)
    const clientRef = useRef(null)

    useEffect(() => {
      const client = new w3cwebsocket(`ws://localhost:8000/ws/count-cart/${user.user_id}/`)
      clientRef.current = client

      client.onopen = () => {
        console.log('WebSocket зєднання встановленно')
      }

      client.onmessage = (message) => {
        setCountInCart(message.data)
        console.log(message.data)
      }

      client.onerror = (error) => {
        console.error(error)
      }

      client.onclose = () => {
        console.log('WebSocket зєднання закрито')
      }

      return () => {
        client.close()
      }

    }, [])

    const handleReconnect = () => {
      if (clientRef.current && clientRef.current.readyState === clientRef.current.CLOSED) {
        // Перепідключитись, якщо WebSocket закрито
        const client = new w3cwebsocket(`ws://localhost:8000/ws/count-cart/${user.user_id}/`);
        clientRef.current = client;
  
        // Реєстрація обробників подій і т.д.
      }
    };
    
  return (
    <div className='bg-red-500 px-1 rounded-full'>
        <h1 className='text-white text-3xl'>{countInCart}</h1>
    </div>
  )
}

export default CountInCart
