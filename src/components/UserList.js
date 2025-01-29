import React from 'react'
import { Link } from 'react-router-dom'


const UserList = ({users}) =>{


    return <div>
        <h1>User List</h1>
        {users.map((item) =>{
            return (
                <li key={item.id}>
                    <Link to={`/users/${item.id}`}>{item.name}</Link>
                </li>
            )
        })}
        {}
    </div>
}

export default UserList