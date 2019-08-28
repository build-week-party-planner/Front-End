import React from 'react';
import { connect } from 'react-redux'
import { Form, Field, withFormik} from 'formik'
import * as Yup from 'yup'
import { addEventTodo } from '../../actions'

const TodoListForm = props => {

    const { match } = props

    return(
        <div class = 'todo-list-form-container'>
            <Form>
                <Field type = 'text' name = 'task' placeholder = 'task'/>
                <button type = 'submit'>Add Task</button>
            </Form>
        </div>
    )
}

const FormikTodoForm = withFormik({
    mapPropsToValues({task}){
        return{
            task: task || ''
        }
    },
    validationSchema: Yup.object().shape({
        task: Yup.string().required('Task name is required'),
    }),
    handleSubmit(values, props){
        console.log(props)
        const valuesToSubmit = {
            name: values.task,
            completed: false,
            todo_list_id: Number(props.props.match.match.params.id),
        }
        props.props.addEventTodo(valuesToSubmit)
    }
})(TodoListForm)

const mapStateToProps = state => {
    return state
}
export default connect(mapStateToProps, {addEventTodo})(FormikTodoForm);