import React from 'react'

const EventOnDashboard = ({ budget, date, guests, name, theme }) => {

  return(
    <>
    <h1>{name}</h1>
    <h2>{budget}</h2>
    <h3>{guests}</h3>
    <h3>{theme}</h3>
    <h3>{date}</h3>
    </>
  )
}

export default EventOnDashboard;