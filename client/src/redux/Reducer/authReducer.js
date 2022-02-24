import * as types from '../constType'

const initialState = {
    loading: false,
    currentUser: null,
    error: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.REGISTER_USER:
        case types.LOGIN_USER:
        case types.LOGOUT_USER:
            return {
                ...state,
                loading: true,
            }
        case types.LOGOUT_USER_SUCCESS:
            return {
                ...state,
                currentUser: null
            }
        case types.REGISTER_USER_SUCCESS:
        case types.LOGIN_USER_SUCCESS:
            return {
                ...state,
                loading: true,
                currentUser: action.payload
            }
        case types.REGISTER_USER_FAIL:
        case types.LOGIN_USER_FAIL:
        case types.LOGOUT_USER_FAIL:
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