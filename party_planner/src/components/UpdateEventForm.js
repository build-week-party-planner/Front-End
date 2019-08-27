import React from 'react'
import { Formik, Field, Form, withFormik } from 'formik'
import * as Yup from 'yup'
import { connect } from 'react-redux'

const UpdateEvent = props =>{
    
    return(
        <Form>
            <h2>Update Form</h2>
            <Field name = 'theme' placeholder = 'Event Theme. . .'/>
            <Field name = 'date' placeholder = 'Event Date. . .'/>
            <Field name = 'guests' placeholder = 'Guests Invited. . .'/>
            <Field name = 'budget' placeholder = 'Event Budget. . .'/>
            <button type = 'submit'>Update Event</button>
        </Form>
    )
}

const FormikUpdateEvents = withFormik({
    mapPropsToValues(props){

        let targetEvent = props.events.filter( event =>{ 
            if(event.id.toString() === props.match.params.id){
                return event
            }})
    
        const targetObj = {...targetEvent[0]}    
        return{
            theme: targetObj.theme || '',
            guests: targetObj.guests || '',
            date: targetObj.date|| '',
            budget: targetObj.budget || ''
        }
    },
    validationSchema : Yup.object().shape({
        theme: Yup.string().required(),
        guests: Yup.number().required(),
        date: Yup.string().required(),
        budget: Yup.string().required()
    }),
    handleSubmit(values, props){
        console.log('values', values)
        console.log('props', props)
    }
})(UpdateEvent)

const mapStateToProps = state => {
    return{
        events: state.events
    }
}

export default connect(mapStateToProps,{})(FormikUpdateEvents)