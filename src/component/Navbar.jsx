import React from 'react'
import Postlogo from "../assets/posthublogo.png"
function Navbar() {
  return (
    <div>
            <nav className=" p-4 bg-blue-600 text-white text-center lg:flex lg:justify-between">
              <div className='flex items-center gap-2 px-4 justify-center  '>
                <img src={Postlogo} width={40} alt="logo" className='rounded-lg' />
               <h1 className="text-4xl font-bold">POSTHUB</h1>
              </div>
        
        <div>
          <button className="px-4 py-1 bg-white text-blue-600 rounded mr-2  hidden lg:inline-block hover:bg-gray-200 hover:text-blue-800">Login</button>
          <button className="px-4 py-1 bg-white text-blue-600 rounded  hidden lg:inline-block hover:bg-gray-200 hover:text-blue-800">Sign Up</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
