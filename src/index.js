import axios from 'axios';
import React, { useState } from 'react';

const baseURL = `https://newsapi.org/v2/everything?q=${'Uganda'}&apiKey=${'6d7f09e1de534e21834fa5de3869404b'}/posts`;

export default function Axios() {
  
  const [post ,setPost] = React.useState(null);
  React.useEffect(()=>{
    axios.get('${baseURL}/1').then((response)=>{
      console.log(response)
      setPost(response.data);
    });
  },[] );
  }
   function createPost(){
    axios
        .get(baseURL,{
          title: 'Hello Moses',
          body: 'This is the beginning of the news'
        })
        .then((response)=>{
          setPost(response.data);
        });
      
      if (!post) return null;
      return (
              <div>
                <h1>{title}</h1>
                <p>{body}</p>
                <button onClick={createPost}>News Post</button>
              </div>
      );
   }
   
   