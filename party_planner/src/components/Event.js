import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getEvents } from '../actions/index'
import { connect } from 'react-redux'
import { Button, Icon } from 'semantic-ui-react';
import { deleteEvent } from '../actions/eventActions';
import ShoppingList from './Lists/ShoppingList'
import TodoList from './Lists/ToDo'
import EntertainmentList from './Lists/Entertainment'

const SingleEvent = props => {

  useEffect(() => {
    props.getEvents()
  }, [])

  let targetEvent = props.events.filter(event => {
    if (event.id.toString() === props.match.params.id) {
      return event
    }
  })

  const targetObject = { ...targetEvent[0] }

  return (
    <div className='event-container'>
      <div className='event-header'>
        <Link to={`/dashboard/${localStorage.getItem('user_id')}`}>
          <Button Icon>
            <Icon name='angle left' />
          </Button>
        </Link>

        <h3>{targetObject.name}</h3>
        <Link to={`/events/${targetObject.id}/edit`}>
          <Button Icon>
            <Icon name='edit' />
          </Button>
        </Link>
      </div>
      <img src=''></img>
      <div className='event-info-container'>
        <div className='event-info'>
          <p>Theme:</p>
          <p>{targetObject.theme}</p>
        </div>
        <div className='event-info'>
          <p>Date:</p>
          <p>{targetObject.date}</p>
        </div>
        <div className='event-info'>
          <p>Guests:</p>
          <p>{targetObject.guests}</p>
        </div>
        <div className='event-info'>
          <p>Budget:</p>
          <p>${targetObject.budget}</p>
        </div>
        <Button onClick={() => props.deleteEvent(targetObject, props.history)}color="red" style={{width: 'max-content'}}>Delete</Button>
      </div>
    <div className = 'lists-container'>
        <h3>Lists :</h3>
        <div className = 'btn-list-container'>
            <ShoppingList match = {props.match}/>
            <TodoList match = {props.match}/>
            <EntertainmentList match = {props.match}/>
        </div>
    </div>
    </div>
  )

}

const mapStateToProps = state => {
  return {
    events: state.events
  }
}

export default connect(mapStateToProps,{getEvents, deleteEvent})(SingleEvent)
