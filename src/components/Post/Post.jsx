import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css';

const Post = ({post}) => {
    const {id, title,  body} = post;

    const navigate = useNavigate();

    const handleNavigate=()=> {
         navigate(`/post/${id}`)
    }

    return (
        <div className='post'>
            <h2>ID: {id}</h2>
            <h3>Title: {title}</h3>
            <Link to={`/post/${id}`} >Show Details</Link>
            <Link to={`/post/${id}`}><button> show post details</button></Link>
            <button onClick={handleNavigate} >Button handler</button>
        </div>
    );
};

export default Post;