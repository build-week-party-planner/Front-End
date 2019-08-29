import React, { useEffect } from 'react'

//routing
import { Link } from 'react-router-dom'

//styles

//redux
import { getEvents } from '../actions/index'
import { connect } from 'react-redux'

import { deleteEvent } from '../actions/eventActions';

import { Button, Icon } from 'semantic-ui-react';

import ShoppingList from './Lists/ShoppingList'
import TodoList from './Lists/ToDo'
import EntertainmentList from './Lists/Entertainment'
import FormikUpdateEvents from './UpdateEventForm';
import ProgressBar from './ProgressBar'

const SingleEvent = props => {


  let targetEvent = props.events.filter(event => {
    if (event.id.toString() === props.match.params.id) {
      return event
    }
  })

  const targetObject = { ...targetEvent[0] }

  useEffect(() => {
    props.getEvents()
  }, [])


  return (
    <div className='event-container'>
      <div className= 'top-content'>

        <div className='event-header'>
            <Link to={`/dashboard/${localStorage.getItem('user_id')}`} className= 'back-button-link'>
                <Icon name='angle left' className= 'back-button'/>
            </Link>

            <h2>{targetObject.name}</h2>

            <FormikUpdateEvents targetObject={targetObject} deleteEvent={props.deleteEvent} history={props.history} match={props.match} />

        </div>
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
          <ProgressBar party = {targetObject}/>
        </div>
      </div>
      <div className='lists-container'>
        <h3>Lists :</h3>
        <div className='btn-list-container'>
          <ShoppingList match={props.match} />
          <TodoList match={props.match} />
          <EntertainmentList match={props.match} />
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

export default connect(mapStateToProps, { getEvents, deleteEvent })(SingleEvent)
