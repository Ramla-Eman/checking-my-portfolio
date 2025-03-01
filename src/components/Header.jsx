import React from 'react'
import Logo from "../assets/logo.png"

const Header = () => {
  return (
    <header className='py-8'>
      <div className="mx-auto px-[15px] md:px-32">
        <div className='mx-auto flex items-center justify-between'>
          {/* Logo */}
          <a href="home">
            <img src={Logo} alt="" className='sm:w-34 w-28'/>
          </a>
          {/* button */}
          <button className='btn btn-sm'>Work with me</button>
        </div>
      </div>
    </header>
  )
}

export default Header