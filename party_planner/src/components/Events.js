import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

// AddEvent component
import FormikAddEvent from './AddEvent';

// Semantic UI components
import { Button } from 'semantic-ui-react';

const Events = () => {
  const [events, setEvents] = useState([{            
    guests: 8,
    theme: 'Cowboy',
    date: '2019-09-12',
    budget: 500,
    id: 1}]);

  // useEffect(() => {
  //   axios.get('https://bw-party-planner.herokuapp.com/api/party')
  //   .then(res => {
  //     // setEvents(res)
  //     console.log(res) 
  //   })
  // },[]);

  return (
    <div>
      {events.map(event => {
       return(
        <div className= 'button-container'>
          <Link to= {`/events/${event.id}`}>
            <Button>{event.theme}</Button>
          </Link>
        </div>
       )
      })}
      <div className= 'button-container'>
        <FormikAddEvent />
      </div>
    </div>
  )
}


export default Events;