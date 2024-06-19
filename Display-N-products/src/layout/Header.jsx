import React from 'react'
import { Link } from 'react-router-dom';


function Header() {
  return (
    <nav className=' bg-blue-800 text-xl p-3 font-bold flex flex-row text-white justify-center  border border-red-600'>
      <ul className='flex flex-row gap-x-44'>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/product/1">Product Detail</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
