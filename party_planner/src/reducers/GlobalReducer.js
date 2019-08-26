import {
  ADDING_EVENT,
  ADD_EVENT_SUCCESS,
  ADD_EVENT_FAILURE
} from '../actions/index';


const initialState = {
    userId: null,
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
            id: 4
        }
    ],
    hasToken: false,
}

export const globalReducer = (state = initialState, action) => {
    switch(action.type){
        default:
            return state;
    }
}