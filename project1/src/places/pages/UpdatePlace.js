import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'

import Input from '../../shared/components/FormElements/Input'
import Button from '../../shared/components/FormElements/Button'
import Card from '../../shared/components/UIElements/Card'
import {
    VALIDATOR_REQUIRE,
    VALIDATOR_MINLENGTH
} from '../../shared/util/validators'
import { useForm } from "../../shared/hooks/form-hook";
import './PlaceForm.css'


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


const UpdatePlace = props => {
    const [isLoading, setIsLoading] = useState(true)

    const placeId = useParams().placeId
    
    const [formState, inputHandler, setFormData] = useForm({
        title: {
            value: '',
            isValid: false
        },
        description: {
            value: '',
            isValid: false
        }
    }, false)

    const identifiedPlace = DUMMY_PLACES.find(place => place.id === placeId)

    useEffect(() => {
        if(identifiedPlace) {
            setFormData({
                title: {
                    value: identifiedPlace.title,
                    isValid: true
                },
                description: {
                    value: identifiedPlace.description,
                    isValid: true
                }
            },
            true
            )
        }
        setIsLoading(false)
    }, [setFormData, identifiedPlace])
    

    const placeUpdateSubmitHandler = event => {
        event.preventDefault()
        console.log(formState.inputs)
    }

    if(!identifiedPlace) {
        return (
            <div className="center">
                <Card>
                    <h2>Could not find a place!</h2>
                </Card>
            </div>
        )
    }

    if(isLoading) {
        return(
            <div className="center">
                <h2>Loading...</h2>
            </div>
        )
    }

    return <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
        <Input 
            id="title"
            element="input"
            type="text"
            label="Title"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid title."
            onInput={inputHandler}
            initialValue={formState.inputs.title.value}
            initialValid={formState.inputs.title.isValid}
        />
        <Input 
            id="description"
            element="textarea"
            label="Description"
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Please enter a valid description (minimum 5 char)."
            onInput={inputHandler}
            initialValue={formState.inputs.description.value}
            initialValid={formState.inputs.description.isValid}
        />
        <Button type="submit" disabled={!formState.isValid}>UPDATE PLACE</Button>
    </form>
}

export default UpdatePlace