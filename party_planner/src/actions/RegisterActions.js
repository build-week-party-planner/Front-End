import { dispatch } from "rxjs/internal/observable/range";

export const REGISTER_SUCCESS = "REGISTER_SUCCESS"


export const handleSuccessfulRegister = payload => {
    return dispatch => {
        dispatch({type: REGISTER_SUCCESS, payload: payload})
    }
}