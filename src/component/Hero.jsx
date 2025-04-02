import React from 'react'

function Hero() {
  return (
    <div>
        <section className="p-6 bg-white shadow-md max-w-2xl mx-auto mt-6 rounded-lg">
        <input
          type="text"
          placeholder="Title"
          className="w-full p-2 border rounded mb-2"
        />
        <textarea
          placeholder="Write your post..."
          className="w-full p-2 border rounded mb-2 h-32"
        ></textarea>
        <button className="w-full bg-blue-600 text-white p-2 rounded hover:text-black hover:font-bold">ADD</button>
      </section>
    </div>
  )
}

export default Hero
