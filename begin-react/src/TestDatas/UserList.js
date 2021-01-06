import React from 'react';

function User({user}){

    return <div>
        <div>{user.id}</div>
        <div>{user.username}</div>
        <div>{user.email}</div>
    </div>
}

function UserList(){

    const users =[

        {
            id : 1,
            username : "Hello",
            email : 'aaaa@aa'
        },

        {
            id : 2,
            username : "Hello",
            email : 'aaaa@aa'
        },

        {
            id : 2,
            username : "Hello",
            email : 'aaaa@aa'
        },

    ]

    return (
        <div>
            {
                users.map(
                    (user, index)  => (
                        <User key={user.id} user={user}/>
                    )
                )
            }
        </div>
    )
}

export default UserList;