import React from 'react';
import { connect } from 'react-redux'
import { Form, Field, withFormik} from 'formik'
import * as Yup from 'yup'
import { addShoppingItem, updateShoppingItems } from '../../actions'

const ShoppingListForm = props => {
    const { modalPosition } = props
    const { match } = props
    return(
        <>
        {modalPosition === 1 ?
        <div class = 'shopping-list-form-container'>
            <Form>
                 <h2>Add Item</h2>
                    <Field type = 'text' name = 'item' placeholder = 'Item. . .'/>
                    <button type = 'submit'>Add Item</button>
            </Form>
        </div> : null}
        </>
    )
}

const FormikShoppingForm = withFormik({
    mapPropsToValues({item, price}){
        return{
            item: item || '',
        }
    },
    validationSchema: Yup.object().shape({
        item: Yup.string().required('Item name is required'),
    }),
    handleSubmit(values, props){
            const valuesToSubmit = {
                name: values.item,
                purchased: false,
                shopping_list_id: Number(props.props.match.match.params.id),
                price: 0
            }
            props.props.addShoppingItem(valuesToSubmit)
        }
})(ShoppingListForm)

const mapStateToProps = state => {
    return state
}
export default connect(mapStateToProps, {addShoppingItem})(FormikShoppingForm);