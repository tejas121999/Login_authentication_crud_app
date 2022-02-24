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

