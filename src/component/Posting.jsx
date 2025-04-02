import React, { useState, useEffect } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import axios from "axios";



function Posting() {
  const[posts, setPosts] = useState([]);
  const[loading, setLoading] = useState(true);
  const[error, setError] = useState(null);

  //Fetching my API
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(response =>{
      setPosts(response.data);
      setLoading(false);
    })
    .catch(error => {
      setError(error.message);
      setLoading(false);
    });
  }, []);

  if (loading) return <p className="text-center text-lg">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;





  return (
    <div className="mb-20">
      <h2 className="text-4xl font-bold text-center my-8">MY POST</h2>
      <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto">
        {posts.slice(0,6).map((post)=> (
          <div key={post.id} className="h-60 bg-white shadow-md rounded-lg p-4 flex flex-col justify-between ">
            <div>
              <h3 className="text-lg font-bold">{post.title}</h3>
              <p className="text-gray-600">{post.body}</p>
            </div>
            <div className="flex justify-end gap-2">
              <button className="text-blue-600 hover:text-blue-800 ">
              <RiDeleteBin5Line />

              </button>
              <button className="text-red-600 hover:text-red-800">
              <FaRegEdit />


              </button>
            </div>
          </div>
        )) }
      </div>
    </div>
  )
}

export default Posting




