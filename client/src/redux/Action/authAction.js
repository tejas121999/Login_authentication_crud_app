import * as types from '../constType'
import { auth } from '../../fireBase'

// register
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
        auth.createUserWithEmailAndPassword(email, password)
            .then(({ user }) => {
                user.updateProfile({
                    name
                })
                dispatch(registerSuccess(user))
            })
            .catch((error) =>
                dispatch(registerFail(error))
            )
    }
}

// login
const loginAction = () => ({
    type: types.LOGIN_USER
})

const loginSuccess = (user) => ({
    type: types.LOGIN_USER_SUCCESS,
    payload: user
})

const loginFail = (error) => ({
    type: types.LOGIN_USER_FAIL,
    payload: error
})

export const loginUserAction = (email, password) => {
    return dispatch => {
        dispatch(loginAction());
        auth.signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                dispatch(loginSuccess(user))
            })
            .catch((error) =>
                dispatch(loginFail(error))
            )
    }
}

// logout
const logoutAction = () => ({
    type: types.LOGOUT_USER
})

const logoutSuccess = (user) => ({
    type: types.LOGOUT_USER_SUCCESS,
    payload: user
})

const logoutFail = (error) => ({
    type: types.LOGOUT_USER_FAIL,
    payload: error
})

export const logoutUserAction = () => {
    return dispatch => {
        dispatch(logoutAction());
        auth
            .signOut()
            .then((res) => {
                dispatch(logoutSuccess())
            })
            .catch((error) =>
                dispatch(logoutFail(error))
            )
    }
}



