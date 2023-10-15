import React, { useState } from 'react';

export default function AddComment() {

    const ENDPOINT = 'https://64f2b594edfa0459f6c5f7c7.mockapi.io/BlogPost';
// states to hold each value to use in post request for constructing new post
    const [name, setName] = useState('');
    const [content, setContent] = useState('');
    const [postId, setPostId] = useState('');

     const handleSubmit =  async (e) => {
        e.preventDefault();
        
        const comment = {
            name: name,
            comment: content,
        };


        fetch(ENDPOINT + '/' + postId + '/Comments', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(comment)
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                alert('Comment successfully created');
            })
            .catch(error => {
                console.error("Error posting blog", error);
                alert('Failed to create Comment.');
            });

        // reset the form after submit
        setName('');
        setContent('');
        setPostId('');
    };

    return (
        <div>
            <h2>Add Comment to Post</h2>
            <form onSubmit={handleSubmit}>
                <div className='m-3'>
                    <label htmlFor="name">Name: </label>
                    <input 
                        type="text" 
                        id="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
               
                    <label htmlFor="postId" className='m-3'> Blog id:  </label>
                    <input 
                        type='text'
                        id="postId" 
                        value={postId} 
                        onChange={(e) => setPostId(e.target.value)} 
                        required 
                    />
                </div>

                <div className='m-3'>
                    <label htmlFor="content">Comment: </label>
                    <textarea 
                        id="content" 
                        value={content} 
                        onChange={(e) => setContent(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit" className='m-3'>Submit</button>
            </form>
        </div>
    );
}
