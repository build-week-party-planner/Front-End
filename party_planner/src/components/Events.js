import React, {useEffect} from 'react';
import { connect } from 'react-redux'
import { getEvents } from '../actions/index'

// AddEvent component
import FormikAddEvent from './AddEvent';

// Event clickable component
import EventOnDashboard from './EventOnDashboard';

import { Link } from 'react-router-dom';

const Events = ({ getEvents, history, match, events }) => {


  useEffect(()=> {
    getEvents()
  },[match.params.id])

  console.log(events)

  return (
    <>
    <FormikAddEvent history={history} match={match} />

    {events && events.filter(event => event.user_id == match.params.id).map(event => (
      <Link to={`/events/${event.id}`}><EventOnDashboard 
        key={event.id}
        budget={event.budget}
        date={event.date}
        guests={event.guests}
        name={event.name}
        theme={event.theme}
      /></Link>
    ))}
    </>
  )
}

const mapStateToProps = state => {
  return{
    events : state.events
  }
}

export default connect(mapStateToProps, {getEvents})(Events)