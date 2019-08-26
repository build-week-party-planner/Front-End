import React from 'react'
import { connect } from 'react-redux'



const Event = props => {

    let targetEvent = props.events.filter( event =>{ 
        if(event.id.toString() === props.match.params.id){
            return event
        }})
    
        console.log(targetEvent)
    const targetObject = {...targetEvent[0]}

    return(
        <div className = 'event-container'>
            <p>Theme: {targetObject.theme}</p>
            <p>Guests: {targetObject.guests}</p>
            <p>Events: {targetObject.date}</p>
            <p>Budget: ${targetObject.budget}</p>
            <img src = ''></img>
        </div>
    
    )

}

const mapStateToProps = state => {
    return{
        events: state.events
    }
}

export default connect(mapStateToProps,{})(Event)