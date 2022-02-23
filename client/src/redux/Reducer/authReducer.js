import { LOGIN_USER, REGISTER_USER } from "../constType"
import * as types from '../constType'

const initialState = {
    loading: false,
    currentUser: null,
    error: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.REGISTER_USER:
            return {
                ...state,
                loading: true,
            }
        case types.REGISTER_USER_SUCCESS:
            return {
                ...state,
                loading: true,
                currentUser: action.payload
            }
        case types.REGISTER_USER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default authReducer;