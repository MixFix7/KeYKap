import React, { useState } from 'react'
import CounterProducts from './UI/CounterProducts';
import AddToCartButton from './UI/AddToCartButton';
import { TextInformationProdcut } from './TextInformationProdcut';

const ContainerDescription = ({data}) => {
    const [price, setPrice] = useState(data.price)
    const [count, setCount] = useState(1)

    const updatePriceByCounterProducts = (newPrice) => {
      setPrice(data.price * newPrice)
      setCount(newPrice)
    }

  return (
    <div className='w-full md:w-1/2'>
        <div className='flex flex-col h-full justify-start ml-4'>
            <TextInformationProdcut data={data} price={price}/>
          <div className='flex'>
            <CounterProducts onDataChange={updatePriceByCounterProducts}/>
            <AddToCartButton data={data} count={count}/>
          </div>
        </div>
    </div>
  )
}

export default ContainerDescription
