import React, { useState , useEffect} from 'react';
import { client } from './axios';

export default function App1() {
  
  const [post ,setPost] = useState([]);

  useEffect(()=>{
    client.get("?_limit = 10").then((response)=>{
      console.log(response)
      setPost(response.data);
    });
  },[] );
  
  return (
    <div className="App-posts">
      <h1>All News Posts 📫</h1>
      {post.map((post) => {
        return (
          <div className="post-card" key={post.id}>
            <h2 className="post-title">{post.title}</h2>
            <p className="post-body">{post.body}</p>
            <button onClick={post}>Create Post</button>
          </div>
        );
      })}
    </div>
  );
    }


   
   