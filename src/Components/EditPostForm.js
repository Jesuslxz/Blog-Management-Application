import React, { useState } from 'react';

export default function EditPostForm(){

    const ENDPOINT = 'https://64f2b594edfa0459f6c5f7c7.mockapi.io/BlogPost';


    const [updatedName, setUpdatedName] = useState('');
    const [updatedContent, setUpdatedContent] = useState('');
    const [postId, setPostId] = useState('');

     const handleSubmit =  async (e) => {
        e.preventDefault();
        
        const post = {
            name: updatedName,
            post: updatedContent,
        };


        fetch(ENDPOINT + '/' + postId , {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(post)
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                alert('Post successfully updated');
            })
            .catch(error => {
                console.error("Error updating post", error);
                alert('Failed to update post.');
            });

        // reset the form after submit
        setUpdatedName('');
        setUpdatedContent('');
        setPostId('');
    };

    return (
        <div>
            <h2>Update Post</h2>
            <form onSubmit={handleSubmit}>
                <div className='m-3'>
                    <label htmlFor="updatedName">Name: </label>
                    <input 
                        type="text" 
                        id="updatedName" 
                        value={updatedName} 
                        onChange={(e) => setUpdatedName(e.target.value)} 
                        required 
                    />
                    <label htmlFor="postId" className='m-3'>Post id: </label>
                    <input 
                        type="text" 
                        id="postId" 
                        value={postId} 
                        onChange={(e) => setPostId(e.target.value)} 
                        required 
                    />
                </div>

                <div className='m-3'>
                    <label htmlFor="updatedContent"> Updated Content: </label>
                    <textarea 
                        id="updatedContent" 
                        value={updatedContent} 
                        onChange={(e) => setUpdatedContent(e.target.value)} 
                        required 
                    />
                </div>
                
                <button type="submit" className='m-3'>Submit</button>
            </form>
        </div>
    );
}