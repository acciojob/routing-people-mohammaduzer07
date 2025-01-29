import React from 'react'
import { useParams } from 'react-router-dom'


const UserDetails = ({users}) =>{

    const {id} = useParams();
    const user = users.find((item) => item.id === parseInt(id))

    return <div>
       <h1>User Details</h1>
       {user ? (
        <div>
            <p>Name : {user.name}</p>
            <p>UserName : {user.username}</p>
            <p>Email : {user.email}</p>
            <p>Phone : {user.phone}</p>
            <p>Website : {user.website}</p>
        </div>
       ) : (
        <p>User not found</p>
       )}
    </div>
}

export default UserDetails