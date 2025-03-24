import React from 'react'
import Logo from "../assets/logo.png"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='py-8'>
      <div className="mx-auto px-[15px] md:px-32">
        <div className='mx-auto flex items-center justify-between'>
          {/* Logo */}
          <Link to="/">
            <img src={Logo} alt="" className='sm:w-34 w-28'/>
          </Link>
          {/* button */}
          <button className='btn btn-sm'>Work with me</button>
        </div>
      </div>
    </header>
  )
}

export default Header