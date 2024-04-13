import React from 'react'
import './index.css'

const Navbar = () => {
  return (
    <div className="navbar-container">
        <div>
        <h1>Character.ai</h1>
        <button className="button-1">+ Create</button>
        <button className="button-2">discover</button>
        </div>
        <button className='button-3'>Sign In</button>
    </div>
  )
}

export default Navbar