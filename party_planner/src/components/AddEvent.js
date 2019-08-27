import React from 'react';

// Form packages
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

// Semantic UI components
import { Button, Header, Modal } from 'semantic-ui-react';

const AddEvent = ({ touched, errors }) => {
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
              {touched.name && errors.name && <p>{errors.name}</p>}
              <Field
                placeholder="# of Guests"
                name="guests"
                type="number"
              />
              {touched.guests && errors.guests && <p>{errors.guests}</p>}
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