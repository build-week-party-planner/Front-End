import React, { useEffect } from 'react'
import { Field, Form, withFormik } from 'formik'
import * as Yup from 'yup'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom';

import { updateEvent } from '../actions/eventActions';

const UpdateEvent = ({ history, match, updateEvent, status }) => {

  useEffect(() => {
    status && updateEvent(status, match.params.id, history);
  }, [status])

  return (
    <Form>
      <h2>Update Form</h2>
      <Field
        name='name'
        placeholder='Event Name. . .'
        type='text'
      />
      <Field
        name='theme'
        placeholder='Event Theme...'
        type='text'
      />
      <Field
        name='date'
        placeholder='Event Date. . .'
        type='date'
      />
      <Field
        name='guests'
        placeholder='Guests Invited. . .'
        type='number'
      />
      <Field
        name='budget'
        placeholder='Event Budget. . .'
        type='number'
      />
      <button type='submit'>Update Event</button>
    </Form>
  )
}

const FormikUpdateEvents = withFormik({
  mapPropsToValues(props) {

    let targetEvent = props.events.filter(event => {
      if (event.id.toString() === props.match.params.id) {
        return event
      }
    })

    const targetObj = { ...targetEvent[0] }

    return {
      name: targetObj.name || '',
      theme: targetObj.theme || '',
      guests: targetObj.guests || '',
      date: targetObj.date || '',
      budget: targetObj.budget || ''
    }
  },
  validationSchema: Yup.object().shape({
    name: Yup.string(),
    theme: Yup.string(),
    guests: Yup.number(),
    date: Yup.string(),
    budget: Yup.number()
  }),
  handleSubmit(values, { resetForm, setStatus } ) {
    resetForm();
    setStatus(values);
  }
})(UpdateEvent)

const mapStateToProps = state => {
  return {
    events: state.events
  }
}

export default connect(mapStateToProps, { updateEvent })(FormikUpdateEvents)