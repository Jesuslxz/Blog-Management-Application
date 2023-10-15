import React from "react";
import { Card } from "react-bootstrap";

export default function CommentSection( {comments} ){
    return(
        <div>
            {comments.map( (comment, index) =>(
                <Card key={index} className="m-3">
                <Card.Body>
                  <Card.Title className="mt-1">{comment.name} </Card.Title>
                  <Card.Subtitle className="mt-1 mb-2 text-muted">{comment.createdAt} -- id: {comment.id}</Card.Subtitle>
                  <Card.Text>
                    {comment.comment}
                  </Card.Text>
                </Card.Body>
              </Card>  
            ))}
        </div>
    )


}