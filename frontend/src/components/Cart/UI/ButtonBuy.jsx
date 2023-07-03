import React from 'react'
import BottomPartList from './../BottomPartList';

const ButtonBuy = ({className, BuyProductsOnClick}) => {
  return (
    <div className={className}>
      <button 
        className='bg-cyan-600 text-6xl p-3 rounded-lg 
                  border-solid-white text-white border-2'
        onClick={BuyProductsOnClick}
      >
        Buy
      </button>
    </div>
  )
}

export default ButtonBuy
