import * as types from '../constType'
import { auth } from '../../fireBase'

const registerAction = () => ({
    type: types.REGISTER_USER
})

const registerSuccess = (user) => ({
    type: types.REGISTER_USER_SUCCESS,
    payload: user
})

const registerFail = (error) => ({
    type: types.REGISTER_USER_FAIL,
    payload: error
})

export const registerUserAction = (email, name, password) => {
    return dispatch => {
        dispatch(registerAction());
        auth.createUser(email, password, name)
            .then(({ user }) => {
                dispatch(registerSuccess(user))
            })
            .catch((error) => dispatch(registerFail(error.message)))
    }
}

const loginUserAction = () => ({
    type: types.LOGIN_USER
})

const loginUserSuccess = (user) => ({
    type: types.LOGIN_USER_SUCCESS,
    payload: user
})

const loginUserFail = (error) => ({
    type: types.LOGIN_USER_FAIL,
    payload: error
})