import React from 'react'
import ShoppingList from './Lists/ShoppingList'
import EntertainmentList from './Lists/Entertainment'
import TodoList from './Lists/ToDo'


const EventOnDashboard = (props) => {

  const { event } = props
  
  return(
    <div>
      <h1>{event.name}</h1>
      <ShoppingList id={event.id} />
      <TodoList id={event.id} />
      <EntertainmentList id={event.id} />
    </div>
  )
}

export default EventOnDashboard;
