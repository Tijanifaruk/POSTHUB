import React, { useState, useEffect } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import axios from "axios";
import Hero from "./Hero";
import { Bounce, ToastContainer, toast } from 'react-toastify';




function Posting() {
  const[posts, setPosts] = useState([]);
  const[loading, setLoading] = useState(true);
  const[error, setError] = useState(null);
  const[editPost, setEditPost] = useState(null);

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

     //function I USED to add a new post 
  const handleAddPost = (newPost) => {
    axios.post("https://jsonplaceholder.typicode.com/posts" , newPost)
    .then(response => {
      setPosts([response.data, ...posts])//add new post at the top
    })
    .catch(error => console.error("Error adding post:", error));
  }



  // if (loading) return <p className="text-center text-lg">Loading...</p>;
  // if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  //function to delete post
  const handleDeletePost = (postId) =>{
    const confirmation = window.confirm("Are you sure you want to delete post?");

    if (confirmation) {
      axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(()=> {

        setPosts(posts.filter((post) => post.id !== postId));
      })
      .catch((error) => console.error("Error deleting post:", error));
    }
  }


  //open modal for editing post
  const handleEditPost = (post) => {
    setEditPost(post);// Set the post to be edited 
  };

  const handleUpdatePost = () => {
    if (!editPost.title || !editPost.body) {
    //  alert("Title and body cannot be empty!");
     toast.error('Title and body cannot be empty!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });     return;
    }

    axios
    .put(`https://jsonplaceholder.typicode.com/posts/${editPost.id}`, editPost)
    .then(() =>{
     setPosts(posts.map((post) => (post.id === editPost.id ? editPost : post)));
      setEditPost(null);//close the modal after updating 
    })
    .catch((error) => console.error("Error updating post:", error));
  };




  return (
    <div className="mb-20">
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

<Hero onAddPost={handleAddPost} />  


      <h2 className="text-4xl font-bold text-center my-8">MY POST</h2>

      {loading && <p className="text-center text-lg">Loading...</p>}
      {error && <p className="text-center text-red-500">Error: {error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto lg: max-w-5xl">
        {posts.slice(0,6).map((post)=> (
          <div key={post.id} className="h-60 bg-white shadow-md rounded-lg p-4  flex flex-col justify-between ">
            <div>
              <h3 className="text-lg font-bold">{post.title}</h3>
              <p className="text-gray-600">{post.body}</p>
            </div>
            <div className="flex justify-end gap-2">
              <button 
              className="text-blue-600 hover:text-blue-800 "
              onClick={() => handleDeletePost(post.id)} // delete happen on click
              >
              <RiDeleteBin5Line />

              </button>
              <button 
              className="text-red-600 hover:text-red-800"
              onClick={() => handleEditPost(post)}>
              <FaRegEdit />


              </button>
            </div>
          </div>
        )) }
      </div>

{/* THE EDIT MODAL */}
       {editPost && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-md w-96">
            <h2 className="text-xl font-bold mb-4">Edit Post</h2>
            <input
              type="text"
              className="w-full p-2 border rounded mb-2"
              value={editPost.title}
              onChange={(e) => setEditPost({ ...editPost, title: e.target.value })}
            />
            <textarea
              className="w-full p-2 border rounded mb-2 h-32"
              value={editPost.body}
              onChange={(e) => setEditPost({ ...editPost, body: e.target.value })}
            ></textarea>
            <div className="flex justify-end gap-2">
              <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
               onClick={handleUpdatePost}>
                Update
              </button>
              <button className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500" 
              onClick={() => setEditPost(null)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Posting




