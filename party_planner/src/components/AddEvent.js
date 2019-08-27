import React, { useEffect } from 'react';

// Form packages
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

// Add event axios request
import { addEvent } from '../actions/index';

// Redux store
import { connect } from 'react-redux';

// Semantic UI components
import { Button, Header, Modal } from 'semantic-ui-react';

const AddEvent = ({ addEvent, status, history, match, touched, errors }) => {

  useEffect(() => {
    status && addEvent(status, history, match)
    history.push(`/dashboard/${localStorage.getItem('user_id')}`)
  }, [status])

  return (
    <div className="add-event-modal">
      <Modal trigger={<Button>New Event!</Button>} closeIcon>
        <Modal.Content>
          <Modal.Description>
            <Header>New Event</Header>
            <Form>
              <Field
                placeholder="Event Name"
                name="name"
                type="text"
              />
              {touched.name && errors.name && <p>{errors.name}</p>}
              <Field
                placeholder="# of Guests"
                name="guests"
                type="number"
              />
              {touched.guests && errors.guests && <p>{errors.guests}</p>}
              <Field
                placeholder="Event budget"
                name="budget"
                type="number"
              />
              {touched.budget && errors.budget && <p>{errors.budget}</p>}
              <Field
                placeholder="Theme"
                name="theme"
                type="text"
              />
              {touched.theme && errors.theme && <p>{errors.theme}</p>}
              <Field
                placeholder="dd/mm/yyyy"
                name="date"
                type="date"
              />
              {touched.date && errors.date && <p>{errors.date}</p>}
              <Button type="submit">Let's Go!</Button>
            </Form>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </div>
  )
}

const FormikAddEvent = withFormik({
  mapPropsToValues({ name, guests, budget, theme, date }) {
    return {
      name: name || '',
      guests: guests || '',
      budget: budget || '',
      theme: theme || '',
      date: date || '',
    }
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required("Event name is required!"),
    guests: Yup.number().required("# of event guests are required!"),
    budget: Yup.number().required("Event budget is required!"),
    theme: Yup.string().required("Event theme is required!"),
    date: Yup.string().required("Event date is required!")
  }),

  handleSubmit(values, { resetForm, setStatus }){
    const propsToSubmit = {
      "name": values.name,
      "guests": values.guests, 
      "theme": values.theme, 
      "date": values.date,
      "budget": values.budget,
      "user_id": localStorage.getItem('user_id'),
      "id": Date.now(),
    }
    setStatus(propsToSubmit);
    resetForm();
    // window.location.reload();
  }
})(connect(
  null, { addEvent } 
)(AddEvent))

export default FormikAddEvent;