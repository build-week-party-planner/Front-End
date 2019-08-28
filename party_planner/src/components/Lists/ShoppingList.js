import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { Form, Field, withFormik, Formik} from 'formik'
import * as Yup from 'yup'
import { Button, Header, Modal, ModalActions } from 'semantic-ui-react';
import { getShoppingItems } from '../../actions'
import ShoppingListForm from './ShoppingListForm'
import FormikShoppingForm from './ShoppingListForm';
import { addShoppingItem } from '../../actions'


const ShoppingList = props => {


    const match = props

    useEffect(() => {
        props.getShoppingItems()
    },[])

    const shoppingItems = props.shoppingListItems.filter(item => {
        if(item.shopping_list_id.toString() === match.match.params.id){
            return item
        }
    })


    return(
        <div className = 'modal-container'>
            <Modal trigger={<Button>Shopping List</Button>} closeIcon>
                <Modal.Content>
                    <Header>Shopping List </Header>
                    {shoppingItems.length ? 
                        shoppingItems.map( item => {
                            return(
                                <div>
                                    <p>{item.name}</p>
                                    <p>{item.price}</p>
                                </div>
                            )
                        })
                        :'Your shopping list is currently empty. Click below to add an item.'
                    }
                    <FormikShoppingForm match = {match}/>
                    </Modal.Content>
            </Modal>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        shoppingListItems : state.shoppingListItems
    }
}
export default connect(mapStateToProps, { getShoppingItems })(ShoppingList)