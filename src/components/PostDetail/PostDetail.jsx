import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const postDetail = useLoaderData();
    const {id, title, body,userId} = postDetail;

    const navigate = useNavigate();

    const handleGoBack=()=> {
         navigate(-1)
    }



    return (
        <div>
           <h1>this is details of postId: {id}</h1> 
           <h2>UserId: {userId}</h2>
           <h3>Title: {title}</h3>
           <h4>Body: {body}</h4>
           <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetail;