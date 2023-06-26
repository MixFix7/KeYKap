import React from 'react'

const ContainerDescription = ({data}) => {
  return (
    <div className='w-full md:w-1/2'>
        <div className='flex flex-col h-full justify-start ml-4'>
            <h1 className='text-white text-2xl font-bold mb-2'>{data.name}</h1>
            <pre className='text-gray-200 font-bold mb-2' style={{ maxWidth: '700px', whiteSpace: 'pre-wrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{data.specs.description}</pre>
            <h1 className='text-white text-6xl mb-3'>${data.price}</h1>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                Add to cart
            </button>
        </div>
    </div>
  )
}

export default ContainerDescription
