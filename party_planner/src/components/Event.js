import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getEvents } from '../actions/index'
import { connect } from 'react-redux'
import { Button, Icon } from 'semantic-ui-react';
import { deleteEvent } from '../actions/eventActions';
import ShoppingList from './Lists/ShoppingList'
import TodoList from './Lists/ToDo'
import EntertainmentList from './Lists/Entertainment'
import FormikUpdateEvents from './UpdateEventForm';

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
      <div className='event-header'>

        <div className="headerTop">
          <Link to={`/dashboard/${localStorage.getItem('user_id')}`}>
            <Button Icon>
              <Icon name='angle left' />
            </Button>
          </Link>

          <h3>{targetObject.name}</h3>

          <FormikUpdateEvents targetObject={targetObject} deleteEvent={props.deleteEvent} history={props.history} match={props.match} />
        </div>

        <div className="new-photo">
          Add Photo
        </div>

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
