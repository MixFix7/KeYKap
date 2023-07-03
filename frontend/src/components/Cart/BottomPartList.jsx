import React, { useState } from 'react'
import ButtonBuy from './UI/ButtonBuy';

const BottomPartList = ({total_price}) => {
  return (
    <div className='flex justify-center items-center'>
      <div className='p-4 rounded-b-3xl flex items-center border-solid border border-zinc-200 bg-cyan-800 ' style={{minHeight: '200px', minWidth: '1200px'}} >
        <h1 className='text-white text-7xl left'>
              ${total_price ? total_price : "0"}
        </h1>
        <ButtonBuy className='ml-10'/>
      </div>
    </div>
  )
}

export default BottomPartList
