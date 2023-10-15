import React, { useState } from 'react';

export default function CreatePostForm() {

    const ENDPOINT = 'https://64f2b594edfa0459f6c5f7c7.mockapi.io/BlogPost';

    const [name, setName] = useState('');
    const [content, setContent] = useState('');
    

     const handleSubmit =  async (e) => {
        e.preventDefault();
        
        const post = {
            name: name,
            post: content,
        };

            
        fetch(ENDPOINT, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(post)
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                alert('Post successfully created');
            })
            .catch(error => {
                console.error("Error posting blog", error);
                alert('Failed to create post.');
            });

        // reset the form after submit
        setName('');
        setContent('');
    };

    return (
        <div>
            <h2>Create Post</h2>
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
                </div>

                <div className='m-3'>
                    <label htmlFor="content">Content: </label>
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
