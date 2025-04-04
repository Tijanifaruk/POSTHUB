import React, { useState } from 'react'
import { Bounce, ToastContainer, toast } from 'react-toastify';





function Hero({onAddPost}) {
  const[title, setTitle] = useState('');
  const[body, setBody] = useState('');


  //Handling adding the new post
  const handleAdd =() =>{
    if(!title || !body) {
      // alert("Please enter both title and body!");
      toast.error('Please enter both title and body!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        }); 
      return;
    }
    
    onAddPost({title,body });  //sends data to the posting component
    setTitle("");
    setBody("");
  }

  return (

    <div>
   <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition={Bounce}
/>
      
        <section className="p-6 bg-white shadow-md max-w-2xl mx-auto mt-6 rounded-lg">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded mb-2"
        />
        <textarea
          placeholder="Write your post..."
          value={body}
          onChange={(e) => setBody(e.target.value)}          
          className="w-full p-2 border rounded mb-2 h-32"
        ></textarea>
        <button 
        onClick={handleAdd}
        className="w-full bg-blue-600 text-white p-2 rounded hover:text-black hover:font-bold">
          ADD
          </button>
      </section>
    </div>
  )
}

export default Hero
