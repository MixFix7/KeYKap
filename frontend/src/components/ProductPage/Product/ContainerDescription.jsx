import React, { useState } from 'react'
import CounterProducts from './UI/CounterProducts';
import AddToCartButton from './UI/AddToCartButton';
import { TextInformationProdcut } from './TextInformationProdcut';

const ContainerDescription = ({data}) => {
    const [price, setPrice] = useState(data.price)

    const updatePriceByCounterProducts = (newPrice) => {
      console.log(newPrice)
      setPrice(data.price * newPrice)
    }

  return (
    <div className='w-full md:w-1/2'>
        <div className='flex flex-col h-full justify-start ml-4'>
            <TextInformationProdcut data={data} price={price}/>
          <div className='flex'>
            <CounterProducts onDataChange={updatePriceByCounterProducts}/>
            <AddToCartButton/>
          </div>
        </div>
    </div>
  )
}

export default ContainerDescription
