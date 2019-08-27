export const LOGIN_SUCCESS = "LOGIN_SUCCESS"


export const handleSuccessfulLogin = payload => {
    return dispatch => {
        dispatch({type: LOGIN_SUCCESS, payload: payload})
    }
}