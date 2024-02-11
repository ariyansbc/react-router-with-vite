import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const friend = useLoaderData()
    return (
        <div>
            <h1>this is friend detail component</h1>
            <h3>Name: {friend.name}</h3>
            <h3>City: {friend.address.city}</h3>
            <h3>CompanyName: {friend.company.name}</h3>
            <h3></h3>
        </div>
    );
};

export default FriendDetail;