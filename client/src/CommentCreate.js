import React, { useState } from 'react';
import axios from 'axios';

const CommentCreate = ({ postId }) =>{
    console.log(postId);
    const [content, setContent ] = useState('');
    const onSubmit = async(event) =>{
        event.preventDefault();
        await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
            content
        });
        setContent('');
    }


    return(
        <div>
            <form onSubmit={onSubmit}>
                <div className='form-group mb-3'>
                    <label className="form-label">New Comment</label>
                    <input value={content} onChange={e=> setContent(e.target.value)} className='form-control' />
                </div>
                <button className='btn btn-primary mb-3'>Submit</button>
            </form>
        </div>
    )
}

export default CommentCreate;