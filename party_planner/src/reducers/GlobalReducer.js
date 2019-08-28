import {
    LOGIN_SUCCESS,
    GET_EVENTS_START,
    GET_EVENTS_SUCCESS,
    GET_EVENTS_ERROR,
    ADDING_EVENT,
    ADD_EVENT_SUCCESS,
    ADD_EVENT_FAILURE,
    DELETING_EVENT,
    DELETE_EVENT_SUCCESS,
    DELETE_EVENT_FAILURE,
    GET_SHOPPING_ITEM_START,
    GET_SHOPPING_ITEM_SUCCESS,
    GET_SHOPPING_ITEM_ERROR,
    ADD_SHOPPING_ITEM_SUCCESS,
    ADD_SHOPPING_ITEM_START,
} from '../actions'

const initialState = {
    userId: null,
    isLoading:false,
    error: '',
    events: [],
    hasToken: false,
    shoppingListItems : [],
}

export const globalReducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN_SUCCESS:
            return{
                ...state,
                userId: localStorage.getItem("user_id")
            }
        case GET_EVENTS_START:
            return{
                ...state, 
                isLoading: true
            }
        case GET_EVENTS_SUCCESS:
            return{
                ...state,
                isLoading: false,
                events: action.payload,
            }
        case GET_EVENTS_ERROR:
            return{
                ...state,
                isLoading:false,
                error: action.payload
            }
        case ADDING_EVENT:
          return {
            ...state,
            isLoading: true,
          }
        case ADD_EVENT_SUCCESS:
          return {
            ...state,
            isLoading: false,
            events: [...state.events, action.payload]
          }
        case ADD_EVENT_FAILURE:
          return {
            ...state,
            isLoading: false,
            error: action.payload
          }
        case DELETING_EVENT:
          return {
            ...state,
            isLoading: true
          }
        case DELETE_EVENT_SUCCESS:
          return {
            ...state,
            isLoading: false,
            events: state.events.filter(event => event.id !== action.payload.id)
          }
        case DELETE_EVENT_FAILURE:
          return {
            ...state,
            isLoading: false,
            error: action.payload
          }
        case GET_SHOPPING_ITEM_START:
          return{
            ...state,
            isLoading: true,
          }
        case GET_SHOPPING_ITEM_SUCCESS:
          return{
            ...state,
            isLoading: false,
          }
        case GET_SHOPPING_ITEM_ERROR:
          return{
            ...state,
            isLoading: false,
            error: action.payload
          }
        case ADD_SHOPPING_ITEM_START:
          return{
            ...state, 
            isLoading: true
          }
        case ADD_SHOPPING_ITEM_SUCCESS:
          return{
            ...state,
            isLoading: false,
            shoppingListItems: [...state.shoppingListItems, action.payload]
          }
        default:
            return state;
    }
}