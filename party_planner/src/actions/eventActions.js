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

