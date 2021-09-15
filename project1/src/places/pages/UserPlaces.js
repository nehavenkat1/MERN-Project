import React from 'react'
import { useParams } from 'react-router-dom'

import PlaceList from '../components/PlaceList'

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Buld',
        description: 'One of the tallest building in the world',
        imageUrl: 'https://i.ytimg.com/vi/iRV-XdwRkO4/maxresdefault.jpg',
        address: '20 W 34th St, New York, NY 10001, United States',
        location: {
            lat: 40.7484405,
            lng: -73.9878531
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Burj Khalifa',
        description: 'One of the tallest building in the world',
        imageUrl: 'https://www.visitdubai.com/-/media/gathercontent/poi/b/burj-khalifa/fallback-image/burj-khalifa.jpg?rev=495d595a03bb45ad98afc64493ac29fe&cx=0.62&cy=0.32&cw=397&ch=397',
        address: '1 Sheikh Mohammed bin Rashid Blvd - Downtown Dubai - Dubai - United Arab Emirates',
        location: {
            lat: 25.197197,
            lng: 55.2721877
        },
        creator: 'u2'
    }
]

const UserPlaces = () => {
    const userId = useParams().userId
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId)
    return <PlaceList items={loadedPlaces} /> 
}

export default UserPlaces