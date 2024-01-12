import React, { useState, useEffect } from 'react';
import CommentList from './CommentList';
import CommentCreate from './CommentCreate';
import axios from 'axios';


const PostList = () =>{
    const [posts, setPosts] = useState({});

    const fetchPosts = async() =>{
        const res = await axios.get('http://localhost:4000/post');
        setPosts(res.data);
    }
    //runs only one time
    useEffect(()=>{
        fetchPosts();
    },[]);

    const renderedPosts = Object.values(posts).map((post)=>{
        return(
            <div className='card mb-3' key={post.id} style={{width: '18rem'}}>
                <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <CommentList postId={post.id}/>
                    <CommentCreate postId={post.id}/>
                </div>
            </div>
        )
    })

    return(
        <div className='d-flex flex-row flex-wrap justify-content-between'>
           {renderedPosts}           
        </div>
    )
}

export default PostList;