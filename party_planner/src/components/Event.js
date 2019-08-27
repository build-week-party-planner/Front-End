import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getEvents } from '../actions/index'
import { connect } from 'react-redux'



const SingleEvent = props => {

    let targetEvent = props.events.filter( event =>{ 
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
        </div>
    
    )

}

const mapStateToProps = state => {
    return{
        events: state.events
    }
}

export default connect(mapStateToProps,{getEvents})(SingleEvent)