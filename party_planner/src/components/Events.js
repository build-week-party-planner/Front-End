import React, {useEffect} from 'react';
import { connect } from 'react-redux'
import { getEvents } from '../actions'

// AddEvent component
import FormikAddEvent from './AddEvent';

const Events = ({ props, history }) => {


  useEffect(()=> {
    props.getEvents()
  },[])

  return (
    <FormikAddEvent history={history} />
  )
}

const mapStateToProps = state => {
  return{
    events : state.events
  }
}

export default connect(mapStateToProps , {getEvents})(Events)