import React, { useState, useContext } from 'react'

import Modal from '../../shared/components/UIElements/Modal'
import Card from '../../shared/components/UIElements/Card'
import Button from '../../shared/components/FormElements/Button'
import './PlaceItem.css'
import { AuthContext } from '../../shared/context/auth-context'

const PlaceItem = props => {
    const auth = useContext(AuthContext)
    const [showMap, setShowMap] = useState(false)
    const [showConfirmModal, setShowConfirmModal] = useState(false)

    const openMapHandler = () => setShowMap(true)

    const closeMapHandler = () => setShowMap(false)

    const showDeleteWarningHandler = () => {
        setShowConfirmModal(true)
    }

    const cancelDeleteHandler = () => {
        setShowConfirmModal(false)
    }

    const confirmDeleteHandler = () => {
        setShowConfirmModal(false)
        console.log('deleting...')
    }
    return <React.Fragment>
        <Modal 
            show={showMap} 
            onCalcel={closeMapHandler} 
            header={props.address}
            contentClass="place-item__modal-content"
            footerClass="place-item__modal-actions"
            footer={<Button onClick={closeMapHandler}>CLOSE</Button>} 
        >
            <div className="map-container">
                <h2>The Map</h2>
            </div>
        </Modal>
        <Modal 
            show={showConfirmModal}
            onCalcel={cancelDeleteHandler}
            header="Are you sure?"
            footerClass="place-item__modal-actions"
            footer={<React.Fragment>
                <Button inverse onClick={cancelDeleteHandler}>CANCEL</Button>
                <Button danger onClick={confirmDeleteHandler}>DELETE</Button>
            </React.Fragment>}
        >
            <p>Do you really want to delete it? It can't be revoked then after.</p>
        </Modal>
        <li className="place-item">
        <div className="place-item__image">
            <img src={props.image} alt={props.title}/>
        </div>
        <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
        </div>
        <div className="place-item__actions">
            <Button inverse onClick={openMapHandler}>VIEW ON MAP</Button>
            {auth.isLoggedIn && <Button to={`/places/${props.id}`}>EDIT</Button>}
            {auth.isLoggedIn && <Button danger onClick={showDeleteWarningHandler}>DELETE</Button>}
        </div>
    </li>
    </React.Fragment>
}

export default PlaceItem