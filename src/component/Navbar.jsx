import React from 'react'

function Navbar() {
  return (
    <div>
            <nav className="flex justify-between items-center p-4 bg-blue-600 text-white">
        <h1 className="text-4xl font-bold ">POSTHUB</h1>
        <div>
          <button className="px-4 py-2 bg-white text-blue-600 rounded mr-2">Login</button>
          <button className="px-4 py-2 bg-white text-blue-600 rounded">Sign Up</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
