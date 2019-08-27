import { axiosWithAuth } from '../utils/AxiosWithAuth'


export const GET_EVENTS_START = "GET_EVENTS_START"
export const GET_EVENTS_SUCCESS = "GET_EVENTS_SUCCESS"
export const GET_EVENTS_ERROR = "GET_EVENTS_ERROR"

export const getEvents = () => {
    return dispatch =>{
        dispatch({type:GET_EVENTS_START})
        axiosWithAuth()
            .get('https://bw-party-planner.herokuapp.com/api/party')
            .then( res => dispatch({type: GET_EVENTS_SUCCESS, payload: res.data}))
            .catch( err => dispatch({type: GET_EVENTS_ERROR, payload: err.response}))
    }
}
