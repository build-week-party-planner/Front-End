import React from 'react';
import { connect } from 'react-redux'


// AddEvent component
import FormikAddEvent from './AddEvent';

// Event clickable component
import EventOnDashboard from './EventOnDashboard';

import { Link } from 'react-router-dom';


const Events = ({ history, match, events }) => {


  const authObjects = events.filter(event => {
    return event.user_id == match.params.id;
  })

  return (
    <>

    <FormikAddEvent history={history} match={match} />

    {authObjects.map(event => (
      <Link key={event.id} to={`/events/${event.id}`}><EventOnDashboard 
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

export default connect(mapStateToProps, {})(Events)