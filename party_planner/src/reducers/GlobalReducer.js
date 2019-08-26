
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