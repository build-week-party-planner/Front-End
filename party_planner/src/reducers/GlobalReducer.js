import {
    LOGIN_SUCCESS,
    GET_EVENTS_START,
    GET_EVENTS_SUCCESS,
    GET_EVENTS_ERROR
} from '../actions'

const initialState = {
    userId: localStorage.getItem('user_id') === null ? 
        null 
        : localStorage.getItem('user_id'),
    isLoading:false,
    error: '',
    events: [
        {
            guests: 8,
            theme: 'Cowboy',
            date: '2019-09-12',
            budget: 500,
            id: 1
        },
        {
            guests: 10,
            theme: 'Space',
            date: '2019-09-13',
            budget: 1000,
            id: 2
        },
        {
            guests: 4,
            theme: 'Race-Car',
            date: '2019-09-12',
            budget: 100,
            id: 3
        },
        {
            guests: 5,
            theme: 'Halloween',
            date: '2019-10-31',
            budget: 1003,
            id: 4,
        }
    ],
    hasToken: false,
}

export const globalReducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN_SUCCESS:
            return{
                ...state,
                id : localStorage.getItem("user_id")
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
        default:
            return state;
    }
}