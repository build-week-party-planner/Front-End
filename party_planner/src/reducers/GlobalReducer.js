import {
    LOGIN_SUCCESS,
    GET_EVENTS_START,
    GET_EVENTS_SUCCESS,
    GET_EVENTS_ERROR,
    ADDING_EVENT,
    ADD_EVENT_SUCCESS,
    ADD_EVENT_FAILURE
} from '../actions'

const initialState = {
    userId: null,
    isLoading:false,
    error: '',
    events: [],
    hasToken: false,
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
        default:
            return state;
    }
}