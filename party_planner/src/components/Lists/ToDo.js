import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { Button, Header, Modal } from 'semantic-ui-react';
import FormikTodoForm from './ToDoForm';
import { getEventTodoList } from '../../actions'


const TodoList = props => {


    const match = props

    useEffect(() => {
        props.getEventTodoList()
    },[])

    const todoList = props.todoItems.filter(item => {
        if(item.todo_list_id.toString() === match.match.params.id){
            return item
        }
    })


    return(
        <div className = 'modal-container'>
            <Modal trigger={<Button>To Do List</Button>} closeIcon>
                <Modal.Content>
                    <Header>To Do List</Header>
                    {todoList.length ? 
                        todoList.map( item => {
                            return(
                                <div>
                                    <p>{item.name}</p>
                                </div>
                            )
                        })
                        :'Your shopping list is currently empty. Click below to add an item.'
                    }
                    <FormikTodoForm match = {match}/>
                    </Modal.Content>
            </Modal>
        </div>
    )
}

const mapStateToProps = state => {
    return {
       todoItems : state.todoItems
    }
}
export default connect(mapStateToProps, {getEventTodoList})(TodoList)