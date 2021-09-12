import React from 'react'

import UserList from '../components/UserList'

const Users = () => {
    const USERS = [
        {
            id: 'uid1',
            image: 'https://www.desicomments.com/dc3/19/439319/4393191.jpg',
            name: 'John',
            places: 3
        }
    ] 

    return <UserList items={USERS} />
}

export default Users