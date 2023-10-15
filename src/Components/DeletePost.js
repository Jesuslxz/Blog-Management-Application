import React, { useState } from 'react';

export default function DeletePost() {

    const ENDPOINT = 'https://64f2b594edfa0459f6c5f7c7.mockapi.io/BlogPost'

    const [postId, setPostId] = useState('');

    const handleDelete = (e) => {
        e.preventDefault();

        fetch(`${ENDPOINT}/${postId}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Failed to delete post');
            }
        })
        .then(data => {
            console.log(data);
            alert('Post deleted successfully!');
            setPostId(''); // Clear the input after successful delete
        })
        .catch(error => {
            console.error("Error deleting post:", error);
            alert('Failed to delete post.');
        });
    };

    return (
        <div>
            <h2>Delete Post</h2>
            <form onSubmit={handleDelete}>
                <div className='m-3'>
                    <label htmlFor="postId">Post ID:</label>
                    <input 
                        type="text" 
                        id="postId" 
                        value={postId} 
                        onChange={(e) => setPostId(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit" className='m-3'>Delete</button>
            </form>
        </div>
    );
}


