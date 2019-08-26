import React from 'react';

// Form packages
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

// Semantic UI components
import { Button, Header, Modal } from 'semantic-ui-react';

const AddEvent = () => {
  return (
    <div className="add-event-modal">
      <Modal trigger={<Button>New Event!</Button>}>
        <Modal.Content>
          <Modal.Description>
            <Header>New Event</Header>
            <Form>
              <Field
                placeholder="Event Name"
                name="name"
                type="text"
              />
              <Field
                placeholder="# of Guests"
                name="guests"
                type="number"
              />
              <Field
                placeholder="Theme"
                name="theme"
                type="text"
              />
              <Field
                placeholder="dd/mm/yyyy"
                name="date"
                type="date"
              />
              <Button>Let's Go!</Button>
            </Form>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </div>
  )
}

const FormikAddEvent = withFormik({
  mapPropsToValues({ name, guests, theme, date }) {
    return {
      name: name || '',
      guests: guests || '',
      theme: theme || '',
      date: date || '',
    }
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required("Event name is required!"),
    guests: Yup.number().required("# of event guests are required!"),
    theme: Yup.string().required("Event theme is required!"),
    date: Yup.string().required("Event date is required!")
  }),

  handleSubmit(values, { resetForm }){
    resetForm();
    console.log(values);
  }
})(AddEvent)

export default FormikAddEvent;