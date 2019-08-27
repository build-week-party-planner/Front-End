import React, {useEffect} from 'react';
import { connect } from 'react-redux'
import { getEvents } from '../actions'

// AddEvent component
import FormikAddEvent from './AddEvent';

const Events = props => {


  useEffect(()=> {
    props.getEvents()
  },[])

  return (
    <FormikAddEvent />
  )
}

const mapStateToProps = state => {
  return{
    events : state.events
  }
}

export default connect(mapStateToProps , {getEvents})(Events)