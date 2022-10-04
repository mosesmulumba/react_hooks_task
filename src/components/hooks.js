import React , { useState } from 'react';

export default function Pay(){

const [count ,setCount] = useState(0);
const [post , setPost] = useState("post") 

    return (
        <div>
            <button 
            onClick={()=>setCount(count + 1)}>
                Buy Newspaper :
            </button>
            <h3>Number of Newspapers bought <span>{count}</span>.</h3>
            <button onClick={()=>setPost('user')}>User</button>
            <button onClick={()=>setPost('comment')}>Comment</button>
            <button onClick={()=>setPost('post')}>Post</button>
            <h1>{post}</h1>
        </div>
        )
    
    }