import { axiosWithAuth } from '../utils/AxiosWithAuth'


export const GET_EVENTS_START = "GET_EVENTS_START"
export const GET_EVENTS_SUCCESS = "GET_EVENTS_SUCCESS"
export const GET_EVENTS_ERROR = "GET_EVENTS_ERROR"

export const DELETING_EVENT = "DELETING_EVENT"
export const DELETE_EVENT_SUCCESS = "DELETE_EVENT_SUCCESS"
export const DELETE_EVENT_FAILURE = "DELETE_EVENT_FAILURE"


export const getEvents = () => {
  return dispatch => {
    dispatch({ type: GET_EVENTS_START })
    axiosWithAuth()
      .get('https://bw-party-planner.herokuapp.com/api/party')
      .then(res => dispatch({ type: GET_EVENTS_SUCCESS, payload: res.data }))
      .catch(err => dispatch({ type: GET_EVENTS_ERROR, payload: err.response }))
  }
}

export const deleteEvent = (event, history) => {
  return dispatch => {
    dispatch({ type: DELETING_EVENT })
    axiosWithAuth()
      .delete(`https://bw-party-planner.herokuapp.com/api/party/${event.id}`)
      .then(res => {
        dispatch({ type: DELETE_EVENT_SUCCESS, payload: event });
        history.push(`/dashboard/${localStorage.getItem('user_id')}`)
      })
      .catch(err => dispatch({ type: DELETE_EVENT_FAILURE, payload: err.response }))
  }
}

//! CRUD FOR SHOPPING LIST

export const CREATE_EVENT_SHOPPING_LIST_START = "CREATE_EVENT_SHOPPING_LIST_START"
export const CREATE_EVENT_SHOPPING_LIST_SUCCESS = "CREATE_EVENT_SHOPPING_LIST_SUCCESS"
export const CREATE_EVENT_SHOPPING_LIST_ERROR = "CREATE_EVENT_SHOPPING_LIST_ERROR"

export const createEventShoppingList = values => {
  return dispatch =>{
    dispatch({type: CREATE_EVENT_SHOPPING_LIST_START})
    axiosWithAuth()
      .post('https://bw-party-planner.herokuapp.com/api/shoppinglist', values)
      .then( res => console.log(res))
      .catch( err => console.log(err))
  }
}

// ! CRUD for shopping list items

export const ADD_SHOPPING_ITEM_START = "ADD_SHOPPING_ITEM_START"
export const ADD_SHOPPING_ITEM_SUCCESS = "ADD_SHOPPING_ITEM_SUCCESS"
export const ADD_SHOPPING_ITEM_ERROR = "ADD_SHOPPING_ITEM_ERROR"

export const addShoppingItem = values => {
  return dispatch => {
    dispatch({type: ADD_SHOPPING_ITEM_START})
      axiosWithAuth()
      .post('https://bw-party-planner.herokuapp.com/api/items', values)
      .then( res => dispatch({type: ADD_SHOPPING_ITEM_SUCCESS, payload: res.data}))
      .catch( err => console.log('errOnPostItem', err))
  }
}

export const GET_SHOPPING_ITEM_START = "GET_SHOPPING_ITEM_START"
export const GET_SHOPPING_ITEM_SUCCESS = "GET_SHOPPING_ITEM_SUCCESS"
export const GET_SHOPPING_ITEM_ERROR = "GET_SHOPPING_ITEM_ERROR"

export const getShoppingItems = () => {
  return dispatch => {
    dispatch({type: GET_SHOPPING_ITEM_START})
    axiosWithAuth()
    .get('https://bw-party-planner.herokuapp.com/api/items')
    .then( res => dispatch({type: GET_SHOPPING_ITEM_SUCCESS, payload: res.data}))
    .catch( err => dispatch({type: GET_SHOPPING_ITEM_ERROR, payload: err.response}))
  }
}

//!! CRUD FOR TODOLIST 
export const CREATE_EVENT_TODO_LIST_START = "CREATE_EVENT_TODO_LIST_START"
export const CREATE_EVENT_TODO_LIST_SUCCESS = "CREATE_EVENT_TODO_LIST_SUCCESS"
export const CREATE_EVENT_TODO_LIST_ERROR = "CREATE_EVENT_TODO_LIST_ERROR"

export const createEventTodoList = values => {
  return dispatch =>{
    dispatch({type: CREATE_EVENT_TODO_LIST_START})
    axiosWithAuth()
      .post('https://bw-party-planner.herokuapp.com/api/todolist', values)
      .then( res => console.log(res))
      .catch( err => console.log(err))
  }
}








