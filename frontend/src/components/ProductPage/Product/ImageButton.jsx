import React from 'react'

export const ImageButton = ({image, index}) => {
  return (
    <>
      <button className='border border-gray-300 w-1/4 py-2 rounded'>
          <img src={`http://127.0.0.1:8000/${image}`} alt={`image_${index}`} />
      </button>
    </>
  )
}
