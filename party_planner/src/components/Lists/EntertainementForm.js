import React from 'react';
import { connect } from 'react-redux'
import { Form, Field, withFormik} from 'formik'
import * as Yup from 'yup'
import { addEntertainment } from '../../actions'

const EntertainmentForm = props => {

    const { match } = props

    return(
        <div class = 'entertainment-form-container'>
            <Form>
                <Field type = 'text' name = 'entertainment' placeholder = 'Item. . .'/>
                <Field type = 'text' name = 'price' placeholder = 'Item Cost. . .'/>
                <button type = 'submit'>Add Entertainment</button>
            </Form>
        </div>
    )
}

const FormikEntertainmentForm = withFormik({
    mapPropsToValues({entertainment, price}){
        return{
            entertainment: entertainment || '',
            price: price || ''
        }
    },
    validationSchema: Yup.object().shape({
        entertainment: Yup.string().required('Entertainment name is required'),
        price: Yup.number().required('Price is required')
    }),
    handleSubmit(values, props){
        console.log(props)
        const valuesToSubmit = {
            name: values.entertainment,
            completed: false,
            todo_list_id: Number(props.props.match.match.params.id),
            price: values.price
        }
        props.props.addEntertainment(valuesToSubmit)
    }
})(EntertainmentForm)

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps, { addEntertainment })(FormikEntertainmentForm);