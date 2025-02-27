import React from 'react'

const Header = () => {
  return (
    <header className='py-8'>
      <div className="mx-auto px-[15px] md:px-32">
        <div className='mx-auto flex items-center justify-between'>
          {/* Logo */}
          <a href="#">
            logo
          </a>
          {/* button */}
          <button className='btn btn-sm'>Work with me</button>
        </div>
      </div>
    </header>
  )
}

export default Header