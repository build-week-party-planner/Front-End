import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getEvents } from '../actions/index'
import { connect } from 'react-redux'

import { Button, Icon } from 'semantic-ui-react';


const SingleEvent = props => {

    let targetEvent = props.events.filter( event =>{ 
        if(event.id.toString() === props.match.params.id){
            return event
        }})

    const targetObject = {...targetEvent[0]}

    return(
        <div className = 'event-container'>
            <div className = 'event-header'>
                <Button Icon>
                    <Icon name='angle left' />
                    <Link to = '/dashboard'>
                    </Link>
                </Button>
                
                <h3>Example Event</h3>
                <Button Icon>
                    <Icon name='edit' />
                    <Link to = {`/events/${targetObject.id}/edit`}>
                    </Link>
                </Button>
            </div>
            <img src = ''></img>
            <div className = 'event-info-container'>
                <div className = 'event-info'>
                    <p>Theme:</p>
                    <p>{targetObject.theme}</p>
                </div>
                <div className = 'event-info'>
                    <p>Date:</p>
                    <p>{targetObject.date}</p>
                </div>
                <div className = 'event-info'>
                    <p>Guests:</p>
                    <p>{targetObject.guests}</p>
                </div>
                <div className = 'event-info'>
                    <p>Budget:</p>
                    <p>${targetObject.budget}</p>
                </div>
            </div>

        </div>
    )

}

const mapStateToProps = state => {
    return{
        events: state.events
    }
}

export default connect(mapStateToProps,{getEvents})(SingleEvent)