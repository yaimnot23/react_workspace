// import React from "react";
import User from "./User"

//props를 통해 users 배열 받아오기

function UserList({users}){
    return(
        <div>
            {users.map(user => (
                <User user={user} key={user.id}/>
            ))}
        </div>
    )
}

export default UserList;