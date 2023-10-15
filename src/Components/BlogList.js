import React from "react";
import { useEffect, useState } from "react"; 
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

export default function BlogList (){

    const ENDPOINT = 'https://64f2b594edfa0459f6c5f7c7.mockapi.io/BlogPost';
    
    const [blogList , listBlogs] = useState([]);
    


   //renders Blogs from database when this component is loaded;
   useEffect (() => {
        if(blogList.length == 0){// makes sure the bloglist is actually empty before requesting another get request
            const getBlogList = async () => {
                try {
                    const response = await fetch(ENDPOINT);
                    const BlogJSON = await response.json();
                    listBlogs(BlogJSON);
                        return console.log(BlogJSON);
                    }
                    catch (err){
                        console.error(err);
                        return console.log('Something went wrong when aquiring data');
                    }
                };
            getBlogList();
        }
    }, []);
  

    return (
        <div>
            {/* card styling for each post */}
            <h1>Blog posts</h1>
            {blogList.map( (blog, index) =>(
                <Card key={index} className="m-3">
                <Card.Body>
                  <Card.Title className="mt-1">{blog.name} </Card.Title>
                  <Card.Subtitle ><Link to = {`${blog.id}`}>See full post</Link></Card.Subtitle>
                  <Card.Subtitle className="mt-1 mb-2 text-muted">{blog.createdAt} --id: {blog.id}</Card.Subtitle>
                  <Card.Text>
                    {blog.post}
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
        </div>
    );


}