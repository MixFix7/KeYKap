import React from 'react'

const ListOfProducts = ({children}) => {
  return (
    <div className='flex justify-center items-center'>
      <div 
        className='p-4 mt-10 bg-gray-800 rounded-3xl border-solid border border-zinc-200' 
        style={{minHeight: '800px', minWidth: '1200px'}}
        >
        {children}
      </div>
    </div>
  )
}

export default ListOfProducts
