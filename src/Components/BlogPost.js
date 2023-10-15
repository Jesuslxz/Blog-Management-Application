import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import CommentSection from "./CommentSection";
import { Container } from "react-bootstrap";


export default function BlogPost(  ) {

    
    const ENDPOINT = 'https://64f2b594edfa0459f6c5f7c7.mockapi.io/BlogPost';
    const [blog , setBlog] = useState([]);
    const [comments , setComments] = useState([]);
    const { id } = useParams();

    useEffect (() => {
            const getBlog = async () => {
                try {
                    const response = await fetch(`${ENDPOINT}/${id}`);
                    const BlogJSON = await response.json();
                    setBlog(BlogJSON);
                        return console.log(BlogJSON);
                    }
                    catch (err){
                        console.error(err);
                        return console.log('Something went wrong when aquiring post data');
                    }
            }
        getBlog();
    }, [id]);

    useEffect (() => {
        const getComments = async () => {
            try {
                const response = await fetch(`${ENDPOINT}/${id}/Comments`);
                const commentsJSON = await response.json();
                setComments(commentsJSON);
                    return console.log(commentsJSON);
                }
                catch (err){
                    console.error(err);
                    return console.log('Something went wrong when aquiring Comments data');
                }
        }
        getComments();
    }, []);



    return(
    <div>
        <Card className="m-3">
            <Card.Body>
            <Card.Title>{blog.name}</Card.Title>
            
            <Card.Subtitle className="mb-2 text-muted">{blog.createdAt}  --id: {blog.id}</Card.Subtitle>
            <Card.Text>
                {blog.post}
            </Card.Text>
            </Card.Body>
        </Card>
        <Container>
            <CommentSection comments={comments}/>
        </Container>
        

    </div>
);}