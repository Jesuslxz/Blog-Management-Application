import React, { useState } from 'react';

export default function DeleteComment() {

    const ENDPOINT = 'https://64f2b594edfa0459f6c5f7c7.mockapi.io/BlogPost'

    const [commentid, setCommentId] = useState('');
    const [postId, setPostId] = useState('');

    const handleDelete = (e) => {
        e.preventDefault();

        fetch(`${ENDPOINT}/${postId}/Comments/${commentid}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Failed to delete comment');
            }
        })
        .then(data => {
            console.log(data);
            alert('Comment deleted successfully!');
            setCommentId(''); // Clear the input after successful delete
            setPostId('');
        })
        .catch(error => {
            console.error("Error deleting Comment:", error);
            alert('Failed to delete Comment.');
        });
    };

    return (
        <div>
            <h2>Delete Comment from Post</h2>
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
                    <label htmlFor="commentId" className='m-3'>Comment ID:</label>
                    <input 
                        type="text" 
                        id="commentId" 
                        value={commentid} 
                        onChange={(e) => setCommentId(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit" className='m-3'>Delete</button>
            </form>
        </div>
    );
}


