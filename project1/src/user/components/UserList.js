import React from 'react'

import UserItem from './UserItem'
import './UserList.css'

const UserList = porps => {
    if(porps.items.length === 0) {
        return <div className='center'>
            <h2>No Users Found.</h2>
        </div>
    }

    return(
        <ul>
            {porps.items.map(user => (
                <UserItem  
                    key={user.id} 
                    id={user.id} 
                    image={user.image} 
                    name={user.name}
                    placeCount={user.places}
                />
            ))}
        </ul>
    )
 }

export default UserList