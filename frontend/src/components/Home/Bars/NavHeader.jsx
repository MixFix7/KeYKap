import React from 'react'

const NavHeader = () => {
  return (
    <nav>
      <div className='flex text-white mr-5'>
            <a className='mr-6 text-2xl' href="/">Main</a>
            <a className='mr-6 text-2xl' href="/pr">Products</a>
            <a className='mr-6 text-2xl' href="/">About us</a>
            <a className='mr-6 text-2xl' href="/">Contacts</a>
        </div>
    </nav>
  )
}

export default NavHeader
