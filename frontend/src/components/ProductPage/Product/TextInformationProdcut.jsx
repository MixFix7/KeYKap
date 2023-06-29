import React from 'react'

export const TextInformationProdcut = ({data, price}) => {
  return (
    <div>

        <h1 
          className='text-white text-2xl font-bold mb-2'
        >{data.name}
        </h1>

        <pre 
          className='text-gray-200 font-bold mb-2' 
          style={{ maxWidth: '700px', minHeight: '418px' , 
                   whiteSpace: 'pre-wrap', overflow: 'hidden', 
                   textOverflow: 'ellipsis' }}
        >{data.specs.description}
        </pre>

        <h1 
          className='text-white text-6xl mb-3'
        >${price}
        </h1>

    </div>
  )
}
