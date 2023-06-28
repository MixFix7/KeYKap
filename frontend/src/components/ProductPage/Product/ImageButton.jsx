import React from 'react'

export const ImageButton = ({img, index, onMouseEnter}) => {
  return (
    <>
      <button 
        className='border border-gray-300 w-1/4 py-2 rounded'
        onMouseEnter={() => onMouseEnter(img)} 
      >
          <img 
            src={`http://127.0.0.1:8000${img}`} 
            alt={`image_${index}`} 
          />
      </button>
    </>
  )
}
