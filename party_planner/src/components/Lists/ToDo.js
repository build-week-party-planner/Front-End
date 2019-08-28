import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { Button, Header, Modal } from 'semantic-ui-react';
import FormikTodoForm from './ToDoForm';
import { getEventTodoList } from '../../actions'
import ToDoItem from './ToDoItem'
import { updateToDoList } from '../../actions'


const TodoList = props => {

    console.log(props)

    const match = props

    useEffect(() => {
        props.getEventTodoList()
    },[])

    let todoList = props.todoItems.filter(item => {
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
                                <ToDoItem item = {item}/>
                            )
                        })
                        :'Your shopping list is currently empty. Click below to add an item.'
                    }
                    <FormikTodoForm match = {match}/>
                    <Button onClick = {() => props.updateToDoList(todoList)}>Update Changes</Button>
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
export default connect(mapStateToProps, {getEventTodoList, updateToDoList})(TodoList)