import React from 'react'

function Navbar() {
  return (
    <div>
            <nav className=" p-4 bg-blue-600 text-white text-center lg:flex lg:justify-between">
              <div className=''>
               <h1 className="text-4xl font-bold">POSTHUB</h1>
              </div>
        
        <div>
          <button className="px-4 py-1 bg-white text-blue-600 rounded mr-2  hidden lg:inline-block">Login</button>
          <button className="px-4 py-1 bg-white text-blue-600 rounded  hidden lg:inline-block">Sign Up</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
