import React, { useEffect, useState } from 'react'
import { Field, Form, withFormik } from 'formik'
import * as Yup from 'yup'
import { connect } from 'react-redux'

import { Modal, Button, Header, Icon } from 'semantic-ui-react';

import { updateEvent } from '../actions/eventActions';

import ConfirmDelete from './ConfirmDelete';

const UpdateEvent = ({ deleteEvent, targetObject, touched, errors, history, match, updateEvent, status }) => {

  const [modalOpen, setModalOpen] = useState(false);

  const [pageTwoModal, setPageTwoModal] = useState(false);

  useEffect(() => {
    status && updateEvent(status, match.params.id, history);
  }, [status])

  const handleModalOpen = () => {
    setModalOpen(true);
  }

  const handleModalClose = () => {
    setModalOpen(false);
  }

  return (
    <div className="add-event-modal">
      <Modal open={modalOpen} onClose={handleModalClose} trigger={<Button onClick={handleModalOpen} Icon><Icon name="edit" /></Button>} closeIcon>
        <Modal.Content>
          <Modal.Description>
            <Header>Update Event</Header>
            <ConfirmDelete deleteEvent={deleteEvent} targetObject={targetObject} history={history} />
            <Form>
              {pageTwoModal === false &&
                <>
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
                    placeholder="dd/mm/yyyy"
                    name="date"
                    type="date"
                  />
                  {touched.date && errors.date && <p>{errors.date}</p>}
                  <Button type="button" onClick={() => setPageTwoModal(true)}>Next</Button>
                </>
              }
              {pageTwoModal &&
                <>
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
                  <Button onClick={() => setTimeout(function () { handleModalClose(); }, 0.1)}>Let's Go!</Button>
                </>
              }

            </Form>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </div>
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
  handleSubmit(values, { resetForm, setStatus }) {
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