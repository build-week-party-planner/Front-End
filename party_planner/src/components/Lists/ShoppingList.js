import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { Button, Header, Modal, ModalActions } from 'semantic-ui-react';
import { getShoppingItems, updateShoppingItems } from '../../actions'
import FormikShoppingForm from './ShoppingListForm';
import { Checkbox } from 'semantic-ui-react'
import ShoppingItem from './ShoppingItem'



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
                                <ShoppingItem item = {item}/>
                            )
                        })
                        :'Your shopping list is currently empty. Click below to add an item.'
                    }
                    <FormikShoppingForm match = {match}/>
                    <Button onClick = {() => props.updateShoppingItems(shoppingItems)}>Update Shopping List</Button>
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
export default connect(mapStateToProps, { getShoppingItems, updateShoppingItems })(ShoppingList)