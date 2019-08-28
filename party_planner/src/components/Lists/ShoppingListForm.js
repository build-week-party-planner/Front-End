import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { Form, Field, withFormik} from 'formik'
import * as Yup from 'yup'
import { Button, Header, Modal, ModalActions } from 'semantic-ui-react';
import { addShoppingItem } from '../../actions'

const ShoppingListForm = props => {

    const { match } = props
    console.log(match)
    return(
        <div class = 'shopping-list-form-container'>
            <Form>
                <Field type = 'text' name = 'item'/>
                <Field type = 'text' name = 'price'/>
                <button type = 'submit'>Add Item</button>
            </Form>
        </div>
    )
}

const FormikShoppingForm = withFormik({
    mapPropsToValues({item, price}){
        return{
            item: item || '',
            price: price || ''
        }
    },
    validationSchema: Yup.object().shape({
        item: Yup.string().required('Item name is required'),
        price: Yup.number()
    }),
    handleSubmit(values, props){
        console.log(props)
        const valuesToSubmit = {
            name: values.item,
            purchased: false,
            shopping_list_id: Number(props.props.match.match.params.id),
            price: values.price
        }
        props.props.addShoppingItem(valuesToSubmit)
    }
})(ShoppingListForm)

const mapStateToProps = state => {
    return state
}
export default connect(mapStateToProps, {addShoppingItem})(FormikShoppingForm);