import React from 'react';
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react';

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
    <div className = "my-events">
      <header>
        <h2>My Events</h2>
        <Button color="red" style={{width: 'max-content'}}>
          Delete
          </Button>
      </header>
      <div className = 'events-container new-event'>
        <FormikAddEvent history={history} match={match} />
      </div>

      {authObjects.map(event => (
        <div key={event.id} className = 'events-container'>
          <Button>
            <Link key={event.id} to={`/events/${event.id}`}><EventOnDashboard
              name={event.name}
            /></Link>
          </Button>
        </div>
      ))}
    </div>
  )
}

const mapStateToProps = state => {
  return{
    events : state.events
  }
}

export default connect(mapStateToProps, {})(Events)