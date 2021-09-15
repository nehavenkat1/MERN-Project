import React from 'react'

import PlaceList from '../components/PlaceList'

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Buld',
        description: 'One of the tallest building in the world',
        imageUrl: '',
        address: '20 W 34th St, New York, NY 10001, United States',
        location: {
            lat: 40.7484405,
            lng: -73.9878531
        },
        creator: 'u1'
    }
]

const UserPlaces = () => {
    return <PlaceList items={DUMMY_PLACES} /> 
}

export default UserPlaces