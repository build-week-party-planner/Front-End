import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { Button } from 'semantic-ui-react';

import { getEvents } from '../actions/index'
import { deleteEvent } from '../actions/eventActions';

const SingleEvent = props => {

  useEffect(()=> {
    props.getEvents()
  }, [])

    let targetEvent = props.events.filter(event =>{ 
        if(event.id.toString() === props.match.params.id){
            return event
        }})

    const targetObject = {...targetEvent[0]}

    return(
        <div className = 'event-container'>
            <p>Theme: {targetObject.theme}</p>
            <p>Guests: {targetObject.guests}</p>
            <p>Events: {targetObject.date}</p>
            <p>Budget: ${targetObject.budget}</p>
            <img src = ''></img>
            <button>
                <Link to = {`/events/${targetObject.id}/edit`}>
                    Edit Your Event
                </Link>
            </button>
            <Button onClick={() => props.deleteEvent(targetObject)}color="red">Delete Event</Button>
        </div>
    
    )

}

const mapStateToProps = state => {
    return{
        events: state.events
    }
}

export default connect(mapStateToProps,{ getEvents, deleteEvent })(SingleEvent)