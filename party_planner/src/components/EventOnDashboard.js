import React from 'react'
import ShoppingList from './Lists/ShoppingList'
import EntertainmentList from './Lists/Entertainment'
import TodoList from './Lists/ToDo'


const EventOnDashboard = (props) => {

  const months = {
    '01' : 31,
    '02' : 28,
    '03' : 31,
    '04' : 30,
    '05' : 31,
    '06' : 30,
    '07' : 31,
    '08' : 31,
    '09' : 30,
    '10' : 31,
    '11' : 30,
    '12' : 31
  }

  const { event } = props

  const today =  new Date().toISOString().slice(0, 10).split('-')
  const eventDate = event.date.split('-')

  const findDaysLeft = (currentDate, eventDate) => {

    let daysLeft = null

    const yearsLeft = eventDate[0] -  today[0]

    const todaysMonth = today[1]
    const eventMonth = eventDate[1]


    if (Number(yearsLeft) === 0){

      for(let i = Number(todaysMonth); i <= Number(eventMonth); i++){

        if(i === Number(todaysMonth)){
          daysLeft += eventDate[2] - currentDate[2]
        }
        else if(i === Number(eventMonth)){
          daysLeft += months[i] - Number(eventDate[2])
        }
        else{
          daysLeft += months[i]
        }

      }

    }

    return daysLeft
  }

  const remainingDays = findDaysLeft(today, eventDate)

  return(
    <div className = 'dashboard-event'>
      <div className = 'event-left_side'>
        <div className = 'days-left'>
          <p>{remainingDays} Days Until Event</p>
        </div>
        <h1>{event.name}</h1>
      </div>
{/*       <ShoppingList id={event.id} />
      <TodoList id={event.id} />
      <EntertainmentList id={event.id} /> */}
    </div>
  )
}

export default EventOnDashboard;
