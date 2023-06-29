import React, { useEffect, useState } from 'react'

const CounterProducts = () => {
    const [count, setCount] = useState(1);
  
    const increment = () => {
      setCount(count + 1);
    };
  
    const decrement = () => {
        if (count !== 1) setCount(count - 1);
    };

  return (
    <div className="bg-gray-800 flex items-center justify-center p-2 rounded-lg border-solid border-gray-50 border mr-3">
    <div className="">
      <button
        className="px-4 py-2 text-white"
        onClick={decrement}
      >
        <h1>-</h1>
      </button>
    </div>
    <div 
        className='flex justify-center items-center'
        style={{minWidth: '26px'}} 
    >
      <h1 className="text-2xl text-white">{count}</h1>
    </div>
    <div>
      <button
        className="px-4 py-2 text-white text-xl"
        onClick={increment}
      >
        <h1>+</h1>
      </button>
    </div>
  </div>
  )
}

export default CounterProducts
