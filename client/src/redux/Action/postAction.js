import { ADD_USER, DELETE_USER, GET_USER, GET_USER_BY_ID, UPDATE_USER } from "../constType";
import userServices from "../Services/postServices";

// get user
export const getAllUserAction = () => {
    return dispatch => {
        userServices.getUser()
            .then(res => {
                // console.log("res", res)
                dispatch(getAllUser(res.data));
            })
            .catch(err => {
                console.log(err)
            });
    }
}

export const getAllUser = (users) => {
    return {
        type: GET_USER,
        payload: users
    }
}

// delete user
export const deleteUserAction = (_id) => {
    return dispatch => {
        userServices.deleteUser(_id)
            .then(res => {

                // console.log(res)
                dispatch(deleteUser())
                dispatch(getAllUserAction())
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const deleteUser = () => {
    return {
        type: DELETE_USER
    }
}

// create user
export const addUserAction = (user, history) => {
    return dispatch => {
        userServices.addUser(user)
            .then(res => {
                console.log(res)
                dispatch(addUser())
                history.push('#')
            })
            .catch(err => {
                // console.log(err)
                alert(err)
            })
    }
}

export const addUser = () => {
    return {
        type: ADD_USER
    }
}

// get user by id
export const getUserByIdAction = (id) => {
    return dispatch => {
        userServices.getUserById(id)
            .then(res => {
                console.log(res)
                dispatch(getUserById(res.data))
            })
            .catch(err => {
                // window.history.back()
            })
    }
}

export const getUserById = (user) => {
    return {
        type: GET_USER_BY_ID,
        payload: user
    }
}

// update user by id
export const updateUserByIDAction = (user, id, history) => {
    return dispatch => {
        userServices.updateUser(id, user)
            .then(res => {
                console.log(res)
                dispatch(updateUserByID())
                history.push('/')
            })
            .catch(err => {
                // window.history.back()
            })
    }
}

export const updateUserByID = () => {
    return {
        type: UPDATE_USER
    }
}
